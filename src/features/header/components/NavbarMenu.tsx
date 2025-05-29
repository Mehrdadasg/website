import Link from "next/link";
import React from "react";

function NavbarMenu() {
  return (
    <nav className="grow hidden md:flex justify-center" aria-label="ناوبری اصلی">
      <ul className="flex gap-10 items-center">
        <li>
          <Link href="/" className=" ">
            صفحه اصلی
          </Link>
        </li>
        <li>
          <Link href="/">مجله یک زن</Link>
        </li>
        <li>
          <Link href="/clinic" className=" ">
            کلینیک مشاوره
          </Link>
        </li>
        <li>
          <Link href="/">اپلیکیشن یک زن</Link>
        </li>
        <li>
          <Link href="/gentleman" className=" ">
            جنتلمن
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarMenu;
