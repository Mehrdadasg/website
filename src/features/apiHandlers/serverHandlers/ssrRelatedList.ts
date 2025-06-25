import { getRelatedList } from "@/service/getRelatedList";
import { QueryClient } from "@tanstack/react-query";

export const ssrRelatedList = async ({queryClient,slug}:{queryClient: QueryClient,slug:string}) => {
  const { Data } = await queryClient.fetchQuery({
    queryKey: ["/Content/RelatedList"],
    queryFn: ()=>getRelatedList(slug),
  });
  return { relatedList: Data };
};
