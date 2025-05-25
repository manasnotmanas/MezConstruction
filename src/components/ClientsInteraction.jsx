import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sophia Martinez",
    quote: "MSI Construction transformed our vision into reality with unmatched professionalism and quality.",
    company: "Homeowner, California"
  },
  {
    name: "David Chen",
    quote: "Reliable, timely, and incredibly skilled team. Highly recommended for any renovation work!",
    company: "Business Owner, Oregon"
  },
  {
    name: "Amina Patel",
    quote: "The best experience I’ve had with any contractor. Attention to detail was top-notch.",
    company: "Architect, Washington"
  },
  {
    name: "Liam Johnson",
    quote: "From foundation to finishing, everything was executed flawlessly. Truly outstanding work!",
    company: "Real Estate Developer, Nevada"
  }
];

export default function ClientsInteraction() {
  return (
    <section className="bg-[#003049] text-white py-20 ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#FDF0D5] mb-6">What Our Clients Say</h2>
        <p className="text-[#C6C0B9] mb-12 max-w-3xl mx-auto text-lg">
          We’re proud to have earned the trust of our clients. Here’s what they have to say about working with us.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-[#780000] p-6 rounded-xl shadow-md text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <p className="text-[#F3EDE3] text-md italic mb-4">"{testimonial.quote}"</p>
              <h4 className="text-[#D6B583] font-semibold text-lg">{testimonial.name}</h4>
              <span className="text-[#C6C0B9] text-sm">{testimonial.company}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
