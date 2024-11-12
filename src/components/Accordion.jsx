"use client";
import { useState } from "react";

export default function CustomAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-primaryBlack font-poppinsLight text-white p-5 w-1/2">
      <h1 className="text-4xl mb-5">MICRONEEDLING WITH PRP FAQs</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-2">
          <div
            onClick={() => toggleAccordion(index)}
            className="bg-primaryBlack text-white border border-white p-2 cursor-pointer rounded-md flex justify-between items-center"
          >
            <span>{faq.question}</span>
            <span>{openIndex === index ? "-" : "+"}</span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index
                ? "max-h-40 opacity-100 transform translate-y-0"
                : "max-h-0 opacity-0 -translate-y-2"
            } bg-primaryBlack text-white border border-white rounded-md`}
          >
            {openIndex === index && <p className="p-2">{faq.answer}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
