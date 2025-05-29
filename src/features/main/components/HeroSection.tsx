import AppDownload from "@/shared/components/app-download";
import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <section className="hero pt-36 md:pt-44 -mt-[80px] md:mt-0">
      <section className="px-5 md:px-0 max-w-6xl mx-auto md:flex gap-20 h-full">
        <section className="md:w-1/2">
          <p className="text-center md:text-right text-2xl font-light text-pink-500">اولین اپلیکیشن</p>
          <p className="text-center md:text-right mb-6 font-bold text-[38px] md:text-[64px]">
            سلامتـــی{" "}
            <strong className="font-bold text-pink-500">هـــر زَن</strong>
          </p>
          <p className="text-center md:text-right text-[13px] md:text-lg text-gray-600">
            چرخه قاعدگی، تخمک‌گذاری، بارداری و شیردهی را هوشمندانه مدیریت کن! از
            مشاوره تخصصی، رژیم‌های غذایی، از راهنمایی‌های سلامتی روزانه و
            امکانات بی شمار بهره‌مند شو.
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
            src="/hero-image.png"
            width={523}
            height={523}
            quality={100}
            alt="تصویر راهنمای بهداشت زنان"
            className="hidden md:block"
            priority
          />
          <Image
            src="/hero-image.png"
            width={360}
            height={360}
            quality={100}
            alt="تصویر راهنمای بهداشت زنان"
            className="md:hidden"
            priority
          />
        </section>
      </section>
    </section>
  );
}

export default HeroSection;
