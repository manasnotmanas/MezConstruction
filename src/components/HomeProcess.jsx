import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function OurProcess() {
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
    dy: (Math.random() - 0.5) * 0.3,
  }));

  function animate() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 180, 150, ${p.alpha})`; // subtle dusty beige
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;

      // reset particle if it leaves the view
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

  const steps = [
    {
      title: "Consultation",
      description:
        "We begin by understanding your vision and requirements, providing expert advice on how we can help bring it to life.",
    },
    {
      title: "Design & Planning",
      description:
        "Our team collaborates with you to create a detailed design and project plan that aligns with your goals and budget.",
    },
    {
      title: "Execution & Completion",
      description:
        "Our skilled professionals begin the work, ensuring high-quality results, timely delivery, and complete customer satisfaction.",
    },
  ];

  return (
    <section className="relative bg-[#003049] py-16  md:px-12 overflow-hidden">
      {/* Shooting stars canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[#660f09] mb-4">
          Our Process
        </h2>

        <p className="text-white mb-12 max-w-2xl mx-auto">
          A seamless process from start to finish. We work closely with you to ensure every step is clear
          and executed with precision.
        </p>

        <div className="mb-12">
          <Link
            to="/process"
            className="inline-block bg-[#780000] text-[#FDF0D5] font-semibold py-2 px-6 rounded-full shadow-inner transition-all duration-500 ease-in-out hover:bg-[#C1121F]"
          >
            Know More
          </Link>
        </div>

        {/* Process Cards with scroll animation */}
        <div className="flex flex-col lg:flex-row justify-center gap-6 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="bg-[#FDF0D5] text-[#780000] p-8 rounded-2xl transform transition-all duration-500 ease-in-out hover:-translate-y-2 hover:scale-105 hover:bg-[#660F09]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <h3 className="text-xl font-semibold text-[#660F09] mb-4">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}

          {/* Connecting line (desktop only) */}
          <div className="absolute top-1/2 left-0 right-0 -z-10 h-1 bg-[#AD7A32] hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
