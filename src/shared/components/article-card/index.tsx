import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FeaturedArticleProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  linkHref: string;
  badgeText: string;
  date: string;
}

const ArticleCard: React.FC<FeaturedArticleProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  linkHref,
  badgeText,
  date,
}) => {
  return (
    <Link href={linkHref} className="block">
      <article className="border rounded-lg shadow-md p-4 max-w-sm hover:shadow-lg transition-shadow">
        <Image
          src={imageSrc}
          width={400}
          height={250}
          alt={imageAlt}
          className="rounded-t-lg object-cover w-full h-auto"
        />
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold hover:underline">{title}</h2>
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              {badgeText}
            </span>
          </div>
          <p className="text-gray-600 mt-2 text-sm">{description}</p>
          <p className="text-gray-400 text-xs mt-1">{date}</p>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;