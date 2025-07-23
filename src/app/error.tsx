"use client";
import LinkCM from "@/shared/components/link";
import { Home } from "iconsax-react";
import Image from "next/image";
import React from "react";

function ErrorPage() {
  return (
    <main className="md:h-screen max-w-5xl mx-auto flex flex-wrap md:flex-nowrap px-5 gap-20 pt-36 md:pt-44 lg:pt-52">
      <section className="w-full md:w-[55%] text-center md:text-right">
        <h2 className="rounded-[50px] bg-pink-50 text-pink-500 w-max mx-auto md:mx-0 py-2 px-4 text-lg">
          خطای 500
        </h2>
        <p className="text-[22px] md:text-2xl lg:text-5xl font-bold lg:leading-20 my-5">
          در حال ارتقا و تعمیرات ...
        </p>
        <p className="font-normal text-gray-500 text-[13px] md:text-base lg:text-lg leading-8">
           <br />یه چیزی اون پشت درست کار نمی کرد، داریم درستش می کنیم!
لطفا چند دقیقه دیگه سر بزن.
        </p>
        <div className="flex justify-center md:justify-start gap-5 mt-10">

            <LinkCM href="/" title="صفحه اصلی"
            >
              <Home size={20} color="#fff" />
              صفحه اصلی
            </LinkCM>
        </div>
      </section>
      <section className="mx-auto md:w-[40%] pb-20 md:pb-0">
        <Image
          src="/illustration/500.png"
          className="w-full h-auto"
          width={900}
          height={900}
          alt="404"
        />
      </section>
    </main>
  );
}

export default ErrorPage;
