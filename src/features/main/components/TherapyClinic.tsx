import SectionWrapper from '@/shared/hoc/section-wrapper'
import { TickCircle } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const specialties = [
    { label: "پزشک عمومی" },
    { label: "روانشناسی" },
    { label: "مامایی" },
    { label: "تغذیه" },
    { label: "اطفال" },
    { label: "زنان و زایمان" },
  ];

  const doctors = [
    { src: "/dr/d1.png", alt: "تصویر پزشک", href: "" },
    { src: "/dr/d2.png", alt: "تصویر پزشک", href: "" },
    { src: "/dr/d3.png", alt: "تصویر پزشک", href: "" },
    { src: "/dr/d1.png", alt: "تصویر پزشک", href: "" },
    { src: "/dr/d2.png", alt: "تصویر پزشک", href: "" },
    { src: "/dr/d3.png", alt: "تصویر پزشک", href: "" },
    { src: "/dr/d1.png", alt: "تصویر پزشک", href: "" },
    { src: "/dr/d2.png", alt: "تصویر پزشک", href: "" },
    { src: "/dr/d3.png", alt: "تصویر پزشک", href: "" },
    { src: "/dr/d1.png", alt: "تصویر پزشک", href: "" },
    { src: "/dr/d2.png", alt: "تصویر پزشک", href: "" },
    { src: "/dr/d3.png", alt: "تصویر پزشک", href: "" },
  ];

function TherapyClinic() {

  return (
    <SectionWrapper className="my-24 px-3 md:px-0">
      <div className='md:flex py-8 px-5 md:p-16 bg-lake-blue-50 rounded-[12px] md:rounded-4xl'>
      <section className="md:w-1/2 pt-3">
        <h2 className="text-[22px] md:text-4xl text-center md:text-right font-bold md:font-semibold text-lake-blue-500">کلینیـــک مشـــاوره</h2>
        <h3 className="my-5 md:my-12 text-[13px] md:text-base leading-8 text-center md:text-right">
          <mark className='bg-transparent'>تیم متخصصین یک زن </mark><br />
          آماده مشاوره و پاسخ به هر گونه سوالات توست
        </h3>
        <ol className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-5">
          {specialties.map((item, index) => (
            <li key={index} className="flex gap-2 items-center">
              <TickCircle
                variant="Bold"
                size={20}
                color="var(--color-lake-blue-500)"
              />
              <mark className="bg-transparent text-[13px] md:text-base">{item.label}</mark>
            </li>
          ))}
        </ol>
      </section>
      <section className="md:w-1/2">
        <ol className="flex flex-wrap my-8 justify-center md:justify-baseline gap-2">
          {doctors.map((doctor, index) => (
            <li key={index}>
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
        <ol className="grid md:hidden grid-cols-2 md:grid-cols-3 gap-5">
          {specialties.map((item, index) => (
            <li key={index} className="flex gap-2 items-center">
              <TickCircle
                variant="Bold"
                size={20}
                color="var(--color-lake-blue-500)"
              />
              <mark className="bg-transparent text-[13px] md:text-base">{item.label}</mark>
            </li>
          ))}
        </ol>
      </section>
      </div>
    </SectionWrapper>
  );
}

export default TherapyClinic;