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
    <section className="flex flex-col-reverse lg:flex-row gap-5 relative mt-16">
      <section className="lg:w-2/3 lg:pl-5">
        <section
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: cleanHtml }}
        ></section>
        {blog?.Sources?.length > 0 && (
          <section className="border-t border-b flex items-center gap-5 py-7 mt-10">
            <span className="text-lg font-semibold">منابع</span>
            {blog?.Sources?.map((s: BlogSource) => (
              <Link title={s?.Title} href={s?.Url} className="text-pink-500 text-sm" key={s?.Id}>
                {s?.Title}
              </Link>
            ))}
          </section>
        )}
        <section className="mt-10">
          <p className="text-[22px] font-bold text-center">
            رای و نظر شما برامون مهمه
          </p>
          <Rate slug={blog?.Content?.Slug} />
          <Comment />
        </section>

        {(blog?.Prev || blog?.Next) && (
          <section className="flex flex-col-reverse md:flex-row gap-10 mt-20">
            {blog?.Prev && (
              <section className="lg:flex-1">
                <div className="h-[1px] w-full bg-gray-200 flex items-center mb-7">
                  <span className="bg-white flex items-center gap-3 pl-5">
                    <ArrowRight color="var(--color-lake-blue-500)" size={20} />
                    <span className="md:text-[22px] font-semibold md:font-bold">
                      مطلب قبلی
                    </span>
                  </span>
                </div>
                <HorizontalCard seoTag="h3" article={blog?.Prev} />
              </section>
            )}
            {blog?.Next && (
              <section className="lg:flex-1 mt-10 md:mt-0">
                <div className="h-[1px] w-full bg-gray-200 flex items-center md:justify-end mb-7">
                  <span className="bg-white flex items-center gap-3 pl-5 md:pl-0 md:pr-5">
                    <span className="md:text-[22px] font-semibold md:font-bold">
                      مطلب بعدی
                    </span>
                    <ArrowLeft color="var(--color-lake-blue-500)" size={20} />
                  </span>
                </div>
                <HorizontalCard seoTag="h3" article={blog?.Next} />
              </section>
            )}
          </section>
        )}
      </section>
      <section className="lg:w-1/3">
        <div className="h-max sticky top-[150px]">
          <Accordion defaultOpenId="1">
            <AccordionItem
              id="1"
              title="فهرست محتوا"
              accordionItemClass="bg-gray-100"
            >
              <AccordionContent accordionContextClass="!bg-gray-100">
                <ol>
                  {blog?.Headings?.map((h) => (
                    <li key={h?.Id}>
                      <Link
                        href={`#${h?.Id}`}
                        className="text-lake-blue-600 py-2 inline-block"
                        title={h?.Title}
                      >
                        <span className="inline-block size-1.5 rounded-full bg-lake-blue-600 ml-2"></span>
                        {h?.Title}
                      </Link>
                    </li>
                  ))}
                </ol>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </section>
  );
}

export default BlogContent;
