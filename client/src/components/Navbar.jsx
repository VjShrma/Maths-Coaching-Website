import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home",    to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "About",   to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="bg-[#0a1628] border-b-[3px] border-[#c9a84c] sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Brand */}
        <Link to="/" className="flex flex-col leading-tight" onClick={() => setOpen(false)}>
          <span className="text-[#c9a84c] font-bold text-lg tracking-wide font-serif">
            Vijay Sharma
          </span>
          <span className="text-[#7a9bbf] text-[0.65rem] tracking-widest uppercase">
            Maths Coaching · Class 7–12
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {navLinks.map(({ label, to }) => (
            <li key={label}>
              <Link
                to={to}
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 pb-0.5 border-b-2 ${
                  pathname === to
                    ? "text-[#c9a84c] border-[#c9a84c]"
                    : "text-gray-200 border-transparent hover:text-[#c9a84c] hover:border-[#c9a84c]"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/919XXXXXXXXX"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-bold px-4 py-2 rounded-md transition-colors duration-200"
        >
          📲 WhatsApp
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] p-1"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#c9a84c] transition-transform duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#c9a84c] transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#c9a84c] transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0e1f3a] border-t border-[#1e3a5f] px-6 pb-4 pt-2">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={() => setOpen(false)}
              className={`block py-3 border-b border-[#1e3a5f] text-sm font-semibold tracking-wide ${
                pathname === to ? "text-[#c9a84c]" : "text-gray-200"
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://wa.me/919XXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="mt-4 block text-center bg-[#25D366] text-white font-bold py-2.5 rounded-md"
          >
            📲 WhatsApp Us
          </a>
        </div>
      )}
    </nav>
  );
}