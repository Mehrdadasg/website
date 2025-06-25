import { getRecommendedList } from "@/service/getRecommendedList";
import { QueryClient } from "@tanstack/react-query";

export const ssrRecommendedList = async (queryClient: QueryClient) => {
  const { Data } = await queryClient.fetchQuery({
    queryKey: ["/Content/SearchRecommendedList"],
    queryFn: getRecommendedList,
  });
  return { recommendedList: Data };
};
