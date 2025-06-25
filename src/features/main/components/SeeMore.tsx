import { ssrSeeMore } from '@/features/apiHandlers/serverHandlers/ssrSeeMore';
import { QueryClient } from '@tanstack/react-query'
import Image from 'next/image';
import React from 'react'
import AppSwiper from './AppSwiper';

async function SeeMore() {
    const queryClient=new QueryClient();
    const {seeMoreData} =await ssrSeeMore(queryClient);
  return (
    <section className="mt-32 mb-24 px-5 lg:px-10 xl:px-0 overflow-hidden">
      <div className="sm:flex bg-gray-100 rounded-[12px] md:rounded-4xl">
        <section className="sm:w-2/5 text-center md:pr-16 flex flex-col justify-center pt-10">
          <p className="text-[20px] md:text-2xl lg:text-4xl text-center md:text-right font-bold md:font-semibold text-pink-500 md:-mt-5">
            {seeMoreData?.Title}
          </p>
          <h3 className="font-normal mt-5 md:mt-8 text-[13px] md:text-base lg:text-lg leading-8 text-center lg:text-right">
            به دیدن بخش هایی از <mark className="bg-transparent">یک زن</mark>{" "}
            دعوتت می کنیم
          </h3>
        </section>
        <section className="sm:w-3/5 flex justify-center bg-pattern py-10 md:py-16 relative">
          <Image
            src="/pattern.png"
            width={410}
            height={410}
            className="absolute top-0 left-0 md:left-[5%] lg:left-[23%] z-[1]"
            alt="pattern image"
          />
          <section className="relative w-[380px] px-[50px] z-10">
            <AppSwiper swiperData={seeMoreData?.Items} />
            </section>
        </section>
      </div>
    </section>
  )
}

export default SeeMore