import { ssrRelatedList } from "@/features/apiHandlers/serverHandlers/ssrRelatedList";
import ArticleCard from "@/shared/components/article-card";
import Related from "@/shared/icons/Related";
import { Article } from "@/shared/types/type";
import { QueryClient } from "@tanstack/react-query";
import React from "react";

async function RelatedBlog({ slug }: { slug: string }) {
  const queryClient = new QueryClient();
  const { relatedList } = await ssrRelatedList({ queryClient, slug });

  return (
    <>
      <div className="flex gap-3 items-center">
        <span className="size-11 hidden sm:flex justify-center items-center bg-blue-50 rounded-full">
          <Related width={24} height={24} />
        </span>
        <p className="text-lg sm:text-2xl font-semibold sm:font-bold">
          مطالب دیگه در دسته اقدام به بارداری
        </p>
      </div>
      <section className="grid sm:grid-cols-3 mt-10 gap-10">
        {relatedList?.map((post:Article)=><ArticleCard key={post?.Id} article={post}/>)}
      </section>
    </>
  );
}

export default RelatedBlog;
