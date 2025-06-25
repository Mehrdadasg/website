import Image from "next/image";
import React from "react";
import CommentSwiper from "./CommentSwiper";
import { QueryClient } from "@tanstack/react-query";
import { ssrTestimonials } from "@/features/apiHandlers/serverHandlers/ssrTestimonials";

async function Testimonials() {
    const queryClient = new QueryClient();
    const {testimonialsData} = await ssrTestimonials(queryClient);
  return (
    <section className="px-5 sm:px-5 lg:px-28 2xl:px-20 pt-5 pb-10 relative overflow-hidden">
      <h2 className="font-semibold text-2xl md:text-4xl flex gap-1 justify-center">
        محبتـــهای شما به
        <Image
          src="/logo/typo.png"
          width={70}
          height={37}
          alt="آنچه یک زن برای تو داره"
          className="h-6 md:h-[37px] w-auto md:w-[70px]"
        />
      </h2>
      <CommentSwiper testimonialsData={testimonialsData?.Items} />
    </section>
  );
}

export default Testimonials;
