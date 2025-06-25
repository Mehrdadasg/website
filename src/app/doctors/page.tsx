import Breadcrumb from "@/shared/components/breadcrumb";
import LinkCM from "@/shared/components/link";
import { ArrowLeft, ArrowLeft2 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function DoctorsPage() {
  const breadcrumbItems = [
    { label: "خانه", href: "/" },
    { label: "تماس با ما" },
  ];
  return (
    <>
      <section className="bg-gray-100 h-max pt-40 sm:pt-36 pb-10 -mt-[80px] md:mt-0">
        <section className="px-3 sm:px-5 lg:px-10 xl:px-0 max-w-[1200px] mx-auto h-full">
          <Breadcrumb
            items={breadcrumbItems}
            separator="/"
            linkClassName="text-lake-blue-600 text-xs font-bold"
            textClassName="text-gray-400 text-xs font-bold"
            seperatorClassName="text-gray-200"
          />
          <p className="md:text-right mt-10 mb-8 text-[38px] md:text-5xl">
            <b>
              متخصصین <mark className="bg-transparent">یک زن</mark>
            </b>
          </p>
          <p className="text-lg text-gray-600">
            یک تیم متخصص پزشکی دلسوز، همیشه کنارتن و آماده هستن تا بهت گوش بدن و
            راهنماییت کنن.
          </p>

          <section className="overflow-x-auto pb-5">
            <section className="flex gap-10 mt-14 w-max">
              <label
                className={`text-sm font-semibold text-blue-500 cursor-pointer w-28 block`}
              >
                <input type="radio" name="" id="" className="hidden" />
                <h2>همه متخصصین</h2>
              </label>
              <label
                className={`text-sm font-semibold text-blue-500 cursor-pointer w-28 block`}
              >
                <input type="radio" name="" id="" className="hidden" />
                <h2> زنان و زایمان</h2>
              </label>
              <label
                className={`text-sm font-semibold text-blue-500 cursor-pointer w-28 block`}
              >
                <input type="radio" name="" id="" className="hidden" />
                <h2>اطفال</h2>
              </label>
              <label
                className={`text-sm font-semibold text-blue-500 cursor-pointer w-28 block`}
              >
                <input type="radio" name="" id="" className="hidden" />
                <h2>تغذیه</h2>
              </label>
              <label
                className={`text-sm font-semibold text-blue-500 cursor-pointer w-28 block`}
              >
                <input type="radio" name="" id="" className="hidden" />
                <h2>مامایی</h2>
              </label>
              <label
                className={`text-sm font-semibold text-blue-500 cursor-pointer w-28 block`}
              >
                <input type="radio" name="" id="" className="hidden" />
                <h2>روانشناسی</h2>
              </label>
            </section>
          </section>
        </section>
      </section>
      <section className="grid sm:grid-cols-3 md:grid-cols-4 gap-10 mt-20 max-w-5xl mx-auto pb-20">
        <section className="flex sm:flex-col sm:justify-center items-center gap-2 px-3 sm:px-5 md:px-7 w-full md:w-max">
          <Image
            src="/team/d4.png"
            alt="مهران اصغری"
            width={150}
            height={150}
            className="rounded-full size-[90px] sm:size-[150px] object-cover"
          />
          <div className="flex items-center flex-1 justify-between sm:block sm:w-full">
            <div className="sm:text-center">
              <h4 className="font-semibold sm:mt-5 md:text-center">
                مهران اصغری
              </h4>
              <p className="text-gray-500 text-xs mt-2 md:text-center truncate max-w-44">
                Co-Founder | Project Manager
              </p>
            </div>
            <LinkCM
              href=""
              variant="outline"
              color="blue"
              className="mt-5 !hidden sm:!flex"
            >
              مشاهده پروفایل
            </LinkCM>
            <Link href="" className="sm:hidden">
              <ArrowLeft2 color="var(--color-lake-blue-500)" size={24} />
            </Link>
          </div>
        </section>
        <section className="flex sm:flex-col sm:justify-center items-center gap-2 px-3 sm:px-5 md:px-7 w-full md:w-max">
          <Image
            src="/team/d5.png"
            alt="مهرداد اصغری"
            width={150}
            height={150}
            className="rounded-full size-[90px] sm:size-[150px] object-cover"
          />
          <div className="flex items-center flex-1 justify-between sm:block sm:w-full">
            <div className="sm:text-center">
              <h4 className="font-semibold mt-5 sm:text-center">
                مهرداد اصغری
              </h4>
              <p className="text-gray-500 text-xs mt-2 sm:text-center truncate max-w-44">
                Co-Founder - Back-End Developer
              </p>
            </div>
            <LinkCM
              href=""
              variant="outline"
              color="blue"
              className="mt-5 !hidden sm:!flex"
            >
              مشاهده پروفایل
            </LinkCM>
            <Link href="" className="sm:hidden">
              <ArrowLeft2 color="var(--color-lake-blue-500)" size={24} />
            </Link>
          </div>
        </section>
        <section className="flex sm:flex-col sm:justify-center items-center gap-2 px-3 sm:px-5 md:px-7 w-full md:w-max">
          <Image
            src="/team/d6.png"
            alt="پویا فتوتی"
            width={150}
            height={150}
            className="rounded-full size-[90px] sm:size-[150px] object-cover"
          />
          <div className="flex items-center flex-1 justify-between sm:block sm:w-full">
            <div className="sm:text-center">
              <h4 className="font-semibold mt-5 sm:text-center">پویا فتوتی</h4>
              <p className="text-gray-500 text-xs mt-2 sm:text-center truncate max-w-44">
                UI/UX Designer
              </p>
            </div>
            <LinkCM
              href=""
              variant="outline"
              color="blue"
              className="mt-5 !hidden sm:!flex w-full"
            >
              مشاهده پروفایل
            </LinkCM>
            <Link href="" className="sm:hidden">
              <ArrowLeft2 color="var(--color-lake-blue-500)" size={24} />
            </Link>
          </div>
        </section>
        <section className="flex sm:flex-col sm:justify-center items-center gap-2 px-3 sm:px-5 md:px-7 w-full md:w-max">
          <Image
            src="/team/d7.png"
            alt="علیرضا"
            width={150}
            height={150}
            className="rounded-full size-[90px] sm:size-[150px] object-cover"
          />
          <div className="flex items-center flex-1 justify-between sm:block w-full">
            <div>
              <h4 className="font-semibold mt-5 sm:text-center">علیرضا</h4>
              <p className="text-gray-500 text-xs mt-2 sm:text-center truncate max-w-44">
                Android Developer
              </p>
            </div>
            <LinkCM
              href=""
              variant="outline"
              color="blue"
              className="mt-5 !hidden sm:!flex"
            >
              مشاهده پروفایل
            </LinkCM>
            <Link href="" className="sm:hidden">
              <ArrowLeft2 color="var(--color-lake-blue-500)" size={24} />
            </Link>
          </div>
        </section>
        <section className="flex sm:flex-col sm:justify-center items-center gap-2 px-3 sm:px-5 md:px-7 w-full md:w-max">
          <Image
            src="/team/d8.png"
            alt="محدثه رهبر"
            width={150}
            height={150}
            className="rounded-full size-[90px] sm:size-[150px] object-cover"
          />
          <div className="flex items-center flex-1 justify-between sm:block w-full">
            <div>
              <h4 className="font-semibold mt-5 sm:text-center">محدثه رهبر</h4>
              <p className="text-gray-500 text-xs mt-2 sm:text-center truncate max-w-44">
                متخصص زنان و زایمان
              </p>
            </div>
            <LinkCM
              href=""
              variant="outline"
              color="blue"
              className="mt-5 !hidden sm:!flex"
            >
              مشاهده پروفایل
            </LinkCM>
            <Link href="" className="sm:hidden">
              <ArrowLeft2 color="var(--color-lake-blue-500)" size={24} />
            </Link>
          </div>
        </section>
        <section className="flex sm:flex-col sm:justify-center items-center gap-2 px-3 sm:px-5 md:px-7 w-full md:w-max">
          <Image
            src="/team/d1.jpg"
            alt="خسرو اکبری"
            width={150}
            height={150}
            className="rounded-full size-[90px] sm:size-[150px] object-cover"
          />
          <div className="flex items-center flex-1 justify-between sm:block w-full">
            <div>
              <h4 className="font-semibold mt-5 sm:text-center">خسرو اکبری</h4>
              <p className="text-gray-500 text-xs mt-2 sm:text-center truncate max-w-44">
                Front-End Developer
              </p>
            </div>
            <LinkCM
              href=""
              variant="outline"
              color="blue"
              className="mt-5 !hidden sm:!flex"
            >
              مشاهده پروفایل
            </LinkCM>
            <Link href="" className="sm:hidden">
              <ArrowLeft2 color="var(--color-lake-blue-500)" size={24} />
            </Link>
          </div>
        </section>
      </section>
    </>
  );
}

export default DoctorsPage;
