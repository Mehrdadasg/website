import { ssrAppFeature } from "@/features/apiHandlers/serverHandlers/ssrAppFeature";
import Card from "@/shared/components/card";
import { FeaturesItem } from "@/shared/types/type";
import { QueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

async function OurFeatures() {
  const queryClient = new QueryClient();
  const { appFeature } = await ssrAppFeature(queryClient);
  const features = appFeature?.Features;

  return (
    <section className="py-10 sm:py-24 px-5 lg:px-10 xl:px-0">
      <h2 className="font-semibold text-2xl md:text-4xl flex gap-1 justify-center">
        آنچه
        <Image
          src="/logo/typo.png"
          width={70}
          height={37}
          alt="آنچه یک زن برای تو داره"
          className="h-6 md:h-[37px] w-auto md:w-[70px]"
        />
        برای تو داره
      </h2>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 lg:gap-10 mt-14">
        {features?.map((feature: FeaturesItem) => (
          <article key={feature?.Id}>
            <Image
              src={feature?.ImageUrl}
              width={2000}
              height={2000}
              alt={feature?.Title}
              quality={100}
              className={`${feature ?? ""}`}
            />
            <div className="mt-4">
              <h3 className={`font-bold truncate`}>
                {feature?.Title}
              </h3>
              <p
                className={`text-[13px] text-gray-500 mt-2 line-clamp-2 `}
              >
                {feature?.Text}
              </p>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}

export default OurFeatures;
