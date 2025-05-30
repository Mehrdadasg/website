import { getPeriodFeature } from "@/service/getPeriodFeature";
import { QueryClient } from "@tanstack/react-query";

export const ssrPeriodFeature = async (queryClient: QueryClient) => {
  const { Data } = await queryClient.fetchQuery({
    queryKey: ["/home/features/period"],
    queryFn: getPeriodFeature,
  });
  return { periodFeature: Data };
};
