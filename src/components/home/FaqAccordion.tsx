"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { FAQ } from "@/lib/data";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <Section className="bg-warm-white">
      <Container>
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Have questions about our locksmith services? We have answers.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto divide-y divide-warm-white-dark rounded-lg border border-warm-white-dark bg-white overflow-hidden">
          {FAQ.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index}>
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer hover:bg-warm-white transition-colors"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-base font-semibold leading-snug"
                    style={{ color: "#1B3A5C" }}
                  >
                    {item.question}
                  </span>
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold transition-colors"
                    style={{ backgroundColor: isOpen ? "#D4A03C" : "#1B3A5C" }}
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-muted leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
