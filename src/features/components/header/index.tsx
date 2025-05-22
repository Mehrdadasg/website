"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { SearchNormal1 } from "iconsax-react";
import { Button } from "@/components/ui/button";
import NavbarSearch from "@/features/components/header/NavbarSearch";
import NavbarMenu from "@/features/components/header/NavbarMenu";

function Header() {
  const [searchBoxOpen, setSearchBoxOpen] = useState(false);

  return (
    <header
      className="shadow-2xl bg-white rounded-[40px] py-4 px-6 fixed w-[90%] top-4 right-[5%] z-50"
      role="banner"
    >
      <div className="flex items-center justify-between w-full mr-1">
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

        <NavbarMenu/>
        
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
            type="button"
            className="bg-pink-500 rounded-[50px] text-[13px] px-3 py-6 hover:bg-pink-600"
          >
            <Link href="/download" aria-label="دریافت اپلیکیشن یک زن">
              دریافت اپلیکیشن یک زن
            </Link>
          </Button>
        </div>
      </div>
      {searchBoxOpen && (
        <NavbarSearch/>
      )}
    </header>
  );
}

export default Header;
