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
    <section className="my-7 w-full overflow-x-auto lg:overflow-hidden no-scrollbar pb-2">
      <ul className="flex gap-3 w-max lg:w-full lg:flex-wrap">
        {categories?.map((category: CategoryType) => (
          <li key={category.Id}>
            <LinkCM
              color={
                currentCategory === category.Slug ? "primary" : "light-blue"
              }
              size="sm"
              href={`/category/${category.Slug}`}
              className="rounded-[25px] text-[13px] cursor-pointer"
              title={category.Title}
            >
              {category.Title}
            </LinkCM>
          </li>
        ))}
      </ul>
    </section>
  );
}
