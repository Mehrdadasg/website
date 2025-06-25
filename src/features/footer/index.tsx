import Image from "next/image";
import Link from "next/link";
import React from "react";
import DesktopFooterItem from "./components/DesktopFooterItem";
import { QueryClient } from "@tanstack/react-query";
import { ssrFooter } from "../apiHandlers/serverHandlers/ssrFooter";
import MobileFooterItems from "./components/MobileFooterItems";

const social = [
  { img: "/social/x.png", url: "", title: "x" },
  { img: "/social/telegram.png", url: "", title: "telegram" },
  { img: "/social/instagram.png", url: "", title: "instagram" },
  { img: "/social/youtub.png", url: "", title: "youtub" },
];

async function Footer() {
  const queryClient=new QueryClient();
  const {footer} = await ssrFooter(queryClient);
  return (
    <footer className="mt-auto">
      <section className="md:hidden px-5 pb-5 md:px-0">
        <Image
          src={footer?.Logo || "/logo/black-h-logo.png"}
          width={108}
          height={32}
          alt="یک زن"
        />
        <p className="text-gray-900 mt-8 text-[13px]">{footer?.Text}</p>
      </section>

      <section className="footer h-[130px] w-full"></section>
      <section className="bg-pink-500 pb-16 md:pb-3 px-3 md:px-5 lg:px-10 xl:px-12 pt-8 -mt-[100px] md:-mt-[115px] lg:-mt-[110px] xl:-mt-[100px]">
        <section className="flex md:gap-5">
          <section className="hidden md:block w-1/3">
            <Image
              src={footer?.Logo || "/logo/black-h-logo.png"}
              width={108}
              height={32}
              alt="یک زن"
            />
            <p className="text-gray-100 mt-5 lg:mt-8 md:text-[13px] lg:text-[14px] xl:text-base leading-6 xl:leading-8">
              {footer?.Text}
            </p>
          </section>
          <DesktopFooterItem menuItems={footer?.MenuItems} />
        </section>
        <MobileFooterItems />
        <div className="w-full h-0.5 bg-pink-400 mt-10 mb-5"></div>
        <section className="flex flex-col-reverse gap-5 md:flex-row justify-between items-center py-3">
          <p className="text-[10px] md:text-sm text-gray-50">
            کپی رایت © 1397 - 1404 متعلق به{" "}
            <mark className="bg-transparent text-gray-50">
              <Link href="/">اپلیکیشن یک زن</Link>
            </mark>
          </p>
          <nav>
            <ul className="flex gap-5">
              {social?.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.url}
                    className="flex justify-center items-center size-5"
                  >
                    <Image
                      className="max-w-5 max-h-5"
                      src={item.img}
                      alt={item.title}
                      width={20}
                      height={20}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
