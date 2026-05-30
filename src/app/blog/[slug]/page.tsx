import {
  fetchBlogPosts,
  getBlogPostById,
  getRelatedPosts,
} from "@/api/blog";
import { psychologistLandingMock } from "@/mocks/psychologistLanding";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostDetails from "./BlogPostDetails";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const posts = await fetchBlogPosts();
  const post = getBlogPostById(posts, slug);

  if (!post) {
    return { title: `Post não encontrado | ${psychologistLandingMock.pageName}` };
  }

  return {
    title: `${post.title} | Blog ${psychologistLandingMock.pageName}`,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      images: [{ url: post.backgroundUrl, alt: post.title }],
      type: "article",
      publishedTime: post.createdAt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const posts = await fetchBlogPosts();
  const post = getBlogPostById(posts, slug);

  if (!post) notFound();

  const related = getRelatedPosts(posts, slug, 3);

  return <BlogPostDetails post={post} relatedPosts={related} />;
}
