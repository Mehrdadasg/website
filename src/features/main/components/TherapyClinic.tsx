import { ssrClinicData } from '@/features/apiHandlers/serverHandlers/ssrClinicData'
import { QueryClient } from '@tanstack/react-query'
import { TickCircle } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

  const doctors = [
    { id:1,src: "/dr/d1.png", alt: "تصویر پزشک", href: "" },
    { id:2,src: "/dr/d2.png", alt: "تصویر پزشک", href: "" },
    { id:3,src: "/dr/d3.png", alt: "تصویر پزشک", href: "" },
    { id:4,src: "/dr/d1.png", alt: "تصویر پزشک", href: "" },
    { id:5,src: "/dr/d2.png", alt: "تصویر پزشک", href: "" },
    { id:6,src: "/dr/d3.png", alt: "تصویر پزشک", href: "" },
    { id:7,src: "/dr/d1.png", alt: "تصویر پزشک", href: "" },
    { id:8,src: "/dr/d2.png", alt: "تصویر پزشک", href: "" },
    { id:9,src: "/dr/d3.png", alt: "تصویر پزشک", href: "" },
    { id:10,src: "/dr/d1.png", alt: "تصویر پزشک", href: "" },
    { id:11,src: "/dr/d2.png", alt: "تصویر پزشک", href: "" },
    { id:12,src: "/dr/d3.png", alt: "تصویر پزشک", href: "" },
  ];

  type ClinicService={
    Id:number,
    Title:string
  }

async function TherapyClinic() {
  const queryClient=new QueryClient();
  const {clinicData} =await ssrClinicData(queryClient);

  return (
    <section className="my-24 px-5 lg:px-10 xl:px-0">
      <div className='lg:flex py-8 px-5 lg:px-16 lg:py-16 bg-lake-blue-50 rounded-[12px] lg:rounded-4xl'>
      <section className="lg:w-1/2 pt-3">
        <h2 className="text-[22px] md:text-4xl text-center lg:text-right font-bold md:font-semibold text-lake-blue-500">{clinicData?.Title}</h2>
        <h3 className="my-5 lg:my-12 text-[13px] md:text-base leading-8 text-center lg:text-right">
          <mark className='bg-transparent'>تیم متخصصین یک زن </mark><br />
          آماده مشاوره و پاسخ به هر گونه سوالات توست
        </h3>
        <ol className="hidden lg:grid grid-cols-2 md:grid-cols-3 gap-5">
          {clinicData?.Services.map((item:ClinicService) => (
            <li key={item?.Id} className="flex gap-2 items-center">
              <TickCircle
                variant="Bold"
                size={20}
                color="var(--color-lake-blue-500)"
              />
              <mark className="bg-transparent text-[13px] md:text-base">{item?.Title}</mark>
            </li>
          ))}
        </ol>
      </section>
      <section className="lg:w-1/2">
        <ol className="flex flex-wrap my-8 justify-center md:justify-baseline gap-2">
          {doctors.map((doctor) => (
            <li key={doctor.id}>
              <Link href={doctor.href}>
                <Image
                  src={doctor.src}
                  className="rounded-full border-1 border-white"
                  width={61}
                  height={61}
                  alt={doctor.alt}
                />
              </Link>
            </li>
          ))}
        </ol>
        <ol className="grid lg:hidden grid-cols-2 md:grid-cols-3 gap-5">
          {clinicData?.Services.map((item:ClinicService) => (
            <li key={item?.Id} className="flex gap-2 items-center">
              <TickCircle
                variant="Bold"
                size={20}
                color="var(--color-lake-blue-500)"
              />
              <mark className="bg-transparent text-[13px] md:text-base">{item?.Title}</mark>
            </li>
          ))}
        </ol>
      </section>
      </div>
    </section>
  );
}

export default TherapyClinic;