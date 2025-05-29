import Feature from "@/shared/components/feature";
import React from "react";

const cardItems = [
  {
    imageAlt: "تقویم قاعدگی",
    title: "تقویم قاعدگی",
    imageSrc: "/card/p1.png",
    linkHref: "/",
    description: "پیگیری دقیق چرخه پریود، تخمک‌گذاری و PMS",
  },
  {
    imageAlt: "محاسبه روز تخمک گذاری",
    title: "محاسبه روز تخمک گذاری",
    imageSrc: "/card/p2.png",
    linkHref: "/",
    description: "روز تخمک گذاری خودت رو محاسبه کن",
  },
  {
    imageAlt: "زمان اقدام به بارداری",
    title: "زمان اقدام به بارداری",
    imageSrc: "/card/p3.png",
    linkHref: "/",
    description: "بهترین زمان اقدام به بارداری خودت رو بدون",
  },
  {
    imageAlt: "جلوگیری از بارداری",
    title: "جلوگیری از بارداری",
    imageSrc: "/card/p4.png",
    linkHref: "/",
    description: "بهترین روش جلوگیری از بارداری مناسبت رو بشناس",
  },
  {
    imageAlt: "تست بارداری",
    title: "تست بارداری",
    imageSrc: "/card/p5.png",
    linkHref: "/",
    description: "از روی علائم بهت میگیم که بدونی بارداری با نه",
  },
  {
    imageAlt: "تعیین جنسیت جنین",
    title: "تعیین جنسیت جنین",
    imageSrc: "/card/p6.png",
    linkHref: "/",
    description: "با توجه به زمان اقدام، بدون که جنسیت کوچولوت چیه",
  },
  {
    imageAlt: "تقویم قاعدگی",
    title: "تقویم قاعدگی",
    imageSrc: "/card/p1.png",
    linkHref: "/",
    description: "پیگیری دقیق چرخه پریود، تخمک‌گذاری و PMS",
  },
  {
    imageAlt: "محاسبه روز تخمک گذاری",
    title: "محاسبه روز تخمک گذاری",
    imageSrc: "/card/p2.png",
    linkHref: "/",
    description: "روز تخمک گذاری خودت رو محاسبه کن",
  },
  {
    imageAlt: "زمان اقدام به بارداری",
    title: "زمان اقدام به بارداری",
    imageSrc: "/card/p3.png",
    linkHref: "/",
    description: "بهترین زمان اقدام به بارداری خودت رو بدون",
  },
  {
    imageAlt: "جلوگیری از بارداری",
    title: "جلوگیری از بارداری",
    imageSrc: "/card/p4.png",
    linkHref: "/",
    description: "بهترین روش جلوگیری از بارداری مناسبت رو بشناس",
  },
  {
    imageAlt: "تست بارداری",
    title: "تست بارداری",
    imageSrc: "/card/p5.png",
    linkHref: "/",
    description: "از روی علائم بهت میگیم که بدونی بارداری با نه",
  },
  {
    imageAlt: "تعیین جنسیت جنین",
    title: "تعیین جنسیت جنین",
    imageSrc: "/card/p6.png",
    linkHref: "/",
    description: "با توجه به زمان اقدام، بدون که جنسیت کوچولوت چیه",
  },
];

function PeriodFeatures() {
  return (
    <Feature
      cardItems={cardItems}
      title={
        <>
            در{" "}
            <mark className="text-pink-600 bg-white">دوران قـــاعدگـــی</mark>{" "}
            برات چی داریم؟
        </>
      }
      description="چطور بین استراحت و مراقبت از نی‌نی تعادل برقرار کنی؟ اینجاییم که کمکت کنیم!"
      imageAlt="در دوران شیردهی برات چی داریم؟"
      imageSrc="/illustration/period.png"
    />
  );
}

export default PeriodFeatures;
