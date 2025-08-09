import React from "react";
import { ssrRelatedExpert } from "../apiHandlers/serverHandlers/ssrRelatedExpert";
import { QueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { ExpertType } from "@/shared/types/type";
import LinkCM from "@/shared/components/link";
import { ArrowLeft2 } from "iconsax-react";
import Link from "next/link";
import Button from "@/shared/components/button";

async function RelatedExperts({ slug }: { slug: string }) {
  const queryClient = new QueryClient();
  const { relatedExperts } = await ssrRelatedExpert({ queryClient, slug });

  return (
    <section className="min-h-96 py-16">
      <h2 className="text-2xl font-bold text-center">
        این متخصص ها هم ممکنه بتونن کمکت کنن
      </h2>
      <section className="grid sm:grid-cols-3 md:grid-cols-4 gap-10 mt-20 max-w-5xl mx-auto pb-20">
        {relatedExperts?.map((e: ExpertType) => (
          <article key={e?.Id}>
            <Link
              href={`/clinic/${e?.Slug}`}
              className="flex sm:flex-col sm:justify-center items-center gap-2 px-3 sm:px-5 md:px-7 w-full md:w-max"
            >
              <Image
                src={e?.Avatar ?? "/user2.png"}
                alt={e?.Title ?? "تصویر پزشک"}
                width={150}
                height={150}
                className="rounded-full size-[90px] sm:size-[150px] object-cover"
              />
              <div className="flex items-center flex-1 justify-between sm:block sm:w-full">
                <div className="sm:text-center">
                  <h3 className="font-semibold sm:mt-5 md:text-center">
                    {e?.Title}
                  </h3>
                  <p className="text-gray-500 text-xs mt-2 md:text-center truncate max-w-44">
                    {e?.SubTitle}
                  </p>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  color="blue"
                  className="mt-5 !hidden sm:!flex cursor-pointer"
                  title={e?.Title}
                >
                  مشاهده پروفایل
                </Button>
                <Button
                  type="button"
                  variant="text"
                  color="blue"
                  className="mt-5 sm:!hidden"
                  title={e?.Title}
                >
                  <ArrowLeft2 color="var(--color-lake-blue-500)" size={24} />
                </Button>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </section>
  );
}

export default RelatedExperts;
