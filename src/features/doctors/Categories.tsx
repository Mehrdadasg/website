"use client";
import React from "react";

type ExpertCategoriesType = {
  Id: number;
  Title: string;
};

type Props = {
  expertCategories: ExpertCategoriesType[];
  selectedCategoryId: number;
  onCategoryChange: (categoryId: number) => void;
};

function Categories({ expertCategories, selectedCategoryId, onCategoryChange }: Props) {
  return (
    <section className="overflow-x-auto pb-5">
      <section className="flex sm:gap-3 mt-14 w-max">
        <button
          onClick={() => onCategoryChange(0)}
          className={`${
            selectedCategoryId === 0
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-transparent border-transparent text-blue-600 hover:bg-blue-50"
          } w-24 text-sm px-4 py-2 rounded-lg border transition-all duration-200`}
          title="همه"
        >
          همه
        </button>
        {expertCategories?.map((c: ExpertCategoriesType) => (
          <button
            key={c?.Id}
            onClick={() => onCategoryChange(c?.Id)}
            className={`${
              selectedCategoryId === c?.Id
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-transparent border-transparent text-blue-600 hover:bg-blue-50"
            } w-max px-5 text-sm py-2 rounded-lg border transition-all duration-200`}
            title={c?.Title}
          >
            {c?.Title}
          </button>
        ))}
      </section>
    </section>
  );
}

export default Categories;