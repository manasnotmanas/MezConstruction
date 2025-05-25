import React from "react";
import { motion } from "framer-motion";

export default function AboutUsexport() {
  return (
    <section className="bg-[#003049] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#FDF0D5] mb-6">About Us</h2>
        <p className="text-[#C6C0B9] max-w-2xl mx-auto mb-12">
          We are dedicated to delivering high-quality construction services, combining innovation and craftsmanship to bring your vision to life.
        </p>

        {/* Company Info Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-16">
          <motion.div
            className="bg-[#780000] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-[#D6B583] mb-4">Our Mission</h3>
            <p className="text-[#F3EDE3] text-sm">
              Our mission is to deliver unparalleled quality and customer service while maintaining the highest standards of integrity and innovation. We aim to build long-term relationships with our clients, based on trust and performance.
            </p>
          </motion.div>

          <motion.div
            className="bg-[#780000] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-[#D6B583] mb-4">Our Values</h3>
            <ul className="text-[#F3EDE3] list-disc list-inside text-sm">
              <li>Commitment to Excellence</li>
              <li>Customer-Centric Approach</li>
              <li>Transparency and Integrity</li>
              <li>Innovation and Efficiency</li>
              <li>Safety and Quality Assurance</li>
            </ul>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="bg-[#780000] p-12 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold text-[#D6B583] mb-4">Meet Our Team</h3>
          <p className="text-[#F3EDE3] text-sm mb-8">
            Our team is composed of skilled professionals who are passionate about construction and dedicated to delivering the best results. Together, we combine experience and expertise to turn your vision into reality.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <motion.div
              className="bg-[#2C2E3A] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-xl font-semibold text-[#D6B583] mb-2">John Doe</h4>
              <p className="text-[#F3EDE3] text-sm mb-4">CEO & Founder</p>
              <p className="text-[#C6C0B9] text-sm">John has over 20 years of experience in the construction industry and is passionate about building innovative and sustainable projects.</p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              className="bg-[#2C2E3A] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-xl font-semibold text-[#D6B583] mb-2">Jane Smith</h4>
              <p className="text-[#F3EDE3] text-sm mb-4">Lead Architect</p>
              <p className="text-[#C6C0B9] text-sm">Jane is a talented architect who specializes in designing modern, functional, and sustainable spaces for residential and commercial properties.</p>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              className="bg-[#2C2E3A] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-xl font-semibold text-[#D6B583] mb-2">Michael Lee</h4>
              <p className="text-[#F3EDE3] text-sm mb-4">Project Manager</p>
              <p className="text-[#C6C0B9] text-sm">Michael is responsible for overseeing the execution of each project, ensuring that timelines, budgets, and quality standards are met.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
