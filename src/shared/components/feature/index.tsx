import Card from "@/shared/components/card";
import SectionWrapper from "@/shared/hoc/section-wrapper";
import Image from "next/image";
import React from "react";

interface CardItem {
  imageAlt: string;
  title: string;
  imageSrc: string;
  linkHref: string;
  description: string;
}

interface FeatureProps {
  title: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  description: string;
  cardItems: CardItem[];
  mobileTwoRows?: boolean;
}

function Feature({
  title,
  imageSrc,
  imageAlt,
  description,
  cardItems,
  mobileTwoRows = false,
}: FeatureProps) {
  const firstRowCards = mobileTwoRows
    ? cardItems.slice(0, Math.ceil(cardItems.length / 2))
    : cardItems;
  const secondRowCards = mobileTwoRows
    ? cardItems.slice(Math.ceil(cardItems.length / 2))
    : [];

  return (
    <SectionWrapper className="md:flex gap-[13%] py-10 md:py-24 px-5 md:px-0">
      <section className="md:w-[27%] flex md:block flex-col items-center md:sticky top-32 h-max">
        <h2 className="font-bold order-2 md:order-1 text-[22px] md:text-[32px] mb-3 text-center md:text-right">
          {title}
        </h2>
        <div className="flex justify-center">
          <Image
            src={imageSrc}
            className="w-[156px] md:w-auto h-auto max-h-[360px] mb-10 md:my-10 order-1 md:order-2"
            width={1000}
            height={1500}
            alt={imageAlt}
          />
        </div>
        <p className="text-gray-500 order-3 text-[13px] md:text-base text-center md:text-right">
          {description}
        </p>
      </section>
      <section className="block md:hidden md:w-[60%] overflow-x-auto md:overflow-hidden mt-8">
        {mobileTwoRows ? (
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 overflow-x-auto pb-5">
              {firstRowCards.map((item, index) => (
                <Card
                  key={`first-${index}`}
                  imageAlt={item.imageAlt}
                  title={item.title}
                  imageSrc={item.imageSrc}
                  linkHref={item.linkHref}
                  description={item.description}
                  cardClass="w-[140px] flex-shrink-0"
                />
              ))}
            </div>
            {secondRowCards.length > 0 && (
              <div className="flex gap-5 overflow-x-auto mt-5 pb-5">
                {secondRowCards.map((item, index) => (
                  <Card
                    key={`second-${index}`}
                    imageAlt={item.imageAlt}
                    title={item.title}
                    imageSrc={item.imageSrc}
                    linkHref={item.linkHref}
                    description={item.description}
                    cardClass="w-[140px] flex-shrink-0"
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="flex md:grid grid-cols-3 gap-5 md:gap-10">
            {cardItems.map((item, index) => (
              <Card
                key={index}
                imageAlt={item.imageAlt}
                title={item.title}
                imageSrc={item.imageSrc}
                linkHref={item.linkHref}
                description={item.description}
                cardClass="w-[140px] md:w-full flex-shrink-0"
              />
            ))}
          </div>
        )}
      </section>
      <section className="w-[60%] hidden md:block">
        <div className="hidden md:grid grid-cols-3 gap-5 md:gap-10">
          {cardItems.map((item, index) => (
            <Card
              key={index}
              imageAlt={item.imageAlt}
              title={item.title}
              imageSrc={item.imageSrc}
              linkHref={item.linkHref}
              description={item.description}
              cardClass="w-[140px] md:w-full flex-shrink-0"
            />
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}

export default Feature;
