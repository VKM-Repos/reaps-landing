"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is REAPS, and how does it work?",
    answer:
      "REAPS (Research Ethics Approval System) is an online platform designed to simplify and streamline the process of submitting, reviewing, tracking, and approving research ethics applications. It guides researchers through the submission process and enables ethics review boards to efficiently manage and review protocols.",
  },
  {
    question: "How do I submit a research protocol for ethics approval?",
    answer:
      "You can submit your research protocol through the REAPS platform by following the provided guidelines for application submission.",
  },
  {
    question: "Can I track the status of my application?",
    answer:
      "Yes, the REAPS platform allows you to track the progress and status of your application at any time.",
  },
  {
    question: "How is my data protected on REAPS?",
    answer:
      "REAPS ensures that all data is encrypted and adheres to strict privacy and security standards.",
  },
];

export function FAQ() {
  return (
    <section className="relative flex min-h-full w-full items-center justify-center overflow-hidden bg-white py-[8rem] p-2">
      <div className="font flex w-full flex-col items-center justify-center space-y-4">
        <span className="text-primary max-w-3xl text-[40px] text-center lg:text-left font-bold leading-normal">
          Frequently Asked Questions
        </span>
        <p className="text-gray-600 text-xl">
          If you have a question that isn&apos;t answered in our FAQs, please
          get in touch and let us know.
        </p>

        <div className="mx-auto w-full overflow-hidden pt-[4rem] md:max-w-[80%]">
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4 text-left "
          >
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>
                  <span className="!font-light text-primary text-left text-[18px]">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 flex flex-wrap">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
