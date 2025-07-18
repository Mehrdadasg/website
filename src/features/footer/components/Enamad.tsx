import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props={
    link:string;
    img:string;
}

const EnamadBadge = ({link,img}:Props) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      referrerPolicy="origin"
      className="w-40 h-56 flex rounded-xl overflow-hidden bg-transparent"
    >
      <Image
        src={img ??""}
        alt="نماد اعتماد الکترونیکی"
        className="cursor-pointer size-full object-cover"
        width={160}
        height={224}
      />
    </Link>
  );
};

export default EnamadBadge;
