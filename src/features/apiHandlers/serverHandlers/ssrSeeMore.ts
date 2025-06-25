import { getSeeMore } from "@/service/getSeeMore";
import { QueryClient } from "@tanstack/react-query";

export const ssrSeeMore = async (queryClient: QueryClient) => {
  const { Data } = await queryClient.fetchQuery({
    queryKey: ["/home/seemore"],
    queryFn: getSeeMore,
  });
  return { seeMoreData: Data };
};
