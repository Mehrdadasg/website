"use client";

import LinkCM from "@/shared/components/link";

type CategoryType = {
  Id: number;
  Title: string;
  Slug: string;
};

interface CategoriesListClientProps {
  categories: CategoryType[];
  currentCategory?: string;
}

export default function CategoriesListClient({
  categories,
  currentCategory,
}: CategoriesListClientProps) {

  return (
    <section className="flex gap-3 my-7">
      {categories?.map((category: CategoryType) => (
        <LinkCM
          color={currentCategory === category.Slug ? "primary" : "light-blue"}
          size="sm"
          key={category.Id}
          href={`/category/${category.Slug}`}
          className="rounded-[25px] text-[13px] cursor-pointer"
          title={category.Title}
        >
          {category.Title}
        </LinkCM>
      ))}
    </section>
  );
}