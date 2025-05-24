import Card from "@/shared/components/card";
import SectionWrapper from "@/shared/hoc/section-wrapper";
import Image from "next/image";
import React from "react";

function PregnancyFeatures() {
  return (
    <SectionWrapper className="flex gap-[13%] py-24">
      <section className="w-[27%]">
        <h2 className="font-bold text-2xl">
          در <mark className="text-pink-600 bg-white">دوران بارداری</mark> برات
          چی داریم؟
        </h2>
        <Image
          src="/illustration/pregnancy.png"
          className="w-5/6 h-auto my-10"
          width={1000}
          height={1500}
          alt="در دوران قاعدگی برات چی داریم؟"
        />
        <p className="text-gray-500">
          با تقویم قاعدگی یک زن حواسمون به پریود و PMS و تخمک گذاریت هست و کلی
          اطلاعات در مورد تغییراتش بهت میدیم
        </p>
      </section>
      <section className="w-[60%] grid grid-cols-3 gap-10">
        <Card
          imageAlt="تقویم قاعدگی"
          title="تقویم قاعدگی"
          imageSrc="/card/p1.png"
          linkHref="/"
          description="پیگیری دقیق چرخه پریود، تخمک‌گذاری و PMS"
        />
        <Card
          imageAlt="محاسبه روز تخمک گذاری"
          title="محاسبه روز تخمک گذاری"
          imageSrc="/card/p2.png"
          linkHref="/"
          description="روز تخمک گذاری خودت رو محاسبه کن"
        />
        <Card
          imageAlt="زمان اقدام به بارداری "
          title="زمان اقدام به بارداری "
          imageSrc="/card/p3.png"
          linkHref="/"
          description="بهترین زمان اقدام به بارداری خودت رو بدون"
        />
        <Card
          imageAlt="جلوگیری از بارداری"
          title="جلوگیری از بارداری"
          imageSrc="/card/p4.png"
          linkHref="/"
          description="بهترین روش جلوگیری از بارداری مناسبت رو بشناس"
        />
        <Card
          imageAlt="تست بارداری"
          title="تست بارداری"
          imageSrc="/card/p5.png"
          linkHref="/"
          description="از روی علائم بهت میگیم که بدونی بارداری با نه"
        />
        <Card
          imageAlt="تعیین جنسیت جنین"
          title="تعیین جنسیت جنین"
          imageSrc="/card/p6.png"
          linkHref="/"
          description="با توجه به زمان اقدام، بدون که جنسیت کوچولوت چیه"
        />
        <Card
          imageAlt="تقویم قاعدگی"
          title="تقویم قاعدگی"
          imageSrc="/card/p1.png"
          linkHref="/"
          description="پیگیری دقیق چرخه پریود، تخمک‌گذاری و PMS"
        />
        <Card
          imageAlt="محاسبه روز تخمک گذاری"
          title="محاسبه روز تخمک گذاری"
          imageSrc="/card/p2.png"
          linkHref="/"
          description="روز تخمک گذاری خودت رو محاسبه کن"
        />
        <Card
          imageAlt="زمان اقدام به بارداری "
          title="زمان اقدام به بارداری "
          imageSrc="/card/p3.png"
          linkHref="/"
          description="بهترین زمان اقدام به بارداری خودت رو بدون"
        />
        <Card
          imageAlt="جلوگیری از بارداری"
          title="جلوگیری از بارداری"
          imageSrc="/card/p4.png"
          linkHref="/"
          description="بهترین روش جلوگیری از بارداری مناسبت رو بشناس"
        />
        <Card
          imageAlt="تست بارداری"
          title="تست بارداری"
          imageSrc="/card/p5.png"
          linkHref="/"
          description="از روی علائم بهت میگیم که بدونی بارداری با نه"
        />
        <Card
          imageAlt="تعیین جنسیت جنین"
          title="تعیین جنسیت جنین"
          imageSrc="/card/p6.png"
          linkHref="/"
          description="با توجه به زمان اقدام، بدون که جنسیت کوچولوت چیه"
        />
      </section>
    </SectionWrapper>
  );
}

export default PregnancyFeatures;
