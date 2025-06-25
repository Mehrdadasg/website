import { getFooter } from "@/service/getFooter";
import { QueryClient } from "@tanstack/react-query";

export const ssrFooter = async (queryClient: QueryClient) => {
  const { Data } = await queryClient.fetchQuery({
    queryKey: ["/home/Footer"],
    queryFn: getFooter,
  });
  return { footer: Data };
};
