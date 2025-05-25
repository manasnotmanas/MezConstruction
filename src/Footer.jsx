import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Services", path: "/Services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Reviews", path: "/reviews" },
  { label: "FAQs", path: "/faqs" },
  { label: "Process", path: "/process" },
  { label: "Contact Us", path: "/contact" },
  { label: "About Us", path: "/about" },
];

export default function Footer() {
  return (
    <footer className="bg-[#003049] text-white  font-poppins">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Logo and Description */}
        <div>
          <h2 className="text-xl font-bold text-[#C1121F] mb-2">MSI CONSTRUCTION</h2>
          <p className="text-sm text-[#C1121F]">
            We create, we design, we fulfill your dream.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-md font-semibold text-white mb-2">Explore</h3>
          <ul className="space-y-2 text-sm">
            {footerLinks.map(({ label, path }) => (
              <li key={label}>
                <Link
                  to={path}
                  className="text-[#B3B4BD] hover:text-[#780000] transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact / Info */}
        <div>
          <h3 className="text-md font-semibold text-white mb-2">Get in Touch</h3>
          <p className="text-sm text-[#B3B4BD]">Email: hello@noirstudio.com</p>
          <p className="text-sm text-[#B3B4BD]">Phone: +1 (234) 567-8901</p>
        </div>
      </div>

      <div className="text-center text-xs text-[#B3B4BD] py-4 border-t border-[#B3B4BD]">
        © {new Date().getFullYear()} NOIR STUDIO. All rights reserved.
      </div>
    </footer>
  );
}
