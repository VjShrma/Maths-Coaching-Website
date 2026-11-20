// src/components/Footer.jsx
import { CONTACT } from "../config/contact";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "Courses", href: "#courses" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Feedback", href: "#feedback" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1f44] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white">Arun Kumar Sharma</h3>
            <p className="text-[#c9a84c] text-sm font-semibold tracking-wide uppercase mt-0.5">Maths Coaching · Class 7–12</p>
          </div>
          <p className="text-blue-200/60 text-sm leading-relaxed max-w-sm mb-6">
            One-on-one maths coaching for CBSE and ICSE students, Class 7 through 12.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="text-blue-200/60 hover:text-[#c9a84c] text-sm transition-colors duration-200">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-5">Contact</h4>
          <ul className="space-y-4">
            <li>
              <a href={`tel:${CONTACT.phoneTel}`} className="text-blue-200/60 hover:text-white text-sm transition-colors">
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="text-blue-200/60 hover:text-white text-sm transition-colors break-words">
                {CONTACT.email}
              </a>
            </li>
            <li className="text-blue-200/60 text-sm">{CONTACT.location}</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-200/40 text-xs">
            © {new Date().getFullYear()} Arun Kumar Sharma Maths Coaching. All rights reserved.
          </p>
          <p className="text-blue-200/40 text-xs">CBSE and ICSE · Class 7–12</p>
        </div>
      </div>

    </footer>
  );
}
