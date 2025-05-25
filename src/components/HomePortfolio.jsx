import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Portfolio1, Portfolio2, Portfolio3 } from "../assets";
import { motion } from "framer-motion";

export default function Portfolio() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.3 + 0.2,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
    }));

    function animate() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(205, 133, 63, ${p.alpha})`; // Dust color (sienna)
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });
  }, []);

  const portfolioItems = [
    {
      title: "Modern House",
      description: "A contemporary design with sustainable materials.",
      image: Portfolio1,
    },
    {
      title: "Luxury Apartment",
      description: "High-end finishes and spacious interiors.",
      image: Portfolio2,
    },
    {
      title: "Office Renovation",
      description: "Transforming workspaces with innovative designs.",
      image: Portfolio3,
    },
  ];

  return (
    <section className="relative bg-[#003049] py-16 px-4 md:px-12 overflow-hidden">
      {/* Construction dust animation background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#660f09] mb-4">
          Our Portfolio
        </h2>
        <p className="text-[#FDF0D5] mb-8 max-w-2xl mx-auto">
          Take a look at some of our latest projects, showcasing our dedication to
          quality and craftsmanship.
        </p>

        <div className="mb-12">
          <Link
            to="/portfolio"
            className="inline-block bg-[#780000] text-[#FDF0D5] font-semibold py-2 px-6 rounded-full transition-all duration-500 ease-in-out hover:bg-[#C1121F]"
          >
            Know More
          </Link>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="group relative overflow-hidden rounded-2xl transform transition-all duration-500 ease-in-out hover:-translate-y-2 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-xl font-semibold text-[#AD7A32] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
