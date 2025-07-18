import { getApp } from "@/service/getApp";
import { QueryClient } from "@tanstack/react-query";

export const ssrInstallApp = async (queryClient: QueryClient) => {
  const { Data } = await queryClient.fetchQuery({
    queryKey: ["/home/InstallAppLanding"],
    queryFn: getApp,
  });
  return { app: Data };
};
