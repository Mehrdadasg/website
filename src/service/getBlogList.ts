import { BlogListHeaderType, BlogListResponse } from "@/shared/types/type";

export function getBlogList({ page, category,searchKey }: BlogListHeaderType): Promise<BlogListResponse> {
  return fetch(`${process.env.BASE_URL}/content/list?page=${page}&category=${category ??""}&searchKey=${searchKey ??""}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json() as Promise<BlogListResponse>;
    });
}