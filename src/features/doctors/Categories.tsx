"use client";
import React from "react";
import Link from "next/link";

type ExpertCategoriesType = {
  Id: number;
  Title: string;
};

type Props = {
  expertCategories: ExpertCategoriesType[];
  selectedCategoryId: number;
};

function Categories({ expertCategories, selectedCategoryId }: Props) {
  return (
    <section className="overflow-x-auto pb-5">
      <section className="flex gap-10 mt-14 w-max">
        <Link
          href="?categoryId=0"
          className={`text-sm font-semibold ${selectedCategoryId === 0 ? "text-blue-700 border-b-2 border-blue-700" : "text-blue-500"} cursor-pointer w-28 block text-center py-2`}
        >
          همه
        </Link>
        {expertCategories?.map((c: ExpertCategoriesType) => (
          <Link
            key={c?.Id}
            href={`?categoryId=${c?.Id}`}
            className={`text-sm font-semibold ${selectedCategoryId === c?.Id ? "text-blue-700 border-b-2 border-blue-700" : "text-blue-500"} cursor-pointer w-28 block text-center py-2`}
          >
            {c?.Title}
          </Link>
        ))}
      </section>
    </section>
  );
}

export default Categories;