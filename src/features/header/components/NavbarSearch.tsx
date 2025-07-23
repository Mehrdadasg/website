"use client";
import { useBlogList } from "@/features/apiHandlers/clientHandlers/useBlogList";
import { Blog } from "@/shared/types/type";
import { Add, SearchNormal1 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function NavbarSearch({ onClose }: { onClose: () => void }) {
  const [searchKey, setSearchKey] = useState("");
  const [debouncedSearchKey, setDebouncedSearchKey] = useState("");
  const [blogList, setBlogList] = useState<Blog[]>([]);
  const { mutateAsync: blogListFunc } = useBlogList();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchKey(searchKey);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [searchKey]);

  useEffect(() => {
    const handleBlogList = async () => {
      try {
        const response = await blogListFunc({
          page: 1,
          searchKey: debouncedSearchKey,
        });
        if (response?.Data?.Items?.length > 0) {
          setBlogList(response?.Data?.Items?.splice(5));
        } else {
          setBlogList([]);
        }
      } catch (error) {
        console.error("Failed to fetch blog list:", error);
      }
    };

    if (debouncedSearchKey.length >= 3) {
      handleBlogList();
    } else {
      setBlogList([]);
    }
  }, [debouncedSearchKey]);

  return (
    <section className="h-max mt-4 px-3" role="search">
      <div className="bg-gray-100 flex items-center rounded-[8px] px-3 gap-3">
        <button type="button" onClick={() => setSearchKey("")}>
          <Add size={24} color="var(--color-gray-800)" className="rotate-45" />
        </button>
        <input
          type="text"
          placeholder="جستجو در مجله"
          className="grow bg-transparent focus:border-0 focus:outline-0 h-12"
          aria-label="جستجو در مجله"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
      </div>
      <section className="mt-6 px-5">
        {/* <div className="flex gap-3">
          <Image
            src="/fire.png"
            className="size-[20px]"
            width={20}
            height={20}
            alt="تصویر بیشترین جستجو های ماه"
          />
          <p className="font-semibold">بیشترین جستجو های ماه</p>
        </div> */}
        {blogList?.length > 0 ? (
          <ul className="space-y-4 mt-4">
            {blogList?.map((blog) => (
              <li key={blog?.Id}>
                <Link
                  href={`/blog/${blog?.Slug}`}
                  onClick={onClose}
                  className="flex gap-3 items-center text-sm"
                  title={blog?.Title ??""}
                >
                  <SearchNormal1 size={18} color="var(--color-gray-400)" />
                  {blog?.Title}
                </Link>
              </li>
            ))}
            <li className="border-t text-sm">
              <Link
                href={`/search?searchKey=${searchKey}`}
                onClick={onClose}
                title=" مشاهده نتایج بیشتر"
                className="flex justify-center text-lake-blue-600 pt-4 pb-1"
              >
                مشاهده نتایج بیشتر
              </Link>
            </li>
          </ul>
        ) : searchKey ? (
          <section className="flex justify-center items-center flex-col">
            <Image
              src="/illustration/404.png"
              width={200}
              height={200}
              alt="یافت نشد"
            />
            <p className="text-sm pb-3">
              هیچ نتیجه‌ای با عبارت {searchKey} یافت نشد
            </p>
          </section>
        ) : null}
      </section>
    </section>
  );
}

export default NavbarSearch;
