// src/components/ContactSection.jsx
import { CONTACT } from "../config/contact";

const details = [
  {
    label: "Phone",
    value: CONTACT.phoneDisplay,
    href: `tel:${CONTACT.phoneTel}`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: CONTACT.location,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section className="bg-gray-50 py-24 px-6" id="contact">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <span className="inline-block text-[#c9a84c] text-sm font-bold uppercase tracking-[0.2em] mb-3">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] leading-tight">
            Call to book a trial class
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Speak to the tutor directly about your child's class, board and timings.
          </p>
        </div>

        {/* Primary actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a
            href={`tel:${CONTACT.phoneTel}`}
            className="inline-flex items-center justify-center gap-3 bg-[#c9a84c] hover:bg-[#b8962f] text-[#0a1f44] font-bold px-8 py-4 rounded-xl transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            Call {CONTACT.phoneDisplay}
          </a>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {details.map(({ label, value, href, icon }) => {
            const Wrapper = href ? "a" : "div";
            return (
              <Wrapper
                key={label}
                {...(href ? { href } : {})}
                className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-5 hover:border-[#c9a84c]/40 transition-colors"
              >
                <div className="w-12 h-12 bg-[#0a1f44] text-[#c9a84c] rounded-xl flex items-center justify-center flex-shrink-0">
                  {icon}
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-gray-400">{label}</div>
                  <div className="text-[#0a1f44] font-semibold text-sm break-words">{value}</div>
                </div>
              </Wrapper>
            );
          })}
        </div>

      </div>
    </section>
  );
}
