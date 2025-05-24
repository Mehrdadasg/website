"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

const fakeCarouselData = [
  { imageSrc: "/carousel/s1.png" },
  { imageSrc: "/carousel/s2.png" },
  { imageSrc: "/carousel/s3.png" },
  { imageSrc: "/carousel/s1.png" },
  { imageSrc: "/carousel/s2.png" },
  { imageSrc: "/carousel/s3.png" },
  { imageSrc: "/carousel/s1.png" },
  { imageSrc: "/carousel/s2.png" },
  { imageSrc: "/carousel/s3.png" },
  { imageSrc: "/carousel/s1.png" },
  { imageSrc: "/carousel/s2.png" },
  { imageSrc: "/carousel/s3.png" },
];

export function CarouselDemo() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [currentSnap, setCurrentSnap] = React.useState(0);
  const [snapCount, setSnapCount] = React.useState(0);
  const slidesPerGroup = 4;

  React.useEffect(() => {
    if (!api) return;

    setSnapCount(Math.ceil(fakeCarouselData.length / slidesPerGroup));
    console.log("Total Snap Count:", Math.ceil(fakeCarouselData.length / slidesPerGroup));
    console.log("Scroll Snap List:", api.scrollSnapList());
  }, [api]);

  const scrollTo = React.useCallback(
    (index: number) => {
      if (api) {
        console.log("Before Scroll - Dot Index:", index, "Current Snap:", currentSnap);
        setCurrentSnap(index);
        const slideIndex = index * slidesPerGroup;
        console.log("Scrolling to Slide Index:", slideIndex, "Can Scroll Next:", api.canScrollNext());
        api.scrollTo(slideIndex);
        console.log("After Scroll - Current Snap:", currentSnap);
      }
    },
    [api, currentSnap]
  );

  const handlePrev = React.useCallback(() => {
    if (api) {
      const currentIndex = api.selectedScrollSnap();
      let newGroupIndex = Math.floor(currentIndex / slidesPerGroup) + 1;
      if (newGroupIndex >= snapCount) newGroupIndex = 0;
      const newSlideIndex = newGroupIndex * slidesPerGroup;
      console.log("Previous - Scrolling to Slide Index:", newSlideIndex, "New Group Index:", newGroupIndex);
      setCurrentSnap(newGroupIndex);
      api.scrollTo(newSlideIndex);
    }
  }, [api, snapCount]);

  const handleNext = React.useCallback(() => {
    if (api) {
      const currentIndex = api.selectedScrollSnap();
      let newGroupIndex = Math.floor(currentIndex / slidesPerGroup) - 1;
      if (newGroupIndex < 0) newGroupIndex = snapCount - 1;
      const newSlideIndex = newGroupIndex * slidesPerGroup;
      console.log("Next - Scrolling to Slide Index:", newSlideIndex, "New Group Index:", newGroupIndex);
      setCurrentSnap(newGroupIndex);
      api.scrollTo(newSlideIndex);
    }
  }, [api, snapCount]);

  return (
    <section className="w-full max-w-7xl mx-auto py-24">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1,
          direction: "rtl",
        }}
        className="w-full"
      >
        <CarouselContent>
          {fakeCarouselData.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/4 min-w-[25%]"
            >
              <div>
                <Image
                  src={item.imageSrc}
                  width={500}
                  height={1000}
                  alt={`اسلاید ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious onClick={handlePrev} className="bg-pink-500" />
        <CarouselNext onClick={handleNext} className="bg-pink-500" />
      </Carousel>

      <div className="flex justify-center gap-1.5 mt-10">
        {Array.from({ length: snapCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-[10px] h-[10px] cursor-pointer rounded-full transition-colors duration-200 ${
              currentSnap === index ? "bg-pink-500" : "bg-gray-300"
            }`}
            aria-label={`رفتن به صفحه ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}