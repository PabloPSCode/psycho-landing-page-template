import { fetchBlogPosts } from "@/api/blog";
import { psychologistLandingMock } from "@/mocks/psychologistLanding";
import type { Metadata } from "next";
import BlogListingPage from "./BlogListingPage";

export const metadata: Metadata = {
  title: `Blog | ${psychologistLandingMock.seo.title}`,
  description:
    "Conteúdos sobre saúde emocional, terapia TRG, ansiedade, traumas e bem-estar para quem busca mais leveza e equilíbrio.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await fetchBlogPosts();
  return <BlogListingPage blogPosts={posts} />;
}
