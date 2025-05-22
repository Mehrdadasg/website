"use client";
import { Button } from "@/components/ui/button";
import { Home } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ErrorPage() {
  return (
    <main className="h-screen max-w-5xl mx-auto flex gap-20 pt-52">
      <section className="w-[55%]">
        <h2 className="rounded-[50px] bg-orange-50 text-orange-500 w-max py-2 px-4 text-lg">
          خطای 500
        </h2>
        <p className="text-5xl font-bold leading-20 my-5">
          چیزی که دنبالش بودی، اینجا نیست!
        </p>
        <p className="font-normal text-gray-500 text-lg">
          احتمالا جاش عوض شده ولی اشکال نداره کلی چیزای جذاب و خوندنی دیگه برات
          داریم.
        </p>
        <div className="flex gap-5 mt-10">
          <Button
            asChild
            type="button"
            variant="default"
            className="bg-pink-500 p-5 rounded-[50px] text-[13px]"
          >
            <Link href="">
              <Home size={20} color="#fff" />
              صفحه اصلی
            </Link>
          </Button>
        </div>
      </section>
      <section className="w-[40%]">
        <Image
          src="/illustration/404.png"
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
