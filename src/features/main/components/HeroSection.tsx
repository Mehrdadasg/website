import { ssrHeroData } from "@/features/apiHandlers/serverHandlers/ssrHeroData";
import AppDownload from "@/shared/components/app-download";
import { QueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

async function HeroSection() {
  const queryClient = new QueryClient();
  const { heroData } = await ssrHeroData(queryClient);

  return (
    <section className="hero h-max md:h-[750px] lg:h-[775px] 2xl:h-[800px] pt-44 md:pt-52 lg:pt-40 xl:pt-44 -mt-[80px] md:mt-0">
      <section className="px-3 sm:px-5 lg:px-10 xl:px-0 max-w-6xl mx-auto md:flex lg:gap-5 xl:gap-20 h-full">
        <section className="md:w-1/2">
          <p className="text-center md:text-right text-2xl font-light text-pink-500">
            اولین اپلیکیشن
          </p>
          <p className="text-center md:text-right mt-2 mb-10 font-bold text-[38px] md:text-5xl xl:text-[64px]">
            سلامتـــی{" "}
            <strong className="font-bold text-pink-500">هـــر زَن</strong>
          </p>
          <p className="text-center md:text-right text-[13px] md:text-base xl:text-lg text-gray-600">
            {heroData?.Content?.HtmlContent}
          </p>
          <div className="flex justify-center my-10">
            <Image
              src="/install.png"
              width={190}
              height={80}
              alt="تعداد نصب اپلیکیشن"
            />
          </div>
          <AppDownload />
        </section>
        <section className="md:w-1/2 mt-5 md:mt-0 flex justify-center items-start">
          <Image
            src={heroData?.Content?.MainImageUrl || "/hero-image.png"}
            width={523}
            height={523}
            quality={100}
            alt={heroData?.Content?.MainImageAlt || "تصویر راهنمای بهداشت زنان"}
            className="hidden md:block w-auto max-h-[523px]"
            priority
          />
          <Image
            src={heroData?.Content?.MainImageUrl || "/hero-image.png"}
            width={360}
            height={360}
            quality={100}
            alt={heroData?.Content?.MainImageAlt || "تصویر راهنمای بهداشت زنان"}
            className="md:hidden"
            priority
          />
        </section>
      </section>
    </section>
  );
}

export default HeroSection;
