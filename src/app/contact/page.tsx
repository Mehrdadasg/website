import { ssrContact } from "@/features/apiHandlers/serverHandlers/ssrContact";
import ContactForm from "@/features/contact/ContactForm";
import FAQ from "@/features/main/components/FAQ";
import Breadcrumb from "@/shared/components/breadcrumb";
import { QueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

async function Contact() {
  const queryClient = new QueryClient();
  const {contactData} = await ssrContact(queryClient);

  const breadcrumbItems = [
    { label: "خانه", href: "/" },
    { label: "تماس با ما" },
  ];

  return (
    <section className="pb-24">
      <section className="contact h-max md:h-[750px] lg:h-[775px] 2xl:h-[800px] pt-44 md:pt-52 lg:pt-40 xl:pt-44 -mt-[80px] md:mt-0">
        <section className="px-3 sm:px-5 lg:px-10 xl:px-0 max-w-[1200px] mx-auto h-full">
          <section className=" md:flex lg:gap-5 xl:gap-10 h-full">
            <section className="md:w-1/2 pt-8 md:pt-16">
              <Breadcrumb
                items={breadcrumbItems}
                separator="/"
                linkClassName="text-lake-blue-600 text-xs font-bold"
                textClassName="text-gray-400 text-xs font-bold"
                seperatorClassName="text-gray-200"
              />
              <p className="md:text-right mt-10 mb-8 text-[38px] md:text-5xl">
                <b>{contactData?.Content?.Title}</b>
              </p>
              <p className="text-lg text-gray-600">
                {contactData?.Content?.Text}
              </p>
            </section>
            <section className="md:w-1/2 mt-5 md:mt-0 flex justify-center items-start xl:pr-10">
              <Image
                src={contactData?.Content?.ImageUrl??"/illustration/contact.png"}
                width={433}
                height={433}
                quality={100}
                alt=""
                priority
              />
            </section>
          </section>
        </section>
      </section>
      <FAQ />
      <ContactForm/>
    </section>
  );
}

export default Contact;
