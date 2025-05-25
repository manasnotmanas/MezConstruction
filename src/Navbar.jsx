import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './assets'; // Adjust path if needed
import { path } from 'framer-motion/client';

const navItems = [
  { label: 'Services', path: '/Services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'FAQs', path: '/faqs' },
  { label: 'Process', path: '/process' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'About Us', path: '/about' },
  {label:'Career', path:'/Career'}
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#003049] text-white shadow-md font-poppins tracking-wide transition-all duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center mr-4">
            <img
              src={Logo}
              alt="NOIR STUDIO Logo"
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* Mobile toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#FDF0D5] focus:outline-none"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop nav */}
          <ul className="hidden lg:flex space-x-8 text-md">
            {navItems.map(({ label, path }) => (
              <li key={label}>
                <Link
                  to={path}
                  className={`transition-all duration-300 ease-in-out px-1 py-0.5 ${
                    location.pathname === path
                      ? 'text-[#c1121f] border-b-2 border-[#c1121f]'
                      : 'hover:text-[#c1121f] hover:border-b-2 hover:border-[#C1121F]'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#003049] border-t border-[#003049] transition-all duration-300">
          <ul className="flex flex-col items-start px-6 py-4 space-y-4 text-sm">
            {navItems.map(({ label, path }) => (
              <li key={label}>
                <Link
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={`block transition-all duration-300 ease-in-out ${
                    location.pathname === path
                      ? 'text-[#c1121f] border-b-2 border-[#c1121f]'
                      : 'hover:text-[#c1121f] hover:border-b-2 hover:border-[#c1121f]'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
