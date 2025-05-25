import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What types of construction services do you offer?",
    answer:
      "We provide end-to-end construction services including site prep, foundation work, framing, roofing, masonry, renovations, and interior finishes."
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, MSI Construction is fully licensed, bonded, and insured for all residential and commercial projects."
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary depending on project scope, but we provide a detailed schedule after our initial consultation."
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Absolutely. We offer free, no-obligation estimates after understanding your project requirements and visiting the site."
  },
  {
    question: "Do you handle permits and architectural plans?",
    answer:
      "Yes, we help with acquiring permits and can also coordinate or provide architectural planning if needed."
  }
];

export default function FAQsection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <motion.section
      className="bg-[#003049] text-white py-20 px-4 font-poppins"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-[#FDF0D5] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.p
          className="text-[#C6C0B9] mb-12 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Curious about how we work? Here's what most of our clients ask us.
        </motion.p>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-[#780000] rounded-xl overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left text-[#D6B583] text-lg font-medium focus:outline-none"
                onClick={() => toggle(index)}
              >
                {faq.question}
                <span className="text-xl transition-transform duration-300">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 text-[#F3EDE3] text-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
