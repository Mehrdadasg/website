"use client";
import { useCommentList } from "@/features/apiHandlers/clientHandlers/useCommentList";
import { Comment } from "@/shared/types/type";
import Image from "next/image";
import {
  notFound,
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

const pageSize=2;
const totalCount=20;
function CommentList() {
  const { blogSlug } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const { mutateAsync: commentListFunc } = useCommentList();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const totalPages = Math.ceil(totalCount / pageSize);
  const [commentList,setCommentList] = useState<Comment[]>([])

  const createPageURL = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams);
      params.set("page", page.toString());
      return `${pathname}?${params.toString()}`;
    },
    [pathname, searchParams]
  );

  const handleCommentList = async () => {
    if (blogSlug) {
      try {
        const response = await commentListFunc({ page:currentPage, slug: blogSlug as string });
        if(response?.Data?.length > 0){
            setCommentList(response?.Data)
        }
      } catch (error) {}
    }
  };

  useEffect(() => {
    handleCommentList();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      router.push(createPageURL(page));
    }
  };

  return (
    <section className="mt-10">
      <p className="font-bold text-[22px]">نظرات دیگران</p>
      <ul>
        {commentList?.map((comment)=><li key={comment?.Id} className="mt-5">
          <section>
            <section className="flex gap-3">
              <section className="size-8 md:size-11 rounded-full overflow-hidden">
                <Image
                  src={comment?.Avatar}
                  className="rounded-full size-8 md:size-11"
                  width={44}
                  height={44}
                  alt="تصویر کاربر"
                />
              </section>
              <section className="flex-1">
                <div>
                  <span className="text-xs md:text-base font-bold">لیلی</span>
                  <span className="text-[10px] md:text-[11px] text-gray-400 pr-2">
                    23 ماه پیش
                  </span>
                </div>
                <p className="text-xs md:text-sm text-gray-800">
                  {comment?.Text}
                </p>
              </section>
            </section>
          </section>
          {comment?.Childs?.length > 0 ? comment?.Childs?.map((c) => <section key={c?.Id} className="pr-10 md:pr-12 mt-5">
            <section className="flex gap-3">
              <section className="size-8 md:size-11 rounded-full overflow-hidden">
                <Image
                  src={c?.Avatar}
                  className="rounded-full size-8 md:size-11"
                  width={44}
                  height={44}
                  alt="تصویر کاربر"
                />
              </section>
              <section className="flex-1">
                <div>
                  <span className="text-xs md:text-base font-bold">ادمین</span>
                  <span className="text-[10px] md:text-[11px] text-gray-400 pr-2">
                    23 ماه پیش
                  </span>
                </div>
                <p className="text-xs md:text-sm text-gray-800">
                  {c?.Text}
                </p>
              </section>
            </section>
          </section>):null}
        </li>)}
      </ul>
    </section>
  );
}

export default CommentList;
