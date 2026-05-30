/**
 * Server-only — only import from React Server Components or server actions.
 * Uses React cache() to deduplicate the auth + fetch flow within a single render.
 *
 * Required env vars (.env / .env.local):
 *   CONFIGURED_SITE_ID          – ID of the site registered on the blog manager
 *   BLOG_MANAGER_API_BASE_URL   – (optional) defaults to the PLS blog manager host
 */
import { cache } from "react";

// ── Public types ───────────────────────────────────────────────────────────────

export interface BlogPost {
  id?: string;
  siteId: string;
  title: string;
  htmlContent: string;
  backgroundUrl: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

// ── Private API types ──────────────────────────────────────────────────────────

interface SiteRecord {
  id?: string;
  url: string;
  domain: string;
  clientWhatsapp: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

interface AuthResponse extends SiteRecord {
  jwt: string;
}

type ApiError = {
  message?: string;
  error?: string;
  statusCode?: number;
};

// ── Config ─────────────────────────────────────────────────────────────────────

const API_BASE =
  process.env.BLOG_MANAGER_API_BASE_URL?.trim() ||
  "https://blog-manager-api.plssistemas.com.br";

const SITE_ID = process.env.CONFIGURED_SITE_ID?.trim();

// ── Low-level fetch helpers ────────────────────────────────────────────────────

function buildUrl(path: string): string {
  const base = API_BASE.endsWith("/") ? API_BASE : `${API_BASE}/`;
  return new URL(path.replace(/^\//, ""), base).toString();
}

async function fetchJson<T>(path: string, init?: RequestInit): Promise<T> {
  const headers = new Headers(init?.headers);

  if (!headers.has("Accept")) headers.set("Accept", "application/json");
  if (init?.body && !headers.has("Content-Type"))
    headers.set("Content-Type", "application/json");

  const res = await fetch(buildUrl(path), { ...init, headers, cache: "no-store" });

  const text = await res.text();
  const data = text ? (JSON.parse(text) as T | ApiError) : null;

  if (!res.ok) {
    const err = data as ApiError | null;
    throw new Error(
      err?.message?.trim() ||
        err?.error?.trim() ||
        `Blog manager request failed with status ${res.status} on ${path}.`,
    );
  }

  return data as T;
}

async function fetchAuthorized<T>(path: string, jwt: string): Promise<T> {
  return fetchJson<T>(path, { headers: { Authorization: `Bearer ${jwt}` } });
}

// ── Cached data loader ─────────────────────────────────────────────────────────

const loadBlogPosts = cache(async (): Promise<BlogPost[]> => {
  if (!SITE_ID) {
    throw new Error(
      "CONFIGURED_SITE_ID is not set. Add it to your .env file.",
    );
  }

  // Fetch only the configured site — no need to list all sites
  const site = await fetchJson<SiteRecord>(`/sites/${SITE_ID}`);

  // Authenticate with the site's credentials
  const { jwt } = await fetchJson<AuthResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ domain: site.domain, password: site.password }),
  });

  // Fetch posts with the JWT
  const posts = await fetchAuthorized<BlogPost[]>("/posts", jwt);

  return posts
    .filter((p) => !p.deletedAt)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
});

// ── Public API ─────────────────────────────────────────────────────────────────

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    return await loadBlogPosts();
  } catch (err) {
    console.error("[blog-api] Failed to load posts:", err);
    return [];
  }
}

export function getBlogPostById(
  posts: BlogPost[],
  id: string,
): BlogPost | undefined {
  return posts.find((p) => p.id === id);
}

export function getRelatedPosts(
  posts: BlogPost[],
  currentId: string,
  limit = 3,
): BlogPost[] {
  return posts.filter((p) => p.id !== currentId).slice(0, limit);
}

// ── Text utilities ─────────────────────────────────────────────────────────────

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export function excerpt(html: string, maxLen = 140): string {
  const text = stripHtml(html);
  return text.length > maxLen ? text.slice(0, maxLen).trimEnd() + "…" : text;
}

export function formatBlogDate(dateStr: string): string {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateStr));
}
