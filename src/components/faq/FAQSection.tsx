// src/components/faq/FAQSection.tsx
import React, { useState } from "react";
import { HelpCircle } from "lucide-react";
import FAQItem from "./FAQItem";
import { faqs } from "./faqData";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-accent mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our telehealth services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFAQ === index}
              onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
