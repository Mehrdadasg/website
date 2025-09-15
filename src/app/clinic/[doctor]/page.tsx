import { ssrExpert } from "@/features/apiHandlers/serverHandlers/ssrExpert";
import RelatedExperts from "@/features/doctors/RelatedExperts";
import { getExpertSeo } from "@/service/getExpertSeo";
import Breadcrumb from "@/shared/components/breadcrumb";
import JsonLd from "@/shared/components/json-ld";
import LinkCM from "@/shared/components/link";
import { QueryClient } from "@tanstack/react-query";
import {  Instagram, Location } from "iconsax-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ doctor: string }>; 
}) {
  try {
    const resolvedParams = await params;
    const doctorSlug = resolvedParams?.doctor;
    const { Data } = await getExpertSeo(doctorSlug);
   

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
        canonical: Data.CanonicalUrl || "/"
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

async function DoctorInfo({ params }: { params: Promise<{ doctor: string }> }) {
  const queryClient = new QueryClient();
  const resolvedParams = await params;
  const slug = resolvedParams?.doctor;
  if (!slug) notFound();
  const { expert } = await ssrExpert({ queryClient, slug });
  const { Data } = await getExpertSeo(slug);

  const breadcrumbItems = [
    { label: "خانه", href: "/" },
    { label: "متخصصین یک زن", href: "/clinic" },
    { label: "تماس با ما" },
  ];

  const cleanHtmlText = DOMPurify.sanitize(expert?.Content?.Text);

  
  return (
    <>
      <JsonLd json={Data?.JsonLd} />
      <section className="bg-gray-100 h-max pt-40 sm:pt-36 -mt-[80px] md:mt-0 pb-28 px-5 md:px-0">
        <section className="max-w-[1200px] mx-auto ">
          <Breadcrumb
            items={breadcrumbItems}
            separator="/"
            linkClassName="text-lake-blue-600 text-xs font-bold"
            textClassName="text-gray-400 text-xs font-bold"
            seperatorClassName="text-gray-200"
          />
          <section className="bg-white rounded-3xl min-h-96 mt-10 md:flex">
            <section className="lg:w-[350px] flex justify-center py-10 px-5 lg:px-10">
              <Image
                src={expert?.Content?.ImageUrl}
                alt={expert?.Content?.Title}
                width={250}
                height={250}
                className="rounded-full object-cover size-[250px] md:size-[200px] lg:size-[250px]"
              />
            </section>
            <section className="flex-1 px-5 xl:px-14 md:pt-28 pb-14">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="text-center sm:text-right">
                  <h1 className="text-2xl xl:text-5xl">
                    <b>{expert?.Content?.Title}</b>
                  </h1>
                  <p className="text-gray-500 text-lg mt-5">
                    {expert?.Content?.SubTitle}
                  </p>
                </div>
                {/* <Button
                  type="button"
                  variant="contained"
                  color="blue"
                  className="px-5 text-[13px] mt-5 sm:mt-0"
                >
                  دریافت مشاوره
                </Button> */}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-16">
                <div className="bg-gray-100 rounded-[10px] text-center py-7">
                  <b>{expert?.Content?.MedicalNumber}</b>
                  <p className="text-sm text-gray-500 mt-3">کد نظام پزشکی</p>
                </div>
                <div className="bg-gray-100 rounded-[10px] text-center py-7">
                  <b>{expert?.Content?.Experience}</b>
                  <p className="text-sm text-gray-500 mt-3">تجربه حرفه ای</p>
                </div>
                <div className="bg-gray-100 rounded-[10px] text-center py-7">
                  <b>{expert?.Content?.WithUs}</b>
                  <p className="text-sm text-gray-500 mt-3">همراه یک زن</p>
                </div>

                {expert?.Content?.Phone && (
  <div className="bg-gray-100 rounded-[10px] text-center py-7">
    <b>{expert.Content.Phone}</b>
    <p className="text-sm text-gray-500 mt-3">شماره مطب</p>
  </div>
)}

              </div>

              <p className="text-lg font-semibold mt-16">سوابق و مهارت ها</p>

              <div
                className="mt-5"
                dangerouslySetInnerHTML={{ __html: cleanHtmlText }}
              ></div>

             

       
            {expert?.Content?.Instagram && (
              <section className="flex justify-center gap-5 md:shadow-sm shadow-gray-200 md:border border-gray-200 rounded-[12px] md:p-10 mt-24">
                
             
                <LinkCM
                  href={expert?.Content?.Instagram ? expert.Content.Instagram : '#'}
                  aria-label="instagram"
                  variant="contained"
                  color="blue"
                  size="icon"
                  title="instagram"
                  target="_blank"
                >
                  <Instagram color="#fff" size={34} variant="Bold" />
                </LinkCM>
             

              </section> )}

              {expert?.Content?.Address && (
              <section className="flex items-center gap-5 md:shadow-sm shadow-gray-200 md:border border-gray-200 rounded-[12px] md:p-10 mt-10">
                <span className="flex justify-center items-center size-10">
                  <Location color="var(--color-lake-blue-500)" size={24} />
                </span>
                <div>
                  <p className="text-lg font-semibold">آدرس مطب</p>
                  <address className="text-gray-700 mt-2">
                    {expert?.Content?.Address}
                  </address>
                </div>
              </section>
              )}


            </section>
          </section>
        </section>
      </section>
      <RelatedExperts slug={slug} />
    </>
  );
}

export default DoctorInfo;
