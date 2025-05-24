import SectionWrapper from '@/shared/hoc/section-wrapper'
import { TickCircle } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

function TherapyClinic({}: Props) {
  return (
    <SectionWrapper className="my-24 flex p-16 bg-lake-blue-50 rounded-4xl">
        <section className="w-1/2 pt-3">
          <h2 className="text-4xl font-semibold text-lake-blue-500">کلینیـــک مشـــاوره</h2>
          <h3 className="my-12 leading-8">
            تیم متخصصین یک زن <br />
آماده مشاوره و پاسخ به هر گونه سوالات توست
          </h3>
          <ol className="grid grid-cols-3 gap-5">
            <li className="flex gap-2 items-center">
              <TickCircle variant="Bold" size={20} color="var(--color-lake-blue-500)"/>
              <mark className="bg-transparent">پزشک عمومی</mark>
            </li>
            <li className="flex gap-2 items-center">
              <TickCircle variant="Bold" size={20} color="var(--color-lake-blue-500)"/>
              <mark className="bg-transparent">روانشناسی</mark>
            </li>
            <li className="flex gap-2 items-center">
              <TickCircle variant="Bold" size={20} color="var(--color-lake-blue-500)"/>
              <mark className="bg-transparent">مامایی</mark>
            </li>
            <li className="flex gap-2 items-center">
              <TickCircle variant="Bold" size={20} color="var(--color-lake-blue-500)"/>
              <mark className="bg-transparent">تغذیه</mark>
            </li>
            <li className="flex gap-2 items-center">
              <TickCircle variant="Bold" size={20} color="var(--color-lake-blue-500)"/>
              <mark className="bg-transparent">اطفال</mark>
            </li>
            <li className="flex gap-2 items-center">
              <TickCircle variant="Bold" size={20} color="var(--color-lake-blue-500)"/>
              <mark className="bg-transparent">زنان و زایمان</mark>
            </li>
          </ol>
        </section>
        <section className="w-1/2">
          <ol className="flex flex-wrap gap-2">
            <li>
              <Link href="">
                <Image src="/dr/d1.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d2.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d3.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d2.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d1.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d3.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d1.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d2.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d3.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d2.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d1.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d3.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d2.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d2.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d3.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d1.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d3.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d1.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d3.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d2.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d3.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d1.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d2.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d1.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d1.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d1.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d1.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d1.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d1.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d1.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image src="/dr/d1.png" className="rounded-full border-1 border-white" width={61} height={61} alt="تصویر پزشک" />
              </Link>
            </li>           
          </ol>
        </section>
      </SectionWrapper>
  )
}

export default TherapyClinic