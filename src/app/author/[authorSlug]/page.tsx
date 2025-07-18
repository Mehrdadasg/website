import { ssrAuthor } from "@/features/apiHandlers/serverHandlers/ssrAuthor";
import AuthorPost from "@/features/author/AuthorPost";
import { getAuthorSeo } from "@/service/getAuthorSeo";
import Breadcrumb from "@/shared/components/breadcrumb";
import JsonLd from "@/shared/components/json-ld";
import { QueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ authorSlug: string }>;
}) {
  try {
    const resolvedParams = await params;
    const authorSlug = resolvedParams?.authorSlug;
    const { Data } = await getAuthorSeo(authorSlug);
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

async function Author({
  params,
  searchParams,
}: {
  params: Promise<{ authorSlug: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const resolvedParams = await params;
  const authorSlug = resolvedParams?.authorSlug;
  if (!authorSlug) notFound();
  const resolvedSearchParams = await searchParams;
  const currentPage = Number(resolvedSearchParams.page) || 1;
  const queryClient = new QueryClient();
  const { author } = await ssrAuthor({ queryClient, slug: authorSlug });
  const { Data } = await getAuthorSeo(authorSlug);

  const breadcrumbItems = [
    { label: "خانه", href: "/" },
    { label: "مجله", href: "/blog" },
    { label: "نویسنده" },
  ];

  return (
    <>
      <JsonLd json={Data?.JsonLd} />

      <main className="w-full px-5 xl:px-0 max-w-7xl 2xl:max-w-[1366px] mx-auto py-24 md:py-40">
        <Breadcrumb
          items={breadcrumbItems}
          separator="/"
          linkClassName="text-lake-blue-600 text-xs"
          textClassName="text-gray-400 text-xs"
          seperatorClassName="text-gray-200"
        />
        <section className="flex gap-10 items-center my-10">
          <section className="size-[110px] md:size-60 rounded-full">
            <Image
              src={author?.Content?.MainImageUrl ?? "/user2.png"}
              className="size-[110px] md:size-60 rounded-full object-cover"
              alt={author?.Content?.MainImageUrl ?? "تصویر نویسنده"}
              width={240}
              height={240}
            />
          </section>
          <section>
            <h1 className="text-[22px] xl:text-5xl">
              <b>{author?.Content?.Title}</b>
            </h1>
            <h2 className="text-lg mt-5">کارشناس تغذیه</h2>
          </section>
        </section>

        <section className="flex items-center gap-3 mt-16">
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
            خواندنی‌های نویسنده
          </p>
        </section>
        <AuthorPost slug={authorSlug} currentPage={currentPage} />
      </main>
    </>
  );
}

export default Author;
