import { getExpertList } from "@/service/getExpertList";
import { QueryClient } from "@tanstack/react-query";

export const ssrExpertList = async (queryClient: QueryClient) => {
  const { Data } = await queryClient.fetchQuery({
    queryKey: ["/expert/List"],
    queryFn: getExpertList,
  });
  return { expertList: Data };
};
