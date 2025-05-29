import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import React from "react";

const footerMenu = [
  {
    label: "اپلیکیشن یک زن",
    links: [
      { href: "", label: "مشاوره" },
      { href: "", label: "تشخیص بارداری از روی علائم" },
      { href: "", label: "آیا من باردارم؟" },
      { href: "", label: "تقویم بارداری هفته به هفته" },
      { href: "", label: "تقویم قاعدگی" },
      { href: "", label: "تعیین جنسیت در زمان اقدام" },
      { href: "", label: "محاسبه سن بارداری" },
      { href: "", label: "بهترین روش جلوگیری از بارداری" },
      { href: "", label: "پیش بینی تعیین جنسیت بعد از بارداری" },
      { href: "", label: "بهترین زمان اقدام به بارداری" },
      { href: "", label: "محاسبه زمان تخمک گذاری" },
    ],
  },
  {
    label: "کمپانی",
    links: [
      { href: "", label: "درباره ما" },
      { href: "", label: "تماس با ما" },
    ],
  },
];

function MobileFooterItems() {
  return (
    <section className="md:hidden mobile-menu">
      <Accordion type="single" collapsible={true} className="space-y-3">
        {footerMenu.map((item) => (
          <AccordionItem
            key={item.label}
            value={item.label}
            className="!border-0 rounded-2xl px-5"
          >
            <AccordionTrigger className="accordion-trigger no-underline hover:no-underline cursor-pointer text-white">
              {item.label}
            </AccordionTrigger>
            <AccordionContent className="text-sm">
              <nav>
                <ul className="text-gray-50 text-sm mt-2 space-y-3">
                  {item?.links?.map((link) => (
                    <li key={link.label}>
                      <Link href={link?.href}>{link?.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default MobileFooterItems;
