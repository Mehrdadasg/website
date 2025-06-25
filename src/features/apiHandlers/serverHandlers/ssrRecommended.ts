import { getRecommended } from "@/service/getRecommended";
import { QueryClient } from "@tanstack/react-query";

export const ssrRecommended = async ({queryClient,slug}:{queryClient: QueryClient,slug:string}) => {
  const { Data } = await queryClient.fetchQuery({
    queryKey: ["/Content/RecommendedList"],
    queryFn: ()=>getRecommended(slug),
  });
  return { recommended: Data };
};
