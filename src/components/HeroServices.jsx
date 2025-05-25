import React from "react";

const services = [
  { title: "Site Preparation", description: "Land clearing, excavation, and grading for smooth construction." },
  { title: "Foundation Work", description: "Strong foundations with concrete footings and groundwork." },
  { title: "Framing", description: "Steel and timber framing for reliable structure." },
  { title: "Roofing", description: "Weather-resistant and long-lasting roofing solutions." },
  { title: "Masonry", description: "Expert brickwork, stone, and concrete block craftsmanship." },
  { title: "Renovations", description: "Modern upgrades for residential and commercial spaces." },
  { title: "Interior Finishing", description: "From drywall to detailed trims — clean and complete finishes." }
];

export default function ServicesPage() {
  return (
    <div className="bg-[#003049] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-[#003049]">
        <h1 className="text-4xl md:text-5xl font-bold text-[#FDF0D5] mb-4 animate-fade-in-up">
          Services We Provide
        </h1>
        <p className="max-w-3xl mx-auto text-[#B3B4BD] text-lg animate-fade-in-up delay-300">
          At MSI Construction, we offer a comprehensive range of services designed to meet all your building, restoration, and renovation needs.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#660f09] rounded-2xl p-6 shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 hover:bg-[#7a1d11] hover:shadow-2xl fade-in-up"
              style={{
                animationDelay: `${index * 0.15}s`,
                animation: "fade-in-up 0.8s ease forwards"
              }}
            >
              <h3 className="text-xl font-semibold text-[#D6B583] mb-2 group-hover:text-[#F7E7CE] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[#C6C0B9] text-sm group-hover:text-[#F3EDE3] transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Animation Styles */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in-up {
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
