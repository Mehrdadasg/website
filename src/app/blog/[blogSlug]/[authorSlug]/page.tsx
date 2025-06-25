import Breadcrumb from "@/shared/components/breadcrumb";
import Image from "next/image";
import React from "react";

function Author() {
  const breadcrumbItems = [
    { label: "خانه", href: "/" },
    { label: "مجله", href: "/blog" },
    { label: "نویسنده" },
  ];
  return (
    <main className="w-full px-5 xl:px-0 max-w-7xl 2xl:max-w-[1366px] mx-auto py-24 md:py-40">
      <Breadcrumb
        items={breadcrumbItems}
        separator="/"
        linkClassName="text-lake-blue-600 text-xs"
        textClassName="text-gray-400 text-xs"
        seperatorClassName="text-gray-200"
      />
      <section className="flex gap-10 items-center my-10">
        <section className="size-60 rounded-full">
          <Image
            src="/dr/d1.png"
            className="size-full rounded-full"
            alt="تصویر نویسنده"
            width={240}
            height={240}
          />
        </section>
        <section>
          <h1 className="text-5xl">
            <b>علیرضا فکری</b>
          </h1>
          <h2 className="text-lg mt-5">کارشناس تغذیه</h2>
        </section>
      </section>

      <section className="flex items-center gap-3 mt-16">
        <span className="hidden sm:flex size-[44px] bg-orange-50 rounded-full justify-center items-center">
          <Image
            src="/fire.png"
            className="w-[19px] h-[23px]"
            width={19}
            height={23}
            alt="آخرین های مجله"
          />
        </span>
        <p className="text-[22px] sm:text-2xl font-semibold sm:font-bold">
          خواندنی‌های نویسنده
        </p>
      </section>
    </main>
  );
}

export default Author;
