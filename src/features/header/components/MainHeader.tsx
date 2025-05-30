"use client";
import { Add, HambergerMenu, SearchNormal1 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavbarMenu from "./NavbarMenu";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import NavbarSearch from "./NavbarSearch";
import MobileNavbarMenu from "./MobileNavbarMenu";
import { useHeader } from "@/features/apiHandlers/clientHandlers/useHeader";

function MainHeader() {
  const [searchBoxOpen, setSearchBoxOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const {data:headerData}=useHeader();

  const handleOpenMenu = () => {
    setSearchBoxOpen(false);
    setMenuOpen(!menuOpen);
  };

  const handleOpenSearcBox = () => {
    setMenuOpen(false);
    setSearchBoxOpen(!searchBoxOpen);
  };

  return (
    <div className="shadow-2xl bg-white rounded-[40px] py-4 px-3 lg:px-6">
      <section className="flex items-center justify-between w-full mr-1">
        <button
          type="button"
          onClick={handleOpenMenu}
          className="size-12 flex justify-center items-center lg:hidden"
        >
          {menuOpen ? (
            <Add size={28} color="var(--color-pink-500" className="rotate-45" />
          ) : (
            <HambergerMenu color="var(--color-pink-500)" size={28} />
          )}
        </button>
        <Link href="/" aria-label="صفحه اصلی - یک زن">
          <Image
            className="h-6 sm:h-8 w-auto"
            src={headerData?.Data?.Logo || "/logo/black-h-logo.png"}
            width={212}
            height={32}
            quality={100}
            alt={headerData?.Data?.LogoAlt || "یک زن - راهنمای بهداشت زنان، بارداری و زایمان"}
          />
        </Link>

        <NavbarMenu menuItems={headerData?.Data?.MenuItems} />

        <section className="lg:w-[212px] flex items-center justify-end gap-3">
          <button
            type="button"
            className={`cursor-pointer size-12 flex justify-center items-center rounded-full ${
              searchBoxOpen ? "bg-pink-500 text-white" : ""
            }`}
            aria-label="باز کردن باکس جستجو"
            onClick={handleOpenSearcBox}
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
            className="bg-pink-500 rounded-[50px] text-[13px] px-3 py-6 hover:bg-pink-600 hidden lg:flex"
          >
            <Link href={headerData?.Data?.DownloadAppUrl} target="_blank" aria-label="دریافت اپلیکیشن یک زن">
              دریافت اپلیکیشن یک زن
            </Link>
          </Button>
        </section>
      </section>
      <AnimatePresence>
        {searchBoxOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <NavbarSearch />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <MobileNavbarMenu menuItems={headerData?.Data?.MenuItems} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MainHeader;
