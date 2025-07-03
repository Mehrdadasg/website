import { MenuItems, MenuType } from "@/shared/types/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const footerMenu = [
  { Id: 1, Url: "", Title: "مشاوره" },
  { Id: 2, Url: "", Title: "تشخیص بارداری از روی علائم" },
  { Id: 3, Url: "", Title: "آیا من باردارم؟" },
  { Id: 4, Url: "", Title: "تقویم بارداری هفته به هفته" },
  { Id: 5, Url: "", Title: "تقویم قاعدگی" },
  { Id: 6, Url: "", Title: "تعیین جنسیت در زمان اقدام" },
  { Id: 7, Url: "", Title: "محاسبه سن بارداری" },
  { Id: 8, Url: "", Title: "بهترین روش جلوگیری از بارداری" },
  { Id: 9, Url: "", Title: "پیش بینی تعیین جنسیت بعد از بارداری" },
  { Id: 10, Url: "", Title: "بهترین زمان اقدام به بارداری" },
  { Id: 11, Url: "", Title: "محاسبه زمان تخمک گذاری" },
];

function DesktopFooterItem() {
  const firstColumn = footerMenu?.slice(0, 6);
  const secondColumn = footerMenu?.slice(6);
  return (
    <section className="hidden md:w-2/3 xl:px-[10%] md:flex gap-5">
      <section className="md:w-3/4">
        <h2>
          <mark className="bg-transparent text-skin-800 md:text-base lg:text-lg font-semibold">
            اپلیکیشن یک زن
          </mark>
        </h2>

        <nav className="text-skin-800 text-sm mt-8 text-[13px] lg:text-[14px] xl:text-base">
          <div className="grid grid-cols-2 gap-3">
            <ul className="space-y-3">
              {firstColumn.map((item: MenuItems) => (
                <li key={item?.Id}>
                  <Link href={item?.Url}>{item?.Title}</Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {secondColumn.map((item: MenuItems) => (
                <li key={item?.Id}>
                  <Link href={item?.Url}>{item?.Title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </section>
      <section className="md:w-1/4 pt-14">
        <Link href="" className="hidden md:block">
          <Image src="/enamad.png" width={100} height={150} alt="enamad" />
        </Link>
      </section>
    </section>
  );
}

export default DesktopFooterItem;
