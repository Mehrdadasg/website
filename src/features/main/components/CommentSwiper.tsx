"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import "swiper/css";
import "swiper/css/pagination";

type TestimonialsItem = {
  ImageUrl: string;
  ImageAlt: string;
  Id:number
};

type TestimonialsType={
  testimonialsData:TestimonialsItem[]
}

export default function CommentSwiper({testimonialsData}:TestimonialsType) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperRef | null>(null);

  const handleActiveIndex = (index: number) => {
    setActiveIndex(index);
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
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          420: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          650: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="w-full !py-16 relative"
        dir="rtl"
        initialSlide={activeIndex}
        ref={swiperRef}
        onSwiper={(swiper) => {
          swiperRef.current = { swiper } as SwiperRef;
        }}
        onSlideChange={({ activeIndex }) => handleActiveIndex(activeIndex)}
      >
        {testimonialsData?.map((swiper) => (
          <SwiperSlide key={swiper?.Id}>
            <Image
              src={swiper?.ImageUrl}
              alt={swiper?.ImageAlt}
              width={420}
              height={932}
              className="w-full h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        type="button"
        className={`absolute justify-center items-center left-10 2xl:left-0 size-[52px] rounded-full top-1/2 z-10 hidden -translate-y-1/2 bg-pink-500 p-0 text-white hover:bg-pink-600 lg:flex ${
          activeIndex >= testimonialsData?.length - 1
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
        className={`absolute justify-center items-center rounded-full right-10 2xl:right-0 size-[52px] top-1/2 z-10 hidden -translate-y-1/2 bg-pink-500 p-0 text-white hover:bg-pink-600 lg:flex ${
          activeIndex === 0 ? "opacity-50 pointer-events-none" : ""
        }`}
        onClick={handlePrevSlide}
        aria-label="اسلاید قبلی"
      >
        <ArrowRight2 size={25} color="#fff" />
      </button>
    </>
  );
}
