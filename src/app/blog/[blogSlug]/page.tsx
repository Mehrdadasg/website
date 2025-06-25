import { ssrBlog } from "@/features/apiHandlers/serverHandlers/ssrBlog";
import BlogContent from "@/features/blog/components/BlogDetails/BlogContent";
import BlogHero from "@/features/blog/components/BlogDetails/BlogHero";
import OtherBlog from "@/features/blog/components/BlogDetails/OtherBlog";
import RelatedBlog from "@/features/blog/components/BlogDetails/RelatedBlog";
import { QueryClient } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import React from "react";

async function BlogDetails({
  params,
}: {
  params: Promise<{ blogSlug: string }>;
}) {
  const resolvedParams = await params;
  const blogSlug = resolvedParams?.blogSlug;
  if (!blogSlug) notFound();
  const queryClient = new QueryClient();
  const { blog } = await ssrBlog({ queryClient, slug: blogSlug });

  return (
    <main className="w-full px-5 xl:px-0 max-w-7xl 2xl:max-w-[1366px] mx-auto py-24 md:py-40">
      <BlogHero blogHeroData={blog?.Content} />
      <BlogContent blog={blog} />
      <RelatedBlog slug={blogSlug} />
      <OtherBlog slug={blogSlug} />
    </main>
  );
}

export default BlogDetails;
