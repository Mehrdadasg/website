import { getExpertPageData } from "@/service/getExpertPageData";
import { QueryClient } from "@tanstack/react-query";

export const ssrExpertPageData = async (queryClient: QueryClient) => {
  const { Data } = await queryClient.fetchQuery({
    queryKey: ["/expert/Dashboard"],
    queryFn: getExpertPageData,
  });
  return { expertPageData: Data };
};
