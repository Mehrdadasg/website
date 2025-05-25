"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import "swiper/css";
import "swiper/css/pagination";
import SectionWrapper from "@/shared/hoc/section-wrapper";

const fakeCarouselData = [
  { imageSrc: "/carousel/s1.png", text: "چرخه قاعدگی" },
  { imageSrc: "/carousel/s2.png", text: "چرخه قاعدگی" },
  { imageSrc: "/carousel/s3.png", text: "slide 3" },
  { imageSrc: "/carousel/s1.png", text: "slide 4" },
  { imageSrc: "/carousel/s2.png", text: "slide 5" },
  { imageSrc: "/carousel/s3.png", text: "slide 6" },
  { imageSrc: "/carousel/s1.png", text: "slide 7" },
  { imageSrc: "/carousel/s2.png", text: "slide 8" },
  { imageSrc: "/carousel/s3.png", text: "slide 9" },
  { imageSrc: "/carousel/s1.png", text: "slide 10" },
  { imageSrc: "/carousel/s2.png", text: "slide 11" },
  { imageSrc: "/carousel/s3.png", text: "slide 12" },
];

export default function AppSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperRef | null>(null);

  const handleActiveIndex = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handleNextSlide = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
    } else {
      console.log("Error: swiperRef or swiper is not available");
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
    } else {
      console.log("Error: swiperRef or swiper is not available");
    }
  };

  return (
    <SectionWrapper className="flex bg-gray-100 rounded-4xl mt-32 mb-24">
      <section className="w-2/5 text-center pr-16 flex flex-col justify-center">
        <p className="text-4xl font-semibold text-pink-500 -mt-5">
          با ما بیشتر آشـــنا شوید
        </p>
        <h3 className="text-lg font-normal mt-8">
          به دیدن بخش هایی از <mark className="bg-transparent">یک زن</mark>{" "}
          دعوتت می کنیم
        </h3>
      </section>
      <section className="w-3/5 flex justify-center bg-pattern py-16">
        <section className="relative w-[380px] px-[50px]">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="relative !pb-16"
            dir="rtl"
            initialSlide={activeIndex}
            ref={swiperRef}
            onSwiper={(swiper) => {
              swiperRef.current = { swiper } as SwiperRef;
            }}
            onSlideChange={handleActiveIndex}
          >
            {fakeCarouselData?.map((swiper, index) => (
              <SwiperSlide key={index}>
                <div className="overlay">
                  <Image
                    src={swiper?.imageSrc}
                    alt={`نظرات شما ${index + 1}`}
                    width={276}
                    height={475}
                    className="w-[276px] h-[475px] object-cover rounded-tr-[10px] rounded-tl-[10px]"
                  />
                </div>
                <h2 className="mt-7 text-center font-semibold text-lg">
                  <mark className="bg-transparent">{swiper?.text}</mark>
                </h2>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            type="button"
            className={`absolute justify-center items-center -left-[30px] size-[52px] rounded-full top-1/2 z-10 hidden -translate-y-1/2 bg-pink-500 p-0 text-white hover:bg-pink-600 lg:flex ${
              activeIndex >= fakeCarouselData.length - 1
                ? "opacity-50 pointer-events-none"
                : ""
            }`}
            onClick={handleNextSlide}
            aria-label="اسلاید بعدی"
          >
            <ArrowLeft2 size={25} color="#fff" />
          </button>
          <button
            type="button"
            className={`absolute justify-center items-center rounded-full -right-[30px] size-[52px] top-1/2 z-10 hidden -translate-y-1/2 bg-pink-500 p-0 text-white hover:bg-pink-600 lg:flex ${
              activeIndex === 0 ? "opacity-50 pointer-events-none" : ""
            }`}
            onClick={handlePrevSlide}
            aria-label="اسلاید قبلی"
          >
            <ArrowRight2 size={25} color="#fff" />
          </button>
        </section>
      </section>
    </SectionWrapper>
  );
}
