import LinkCM from "@/shared/components/link";
import { ArrowCircleDown2 } from "iconsax-react";
import Link from "next/link";
import React from "react";

function FixedAppBar() {
  return (
    <section className="flex md:hidden z-10 bg-pink-500 py-3 px-4 fixed bottom-0 right-0 left-0 items-center justify-between mt-2">
      <div>
        <p className="text-[10px] text-gray-100 mb-1">یک قدم تا تغییر مثبت!</p>
        <p className="text-[13px] text-gray-50">همین حالا نصب کن</p>
      </div>

        <LinkCM href="/"
        className="text-[13px]"
        variant="contained"
        color="white"
        >
          <ArrowCircleDown2 size={25} color="var(--color-pink-500)" />
          دریافت یک زن
        </LinkCM>
    </section>
  );
}

export default FixedAppBar;
