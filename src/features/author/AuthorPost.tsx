import { QueryClient } from "@tanstack/react-query";
import React from "react";
import { ssrBlogList } from "../apiHandlers/serverHandlers/ssrBlogList";
import { Article } from "@/shared/types/type";
import ArticleCard from "@/shared/components/article-card";
import { Pagination } from "@/shared/components/pagination";

type Props = {
  slug: string;
  currentPage?: number;
};

async function AuthorPost({ slug, currentPage }: Props) {
  const queryClient = new QueryClient();

  let blogList;
  try {
    const result = await ssrBlogList({
      queryClient,
      page: currentPage ?? 1,
      authorSlug: slug,
    });
    blogList = result.blogList;
  } catch (error) {
    console.error("Failed to fetch blog list:", error);
    return <div>خطا در بارگذاری مقالات. لطفاً دوباره تلاش کنید.</div>;
  }

  const totalCount = blogList?.RecordeCount || 0;
  const pageSize = 10;

  return (
    <>
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {blogList?.Items?.map((article: Article) => (
          <ArticleCard view="horizontal" key={article.Id} article={article} />
        ))}
      </section>

      <section className="mt-5">
        <Pagination
          totalCount={totalCount}
          pageSize={pageSize}
          siblingCount={1}
          currentPage={currentPage ?? 1}
        />
      </section>
    </>
  );
}

export default AuthorPost;
