import AppDownload from "@/shared/components/main/AppDownload";
import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <section className="hero pt-48">
      <section className="max-w-6xl mx-auto flex gap-20 h-full">
        <section className="w-1/2">
          <p className="text-2xl font-light text-pink-500">اولین اپلیکیشن</p>
          <p className="text-lg mb-6 font-bold text-[64px]">
            سلامتـــی{" "}
            <strong className="font-bold text-pink-500">هـــر زَن</strong>
          </p>
          <p className="text-lg text-gray-600">
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
        <section className="w-1/2">
          <Image
            src="/hero-image.png"
            width={800}
            height={800}
            quality={100}
            alt="تصویر راهنمای بهداشت زنان"
            className="w-full h-auto"
          />
        </section>
      </section>
    </section>
  );
}

export default HeroSection;
