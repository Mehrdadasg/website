import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero pt-32" aria-label="بخش اصلی صفحه خانگی">
        <div className="max-w-6xl mx-auto flex gap-20 h-full">
          <div className="w-1/2">
            <h1 className="text-4xl font-bold mb-4">خوش آمدید به یک زن</h1>
            <p className="text-lg mb-6">
              راهنمای جامع بهداشت زنان، بارداری و زایمان.
            </p>
            <Link href="/about" className={buttonVariants({ variant: "default" })}>
              بیشتر بدانید
            </Link>
          </div>
          <div className="w-1/2">
            <Image
              src="/hero-image.png"
              width={500}
              height={500}
              quality={100}
              alt="تصویر راهنمای بهداشت زنان"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </main>
  );
}