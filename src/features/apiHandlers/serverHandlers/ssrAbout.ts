import { getAbout } from "@/service/getAbout";
import { getHeader } from "@/service/getHeader";
import { QueryClient } from "@tanstack/react-query";

export const ssrAbout = async (queryClient: QueryClient) => {
  const {Data} = await queryClient.fetchQuery({
    queryKey: [`/page/about`],
    queryFn: getAbout,
  });

  return { aboutData: Data };
};