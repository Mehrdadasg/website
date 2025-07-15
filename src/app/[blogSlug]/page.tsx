import { ssrBlog } from "@/features/apiHandlers/serverHandlers/ssrBlog";
import BlogContent from "@/features/blog/components/BlogDetails/BlogContent";
import BlogHero from "@/features/blog/components/BlogDetails/BlogHero";
import OtherBlog from "@/features/blog/components/BlogDetails/OtherBlog";
import RelatedBlog from "@/features/blog/components/BlogDetails/RelatedBlog";
import JsonLd from "@/features/blog/components/BlogDetails/StructuredData";
import { getBlogSeo } from "@/service/getBlogSeo";
import { QueryClient } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogSlug: string }>;
}) {
  try {
    const resolvedParams = await params;
    const blogSlug = resolvedParams?.blogSlug;
    const { Data } = await getBlogSeo(blogSlug);
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

async function BlogDetails({
  params,
}: {
  params: Promise<{ blogSlug: string }>;
}) {
  const resolvedParams = await params;
  const blogSlug = resolvedParams?.blogSlug;
  if (!blogSlug) notFound();
  const queryClient = new QueryClient();
  const { blog } = await ssrBlog({ queryClient, slug: blogSlug });
  const { Data } = await getBlogSeo(blogSlug);

  //JSON-LD
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: Data?.JsonLd?.headline,
    description: Data?.JsonLd?.description,
    image: Data?.JsonLd?.image,
    author: {
      "@type": "Person",
      name: Data?.JsonLd?.author?.name || "یک زن",
    },
    publisher: {
      "@type": "Organization",
      name: "یک زن",
      logo: {
        "@type": "ImageObject",
        url: "https://yekzan.com/logo.png",
      },
    },
    datePublished: Data?.JsonLd?.publisher.datePublished,
    mainEntityOfPage: `https://yekzan.com/articles/${blogSlug}`,
  };

  return (
    <>
      <JsonLd json={jsonLdData} />
      <main className="w-full px-5 xl:px-0 max-w-7xl 2xl:max-w-[1366px] mx-auto py-24 md:py-28 lg:py-36 xl:py-40">
        <BlogHero blogHeroData={blog?.Content} />
        <BlogContent blog={blog} />
        <RelatedBlog slug={blogSlug} />
        <OtherBlog slug={blogSlug} />
      </main>
    </>
  );
}

export default BlogDetails;
