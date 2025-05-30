import Link from "next/link";
import React from "react";

const navItems = [
  { href: "", label: "مشاوره" },
  { href: "", label: "تشخیص بارداری از روی علائم" },
  { href: "", label: "آیا من باردارم؟" },
  { href: "", label: "تقویم بارداری هفته به هفته" },
  { href: "", label: "تقویم قاعدگی" },
  { href: "", label: "تعیین جنسیت در زمان اقدام" },
  { href: "", label: "محاسبه سن بارداری" },
  { href: "", label: "بهترین روش جلوگیری از بارداری" },
  { href: "", label: "پیش بینی تعیین جنسیت بعد از بارداری" },
  { href: "", label: "بهترین زمان اقدام به بارداری" },
  { href: "", label: "محاسبه زمان تخمک گذاری" },
];

function DesktopFooterItem() {
  const firstColumn = navItems?.slice(0, 6);
  const secondColumn = navItems?.slice(6);
  return (
    <section className="hidden md:w-2/3 xl:px-[10%] md:flex gap-5">
      <section className="md:w-3/4">
        <h2>
          <mark className="bg-transparent text-gray-50 md:text-base lg:text-lg font-semibold">
            اپلیکیشن یک زن
          </mark>
        </h2>

        <nav className="text-gray-50 text-sm mt-8 text-[13px] lg:text-[14px] xl:text-base">
          <div className="grid grid-cols-2 gap-3">
            <ul className="space-y-3">
              {firstColumn.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {secondColumn.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </section>
      <section className="md:w-1/4">
        <p className="md:text-base lg:text-lg text-gray-50 font-semibold">کمپانی</p>
        <nav>
          <ul className="text-gray-50 text-sm mt-8 space-y-3 text-[13px] lg:text-[14px] xl:text-base">
            <li>
              <Link href="/">درباره ما</Link>
            </li>
            <li>
              <Link href="/">تماس با ما</Link>
            </li>
          </ul>
        </nav>
      </section>
    </section>
  );
}

export default DesktopFooterItem;
