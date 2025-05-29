import Card from "@/shared/components/card";
import SectionWrapper from "@/shared/hoc/section-wrapper";
import Image from "next/image";
import React from "react";

const cardItems = [
    {
      imageAlt: "توصیه های سلامتی روزانه",
      title: "توصیه های سلامتی روزانه",
      imageSrc: "/card/c1.png",
      linkHref: "/",
      description: "با رعایت توصیه های روزانه از زندگی سالم لذت ببر",
    },
    {
      imageAlt: "تالار اشتراک تجربه",
      title: "تالار اشتراک تجربه",
      imageSrc: "/card/c2.png",
      linkHref: "/",
      description: "ارتباط با خانم‌های دیگر و دریافت تجربیات مفید",
    },
    {
      imageAlt: "رژیم های غذایی متنوع",
      title: "رژیم های غذایی متنوع",
      imageSrc: "/card/c3.png",
      linkHref: "/",
      description: "رژیم های اختصاصی متنوع برای شرایط متنوع",
    },
    {
      imageAlt: "یوگا و تناسب اندام",
      title: "یوگا و تناسب اندام",
      imageSrc: "/card/c4.png",
      linkHref: "/",
      description: "برنامه‌های ورزشی متناسب با هر دوره از زندگی",
    },
    {
      imageAlt: "تمرینات کگل",
      title: "تمرینات کگل",
      imageSrc: "/card/c5.png",
      linkHref: "/",
      description: "از بی اختیاری ادرار در سن بالا جلوگیری کن",
    },
    {
      imageAlt: "توصیه های سلامتی روزانه",
      title: "توصیه های سلامتی روزانه",
      imageSrc: "/card/c6.png",
      linkHref: "/",
      description: "با رعایت توصیه های روزانه از زندگی سالم لذت ببر",
    },
    {
      imageAlt: "توصیه های سلامتی روزانه",
      title: "توصیه های سلامتی روزانه",
      imageSrc: "/card/c7.png",
      linkHref: "/",
      description: "با رعایت توصیه های روزانه از زندگی سالم لذت ببر",
    },
    {
      imageAlt: "توصیه های سلامتی روزانه",
      title: "توصیه های سلامتی روزانه",
      imageSrc: "/card/c8.png",
      linkHref: "/",
      description: "با رعایت توصیه های روزانه از زندگی سالم لذت ببر",
    },
    {
      imageAlt: "توصیه های سلامتی روزانه",
      title: "توصیه های سلامتی روزانه",
      imageSrc: "/card/c9.png",
      linkHref: "/",
      description: "با رعایت توصیه های روزانه از زندگی سالم لذت ببر",
    },
    {
      imageAlt: "توصیه های سلامتی روزانه",
      title: "توصیه های سلامتی روزانه",
      imageSrc: "/card/c10.png",
      linkHref: "/",
      description: "با رعایت توصیه های روزانه از زندگی سالم لذت ببر",
    },
  ];

function OurFeatures() {

  return (
    <SectionWrapper className="py-24 px-5 md:px-0">
      <h2 className="font-semibold text-2xl md:text-4xl flex gap-1 justify-center">
        آنچه
        <Image
          src="/logo/typo.png"
          width={70}
          height={37}
          alt="آنچه یک زن برای تو داره"
          className="h-6 md:h-[37px] w-auto md:w-[70px]"
        />
        برای تو داره
      </h2>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-10 mt-14">
        {cardItems.map((item, index) => (
          <Card
            key={index}
            imageAlt={item.imageAlt}
            title={item.title}
            imageSrc={item.imageSrc}
            linkHref={item.linkHref}
            description={item.description}
          />
        ))}
      </section>
    </SectionWrapper>
  );
}

export default OurFeatures;