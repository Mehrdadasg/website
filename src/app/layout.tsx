import type { Metadata, Viewport } from "next";
import "./globals.css";
import localFont from "next/font/local";
import ReactQueryProvider from "@/shared/providers/ReactQueryProvider";
import Header from "@/shared/components/header";

export const metadata: Metadata = {
  title: {
    default: "یک زن - راهنمای بهداشت زنان، بارداری و زایمان",
    template: "%s | یک زن",
  },
  description:
    "یک زن: راهنمای جامع بهداشت زنان از بلوغ تا بارداری و زایمان. اطلاعات کاربردی برای سلامت زنان را اینجا بخوانید!",
  keywords: "بهداشت زنان, بارداری, زایمان, بلوغ, سلامت زنان, راهنمای زنان",
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
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "یک زن - راهنمای بهداشت زنان",
    description:
      "یک زن: راهنمای جامع بهداشت زنان از بلوغ تا بارداری و زایمان",
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
      "یک زن، راهنمای جامع بهداشت زنان از بلوغ تا بارداری و زایمان",
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
  /**
   * Leveraging 'resizes-content' provides the advantage of adjusting content
   * layout for keyboard openings, ensuring a seamless mobile user experience.
   */
  interactiveWidget: "resizes-content",
};

const iranSans = localFont({
  src: [
    {
      path: "../assets/fonts/IRANSansX-Thin.woff2", // font-thin
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/IRANSansX-Regular.woff2", // font-normal
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/IRANSansX-Medium.woff2", // font-medium
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/IRANSansX-DemiBold.woff2", // font-semibold
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/IRANSansX-Bold.woff2", // font-bold
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/IRANSansX-Black.woff2", // font-black
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
    <html lang={"fa"} dir={"rtl"} >
      <body
        className={`${iranSans.className} antialiased`}
      >
        <ReactQueryProvider>
          <Header/>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
