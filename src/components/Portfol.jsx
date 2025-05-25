import React from "react";
import { motion } from "framer-motion";
import {
  ModernFamilyHouse,
  Luxuryvilla,
  industrialWarehouse,
  downtown,
  RetailsPlaza,
  CommunityCenter,
} from "../assets";

const projects = [
  {
    title: "Modern Family Home",
    description:
      "A 4-bedroom contemporary house with open-concept living spaces and energy-efficient design.",
    imageUrl: ModernFamilyHouse,
  },
  {
    title: "Downtown Office Complex",
    description:
      "A multi-story commercial building featuring glass facades and sustainable materials.",
    imageUrl: downtown,
  },
  {
    title: "Luxury Villa Renovation",
    description:
      "Complete overhaul of a seaside villa, including pool installation and landscape design.",
    imageUrl: Luxuryvilla,
  },
  {
    title: "Industrial Warehouse",
    description:
      "High-capacity storage facility with custom loading docks and reinforced structure.",
    imageUrl: industrialWarehouse,
  },
  {
    title: "Retail Plaza",
    description:
      "Open-air shopping complex with pedestrian-friendly walkways and modern storefronts.",
    imageUrl: RetailsPlaza,
  },
  {
    title: "Community Center",
    description:
      "Multi-use public space with gym, meeting rooms, and eco-friendly utilities.",
    imageUrl: CommunityCenter,
  },
];

export default function Portfoliocard() {
  return (
    <section className="bg-[#003049] text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#FDF0D5] text-center mb-12">
          Our Portfolio
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              className="bg-[#780000] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <img
                src={proj.imageUrl}
                alt={proj.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#D6B583] mb-2">
                  {proj.title}
                </h3>
                <p className="text-[#F3EDE3] text-sm">{proj.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
