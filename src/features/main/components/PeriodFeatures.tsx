import { ssrPeriodFeature } from "@/features/apiHandlers/serverHandlers/ssrPeriodFeature";
import Feature from "@/shared/components/feature";
import { QueryClient } from "@tanstack/react-query";
import React from "react";

async function PeriodFeatures() {
  const queryClient = new QueryClient();
  const { periodFeature } = await ssrPeriodFeature(queryClient);
  const features = periodFeature?.Features;

  return (
    <Feature
      cardItems={features}
      title={
        <>
          در <mark className="text-pink-600 bg-white">دوران قـــاعدگـــی</mark>{" "}
          برات چی داریم؟
        </>
      }
      description={periodFeature?.Text}
      imageAlt={periodFeature?.Title}
      imageSrc={periodFeature?.ImageUrl}
    />
  );
}

export default PeriodFeatures;
