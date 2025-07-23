import LinkCM from "@/shared/components/link";
import { Book1 } from "iconsax-react";
import Image from "next/image";

function NotFoundPage(): React.ReactElement {
  return (
    <main className="md:h-screen max-w-5xl mx-auto flex flex-wrap md:flex-nowrap px-5 gap-20 pt-36 md:pt-44 lg:pt-52">
      <section className="w-full md:w-[55%] text-center md:text-right">
        <h2 className="rounded-[50px] bg-orange-50 text-orange-500 w-max mx-auto md:mx-0 py-2 px-4 text-lg">
          خطای 404
        </h2>
        <p className="text-[22px] md:text-2xl lg:text-5xl font-bold lg:leading-20 my-5">
          چیزی که دنبالش بودی، <br className="hidden md:block" /> اینجا نیست!
        </p>
        <p className="font-normal text-gray-500 text-[13px] md:text-base lg:text-lg leading-8">
          احتمالا جاش عوض شده ولی اشکال نداره کلی چیزای جذاب و خوندنی دیگه برات
          داریم.
        </p>
        <div className="flex justify-center md:justify-start gap-5 mt-10">
          <LinkCM href="/blog" className="!text-[13px] font-bold" title="مجله">
            <Book1 size={20} color="#fff" />
            بریم مجله
          </LinkCM>

          <LinkCM href="/" title="صفحه اصلی" variant="outline" color="default" className="!text-[13px] font-bold">صفحه اصلی</LinkCM>
        </div>
      </section>
      <section className="mx-auto md:w-[40%] pb-20 md:pb-0">
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

export default NotFoundPage;
