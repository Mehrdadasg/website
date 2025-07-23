import { ssrInstallApp } from "@/features/apiHandlers/serverHandlers/ssrInstallApp";
import LinkCM from "@/shared/components/link";
import { QueryClient } from "@tanstack/react-query";
import { ArrowCircleDown2 } from "iconsax-react";
import React from "react";

async function FixedAppBar() {
  const queryClient = new QueryClient();
  const { app } = await ssrInstallApp(queryClient);

  return (
    <section className="flex md:hidden z-10 bg-pink-500 py-3 px-4 fixed bottom-0 right-0 left-0 items-center justify-between mt-2">
      <div>
        <p className="text-[10px] text-gray-100 mb-1">یک قدم تا تغییر مثبت!</p>
        <p className="text-[13px] text-gray-50">همین حالا نصب کن</p>
      </div>

      <LinkCM
        href={app ?? ""}
        className="text-[13px]"
        variant="contained"
        color="white"
        title="دریافت اپلیکیشن یک زن"
      >
        <ArrowCircleDown2 size={25} color="var(--color-pink-500)" />
        دریافت اپلیکیشن یک زن
      </LinkCM>
    </section>
  );
}

export default FixedAppBar;
