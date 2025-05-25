import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Initial Consultation",
    description: "We begin with an in-depth discussion to understand your needs, preferences, and budget.",
  },
  {
    title: "Site Inspection & Assessment",
    description: "Our experts visit the location to evaluate the site conditions, take measurements, and assess any challenges.",
  },
  {
    title: "Design & Planning",
    description: "Our architects and designers draft detailed blueprints and timelines tailored to your project.",
  },
  {
    title: "Permits & Documentation",
    description: "We handle necessary permits, inspections, and approvals to ensure your project is legally compliant.",
  },
  {
    title: "Construction Begins",
    description: "Our crew begins work with top-quality materials and safety measures, providing regular updates along the way.",
  },
  {
    title: "Final Touches & Handover",
    description: "We perform quality checks, add final finishes, and hand over the completed space ready for use.",
  }
];

export default function ConstructionProcess() {
  return (
    <section className="bg-[#003049] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#FDF0D5] mb-6">Our Construction Process</h2>
        <p className="text-[#C6C0B9] max-w-2xl mx-auto mb-12">
          From the first consultation to final delivery, we follow a streamlined process that ensures clarity, quality, and customer satisfaction every step of the way.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-[#780000] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-[#D6B583] mb-2">{step.title}</h3>
              <p className="text-[#F3EDE3] text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
