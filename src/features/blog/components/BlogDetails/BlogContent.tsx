import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/shared/components/accordion";
import Link from "next/link";
import React from "react";
import DOMPurify from "isomorphic-dompurify";
import { BlogDetails, BlogSource } from "@/shared/types/type";
import Rate from "./Rate";
import Comment from "./Comment";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import HorizontalCard from "@/shared/components/horizontal-card";

function BlogContent({ blog }: { blog: BlogDetails }) {
  const cleanHtml = DOMPurify.sanitize(blog?.Content?.Text);
  
  return (
    <section className="flex flex-col-reverse md:flex-row gap-5 relative mt-16">
      <section className="md:w-2/3 md:pl-5">
        <section
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: cleanHtml }}
        ></section>
        <section className="border-t border-b flex items-center gap-5 py-7 my-10">
          <span className="text-lg font-semibold">منابع</span>
          {blog?.Sources?.map((s: BlogSource) => (
            <Link href={s?.Url} className="text-pink-500 text-sm" key={s?.Id}>
              {s?.Title}
            </Link>
          ))}
        </section>
        <section>
          <p className="text-[22px] font-bold text-center">
            رای و نظر شما برامون مهمه
          </p>
          <Rate />
          <Comment />
        </section>

        <section className="flex flex-col-reverse md:flex-row gap-10 my-20">
          <section className="md:w-1/2">
            <div className="h-[1px] w-full bg-gray-200 flex items-center mb-7">
              <span className="bg-white flex items-center gap-3 pl-5">
                <ArrowRight color="var(--color-lake-blue-500)" size={20}/>
                <span className="md:text-[22px] font-semibold md:font-bold">مطلب قبلی</span>
              </span>
            </div>
            <HorizontalCard article={blog?.Prev}/>
          </section>
          <section className="md:w-1/2 mt-10 md:mt-0">
            <div className="h-[1px] w-full bg-gray-200 flex items-center md:justify-end mb-7">
              <span className="bg-white flex items-center gap-3 pl-5 md:pl-0 md:pr-5">
                <span className="md:text-[22px] font-semibold md:font-bold">مطلب بعدی</span>
                <ArrowLeft color="var(--color-lake-blue-500)" size={20}/>
              </span>
            </div>
            <HorizontalCard article={blog?.Next}/>
          </section>
        </section>
      </section>
      <section className="md:w-1/3">
        <div className="h-max sticky top-[150px]">
          <Accordion>
            <AccordionItem id="1" title="فهرست محتوا">
              <AccordionContent>
                <ul>
                  <li>
                    <Link href="">تخمک گذاری چیست؟</Link>
                  </li>
                  <li>
                    <Link href="">چه زمانی تخمک گذاری انجام می‌شود؟</Link>
                  </li>
                  <li>
                    <Link href="">تخمک گذاری چند روز طول می‌کشد؟</Link>
                  </li>
                  <li>
                    <Link href="">علائم تخمک گذاری</Link>
                  </li>
                  <li>
                    <Link href="">تخمک گذاری چیست؟</Link>
                  </li>
                  <li>
                    <Link href="">چه زمانی تخمک گذاری انجام می‌شود؟</Link>
                  </li>
                  <li>
                    <Link href="">تخمک گذاری چند روز طول می‌کشد؟</Link>
                  </li>
                  <li>
                    <Link href="">علائم تخمک گذاری</Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </section>
  );
}

export default BlogContent;
