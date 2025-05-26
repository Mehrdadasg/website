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
    <SectionWrapper className="flex bg-green-50 my-24 p-14 rounded-4xl">
      <section className="w-1/2">
        <h2 className="text-4xl font-semibold text-green-500">
          برنامه رژیم غذایـــی
        </h2>
        <h3 className="my-12">
          دنیایی از برنامه های رژیم غذایی متنوع اختصاصی
        </h3>
        <ol className="grid grid-cols-2 gap-5">
          {dietItems.map((item, index) => (
            <li key={index} className="flex gap-2 items-center">
              <TickCircle
                variant="Bold"
                size={20}
                color="var(--color-green-500)"
              />
              <mark className="bg-transparent">{item.label}</mark>
            </li>
          ))}
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