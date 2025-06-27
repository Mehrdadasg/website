import Image from "next/image";
import Link from "next/link";
import React from "react";
import Share2 from "@/shared/icons/Share2";
import { HorizontalArticle } from "@/shared/types/type";

interface FeaturedArticleProps {
  article: HorizontalArticle;
}

const HorizontalCard: React.FC<FeaturedArticleProps> = ({article}) => {
  return (
    <Link href={`/blog/${article?.Slug}`} className="block">
      <article className="flex gap-2">
        <Image
          src={article?.ImageUrl ?? "/post.png"}
          width={126}
          height={88}
          alt={article?.Title ??"تصویر پست"}
          className={`rounded-[12px] object-cover h-[71px] sm:h-[88px] w-[102px] sm:w-32 `}
        />
        <section className="flex-1">
          <div className="flex items-center gap-1 mt-3">
            <h2 className={`text-[13px] font-bold flex-grow line-clamp-2`}>
              {article?.Title}
            </h2>
            <span className="size-5">
              <Share2 />
            </span>
          </div>
          <p className="text-gray-400 text-xs font-normal mt-1 hidden sm:block">{article?.ReadTime}</p>
        </section>
      </article>
    </Link>
  );
};

export default HorizontalCard;
