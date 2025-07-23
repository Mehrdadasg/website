// app/blog/layout.tsx
import { ssrCategoriesList } from "@/features/apiHandlers/serverHandlers/ssrCategoriesList";
import CategoriesListClient from "@/features/blog/components/CategoriesListClient";
import { QueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { ReactNode } from "react";

export default async function BlogLayout({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();
  const { categories } = await ssrCategoriesList(queryClient);

  return (
    <main className="pt-24 md:py-36 w-full px-4 lg:px-10 xl:px-0 max-w-7xl 2xl:max-w-[1366px] mx-auto">
      <section className="flex gap-5 items-center">
        <span className="size-11 flex justify-center items-center bg-lake-blue-50 rounded-full">
          <Image src="/glass.png" width={24} height={24} alt="glass" />
        </span>
        <p className="font-bold text-2xl">انتخاب کـــن</p>
      </section>

      <CategoriesListClient categories={categories} currentCategory="" />

      <section className="flex items-center gap-3">
        <span className="hidden sm:flex size-[44px] bg-orange-50 rounded-full justify-center items-center">
          <Image
            src="/fire.png"
            className="w-[19px] h-[23px]"
            width={19}
            height={23}
            alt="آخرین های مجله"
          />
        </span>
        <p className="text-[22px] sm:text-2xl font-semibold sm:font-bold">
          تازه‌ترین هـــا
        </p>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {children}
      </section>
    </main>
  );
}
