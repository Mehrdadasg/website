import { ssrBlogList } from "@/features/apiHandlers/serverHandlers/ssrBlogList";
import { ssrCategoriesList } from "@/features/apiHandlers/serverHandlers/ssrCategoriesList";
import CategoriesListClient from "@/features/blog/components/CategoriesListClient";
import { getCategorySeo } from "@/service/getCategorySeo";
import ArticleCard from "@/shared/components/article-card";
import JsonLd from "@/shared/components/json-ld";
import { Pagination } from "@/shared/components/pagination";
import { QueryClient } from "@tanstack/react-query";
import Image from "next/image";

interface BlogPageProps {
  searchParams: Promise<{ page?: string; category: string }>;
}

export async function generateMetadata() {
  try {
    const { Data } = await getCategorySeo("");
    return {
      title: {
        default:
          Data.MetaTitle || "یک زن - راهنمای بهداشت زنان، بارداری و زایمان",
        template: "%s | یک زن",
      },
      description:
        Data.MetaDescription ||
        "یک زن: راهنمای جامع بهداشت زنان از بلوغ تا بارداری، زایمان و سلامت مادران. اطلاعات کاربردی، نکات مهم و محصولات ویژه برای زنان را اینجا بخوانید و تجربه کنید!",
      keywords:
        "بهداشت زنان, بارداری, زایمان, بلوغ, سلامت زنان, راهنمای زنان, محصولات زنان",
      metadataBase: new URL(Data.OgUrl || "https://yeksan.com"),
      alternates: {
        canonical: Data.CanonicalUrl || "/",
        languages: {
          "fa-IR": "/fa-IR",
        },
      },
      robots: {
        index: true,
        follow: true,
      },
      openGraph: {
        title: Data.OgTitle || "یک زن - راهنمای بهداشت زنان",
        description:
          Data.OgDescription ||
          "یک زن: راهنمای جامع بهداشت زنان از بلوغ تا بارداری، زایمان و سلامت مادران",
        siteName: "یک زن",
        type: "website",
        url: Data.OgUrl || "/",
        images: [
          {
            url: Data.OgImageUrl || "/og-img-large.png",
            width: 1200,
            height: 630,
            alt: Data.OgTitle || "یک زن، راهنمای بهداشت زنان",
          },
          {
            url: "/og-img-small.png",
            width: 600,
            height: 315,
            alt: Data.OgTitle || "یک زن، راهنمای بهداشت زنان",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: Data.OgTitle || "یک زن - راهنمای بهداشت زنان",
        description:
          Data.OgDescription ||
          "یک زن، راهنمای جامع بهداشت زنان از بلوغ تا بارداری، زایمان و سلامت مادران",
        images: [Data.OgImageUrl || "/og-img-large.png"],
        site: "@YekZan",
        creator: "@YekZanAuthor",
      },
      icons: {
        icon: [
          { url: "/favicon.ico" },
          { url: "/favicon-32x32.png", sizes: "32x32" },
          { url: "/favicon-16x16.png", sizes: "16x16" },
        ],
        apple: "/apple-touch-icon.png",
      },
      other: {
        "theme-color": "#ffffff",
        "msapplication-TileImage": "/ms-icon.png",
        ...(Data.JsonLd
          ? { "application/ld+json": JSON.stringify(Data.JsonLd) }
          : {
              "application/ld+json": JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Website",
                name: "یک زن",
                url: "https://yeksan.com",
                description:
                  "یک زن، راهنمای جامع بهداشت زنان از بلوغ تا بارداری و زایمان",
                inLanguage: "fa-IR",
                publisher: {
                  "@type": "Organization",
                  name: "یک زن",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://yeksan.com/logo.png",
                  },
                },
              }),
            }),
      },
    };
  } catch (error) {
    console.error("Error fetching SEO data:", error);
    return {
      title: {
        default: "یک زن - راهنمای بهداشت زنان، بارداری و زایمان",
        template: "%s | یک زن",
      },
      description:
        "یک زن: راهنمای جامع بهداشت زنان از بلوغ تا بارداری، زایمان و سلامت مادران. اطلاعات کاربردی، نکات مهم و محصولات ویژه برای زنان.",
    };
  }
}

export default async function BlogMainPage({ searchParams }: BlogPageProps) {
  const queryClient = new QueryClient();
  const resolvedSearchParams = await searchParams;
  const currentPage = Number(resolvedSearchParams.page) || 1;

  let blogList;
  try {
    const result = await ssrBlogList({
      queryClient,
      page: currentPage,
      category: "",
    });
    blogList = result.blogList;
  } catch (error) {
    console.error("Failed to fetch blog list:", error);
    return <div>خطا در بارگذاری مقالات. لطفاً دوباره تلاش کنید.</div>;
  }

  const totalCount = blogList?.RecordeCount || 0;
  const pageSize = blogList?.PageSize || 12;
  const { categories } = await ssrCategoriesList(queryClient);
  const seoData = await getCategorySeo();

  return (
    <>
      <JsonLd json={seoData?.Data?.JsonLd} />
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
              alt="تازه‌ترین مطالب سلامت زنان"
            />
          </span>
          <h1 className="text-[22px] sm:text-2xl font-semibold sm:font-bold">
            تازه‌ترین مطالب سلامت زنان
          </h1>
        </section>

        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {blogList?.Items?.map((article) => (
            <ArticleCard key={article.Id} article={article} />
          ))}
        </section>
        <section className="mt-5">
          <Pagination
            totalCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
          />
        </section>
      </main>
    </>
  );
}
