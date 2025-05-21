"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Add, ArrowDown2, SearchNormal1 } from "iconsax-react";
import { Button } from "@/components/ui/button";

function Header() {
  const [searchBoxOpen, setSearchBoxOpen] = useState(false);

  return (
    <header
      className="shadow-2xl bg-white rounded-[40px] py-4 px-8 fixed w-[90%] top-4 right-[5%] z-50"
      role="banner"
    >
      <div className="flex items-center justify-between w-full">
        <Link href="/" aria-label="صفحه اصلی - یک زن">
          <Image
            className="h-8 w-auto"
            src="/logo/black-h-logo.png"
            width={212}
            height={32}
            quality={100}
            alt="یک زن - راهنمای بهداشت زنان، بارداری و زایمان"
            // priority={true}
          />
        </Link>
        <nav className="grow flex justify-center" aria-label="ناوبری اصلی">
          <ul className="flex gap-10 items-center">
            <li>
              <Link href="/" className="hover:underline">
                صفحه اصلی
              </Link>
            </li>
            <li>
              <DropdownMenu dir="rtl">
                <DropdownMenuTrigger className="flex items-center gap-1 cursor-pointer hover:underline">
                  مجله یک زن
                  <ArrowDown2
                    variant="Bold"
                    color="var(--color-gray-800)"
                    size={12}
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/magazine/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/magazine/billing">Billing</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/magazine/team">Team</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/magazine/subscription">Subscription</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Link href="/clinic" className="hover:underline">
                کلینیک مشاوره
              </Link>
            </li>
            <li>
              <DropdownMenu dir="rtl">
                <DropdownMenuTrigger className="flex items-center gap-1 cursor-pointer hover:underline">
                  اپلیکیشن یک زن
                  <ArrowDown2
                    variant="Bold"
                    color="var(--color-gray-800)"
                    size={12}
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/app/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/app/billing">Billing</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/app/team">Team</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/app/subscription">Subscription</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Link href="/gentleman" className="hover:underline">
                جنتلمن
              </Link>
            </li>
          </ul>
        </nav>
        <div className="w-[212px] flex items-center justify-end gap-3">
          <button
            type="button"
            className={`cursor-pointer size-12 flex justify-center items-center rounded-full ${
              searchBoxOpen ? "bg-pink-500 text-white" : ""
            }`}
            aria-label="باز کردن باکس جستجو"
            onClick={() => setSearchBoxOpen(!searchBoxOpen)}
          >
            <SearchNormal1
              variant="Linear"
              size={20}
              color={searchBoxOpen ? "#fff" : "var(--color-pink-500)"}
            />
          </button>
          <Button
            variant="default"
            asChild
            className="bg-pink-500 rounded-[50px] text-[13px] px-3 py-6 hover:bg-pink-600"
          >
            <Link href="/download" aria-label="دریافت اپلیکیشن یک زن">
              دریافت اپلیکیشن یک زن
            </Link>
          </Button>
        </div>
      </div>
      {searchBoxOpen && (
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
      )}
    </header>
  );
}

export default Header;
