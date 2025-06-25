"use client";

import Button from "@/shared/components/button";
import { useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

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
  const router = useRouter();
  const pathname = usePathname();

  const createCategoryURL = useCallback(
    (categorySlug: string) => {
      const params = new URLSearchParams();
      params.set("category", categorySlug);
      return `${pathname}?${params.toString()}`;
    },
    [pathname]
  );

  const handleCategoryChange = (categorySlug: string) => {
    router.push(createCategoryURL(categorySlug));
  };

  return (
    <section className="flex gap-3 my-7">
      {categories?.map((category: CategoryType) => (
        <Button
          type="button"
          color={currentCategory === category.Slug ? "primary" : "light-blue"}
          size="sm"
          key={category.Id}
          onClick={() => handleCategoryChange(category.Slug)}
          className="rounded-[25px] text-[13px] cursor-pointer"
        >
          {category.Title}
        </Button>
      ))}
    </section>
  );
}