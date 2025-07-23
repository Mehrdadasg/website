import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/shared/components/accordion";
import Link from "next/link";
import React from "react";

const footerMenu = [
  {
    id: 1,
    label: "اپلیکیشن یک زن",
    links: [
      { id: 1, href: "", label: "مشاوره" },
      { id: 2, href: "", label: "تشخیص بارداری از روی علائم" },
      { id: 3, href: "", label: "آیا من باردارم؟" },
      { id: 4, href: "", label: "تقویم بارداری هفته به هفته" },
      { id: 5, href: "", label: "تقویم قاعدگی" },
      { id: 6, href: "", label: "تعیین جنسیت در زمان اقدام" },
      { id: 7, href: "", label: "محاسبه سن بارداری" },
      { id: 8, href: "", label: "بهترین روش جلوگیری از بارداری" },
      { id: 9, href: "", label: "پیش بینی تعیین جنسیت بعد از بارداری" },
      { id: 10, href: "", label: "بهترین زمان اقدام به بارداری" },
      { id: 11, href: "", label: "محاسبه زمان تخمک گذاری" },
    ],
  },
];

function MobileFooterItems() {
  return (
    <section className="md:hidden mobile-menu">
      <Accordion multiple={false}>
        {footerMenu.map((item) => (
          <AccordionItem key={item.id} id={`${item.id}`} title={item.label}>
            <AccordionContent>
              <nav>
                <ul className="text-skin-800 text-sm mt-2 space-y-3">
                  {item?.links?.map((link) => (
                    <li key={link.label}>
                      <Link href={link?.href} title={link?.label}>{link?.label}</Link>
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
