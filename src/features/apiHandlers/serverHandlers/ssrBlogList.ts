import { getBlogList } from "@/service/getBlogList";
import { BlogListResponse } from "@/shared/types/type";
import { QueryClient } from "@tanstack/react-query";

type BlogList = {
  queryClient: QueryClient;
  page: number;
  category?: string;
  searchKey?:string
};

export const ssrBlogList = async ({ queryClient, page, category,searchKey }: BlogList) => {    
  const { Data } = await queryClient.fetchQuery<BlogListResponse>({
    queryKey: ["/content/list"],
    queryFn: () => getBlogList({ page, category,searchKey }),
  });
  return { blogList: Data };
};