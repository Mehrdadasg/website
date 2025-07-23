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
  // const pathname = usePathname();

  // const createCategoryURL = useCallback(
  //   (categorySlug: string) => {
  //     const params = new URLSearchParams();
  //     params.set("category", categorySlug);
  //     return `${pathname}?${params.toString()}`;
  //   },
  //   [pathname]
  // );

  return (
    <section className="flex gap-3 my-7">
      {categories?.map((category: CategoryType) => (
        <LinkCM
          color={currentCategory === category.Slug ? "primary" : "light-blue"}
          size="sm"
          key={category.Id}
          href={`/blog/category/${category.Slug}`}
          className="rounded-[25px] text-[13px] cursor-pointer"
          title={category.Title}
        >
          {category.Title}
        </LinkCM>
      ))}
    </section>
  );
}