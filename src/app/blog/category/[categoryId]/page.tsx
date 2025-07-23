import { ssrBlogList } from "@/features/apiHandlers/serverHandlers/ssrBlogList";
import ArticleCard from "@/shared/components/article-card";
import { Pagination } from "@/shared/components/pagination";
import { QueryClient } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import React from "react";

interface BlogPageProps {
  searchParams: Promise<{ page?: string; category: string }>;
  params: Promise<{ categoryId: string }>;
}

async function CategoryPage({ params, searchParams }: BlogPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams?.categoryId;
  if (!slug) notFound();
  const queryClient = new QueryClient();
  const resolvedSearchParams = await searchParams;
  const currentPage = Number(resolvedSearchParams.page) || 1;

  let blogList;
  try {
    const result = await ssrBlogList({
      queryClient,
      page: currentPage,
      category: slug,
    });
    blogList = result.blogList;
  } catch (error) {
    console.error("Failed to fetch blog list:", error);
    return <div>خطا در بارگذاری مقالات. لطفاً دوباره تلاش کنید.</div>;
  }

  const totalCount = blogList?.RecordeCount || 0;
  const pageSize = 10;

  return (
    <section>
      {blogList?.Items?.map((article) => (
        <ArticleCard key={article.Id} article={article} />
      ))}

      {blogList?.Items && blogList?.Items?.length > 0 && (
        <section className="mt-5">
          <Pagination
            totalCount={totalCount}
            pageSize={pageSize}
            siblingCount={1}
            currentPage={currentPage}
          />
        </section>
      )}
    </section>
  );
}

export default CategoryPage;
