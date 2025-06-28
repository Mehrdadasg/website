import { addRate } from "@/service/addRate";
import { useMutation } from "@tanstack/react-query";

export const useAddRate=()=> {
  return useMutation({
    mutationKey:['/Content/CommentAdd'],
    mutationFn: ({Slug}:{Slug:string})=>
        addRate({Slug})
  });
}