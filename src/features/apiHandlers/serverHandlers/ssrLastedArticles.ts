import { getLastedArticles } from "@/service/getLastedArticles";
import { QueryClient } from "@tanstack/react-query";

export const ssrLastedArticles = async (queryClient: QueryClient) => {
  const { Data } = await queryClient.fetchQuery({
    queryKey: ["/home/newcontents"],
    queryFn: getLastedArticles,
  });
  return { lastedArticles: Data };
};
