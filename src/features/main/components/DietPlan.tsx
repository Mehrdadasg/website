import SectionWrapper from "@/shared/hoc/section-wrapper";
import { TickCircle } from "iconsax-react";
import Image from "next/image";
import React from "react";

function DietPlan() {
  return (
    <SectionWrapper className="flex bg-green-50 my-24 p-14 rounded-4xl">
      <section className="w-1/2">
        <h2 className="text-4xl font-semibold text-green-500">
          برنامه رژیم غذایـــی
        </h2>
        <h3 className="my-12">
          دنیایی از برنامه های رژیم غذایی متنوع اختصاصی
        </h3>
        <ol className="grid grid-cols-2 gap-5">
          <li className="flex gap-2 items-center">
            <TickCircle
              variant="Bold"
              size={20}
              color="var(--color-green-500)"
            />
            <mark className="bg-transparent">رژیم کربوهیدرات کم</mark>
          </li>
          <li className="flex gap-2 items-center">
            <TickCircle
              variant="Bold"
              size={20}
              color="var(--color-green-500)"
            />
            <mark className="bg-transparent">رژیم عادی</mark>
          </li>
          <li className="flex gap-2 items-center">
            <TickCircle
              variant="Bold"
              size={20}
              color="var(--color-green-500)"
            />
            <mark className="bg-transparent">رژیم تنبلی تخمدان</mark>
          </li>
          <li className="flex gap-2 items-center">
            <TickCircle
              variant="Bold"
              size={20}
              color="var(--color-green-500)"
            />
            <mark className="bg-transparent">رژیم پر پروتئین</mark>
          </li>
          <li className="flex gap-2 items-center">
            <TickCircle
              variant="Bold"
              size={20}
              color="var(--color-green-500)"
            />
            <mark className="bg-transparent">رژیم کتوژنیک</mark>
          </li>
          <li className="flex gap-2 items-center">
            <TickCircle
              variant="Bold"
              size={20}
              color="var(--color-green-500)"
            />
            <mark className="bg-transparent">رژیم کم چرب</mark>
          </li>
          <li className="flex gap-2 items-center">
            <TickCircle
              variant="Bold"
              size={20}
              color="var(--color-green-500)"
            />
            <mark className="bg-transparent">رژیم ورزشی</mark>
          </li>
          <li className="flex gap-2 items-center">
            <TickCircle
              variant="Bold"
              size={20}
              color="var(--color-green-500)"
            />
            <mark className="bg-transparent">رژیم گیاه خواری</mark>
          </li>
          <li className="flex gap-2 items-center">
            <TickCircle
              variant="Bold"
              size={20}
              color="var(--color-green-500)"
            />
            <mark className="bg-transparent">رژیم وگان</mark>
          </li>
          <li className="flex gap-2 items-center">
            <TickCircle
              variant="Bold"
              size={20}
              color="var(--color-green-500)"
            />
            <mark className="bg-transparent">رژیم فستینگ</mark>
          </li>
          <li className="flex gap-2 items-center">
            <TickCircle
              variant="Bold"
              size={20}
              color="var(--color-green-500)"
            />
            <mark className="bg-transparent">رژیم شیردهی</mark>
          </li>
          <li className="flex gap-2 items-center">
            <TickCircle
              variant="Bold"
              size={20}
              color="var(--color-green-500)"
            />
            <mark className="bg-transparent">رژیم اقدام به بارداری</mark>
          </li>
        </ol>
      </section>
      <section className="w-1/2 flex justify-center items-center">
        <Image
          src="/breakfast.png"
          width={374}
          height={383}
          alt="برنامه رژیم غذایی"
          quality={100}
        />
      </section>
    </SectionWrapper>
  );
}

export default DietPlan;
