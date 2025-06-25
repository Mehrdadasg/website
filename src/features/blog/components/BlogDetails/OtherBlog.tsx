import { ssrRecommended } from "@/features/apiHandlers/serverHandlers/ssrRecommended";
import ArticleCard from "@/shared/components/article-card";
import { Article } from "@/shared/types/type";
import { QueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

async function OtherBlog({slug}: {slug:string}) {
  const queryClient = new QueryClient();
  const {recommended} = await ssrRecommended({queryClient,slug})
  return (
    <>
      <section className="flex items-center gap-3 mt-16">
        <span className="hidden sm:flex size-[44px] bg-orange-50 rounded-full justify-center items-center">
          <Image
            src="/fire.png"
            className="w-[19px] h-[23px]"
            width={19}
            height={23}
            alt="آخرین های مجله"
          />
        </span>
        <p className="text-[22px] sm:text-2xl font-semibold sm:font-bold">
          ممکنه برات جالب باشه
        </p>
      </section>
      <section className="grid sm:grid-cols-3 mt-10 gap-10">
        {recommended?.map((post:Article)=><ArticleCard key={post?.Id} article={post} view="horizontal" />)}
      </section>
    </>
  );
}

export default OtherBlog;
