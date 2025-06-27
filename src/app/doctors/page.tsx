import { ssrExpertCategories } from "@/features/apiHandlers/serverHandlers/ssrExpertCategories";
import { ssrExpertList } from "@/features/apiHandlers/serverHandlers/ssrExpertList";
import { ssrExpertPageData } from "@/features/apiHandlers/serverHandlers/ssrExpertPageData";
import Categories from "@/features/doctors/Categories";
import Breadcrumb from "@/shared/components/breadcrumb";
import LinkCM from "@/shared/components/link";
import { ExpertType } from "@/shared/types/type";
import { QueryClient } from "@tanstack/react-query";
import { ArrowLeft2 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DoctorsPageProps {
  searchParams: Promise<{ categoryId?: string; }>;
}

async function DoctorsPage({ searchParams }: DoctorsPageProps) {
  const queryClient = new QueryClient();
  const resolvedCategoryId = await searchParams;
  const { expertPageData } = await ssrExpertPageData(queryClient);
  const { expertCategories } = await ssrExpertCategories(queryClient);
  const { expertList } = await ssrExpertList(queryClient);

  const breadcrumbItems = [
    { label: "خانه", href: "/" },
    { label: "تماس با ما" },
  ];

  const categoryId = resolvedCategoryId?.categoryId ? parseInt(resolvedCategoryId?.categoryId) : 0;
  const doctorsList = categoryId === 0
    ? expertList
    : expertList?.filter((doctor: ExpertType) => doctor.CategoryId === categoryId) || [];

  return (
    <>
      <section className="bg-gray-100 h-max pt-40 sm:pt-36 pb-10 -mt-[80px] md:mt-0">
        <section className="px-3 sm:px-5 lg:px-10 xl:px-0 max-w-[1200px] mx-auto h-full">
          <Breadcrumb
            items={breadcrumbItems}
            separator="/"
            linkClassName="text-lake-blue-600 text-xs font-bold"
            textClassName="text-gray-400 text-xs font-bold"
            seperatorClassName="text-gray-200"
          />
          <p className="md:text-right mt-10 mb-8 text-[38px] md:text-5xl">
            <b>
              <mark className="bg-transparent">
                {expertPageData?.Content?.Title}
              </mark>
            </b>
          </p>
          <p className="text-lg text-gray-600">
            {expertPageData?.Content?.HtmlContent}
          </p>

          <Categories expertCategories={expertCategories} selectedCategoryId={categoryId} />          
        </section>
      </section>
      <section className="grid sm:grid-cols-3 md:grid-cols-4 gap-10 mt-20 max-w-5xl mx-auto pb-20">
        {doctorsList?.length > 0 ? doctorsList?.map((d:ExpertType)=><section key={d?.Id} className="flex sm:flex-col sm:justify-center items-center gap-2 px-3 sm:px-5 md:px-7 w-full md:w-max">
          <Image
            src={d?.Avatar || "/user2.png"}
            alt={d?.Title}
            width={150}
            height={150}
            className="rounded-full size-[90px] sm:size-[150px] object-cover"
          />
          <div className="flex items-center flex-1 justify-between sm:block sm:w-full">
            <div className="sm:text-center">
              <h4 className="font-semibold sm:mt-5 md:text-center">
                {d?.Title}
              </h4>
              <p className="text-gray-500 text-xs mt-2 md:text-center truncate max-w-44">
                {d?.SubTitle}
              </p>
            </div>
            <LinkCM
              href={`/doctors/${d?.Slug}`}
              variant="outline"
              color="blue"
              className="mt-5 !hidden sm:!flex"
            >
              مشاهده پروفایل
            </LinkCM>
            <Link href="" className="sm:hidden">
              <ArrowLeft2 color="var(--color-lake-blue-500)" size={24} />
            </Link>
          </div>
        </section>):<p>یافت نشد</p>}
      </section>
    </>
  );
}

export default DoctorsPage;
