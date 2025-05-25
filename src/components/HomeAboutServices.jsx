import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  { title: "Site Preparation", description: "Land clearing, excavation, and grading to prepare for construction." },
  { title: "Foundation Work", description: "Concrete foundations, footings, and structural groundwork." },
  { title: "Framing", description: "Wood and steel framing for residential and commercial projects." },
  { title: "Roofing", description: "Installation of durable, weather-resistant roofing systems." },
  { title: "Masonry", description: "Brickwork, stone, and concrete block construction with precision." },
  { title: "Renovations", description: "Remodeling and upgrades for residential and commercial properties." }
];

export default function AboutServices() {
  const canvasRef = useRef(null);

  useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const particles = Array.from({ length: 80 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    radius: Math.random() * 2 + 1,
    alpha: Math.random() * 0.3 + 0.2,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.3,
  }));

  function animate() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 180, 150, ${p.alpha})`; // earthy tone
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > w || p.y < 0 || p.y > h) {
        p.x = Math.random() * w;
        p.y = Math.random() * h;
      }
    });
    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener("resize", () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });
}, []);


  return (
    <section className="relative overflow-hidden bg-[#003049] text-[#8A6E29] py-16 px-4">
      {/* shooting stars background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#C1121F] mb-4">Our Services</h2>
        <p className="mb-8 text-lg text-[#F3E2C5]">
          We provide top-notch construction services tailored to meet every client’s needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#FDF0D5] text-[#780000] p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-[#2B1A10]">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Learn More Button */}
        <Link
          to="/services"
          className="inline-block bg-[#780000] text-[#FDF0D5] font-semibold py-2 px-6 rounded-full transition-all duration-300 hover:bg-[#C1121F] hover:text-white"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
