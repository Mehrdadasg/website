import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  linkHref: string;
  cardClass?: string;
  imageClass?: string;
  titleClass?: string;
  descriptionClass?: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  linkHref,
  cardClass,
  imageClass,
  titleClass,
  descriptionClass,
}) => {
  return (
    <Link href={linkHref}>
      <article className={`${cardClass ?? ""}`}>
        <Image
          src={imageSrc}
          width={2000}
          height={2000}
          alt={imageAlt}
          quality={100}
          className={`${imageClass ?? ""}`}
        />
        <div className="mt-4">
          <h3 className={`font-bold truncate line-clamp-1 ${titleClass ?? ""}`}>{title}</h3>
          <p className={`text-[13px] text-gray-500 mt-2 ${descriptionClass ?? ""}`}>{description}</p>
        </div>
      </article>
    </Link>
  );
};

export default Card;
