import Card from "@/shared/components/card";
import SectionWrapper from "@/shared/hoc/section-wrapper";
import Image from "next/image";
import React from "react";

function OurFeatures() {
  return (
    <SectionWrapper className="py-24">
      <h2 className="font-semibold text-4xl flex gap-1 justify-center">
        آنچه
        <Image
          src="/logo/typo.png"
          width={70}
          height={37}
          alt="آنچه یک زن برای تو داره"
        />
        برای تو داره
      </h2>
      <section className="grid grid-cols-5 gap-10 mt-14">
        <Card
          imageAlt="توصیه های سلامتی روزانه"
          title="توصیه های سلامتی روزانه"
          imageSrc="/card/c1.png"
          linkHref="/"
          description="با رعایت توصیه های روزانه از زندگی سالم لذت ببر"
        />
        <Card
          imageAlt="تالار اشتراک تجربه"
          title="تالار اشتراک تجربه"
          imageSrc="/card/c2.png"
          linkHref="/"
          description="ارتباط با خانم‌های دیگر  و دریافت تجربیات مفید"
        />
        <Card
          imageAlt="رژیم های غذایی متنوع"
          title="رژیم های غذایی متنوع"
          imageSrc="/card/c3.png"
          linkHref="/"
          description="رژیم های اختصاصی متنوع برای شرایط متنوع"
        />
        <Card
          imageAlt="یوگا و تناسب اندام"
          title="یوگا و تناسب اندام"
          imageSrc="/card/c4.png"
          linkHref="/"
          description="برنامه‌های ورزشی متناسب با هر دوره از زندگی"
        />
        <Card
          imageAlt="تمرینات کگل"
          title="تمرینات کگل"
          imageSrc="/card/c5.png"
          linkHref="/"
          description="از بی اختیاری ادرار در سن بالا جلوگیری کن"
        />
        <Card
          imageAlt="توصیه های سلامتی روزانه"
          title="توصیه های سلامتی روزانه"
          imageSrc="/card/c6.png"
          linkHref="/"
          description="با رعایت توصیه های روزانه از زندگی سالم لذت ببر"
        />
        <Card
          imageAlt="توصیه های سلامتی روزانه"
          title="توصیه های سلامتی روزانه"
          imageSrc="/card/c7.png"
          linkHref="/"
          description="با رعایت توصیه های روزانه از زندگی سالم لذت ببر"
        />
        <Card
          imageAlt="توصیه های سلامتی روزانه"
          title="توصیه های سلامتی روزانه"
          imageSrc="/card/c8.png"
          linkHref="/"
          description="با رعایت توصیه های روزانه از زندگی سالم لذت ببر"
        />
        <Card
          imageAlt="توصیه های سلامتی روزانه"
          title="توصیه های سلامتی روزانه"
          imageSrc="/card/c9.png"
          linkHref="/"
          description="با رعایت توصیه های روزانه از زندگی سالم لذت ببر"
        />
        <Card
          imageAlt="توصیه های سلامتی روزانه"
          title="توصیه های سلامتی روزانه"
          imageSrc="/card/c10.png"
          linkHref="/"
          description="با رعایت توصیه های روزانه از زندگی سالم لذت ببر"
        />
      </section>
    </SectionWrapper>
  );
}

export default OurFeatures;
