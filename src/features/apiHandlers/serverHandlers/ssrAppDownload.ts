import { getAppDownload } from "@/service/getAppDownload";
import { QueryClient } from "@tanstack/react-query";

export const ssrAppDownload = async (queryClient: QueryClient) => {
  const { Data } = await queryClient.fetchQuery({
    queryKey: ["/home/DownloadApp"],
    queryFn: getAppDownload,
  });
  return { appData: Data };
};
