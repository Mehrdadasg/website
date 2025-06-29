"use client";
import React from "react";
import LinkCM from "@/shared/components/link";

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
        <LinkCM
          href="?categoryId=0"
          variant={selectedCategoryId === 0 ? "contained" : "text"}
          color="blue"
          className={`${selectedCategoryId===0? "":"!bg-transparent !border-transparent" } w-28 text-sm`}
        >
          همه
        </LinkCM>
        {expertCategories?.map((c: ExpertCategoriesType) => (
          <LinkCM
            key={c?.Id}
            href={`?categoryId=${c?.Id}`}
            variant={selectedCategoryId === c?.Id ? "contained" : "text"}
            color="blue"
            className={`${selectedCategoryId===c?.Id ? "":"!bg-transparent !border-transparent" } w-32 text-sm`}
          >
            {c?.Title}
          </LinkCM>
        ))}
      </section>
    </section>
  );
}

export default Categories;
