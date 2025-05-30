import { getAppFeature } from "@/service/getAppFeature";
import { QueryClient } from "@tanstack/react-query";

export const ssrAppFeature = async (queryClient: QueryClient) => {
  const { Data } = await queryClient.fetchQuery({
    queryKey: ["/home/features/app"],
    queryFn: getAppFeature,
  });
  return { appFeature: Data };
};
