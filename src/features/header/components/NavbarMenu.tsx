import Link from 'next/link'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowDown2 } from 'iconsax-react';


function NavbarMenu() {
  return (
    <nav className="grow flex justify-center" aria-label="ناوبری اصلی">
          <ul className="flex gap-10 items-center">
            <li>
              <Link href="/" className=" ">
                صفحه اصلی
              </Link>
            </li>
            <li>
              <DropdownMenu dir="rtl">
                <DropdownMenuTrigger className="flex items-center gap-1 cursor-pointer">
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
              <Link href="/clinic" className=" ">
                کلینیک مشاوره
              </Link>
            </li>
            <li>
              <DropdownMenu dir="rtl">
                <DropdownMenuTrigger className="flex items-center gap-1 cursor-pointer">
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
              <Link href="/gentleman" className=" ">
                جنتلمن
              </Link>
            </li>
          </ul>
        </nav>
  )
}

export default NavbarMenu