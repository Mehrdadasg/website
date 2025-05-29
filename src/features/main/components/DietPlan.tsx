import SectionWrapper from "@/shared/hoc/section-wrapper";
import { TickCircle } from "iconsax-react";
import Image from "next/image";
import React from "react";

const dietItems = [
  { label: "رژیم کربوهیدرات کم" },
  { label: "رژیم عادی" },
  { label: "رژیم تنبلی تخمدان" },
  { label: "رژیم پر پروتئین" },
  { label: "رژیم کتوژنیک" },
  { label: "رژیم کم چرب" },
  { label: "رژیم ورزشی" },
  { label: "رژیم گیاه خواری" },
  { label: "رژیم وگان" },
  { label: "رژیم فستینگ" },
  { label: "رژیم شیردهی" },
  { label: "رژیم اقدام به بارداری" },
];

function DietPlan() {
  return (
    <SectionWrapper className="my-24 py-10 px-3 md:px-0 md:py-14">
      <div className="md:flex py-8 px-5 md:p-16 bg-green-50 rounded-[12px] md:rounded-4xl">
        <section className="md:w-1/2">
          <h2 className="text-[22px] md:text-4xl text-center md:text-right font-bold md:font-semibold text-green-500">
            برنامه رژیم غذایـــی
          </h2>
          <h3 className="text-[13px] md:text-base leading-8 text-center md:text-right my-5 md:my-12">
            دنیایی از برنامه های رژیم غذایی متنوع اختصاصی
          </h3>
          <ol className="hidden md:grid grid-cols-2 gap-5">
            {dietItems.map((item, index) => (
              <li key={index} className="flex gap-2 items-center">
                <TickCircle
                  variant="Bold"
                  size={20}
                  color="var(--color-green-500)"
                />
                <mark className="bg-transparent text-[13px] md:text-base">
                  {item.label}
                </mark>
              </li>
            ))}
          </ol>
        </section>
        <section className="md:w-1/2 flex flex-col md:flex-row justify-center items-center">
          <Image
            src="/breakfast.png"
            width={374}
            height={383}
            alt="برنامه رژیم غذایی"
            quality={100}
          />

          <ol className="grid md:hidden grid-cols-2 gap-3 mt-5">
            {dietItems.map((item, index) => (
              <li key={index} className="flex gap-2 items-center">
                <TickCircle
                  variant="Bold"
                  size={20}
                  color="var(--color-green-500)"
                />
                <mark className="bg-transparent text-[13px] md:text-base">
                  {item.label}
                </mark>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </SectionWrapper>
  );
}

export default DietPlan;
