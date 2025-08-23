import type { Metadata, Viewport } from "next";
import "./globals.css";
import localFont from "next/font/local";
import ReactQueryProvider from "@/shared/providers/ReactQueryProvider";
import Header from "@/features/header";
import Footer from "@/features/footer";
import FixedAppBar from "@/features/main/components/FixedAppBar";
import { Toaster } from "react-hot-toast";
import { getSeoData } from "@/service/getSeoData";
import JsonLd from "@/shared/components/json-ld";
import NextTopLoader from "nextjs-toploader";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const { Data } = await getSeoData();
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
        "یک زن: راهنمای جامع بهداشت زنان از بلوغ تا بارداری، زایمان و سلامت مادران. اطلاعات کاربردی، نکات مهم و محصولات ویژه برای زنان را اینجا بخوانید و تجربه کنید!",
      keywords:
        "بهداشت زنان, بارداری, زایمان, بلوغ, سلامت زنان, راهنمای زنان, محصولات زنان",
      metadataBase: new URL("https://yeksan.com"),
      alternates: {
        canonical: "/",
        languages: {
          "fa-IR": "/fa-IR",
        },
      },
      robots: {
        index: true,
        follow: true,
      },
      openGraph: {
        title: "یک زن - راهنمای بهداشت زنان",
        description:
          "یک زن: راهنمای جامع بهداشت زنان از بلوغ تا بارداری، زایمان و سلامت مادران",
        siteName: "یک زن",
        type: "website",
        url: "/",
        images: [
          {
            url: "/og-img-large.png",
            width: 1200,
            height: 630,
            alt: "یک زن، راهنمای بهداشت زنان",
          },
          {
            url: "/og-img-small.png",
            width: 600,
            height: 315,
            alt: "یک زن، راهنمای بهداشت زنان",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "یک زن - راهنمای بهداشت زنان",
        description:
          "یک زن، راهنمای جامع بهداشت زنان از بلوغ تا بارداری، زایمان و سلامت مادران",
        images: ["/og-img-large.png"],
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
      },
    };
  }
}

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  interactiveWidget: "resizes-content",
};

const iranSans = localFont({
  src: [
    {
      path: "../assets/fonts/IRANSansXFaNum-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/IRANSansXFaNum-Light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/IRANSansXFaNum-UltraLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/IRANSansXFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/IRANSansXFaNum-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/IRANSansXFaNum-DemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/IRANSansXFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/IRANSansXFaNum-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { Data } = await getSeoData();

  return (
    <html lang={"fa"} dir={"rtl"}>
      <head>
        {/* مثال برای GTM */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T9QMQZHC');
          `,
        }} />
      </head>
      <body className={`${iranSans.className} antialiased`}>
      <noscript>
      <iframe
  src="https://www.googletagmanager.com/ns.html?id=GTM-T9QMQZHC"
  height={0}
  width={0}
  style={{ display: "none", visibility: "hidden" }}
></iframe>
</noscript>
        <ReactQueryProvider>
          <NextTopLoader color={"#ff5a7c"} showSpinner={false} />
          <JsonLd json={Data?.JsonLd} />
          <Header />
          {children}
          <Footer />
          <FixedAppBar />
        </ReactQueryProvider>
        <Toaster
          position="top-center"
          toastOptions={{
            style: { fontFamily: `${iranSans.className}`, direction: "rtl" },
          }}
        />
      </body>
    </html>
  );
}
