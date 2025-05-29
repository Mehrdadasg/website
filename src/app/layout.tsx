import type { Metadata, Viewport } from "next";
import "./globals.css";
import localFont from "next/font/local";
import ReactQueryProvider from "@/shared/providers/ReactQueryProvider";
import Header from "@/features/header";
import Footer from "@/features/footer";
import FixedAppBar from "@/features/main/components/FixedAppBar";

export const metadata: Metadata = {
  title: {
    default: "یک زن - راهنمای بهداشت زنان، بارداری و زایمان",
    template: "%s | یک زن",
  },
  description:
    "یک زن: راهنمای جامع بهداشت زنان از بلوغ تا بارداری، زایمان و سلامت مادران. اطلاعات کاربردی، نکات مهم و محصولات ویژه برای زنان را اینجا بخوانید و تجربه کنید!",
  keywords: "بهداشت زنان, بارداری, زایمان, بلوغ, سلامت زنان, راهنمای زنان, محصولات زنان",
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
      "name": "یک زن",
      "url": "https://yeksan.com",
      "description": "یک زن، راهنمای جامع بهداشت زنان از بلوغ تا بارداری و زایمان",
      "inLanguage": "fa-IR",
      "publisher": {
        "@type": "Organization",
        "name": "یک زن",
        "logo": {
          "@type": "ImageObject",
          "url": "https://yeksan.com/logo.png",
        },
      },
    }),
  },
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"fa"} dir={"rtl"}>
      <body className={`${iranSans.className} antialiased`}>
        <ReactQueryProvider>
          <Header />
          {children}
          <Footer/>
          <FixedAppBar/>
        </ReactQueryProvider>
      </body>
    </html>
  );
}