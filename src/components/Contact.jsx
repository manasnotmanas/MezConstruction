import React from "react";
import { motion } from "framer-motion";

export default function ContactManual() {
  return (
    <section className="bg-[#003049] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#FDF0D5] mb-6">Send Your Details Manually</h2>
        <p className="text-[#C6C0B9] max-w-2xl mx-auto mb-12">
          If you prefer, you can directly send us your details via email or phone. We’ll be happy to assist you!
        </p>

        <div className="flex justify-center gap-12">
          {/* Email Link */}
          <motion.div
            className="bg-[#780000] rounded-2xl p-6 shadow-lg w-80 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-[#FDF0D5] mb-4">Email Us</h3>
            <p className="text-[#F3EDE3] mb-4 text-sm">
              Send us an email with your details, and we'll get back to you as soon as possible.
            </p>
            <a
              href="mailto:contact@yourcompany.com"
              className="bg-[#FDF0D5] text-black py-2 px-6 rounded-xl inline-block hover:bg-[#2C2E3A] transition-all duration-300"
            >
              Send Email
            </a>
          </motion.div>

          {/* Phone Link */}
          <motion.div
            className="bg-[#780000] rounded-2xl p-6 shadow-lg w-80 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-[#FDF0D5] mb-4">Call Us</h3>
            <p className="text-[#F3EDE3] mb-4 text-sm">
              Prefer to speak directly? Call us now at the number below.
            </p>
            <a
              href="tel:+1234567890"
              className="bg-[#FDF0D5] text-black py-2 px-6 rounded-xl inline-block hover:bg-[#2C2E3A] transition-all duration-300"
            >
              Call Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
