import { useState } from "react";
import { CONTACT } from "../config/contact";
import { Link, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Home",    href: "#hero" },
  { label: "Courses", href: "#courses" },
  { label: "About",   href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);

    // If not on home page, go home first then scroll
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-[#0a1628] border-b-[3px] border-[#c9a84c] sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Brand */}
        <Link to="/" className="flex flex-col leading-tight" onClick={() => setOpen(false)}>
          <span className="text-[#c9a84c] font-bold text-lg tracking-wide font-serif">
            Arun Sharma
          </span>
          <span className="text-[#7a9bbf] text-[0.65rem] tracking-widest uppercase">
            Maths Coaching · Class 7–12
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="text-sm font-semibold tracking-wide transition-colors duration-200 pb-0.5 border-b-2 text-gray-200 border-transparent hover:text-[#c9a84c] hover:border-[#c9a84c] cursor-pointer"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CALL CTA */}
        <a
           href={`tel:${CONTACT.phoneTel}`}
           className="hidden md:flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8962f] text-[#0a1f44] text-sm font-bold px-4 py-2 rounded-md transition-colors duration-200"
        >
           Call Now
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
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className="block py-3 border-b border-[#1e3a5f] text-sm font-semibold tracking-wide text-gray-200 hover:text-[#c9a84c] cursor-pointer"
            >
              {label}
            </a>
          ))}
         <a
              href={`tel:${CONTACT.phoneTel}`}
              className="mt-4 block text-center bg-[#c9a84c] text-[#0a1f44] font-bold py-2.5 rounded-md"
          >
              Call Now
         </a>
        </div>
      )}
    </nav>
  );
}