import { ssrPregnancyFeature } from "@/features/apiHandlers/serverHandlers/ssrPregnancyFeature";
import Feature from "@/shared/components/feature";
import { QueryClient } from "@tanstack/react-query";
import React from "react";

async function PregnancyFeatures() {
  const queryClient = new QueryClient();
  const { pregnancyFeature } = await ssrPregnancyFeature(queryClient);
  const features = pregnancyFeature?.Features;
  return (
    <Feature
      cardItems={features}
      title={
        <>
          در <mark className="text-pink-600 bg-white">دوران بارداری</mark> برات
          چی داریم؟
        </>
      }
      description={pregnancyFeature?.Text}
      imageAlt={pregnancyFeature?.Title}
      imageSrc={pregnancyFeature?.ImageUrl}
      mobileTwoRows
    />
  );
}

export default PregnancyFeatures;
