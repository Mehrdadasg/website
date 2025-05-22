import { Add, SearchNormal1 } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function NavbarSearch() {
  return (
    <section className="h-[300px] mt-4 px-3" role="search">
          <div className="bg-gray-100 flex items-center rounded-[8px] p-3 gap-3">
            <button type="button">
              <Add
                size={24}
                color="var(--color-gray-800)"
                className="rotate-45"
              />
            </button>
            <input
              type="text"
              placeholder="جستجو در مجله"
              className="grow bg-transparent"
              aria-label="جستجو در مجله"
            />
          </div>
          <section className="mt-6 px-5">
            <div className="flex gap-3">
              <Image
                src="/fire.png"
                className="size-[20px]"
                width={20}
                height={20}
                alt="تصویر بیشترین جستجو های ماه"
              />
              <p className="font-semibold">بیشترین جستجو های ماه</p>
            </div>
            <ul className="space-y-4 mt-4">
              <li>
                <Link href="" className="flex gap-3 items-center text-sm">
                  <SearchNormal1 size={18} color="var(--color-gray-400)" />
                  جلوگیری از پریود شدن فوری
                </Link>
              </li>
              <li>
                <Link href="" className="flex gap-3 items-center text-sm">
                  <SearchNormal1 size={18} color="var(--color-gray-400)" />
                  درمان حساسیت پوستی
                </Link>
              </li>
              <li>
                <Link href="" className="flex gap-3 items-center text-sm">
                  <SearchNormal1 size={18} color="var(--color-gray-400)" />
                  جلوگیری از تهوع
                </Link>
              </li>
              <li>
                <Link href="" className="flex gap-3 items-center text-sm">
                  <SearchNormal1 size={18} color="var(--color-gray-400)" />
                  جلوگیری از بارداری
                </Link>
              </li>
              <li>
                <Link href="" className="flex gap-3 items-center text-sm">
                  <SearchNormal1 size={18} color="var(--color-gray-400)" />
                  جلوگیری از بارداری
                </Link>
              </li>
            </ul>
          </section>
        </section>
  )
}

export default NavbarSearch