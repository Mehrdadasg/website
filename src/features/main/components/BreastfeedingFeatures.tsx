import { ssrBreastFeedingFeature } from "@/features/apiHandlers/serverHandlers/ssrBreastFeedingFeature";
import Feature from "@/shared/components/feature";
import { QueryClient } from "@tanstack/react-query";
import React from "react";

async function BreastfeedingFeatures() {
  const queryClient = new QueryClient();
  const { pregnancyFeature } = await ssrBreastFeedingFeature(queryClient);
  const features = pregnancyFeature?.Features;
  return (
    <Feature
      cardItems={features}
      title={
        <>
          در <mark className="text-pink-600 bg-white">دوران شیردهی</mark> برات
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

export default BreastfeedingFeatures;
