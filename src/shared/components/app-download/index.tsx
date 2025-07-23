import { ssrAppDownload } from "@/features/apiHandlers/serverHandlers/ssrAppDownload";
import { QueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type AppType = {
  Id: number;
  ImageUrl: string;
  ImageAlt: string;
  Url: string;
};

async function AppDownload() {
  const queryClient = new QueryClient();
  const { appData } = await ssrAppDownload(queryClient);

  return (
    <>
      <section className="grid grid-cols-2 md:grid-cols-2 gap-3 mt-20">
        {appData?.map((app: AppType) => 
          <Link
            key={app?.Id}
            href={app?.Url}
            title={app?.ImageAlt}
            className="h-10 !bg-[#202937] w-full rounded-[50px] p-0 flex justify-center"
          >
            <Image
              src={app?.ImageUrl}
              className="rounded-[50px] w-auto h-full object-cover"
              quality={100}
              width={340}
              height={80}
              alt={app?.ImageAlt}
            />
          </Link>
        )}
      </section>
      {/* <section className="sm:grid md:block xl:grid grid-cols-2 gap-3 mt-4">
        <Link href="" className="h-10 !bg-[#202937] w-full rounded-[50px] p-0">
          <Image
            src="/android.png"
            className="rounded-[50px] w-auto h-full object-cover"
            quality={100}
            width={520}
            height={80}
            alt="دانلود مستقیم اندروید"
          />
        </Link>
        <Link
          href=""
          className="h-10 !bg-[#202937] hidden sm:flex md:hidden xl:flex w-full rounded-[50px] p-0"
        >
          <Image
            src="/appStore.png"
            className="rounded-[50px] w-auto h-full object-cover"
            quality={100}
            width={520}
            height={80}
            alt="دانلود از اپ استور"
          />
        </Link>
      </section> */}
    </>
  );
}

export default AppDownload;
