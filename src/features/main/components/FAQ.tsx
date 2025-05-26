import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const faqItems = [
    {
      value: "item-1",
      question: "چرخه قاعدگی چیه؟",
      answer:
        "چرخه قاعدگی شامل چرخه تخمدان و چرخه رحم است. چرخهٔ تخمدان، تغییرات صورت گرفته در فولیکول‌های تخمدان و چرخهٔ رحم، تغییرات صورت گرفته در پوشش آندومتر رحم را توصیف می‌کند",
    },
    {
      value: "item-2",
      question: "چرخه قاعدگی چیه؟",
      answer:
        "چرخه قاعدگی شامل چرخه تخمدان و چرخه رحم است. چرخهٔ تخمدان، تغییرات صورت گرفته در فولیکول‌های تخمدان و چرخهٔ رحم، تغییرات صورت گرفته در پوشش آندومتر رحم را توصیف می‌کند",
    },
    {
      value: "item-3",
      question: "چرخه قاعدگی چیه؟",
      answer:
        "چرخه قاعدگی شامل چرخه تخمدان و چرخه رحم است. چرخهٔ تخمدان، تغییرات صورت گرفته در فولیکول‌های تخمدان و چرخهٔ رحم، تغییرات صورت گرفته در پوشش آندومتر رحم را توصیف می‌کند",
    },
  ];

function FAQ() {
  return (
    <section className="w-4xl mx-auto pt-14 pb-20">
      <p className="font-semibold text-4xl mb-10">سوالات پر تکرار</p>
      <Accordion type="single" collapsible={true} className="space-y-3">
        {faqItems.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            className="!border border-gray-200 rounded-2xl px-5 data-[state=open]:!border-b-6"
          >
            <AccordionTrigger className="accordion-trigger no-underline hover:no-underline cursor-pointer data-[state=open]:text-pink-500 data-[state=closed]:bg-transparent data-[state=closed]:text-gray-800 transition-colors duration-200">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default FAQ;