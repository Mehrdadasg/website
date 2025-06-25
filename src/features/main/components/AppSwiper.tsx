"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import "swiper/css";
import "swiper/css/pagination";

type SwiperItemsType = {
  Id:number;
  Title: string;
  ImageUrl: string;
  ImageAlt: string;
};

type SwiperData = {
  swiperData:SwiperItemsType[]
}

export default function AppSwiper({ swiperData }:SwiperData) {
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
        modules={[Pagination]}
        className="relative !pb-16"
        dir="rtl"
        initialSlide={activeIndex}
        ref={swiperRef}
        onSwiper={(swiper) => {
          swiperRef.current = { swiper } as SwiperRef;
        }}
        onSlideChange={({ activeIndex }) => handleActiveIndex(activeIndex)}
      >
        {swiperData?.map((swiper) => (
          <SwiperSlide key={swiper?.Id}>
            <div className="overlay">
              <Image
                src={swiper?.ImageUrl}
                alt={swiper?.ImageAlt}
                width={276}
                height={477}
                className="w-[276px] h-[475px] object-cover rounded-tr-[10px] rounded-tl-[10px]"
              />
            </div>
            <h2 className="mt-7 text-center font-semibold text-lg">
              <mark className="bg-transparent">{swiper?.Title}</mark>
            </h2>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        type="button"
        className={`absolute justify-center items-center -left-[30px] size-[52px] rounded-full top-1/2 z-10 hidden -translate-y-1/2 bg-pink-500 p-0 text-white hover:bg-pink-600 lg:flex ${
          activeIndex >= swiperData.length - 1
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
    </>
  );
}
