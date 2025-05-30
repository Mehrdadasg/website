import { getBreastFeadingFeature } from "@/service/getBreastFeadingFeature";
import { QueryClient } from "@tanstack/react-query";

export const ssrBreastFeedingFeature = async (queryClient: QueryClient) => {
  const { Data } = await queryClient.fetchQuery({
    queryKey: ["/home/features/breastfeeding"],
    queryFn: getBreastFeadingFeature,
  });
  return { pregnancyFeature: Data };
};
