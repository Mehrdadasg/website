import { ssrAbout } from "@/features/apiHandlers/serverHandlers/ssrAbout";
import Breadcrumb from "@/shared/components/breadcrumb";
import LinkCM from "@/shared/components/link";
import Github from "@/shared/icons/Github";
import Linkedin from "@/shared/icons/Likedin";
import { Member } from "@/shared/types/type";
import { QueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

async function About() {
  const queryClient = new QueryClient();
  const { aboutData } = await ssrAbout(queryClient);

  const breadcrumbItems = [
    { label: "خانه", href: "/" },
    { label: "درباره ما" },
  ];

  console.log(aboutData);

  return (
    <>
      <section className="pt-24 md:pt-52 lg:pt-40 xl:pt-36 md:mt-0 px-3 sm:px-5 lg:px-10 xl:px-0 max-w-[1200px] mx-auto">
        <Breadcrumb
          items={breadcrumbItems}
          separator="/"
          linkClassName="text-lake-blue-600 text-xs font-bold"
          textClassName="text-gray-400 text-xs font-bold"
          seperatorClassName="text-gray-200"
        />
        <section className=" md:flex lg:gap-5 xl:gap-10 h-full md:mt-10">
          <section className="md:w-1/2 pt-8 md:pt-10">
            <h2 className="bg-lake-blue-50 text-lake-blue-600 py-1 px-5 text-[13px] md:text-lg rounded-[50px] w-max">
              {aboutData?.Content?.SubTitle}
            </h2>
            <p className="md:text-right mt-10 mb-8 text-[38px] md:text-5xl xl:text-[64px]">
              <b>پرطرفــــدار تریــــــــــــن</b>
            </p>
            <p className="md:text-right mt-2 mb-10 md:mb-16 text-[38px] md:text-5xl xl:text-5xl text-pink-500">
              <b>اپلیکیشن سلامت زنان ایرونی</b>
            </p>
            <h2 className="md:text-right text-[13px] md:text-base xl:text-lg text-gray-600">
              {aboutData?.Content?.Text}
            </h2>
          </section>
          <section className="md:w-1/2 mt-5 md:mt-0 flex justify-center items-start xl:pr-10">
            <Image
              src={aboutData?.Content?.ImageUrl ?? "/illustration/Sara.png"}
              width={433}
              height={433}
              quality={100}
              alt=""
              priority
            />
          </section>
        </section>
      </section>
      <section className="bg-skin-50 py-10 px-10 sm:px-0 border-b-8 border-b-skin-100 flex justify-center flex-wrap gap-14 sm:gap-8 lg:gap-24 my-24">
        <section className="leaf px-12 sm:px-10 lg:px-12 flex flex-col justify-center items-center gap-2 h-20 w-60 sm:w-44 lg:w-60">
          <p>
            <b className="text-skin-800 text-4xl sm:text-lg lg:text-4xl ltr float-left">
              {aboutData?.Content?.MonthlyActiveUser}
            </b>
          </p>
          <p className="text-skin-600 sm:text-xs lg:text-base">
            کاربر فعال ماهانه
          </p>
        </section>
        <section className="leaf px-12 sm:px-10 lg:px-12 flex flex-col justify-center items-center gap-2 h-20 w-60 sm:w-44 lg:w-60">
          <p>
            <b className="text-skin-800 text-4xl sm:text-lg lg:text-4xl ltr float-left">
              {aboutData?.Content?.InstallCout}
            </b>
          </p>
          <p className="text-skin-600 sm:text-xs lg:text-base">تعداد دانلود</p>
        </section>
        <section className="leaf px-12 sm:px-10 lg:px-12 flex flex-col justify-center items-center gap-2 h-20 w-60 sm:w-44 lg:w-60">
          <p>
            <b className="text-skin-800 text-4xl sm:text-lg lg:text-4xl">
              {aboutData?.Content?.StartYear}
            </b>
          </p>
          <p className="text-skin-600 sm:text-xs lg:text-base">شروع فعالیت</p>
        </section>
      </section>
      <section className="pb-32 px-5">
        <p className="text-[22px] md:text-4xl xl:text-5xl sm:text-center">
          <b>
            <mark className="bg-transparent">
              {aboutData?.TeamContent?.Title}
            </mark>
          </b>
        </p>
        <p className="text-lg sm:text-center mt-5 text-gray-600 max-w-[588px] mx-auto">
          {aboutData?.TeamContent?.Text}
        </p>
        <section className="flex justify-center gap-10 mt-20 max-w-5xl mx-auto flex-wrap">
          {aboutData?.TeamContent?.Members?.map((m: Member, index: number) => (
            <section
              key={index}
              className="flex md:flex-col md:justify-center items-center gap-2 px-7 w-full md:w-max"
            >
              <Image
                src={m?.ImageUrl ?? "/user2.png"}
                alt={m?.Title ?? "تصویر کاربر"}
                width={150}
                height={150}
                className="rounded-full size-[90px] md:size-[150px] object-cover"
              />
              <div>
                <h4 className="font-semibold mt-5 md:text-center">
                  {m?.Title}
                </h4>
                <p className="text-gray-500 text-xs mt-2 md:text-center ltr">
                  {m?.Title}
                </p>
                <div className="mt-3 flex justify-center gap-5">
                  <LinkCM href={m?.Linkedin ?? "#"} size="icon" color={m?.Linkedin ? "blue" : "default"} className={m?.Linkedin ? "pointer-events-auto":"pointer-events-none"}>
                    <Linkedin fill={m?.Linkedin ? "white" : "#D1D5DB"}/>
                  </LinkCM>
                  <LinkCM href={m?.Linkedin ?? "#"} size="icon" color={m?.Github ? "blue" : "default"} className={m?.Github ? "pointer-events-auto":"pointer-events-none"}>
                    <Github fill={m?.Github ? "white" : "#D1D5DB"} />
                  </LinkCM>
                </div>
              </div>
            </section>
          ))}
        </section>
      </section>
    </>
  );
}

export default About;
