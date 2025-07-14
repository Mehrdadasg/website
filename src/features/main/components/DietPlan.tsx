import { ssrDietPlan } from "@/features/apiHandlers/serverHandlers/ssrDietPlan";
import { QueryClient } from "@tanstack/react-query";
import { TickCircle } from "iconsax-react";
import Image from "next/image";
import React from "react";

type DietItem = {
  Id: number;
  Title: string;
};

async function DietPlan() {
  const queryClient = new QueryClient();
  const { dietPlan } = await ssrDietPlan(queryClient);
  return (
    <section className="my-5 sm:my-24 py-10 px-5 lg:px-10 xl:px-0 md:py-14">
      <div className="lg:flex py-8 px-5 lg:p-16 bg-green-50 rounded-[12px] lg:rounded-4xl">
        <section className="lg:w-1/2">
          <h2 className="text-[22px] lg:text-4xl text-center lg:text-right font-bold lg:font-semibold text-green-500">
            {dietPlan?.Title}
          </h2>
          <h3 className="text-[13px] md:text-base leading-8 text-center lg:text-right my-5 lg:my-12">
            {dietPlan?.Text}
          </h3>
          <ol className="hidden lg:grid grid-cols-2 gap-5">
            {dietPlan?.Items?.map((item:DietItem) => (
              <li key={item?.Id} className="flex gap-2 items-center">
                <TickCircle
                  variant="Bold"
                  size={20}
                  color="var(--color-green-500)"
                />
                <mark className="bg-transparent text-[13px] md:text-base">
                  {item?.Title}
                </mark>
              </li>
            ))}
          </ol>
        </section>
        <section className="lg:w-1/2 flex flex-col lg:flex-row justify-center items-center">
          <Image
            src={dietPlan?.ImageUrl || "/breakfast.png"}
            width={374}
            height={383}
            alt={dietPlan?.ImageAlt || "برنامه رژیم غذایی"}
            quality={100}
          />

          <ol className="grid lg:hidden grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3 mt-5">
            {dietPlan?.Items?.map((item: string, index: number) => (
              <li key={index} className="flex gap-2 items-center">
                <TickCircle
                  variant="Bold"
                  size={20}
                  color="var(--color-green-500)"
                />
                <mark className="bg-transparent text-[13px] md:text-base">
                  {item}
                </mark>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </section>
  );
}

export default DietPlan;
