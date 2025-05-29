import Image from "next/image";
import Link from "next/link";
import React from "react";
import DesktopFooterItem from "./DesktopFooterItem";
import MobileFooterItems from "./MobileFooterItems";

const social = [
  { img: "/social/x.png", url: "", title: "x" },
  { img: "/social/telegram.png", url: "", title: "telegram" },
  { img: "/social/instagram.png", url: "", title: "instagram" },
  { img: "/social/youtub.png", url: "", title: "youtub" },
];

function Footer() {
  return (
    <footer>
      <section className="md:hidden px-3 pb-5 md:px-0">
        <Image
          src="/logo/black-h-logo.png"
          width={108}
          height={32}
          alt="یک زن"
        />
        <p className="text-gray-900 mt-8 text-[13px]">
          اولین اپلیکیشن سلامتی بانوان با بیش از 1,500,000 نصب ، از سال 1397 با
          امکانات بی شماری از نمایش زمان چرخه قاعدگی، تخمک‌گذاری، بارداری و
          شیردهی را هوشمندانه مدیریت کن! از مشاوره تخصصی، رژیم‌های غذایی، رصد و
          راهنمایی‌های سلامتی روزانه و کلی امکانات دیگر
        </p>
      </section>

      <section className="footer h-[130px] w-full"></section>
      <section className="bg-pink-500 pb-16 md:pb-3 px-3 md:px-[5%] pt-8 -mt-[100px]">
        <section className="flex">
          <section className="hidden md:block w-1/3">
            <Image
              src="/logo/white-h-logo.png"
              width={108}
              height={32}
              alt="یک زن"
            />
            <p className="text-gray-100 mt-8">
              اولین اپلیکیشن سلامتی بانوان با بیش از 1,500,000 نصب ، از سال 1397
              با امکانات بی شماری از نمایش زمان چرخه قاعدگی، تخمک‌گذاری، بارداری
              و شیردهی را هوشمندانه مدیریت کن! از مشاوره تخصصی، رژیم‌های غذایی،
              رصد و راهنمایی‌های سلامتی روزانه و کلی امکانات دیگر
            </p>
          </section>
          <DesktopFooterItem />
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
