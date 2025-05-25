import Image from "next/image";
import Link from "next/link";
import React from "react";
import {Glass2} from '../../icons/Glass2';

interface FeaturedArticleProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  linkHref: string;
  badgeText: string;
  time: string;
}

const ArticleCard: React.FC<FeaturedArticleProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  linkHref,
  badgeText,
  time,
}) => {
  return (
    <Link href={linkHref} className="block">
      <article className="">
        <Image
          src={imageSrc}
          width={342}
          height={240}
          alt={imageAlt}
          className="rounded-[12px] object-cover w-full h-[240px]"
        />
        <section className="mt-4">
          <div className="flex justify-between items-center">
            <span className="text-lake-blue-600 bg-gray-100 text-[13px] p-2 font-semibold rounded-full">
              {badgeText}
            </span>
          
          <div className="flex items-center">
            <p className="text-gray-400 text-xs font-normal">{time}</p>
            <Glass2 height={8} width={23} />
          </div>

          </div>
            <h2 className="text-lg font-semibold h-14 mt-3 line-clamp-2">{title}</h2>
          <p className="text-gray-500 mt-2 text-sm line-clamp-2">{description}</p>
        </section>
      </article>
    </Link>
  );
};

export default ArticleCard;