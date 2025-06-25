import Breadcrumb from "@/shared/components/breadcrumb";
import Image from "next/image";
import React from "react";

function About() {
  const breadcrumbItems = [
    { label: "خانه", href: "/" },
    { label: "درباره ما" },
  ];
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
              درباره اپلیکیشن یک زن
            </h2>
            <p className="md:text-right mt-10 mb-8 text-[38px] md:text-5xl xl:text-[64px]">
              <b>پرطرفــــدار تریــــــــــــن</b>
            </p>
            <p className="md:text-right mt-2 mb-10 md:mb-16 text-[38px] md:text-5xl xl:text-5xl text-pink-500">
              <b>اپلیکیشن سلامت زنان ایرونی</b>
            </p>
            <h2 className="md:text-right text-[13px] md:text-base xl:text-lg text-gray-600">
              با اپلیکشن یک زن چرخه قاعدگی، تخمک‌گذاری، بارداری و شیردهی را
              هوشمندانه مدیریت کن! از مشاوره تخصصی، رژیم‌های غذایی، از
              راهنمایی‌های سلامتی روزانه و امکانات بی شمار بهره‌مند شو.
            </h2>
          </section>
          <section className="md:w-1/2 mt-5 md:mt-0 flex justify-center items-start xl:pr-10">
            <Image
              src="/illustration/Sara.png"
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
            <b className="text-skin-800 text-4xl sm:text-lg lg:text-4xl">+700,000</b>
          </p>
          <p className="text-skin-600 sm:text-xs lg:text-base">کاربر فعال ماهانه</p>
        </section>
        <section className="leaf px-12 sm:px-10 lg:px-12 flex flex-col justify-center items-center gap-2 h-20 w-60 sm:w-44 lg:w-60">
          <p>
            <b className="text-skin-800 text-4xl sm:text-lg lg:text-4xl">+1,500,000</b>
          </p>
          <p className="text-skin-600 sm:text-xs lg:text-base">تعداد دانلود</p>
        </section>
        <section className="leaf px-12 sm:px-10 lg:px-12 flex flex-col justify-center items-center gap-2 h-20 w-60 sm:w-44 lg:w-60">
          <p>
            <b className="text-skin-800 text-4xl sm:text-lg lg:text-4xl">1397</b>
          </p>
          <p className="text-skin-600 sm:text-xs lg:text-base">شروع فعالیت</p>
        </section>
      </section>
      <section className="pb-32 px-5">
        <p className="text-[22px] md:text-4xl xl:text-5xl sm:text-center">
          <b>
            اعضای تیم <mark className="bg-transparent">یک زن</mark>
          </b>
        </p>
        <p className="text-lg sm:text-center mt-5 text-gray-600 max-w-[588px] mx-auto">
          تیمی از طراحان و توسعه‌دهندگان دلسوز که با عشق و تخصص کنار هم جمع شدن
          تا از سلامت جسم و روان بانوان حمایت کنن.
        </p>
        <section className="flex justify-center gap-10 mt-20 max-w-5xl mx-auto flex-wrap">
          <section className="flex md:flex-col md:justify-center items-center gap-2 px-7 w-full md:w-max">
            <Image
              src="/team/d4.png"
              alt="مهران اصغری"
              width={150}
              height={150}
              className="rounded-full size-[90px] md:size-[150px] object-cover"
            />
            <div>
              <h4 className="font-semibold mt-5 md:text-center">مهران اصغری</h4>
              <p className="text-gray-500 text-xs mt-2 md:text-center">
                Co-Founder | Project Manager
              </p>
            </div>
          </section>
          <section className="flex md:flex-col md:justify-center items-center gap-2 px-7 w-full md:w-max">
            <Image
              src="/team/d5.png"
              alt="مهرداد اصغری"
              width={150}
              height={150}
              className="rounded-full size-[90px] md:size-[150px] object-cover"
            />
            <div>
              <h4 className="font-semibold mt-5 md:text-center">مهرداد اصغری</h4>
              <p className="text-gray-500 text-xs mt-2 md:text-center">
                Co-Founder - Back-End Developer
              </p>
            </div>
          </section>
          <section className="flex md:flex-col md:justify-center items-center gap-2 px-7 w-full md:w-max">
            <Image
              src="/team/d6.png"
              alt="پویا فتوتی"
              width={150}
              height={150}
              className="rounded-full size-[90px] md:size-[150px] object-cover"
            />
            <div>
              <h4 className="font-semibold mt-5 md:text-center">پویا فتوتی</h4>
              <p className="text-gray-500 text-xs mt-2 md:text-center">UI/UX Designer</p>
            </div>
          </section>
          <section className="flex md:flex-col md:justify-center items-center gap-2 px-7 w-full md:w-max">
            <Image
              src="/team/d7.png"
              alt="علیرضا"
              width={150}
              height={150}
              className="rounded-full size-[90px] md:size-[150px] object-cover"
            />
            <div>
              <h4 className="font-semibold mt-5 md:text-center">علیرضا</h4>
              <p className="text-gray-500 text-xs mt-2 md:text-center">Android Developer</p>
            </div>
          </section>
          <section className="flex md:flex-col md:justify-center items-center gap-2 px-7 w-full md:w-max">
            <Image
              src="/team/d8.png"
              alt="محدثه رهبر"
              width={150}
              height={150}
              className="rounded-full size-[90px] md:size-[150px] object-cover"
            />
            <div>
              <h4 className="font-semibold mt-5 md:text-center">محدثه رهبر</h4>
              <p className="text-gray-500 text-xs mt-2 md:text-center">متخصص زنان و زایمان</p>
            </div>
          </section>
          <section className="flex md:flex-col md:justify-center items-center gap-2 px-7 w-full md:w-max">
            <Image
              src="/team/d1.jpg"
              alt="خسرو اکبری"
              width={150}
              height={150}
              className="rounded-full size-[90px] md:size-[150px] object-cover"
            />
            <div>
              <h4 className="font-semibold mt-5 md:text-center">خسرو اکبری</h4>
              <p className="text-gray-500 text-xs mt-2 md:text-center">Front-End Developer</p>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

export default About;
