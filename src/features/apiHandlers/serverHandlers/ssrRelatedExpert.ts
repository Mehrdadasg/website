import { getRelatedExperts } from "@/service/getRelatedExperts";
import { QueryClient } from "@tanstack/react-query";

type RelatedExpertType = {
  queryClient: QueryClient;
  slug: string;
};

export const ssrRelatedExpert = async ({ queryClient, slug }: RelatedExpertType) => {    
  const { Data } = await queryClient.fetchQuery({
    queryKey: ["/expert/RelatedList", slug],
    queryFn: () => getRelatedExperts(slug),
  });
  return { relatedExperts: Data };
};