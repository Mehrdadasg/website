import { MenuType } from "@/shared/types/type";
import Link from "next/link";
import React from "react";

function DesktopFooterItem({menuItems}:MenuType) {
  const firstColumn = menuItems?.slice(0, 6);
  const secondColumn = menuItems?.slice(6);
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
              {firstColumn.map((item) => (
                <li key={item?.Id}>
                  <Link href={item?.Url}>{item?.Title}</Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {secondColumn.map((item) => (
                <li key={item?.Id}>
                  <Link href={item?.Url}>{item?.Title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </section>
      <section className="md:w-1/4">
        <p className="md:text-base lg:text-lg text-gray-50 font-semibold">
          کمپانی
        </p>
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
