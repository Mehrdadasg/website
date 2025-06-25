import Link from "next/link";
import React from "react";

type MenuItems={
  Title:string
  Url:string
  Id:number
}

type Props={
  menuItems:MenuItems[]
}

function NavbarMenu({menuItems}:Props) {
  return (
    <nav className="grow hidden lg:flex justify-center" aria-label="ناوبری اصلی">
      <ul className="flex gap-5 xl:gap-10 items-center">
        {menuItems?.map((menu)=> <li key={menu?.Id}>
          <Link href={menu?.Url} className=" ">
            <b>{menu?.Title}</b>
          </Link>
        </li>)}
      </ul>
    </nav>
  );
}

export default NavbarMenu;
