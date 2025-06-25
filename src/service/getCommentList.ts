import { CommentListResponse } from "@/shared/types/type";

export function getCommentList({ page, slug}: {page:number, slug:string}) {
  return fetch(`${process.env.BASE_URL}/Content/CommentList?page=${page}&slug=${slug}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json() as Promise<CommentListResponse>;
    });
}