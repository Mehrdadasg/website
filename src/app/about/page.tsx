import { ssrAbout } from "@/features/apiHandlers/serverHandlers/ssrAbout";
import { getPageSeo } from "@/service/getPageSeo";
import Breadcrumb from "@/shared/components/breadcrumb";
import LinkCM from "@/shared/components/link";
import Github from "@/shared/icons/Github";
import Linkedin from "@/shared/icons/Likedin";
import { Member } from "@/shared/types/type";
import { QueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

export async function generateMetadata() {
  try {
    const { Data } = await getPageSeo("about");
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

async function About() {
  const queryClient = new QueryClient();
  const { aboutData } = await ssrAbout(queryClient);

  const breadcrumbItems = [
    { label: "خانه", href: "/" },
    { label: "درباره ما" },
  ];

  return (
    <>
      <section className="pt-24 md:pt-52 lg:pt-40 xl:pt-36 md:mt-0 px-3 sm:px-5 lg:px-10 xl:px-0 max-w-[1200px] mx-auto">
        <Breadcrumb
          items={breadcrumbItems}
          separator="/"
          linkClassName="text-lake-blue-600 text-xs font-bold"
          textClassName="text-gray-400 text-xs font-bold"
          seperatorClassName="text-gray-200"
        />
        <section className=" md:flex lg:gap-5 xl:gap-10 h-full md:mt-10">
          <section className="md:w-1/2 pt-8 md:pt-10">
            {/* <h2 className="bg-lake-blue-50 text-lake-blue-600 py-1 px-5 text-[13px] md:text-lg rounded-[50px] w-max">
              {aboutData?.Content?.SubTitle}
            </h2> */}
            <p className="md:text-right mt-5 sm:mt-10 mb-8 text-[38px] md:text-5xl xl:text-[64px]">
              <b>پرطرفــــدار تریــــــــــــن</b>
            </p>
            <p className="md:text-right mt-2 mb-10 md:mb-16 text-[38px] md:text-5xl xl:text-5xl text-pink-500">
              <b>اپلیکیشن سلامت زنان ایرانی</b>
            </p>
            <h2 className="md:text-right text-[13px] md:text-base xl:text-lg text-gray-600">
              {aboutData?.Content?.Text}
            </h2>
          </section>
          <section className="md:w-1/2 mt-5 md:mt-0 flex justify-center items-start xl:pr-10">
            <Image
              src={aboutData?.Content?.ImageUrl ?? "/illustration/Sara.png"}
              width={433}
              height={433}
              quality={100}
              alt=""
              priority
            />
          </section>
        </section>
      </section>
      <section className="bg-skin-50 py-10 px-10 sm:px-0 border-b-8 border-b-skin-100 flex justify-center flex-wrap gap-14 sm:gap-8 lg:gap-24 my-24">
        <section className="leaf px-12 sm:px-10 lg:px-12 flex flex-col justify-center items-center gap-2 h-20 w-60 sm:w-44 lg:w-60">
          <p>
            <b className="text-skin-800 text-4xl sm:text-lg lg:text-4xl ltr float-left">
              {aboutData?.Content?.MonthlyActiveUser}
            </b>
          </p>
          <p className="text-skin-600 sm:text-xs lg:text-base">
            کاربر فعال ماهانه
          </p>
        </section>
        <section className="leaf px-12 sm:px-10 lg:px-12 flex flex-col justify-center items-center gap-2 h-20 w-60 sm:w-44 lg:w-60">
          <p>
            <b className="text-skin-800 text-4xl sm:text-lg lg:text-4xl ltr float-left">
              {aboutData?.Content?.InstallCout}
            </b>
          </p>
          <p className="text-skin-600 sm:text-xs lg:text-base">تعداد دانلود</p>
        </section>
        <section className="leaf px-12 sm:px-10 lg:px-12 flex flex-col justify-center items-center gap-2 h-20 w-60 sm:w-44 lg:w-60">
          <p>
            <b className="text-skin-800 text-4xl sm:text-lg lg:text-4xl">
              {aboutData?.Content?.StartYear}
            </b>
          </p>
          <p className="text-skin-600 sm:text-xs lg:text-base">شروع فعالیت</p>
        </section>
      </section>
      {/*<section className="pb-32 px-5">
        <p className="text-[22px] md:text-4xl xl:text-5xl sm:text-center">
          <b>
            <mark className="bg-transparent">
              {aboutData?.TeamContent?.Title}
            </mark>
          </b>
        </p>
        <p className="text-lg sm:text-center mt-5 text-gray-600 max-w-[588px] mx-auto">
          {aboutData?.TeamContent?.Text}
        </p>
         <section className="flex justify-center gap-10 mt-20 max-w-5xl mx-auto flex-wrap">
          {aboutData?.TeamContent?.Members?.map((m: Member, index: number) => (
            <section
              key={index}
              className="flex sm:flex-col sm:justify-center items-center gap-2 sm:px-7 w-full sm:w-max"
            >
              <Image
                src={m?.ImageUrl ?? "/user2.png"}
                alt={m?.Title ?? "تصویر کاربر"}
                width={150}
                height={150}
                className="rounded-full size-[90px] sm:size-[150px] object-cover"
              />
              <div className="flex-1 flex sm:flex-col">
                <div className="flex-1">
                  <h3 className="font-semibold mt-5 sm:text-center">
                    {m?.Title}
                  </h3>
                  <p className="text-gray-500 text-xs mt-2 sm:text-center sm:ltr">
                    {m?.Title}
                  </p>
                </div>
                <div className="mt-3 flex flex-col sm:flex-row justify-center gap-3 sm:gap-5">
                  <LinkCM
                    href={m?.Linkedin ?? "#"}
                    size="icon"
                    aria-label="likedin"
                    color={m?.Linkedin ? "blue" : "default"}
                    className={`!hidden sm:!flex ${m?.Linkedin
                        ? "pointer-events-auto"
                        : "pointer-events-none"}`}
                  >
                    <Linkedin fill={m?.Linkedin ? "white" : "#D1D5DB"} />
                  </LinkCM>
                  <LinkCM
                    href={m?.Linkedin ?? "#"}
                    size="sm-icon"
                    aria-label="likedin"
                    color={m?.Linkedin ? "blue" : "default"}
                    className={`sm:!hidden ${m?.Linkedin
                        ? "pointer-events-auto"
                        : "pointer-events-none"}`}
                  >
                    <Linkedin fill={m?.Linkedin ? "white" : "#D1D5DB"} />
                  </LinkCM>
                  <LinkCM
                    href={m?.Linkedin ?? "#"}
                    size="icon"
                    aria-label="github"
                    color={m?.Github ? "blue" : "default"}
                    className={`!hidden sm:!flex ${m?.Github
                        ? "pointer-events-auto"
                        : "pointer-events-none"}`}
                  >
                    <Github fill={m?.Github ? "white" : "#D1D5DB"} />
                  </LinkCM>
                  <LinkCM
                    href={m?.Linkedin ?? "#"}
                    size="sm-icon"
                    aria-label="github"
                    color={m?.Github ? "blue" : "default"}
                    className={`sm:!hidden ${m?.Github
                        ? "pointer-events-auto"
                        : "pointer-events-none"}`}
                  >
                    <Github fill={m?.Github ? "white" : "#D1D5DB"} />
                  </LinkCM>
                </div>
              </div>
            </section>
          ))}
        </section> 
      </section>*/}
    </>
  );
}

export default About;
