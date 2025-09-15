import { ssrContact } from "@/features/apiHandlers/serverHandlers/ssrContact";
import ContactForm from "@/features/contact/ContactForm";
import FAQ from "@/features/main/components/FAQ";
import { getPageSeo } from "@/service/getPageSeo";
import Breadcrumb from "@/shared/components/breadcrumb";
import JsonLd from "@/shared/components/json-ld";
import { QueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

export async function generateMetadata() {
  try {
    const { Data } = await getPageSeo("contact");
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

async function Contact() {
  const queryClient = new QueryClient();
  const { contactData } = await ssrContact(queryClient);
  const { Data } = await getPageSeo("contact");

  const breadcrumbItems = [
    { label: "خانه", href: "/" },
    { label: "تماس با ما" },
  ];

  return (
    <>
      <JsonLd json={Data?.JsonLd} />
      <section className="pb-24">
        <section className="contact h-max md:h-[750px] lg:h-[775px] 2xl:h-[800px] pt-36 sm:pt-44 md:pt-52 lg:pt-40 xl:pt-44 -mt-[80px] md:mt-0">
          <section className="px-3 sm:px-5 lg:px-10 xl:px-0 max-w-[1200px] mx-auto h-full">
            <section className=" md:flex lg:gap-5 xl:gap-10 h-full">
              <section className="md:w-1/2 pt-8 md:pt-16">
                <Breadcrumb
                  items={breadcrumbItems}
                  separator="/"
                  linkClassName="text-lake-blue-600 text-xs font-bold"
                  textClassName="text-gray-400 text-xs font-bold"
                  seperatorClassName="text-gray-200"
                />
                <p className="md:text-right mt-5 sm:mt-10 mb-8 text-[38px] md:text-5xl">
                  <b>{contactData?.Content?.Title}</b>
                </p>
                <p className="text-lg text-gray-600">
                  {contactData?.Content?.Text}
                </p>
              </section>
              <section className="md:w-1/2 mt-5 md:mt-0 flex justify-center items-start xl:pr-10">
                <Image
                  src={
                    contactData?.Content?.ImageUrl ??
                    "/illustration/contact.png"
                  }
                  width={433}
                  height={433}
                  quality={100}
                  alt=""
                  priority
                />
              </section>
            </section>
          </section>
        </section>
        {/* <section className="flex gap-5 -mt-28 relative z-20 max-w-[1200px] mx-auto">
          <section className="w-1/2">
            <ContactForm />
          </section>
          <section className="w-1/2">
            <section className="md:shadow-sm shadow-gray-200 md:border border-gray-200 bg-white rounded-[12px] px-5 md:px-10 md:py-16 max-w-[40rem] md:max-w-4xl mx-auto ">
              <p className="text-2xl md:text-[32px]">
                <b>سایر پل های ارتباطی</b>
              </p>
              <p className="text-gray-500 text-lg mt-5">
                از طریق پل های ارتباطی زیر هم میتونی با ما در ارتباط باشی.
              </p>
            </section>
          </section>
        </section> */}
        <FAQ />
        <ContactForm />
      </section>
    </>
  );
}

export default Contact;
