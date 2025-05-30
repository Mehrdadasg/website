import { getHeroData } from "@/service/getHeroData";
import { QueryClient } from "@tanstack/react-query";

export const ssrHeroData = async (queryClient: QueryClient) => {
  const { Data } = await queryClient.fetchQuery({
    queryKey: ["/home/hero"],
    queryFn: getHeroData,
  });
  return { heroData: Data };
};
