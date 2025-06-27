import { ssrExpert } from "@/features/apiHandlers/serverHandlers/ssrExpert";
import Breadcrumb from "@/shared/components/breadcrumb";
import Button from "@/shared/components/button";
import LinkCM from "@/shared/components/link";
import { QueryClient } from "@tanstack/react-query";
import {
  ArrowLeft2,
  Facebook,
  Instagram,
  Location,
  Send2,
  Whatsapp,
} from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

async function DoctorInfo({
  params,
}: {
  params: Promise<{ doctor: string }>;
}) {
  const queryClient = new QueryClient();
  const resolvedParams = await params;
  const slug = resolvedParams?.doctor;
  if (!slug) notFound();
  const { expert } = await ssrExpert({ queryClient, slug });

  const breadcrumbItems = [
    { label: "خانه", href: "/" },
    { label: "متخصصین یک زن", href: "/doctors" },
    { label: "تماس با ما" },
  ];
  return (
    <>
      <section className="bg-gray-100 h-max pt-40 sm:pt-36 -mt-[80px] md:mt-0 pb-28">
        <section className="max-w-[1200px] mx-auto ">
          <Breadcrumb
            items={breadcrumbItems}
            separator="/"
            linkClassName="text-lake-blue-600 text-xs font-bold"
            textClassName="text-gray-400 text-xs font-bold"
            seperatorClassName="text-gray-200"
          />
          <section className="bg-white rounded-3xl min-h-96 mt-10 flex">
            <section className="w-1/4 p-10">
              <Image
                src={expert?.Content?.ImageUrl}
                alt={expert?.Content?.Title}
                width={250}
                height={250}
                className="rounded-full"
              />
            </section>
            <section className="w-3/4 px-14 pt-28 pb-14">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-5xl">
                    <b>{expert?.Content?.Title}</b>
                  </h1>
                  <p className="text-gray-500 text-lg mt-5">
                    {expert?.Content?.SubTitle}
                  </p>
                </div>
                <Button
                  type="button"
                  variant="contained"
                  color="blue"
                  className="px-5 text-[13px]"
                >
                  دریافت مشاوره
                </Button>
              </div>
              <div className="grid grid-cols-4 gap-5 mt-16">
                <div className="bg-gray-100 rounded-[10px] text-center py-7">
                  <b>۳۰۵۵</b>
                  <p className="text-sm text-gray-500 mt-3">کد نظام پزشکی</p>
                </div>
                <div className="bg-gray-100 rounded-[10px] text-center py-7">
                  <b>16 سال</b>
                  <p className="text-sm text-gray-500 mt-3">تجربه حرفه ای</p>
                </div>
                <div className="bg-gray-100 rounded-[10px] text-center py-7">
                  <b>5 سال</b>
                  <p className="text-sm text-gray-500 mt-3">همراه یک زن</p>
                </div>
                <div className="bg-gray-100 rounded-[10px] text-center py-7">
                  <b>۶۶۹۰۵۸۴۶</b>
                  <p className="text-sm text-gray-500 mt-3">شماره مطب</p>
                </div>
              </div>

              <p className="text-lg font-semibold mt-16">سوابق و مهارت ها</p>
              <div className="mt-5">
                <p>{expert?.Content?.Text}</p>
                <p>{expert?.Content?.Skills}</p>
              </div>

              <section className="flex justify-center gap-5 md:shadow-sm shadow-gray-200 md:border border-gray-200 rounded-[12px] md:p-10 mt-24">
                <LinkCM href="" variant="contained" color="blue" size="icon">
                  <Instagram color="#fff" size={34} variant="Bold" />
                </LinkCM>
                <LinkCM href="" variant="contained" color="blue" size="icon">
                  <Send2 color="#fff" size={34} variant="Bold" />
                </LinkCM>
                <LinkCM href="" variant="contained" color="blue" size="icon">
                  <Whatsapp color="#fff" size={34} variant="Bold" />
                </LinkCM>
                <LinkCM href="" variant="contained" color="blue" size="icon">
                  <Facebook color="#fff" size={34} variant="Bold" />
                </LinkCM>
              </section>
              <section className="flex items-center gap-5 md:shadow-sm shadow-gray-200 md:border border-gray-200 rounded-[12px] md:p-10 mt-10">
                <span className="flex justify-center items-center size-10">
                  <Location color="var(--color-lake-blue-500)" size={24} />
                </span>
                <div>
                  <p className="text-lg font-semibold">آدرس مطب</p>
                  <address className="text-gray-700 mt-2">
                    {expert?.Content?.Address}
                  </address>
                </div>
              </section>
            </section>
          </section>
        </section>
      </section>
      <section className="min-h-96 py-16">
        <p className="text-2xl font-bold text-center">
          این متخصص ها هم ممکنه بتونن کمکت کنن
        </p>
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
                <h4 className="font-semibold mt-5 sm:text-center">
                  پویا فتوتی
                </h4>
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
        </section>
      </section>
    </>
  );
}

export default DoctorInfo;
