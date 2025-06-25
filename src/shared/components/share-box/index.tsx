"use client";

import Share2 from "@/shared/icons/Share2";
import { Message2, Messages3, Star1 } from "iconsax-react";

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
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: text,
          url: url,
        });
      } catch (error) {
        console.error("خطا در اشتراک‌گذاری:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
      } catch (error) {
        console.error("خطا در کپی کردن لینک:", error);
      }
    }
  };

  return (
    <section className="flex mt-5 border border-gray-100 border-b-gray-200 py-2 border-b-4 rounded-[34px] w-max px-2">
      <span className="flex gap-1 items-center px-2">
        <Star1 size={20} color="var(--color-gray-600)" />
        <span className="text-pink-500 text-[10px] font-bold">{starCount}</span>
      </span>
      <span className="flex gap-1 items-center px-2 border-l border-r">
        <Messages3 size={20} color="var(--color-gray-600)" />
        <span className="text-pink-500 text-[10px] font-bold">{commentCount}</span>
      </span>
      <button aria-label="اشتراک گذاری" onClick={handleShare} type="button" className="px-2 cursor-pointer">
        <Share2 width={20} height={20} fill="var(--color-gray-600)" />
      </button>
    </section>
  );
}
