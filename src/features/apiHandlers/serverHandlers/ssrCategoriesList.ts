import { getCategoriesList } from "@/service/getCategoriesList";
import { QueryClient } from "@tanstack/react-query";

export const ssrCategoriesList = async (queryClient: QueryClient) => {
  const { Data } = await queryClient.fetchQuery({
    queryKey: ["/content/category"],
    queryFn: getCategoriesList,
  });
  return { categories: Data };
};
