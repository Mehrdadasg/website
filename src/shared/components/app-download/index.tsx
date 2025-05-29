import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function AppDownload() {
  return (
    <>
      <section className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <Button asChild className="w-full rounded-[50px] p-0">
          <Link href="">
            <Image
              src="/googlePlay.png"
              className="rounded-[50px] w-full h-auto"
              quality={100}
              width={340}
              height={80}
              alt="دانلود از گوگل پلی"
            />
          </Link>
        </Button>
        <Button asChild className="w-full rounded-[50px] p-0">
          <Link href="">
            <Image
              src="/bazar.png"
              className="rounded-[50px] w-full h-auto"
              quality={100}
              width={340}
              height={80}
              alt="دانلود از بازار"
            />
          </Link>
        </Button>
        <Button asChild className="w-full rounded-[50px] p-0">
          <Link href="">
            <Image
              src="/maiket.png"
              className="rounded-[50px] w-full h-auto"
              quality={100}
              width={340}
              height={80}
              alt="دانلود از مایکت"
            />
          </Link>
        </Button>
        <Button asChild className="md:hidden w-full rounded-[50px] p-0">
          <Link href="">
            <Image
              src="/appStore.png"
              className="rounded-[50px] w-full h-auto"
              quality={100}
              width={520}
              height={80}
              alt="دانلود از اپ استور"
            />
          </Link>
        </Button>
      </section>
      <section className="md:grid grid-cols-2 gap-3 mt-4">
        <Button asChild className="w-full rounded-[50px] p-0">
          <Link href="">
            <Image
              src="/android.png"
              className="rounded-[50px] w-full h-auto"
              quality={100}
              width={520}
              height={80}
              alt="دانلود مستقیم اندروید"
            />
          </Link>
        </Button>
        <Button asChild className="hidden md:flex w-full rounded-[50px] p-0">
          <Link href="">
            <Image
              src="/appStore.png"
              className="rounded-[50px] w-full h-auto"
              quality={100}
              width={520}
              height={80}
              alt="دانلود از اپ استور"
            />
          </Link>
        </Button>
      </section>
    </>
  );
}

export default AppDownload;
