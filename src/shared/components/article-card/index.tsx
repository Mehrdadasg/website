import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Glass2 } from "../../icons/Glass2";
import Share2 from "@/shared/icons/Share2";
import { Article } from "@/shared/types/type";

interface FeaturedArticleProps {
  article: Article;
  view?: "horizontal" | "vertical";
}

const ArticleCard: React.FC<FeaturedArticleProps> = ({
  article,
  view = "vertical",
}) => {
  return (
    <Link href={`/blog/${article?.Slug}`} className="block">
      <article
        className={`${view === "horizontal" ? "flex gap-2 sm:block" : "block"}`}
      >
        <Image
          src={article?.ImageUrl ?? "/post.png"}
          width={342}
          height={240}
          alt={article?.Title ??"تصویر پست"}
          className={`rounded-[12px] object-cover ${
            view === "horizontal"
              ? "h-[71px] sm:h-[240px] w-[102px] sm:w-full"
              : "h-[240px] w-full"
          } `}
        />
        <section className="mt-4 hidden md:block">
          <div className="flex justify-between items-center">
            <span className="text-lake-blue-600 bg-gray-100 text-[13px] p-2 font-semibold rounded-full">
              {article?.CategoryTitle}
            </span>

            <div className="flex items-center">
              <p className="text-gray-400 text-xs font-normal">
                {article?.ReadTime}
              </p>
              <Glass2 height={8} width={23} />
            </div>
          </div>
          <h2 className="text-lg font-semibold h-14 mt-3 line-clamp-2">
            {article?.Title}
          </h2>
          <p className="text-gray-500 mt-2 text-sm line-clamp-2">
            {article?.Text}
          </p>
        </section>
        <section className="md:hidden">
          <div className="flex items-center gap-1 mt-3">
            <h2
              className={`text-[13px] font-bold flex-grow ${
                view === "horizontal" ? "line-clamp-2" : "line-clamp-1"
              }`}
            >
              {article?.Title}
            </h2>
            <span className="size-5">
              <Share2 />
            </span>
          </div>
          <p className="text-gray-400 text-xs font-normal mt-1">
            {article?.ReadTime}
          </p>
        </section>
      </article>
    </Link>
  );
};

export default ArticleCard;
