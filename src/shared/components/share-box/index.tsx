"use client";

import { Messages3, Star1 } from "iconsax-react";
import ShareBtn from "../share-btn";
import Link from "next/link";

type Props = {
  title: string;
  url: string;
  text: string;
  commentCount: number;
  starCount: number;
};

export default function ShareBox({
  title,
  url,
  text,
  commentCount,
  starCount,
}: Props) {
  

  return (
    <section className="flex mt-5 border border-gray-100 border-b-gray-200 py-2 border-b-4 rounded-[34px] w-max px-2">
      <Link href='#rate-section' className="flex gap-1 items-center px-2">
        <Star1 size={20} color="var(--color-gray-600)" />
        <span className="text-pink-500 text-[10px] font-bold">{starCount}</span>
      </Link>
      <Link href='#comment-section' className="flex gap-1 items-center px-2 border-l border-r">
        <Messages3 size={20} color="var(--color-gray-600)" />
        <span className="text-pink-500 text-[10px] font-bold">{commentCount}</span>
      </Link>
      <ShareBtn text={text} title={title} url={url} />
    </section>
  );
}
