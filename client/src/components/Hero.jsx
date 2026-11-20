import { CONTACT } from "../config/contact";
export default function Hero() {
 
  return (
    <section className="relative min-h-screen bg-[#0a1f44] overflow-hidden flex items-center">
 
   {/*Added id attribute */}
    <section id="hero" className="relative min-h-screen bg-[#0a1f44] ..."></section>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c9a84c] opacity-5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#c9a84c] opacity-5 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />
 
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
 
        {/* Left side */}
        <div className="text-white">
 
          <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[#c9a84c] text-sm font-semibold px-4 py-2 rounded-full mb-6 tracking-wide">
            <span className="w-2 h-2 bg-[#c9a84c] rounded-full animate-pulse" />
            15+ Years of Teaching Excellence
          </div>
 
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-4">
            Master Maths with{" "}
            <span className="text-[#c9a84c]">Confidence</span>
          </h1>
 
          <h2 className="text-2xl md:text-3xl font-light text-blue-200 mb-6">
            — Arun Kumar Sharma
          </h2>
 
          <p className="text-blue-100/80 text-lg leading-relaxed mb-4 max-w-lg">
            Expert Maths coaching for <strong className="text-white">Class 7–12</strong>, CBSE &amp; ICSE.
            Building strong fundamentals and exam confidence — one student at a time.
          </p>
 
          <ul className="text-blue-200/70 text-sm mb-10 space-y-2">
            {[
              "One-on-one teaching — personalised attention guaranteed",
              "Doubts cleared at the end of every class",
              "Regular tests + detailed progress reports",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span className="text-[#c9a84c] mt-0.5">✓</span>
                {point}
              </li>
            ))}
          </ul>
 
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={ "tel:" +CONTACT.phoneTel}
              className="inline-flex items-center justify-center gap-3 bg-[#c9a84c] hover:bg-[#b8962f] text-[#0a1f44] font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-lg hover:-translate-y-0.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              Call Now
            </a>
          </div>
 
          <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
            {[
              { number: "500+", label: "Students Taught" },
              { number: "98%", label: "Pass Rate" },
              { number: "15+", label: "Years Experience" },
            ].map(({ number, label }) => (
              <div key={label}>
                <div className="text-2xl font-bold text-[#c9a84c]">{number}</div>
                <div className="text-blue-200/60 text-xs uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </div>
 
        {/* Right side — photo */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-72 h-96 md:w-80 md:h-[440px] bg-gradient-to-br from-[#112559] to-[#0a1f44] border border-white/10 rounded-3xl overflow-hidden flex flex-col items-center justify-center text-center p-6">
            <div className="absolute inset-0 rounded-3xl border-2 border-[#c9a84c]/20 scale-105 rotate-2 pointer-events-none" />
            <div className="w-32 h-32 rounded-full bg-[#c9a84c]/10 border-2 border-[#c9a84c]/30 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-[#c9a84c]/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
            </div>
            <p className="text-[#c9a84c] font-bold text-lg">Arun Kumar Sharma</p>
            <p className="text-blue-200/60 text-sm mt-1">M.Sc. Mathematics</p>
            <p className="text-blue-200/50 text-xs mt-1">Delhi University</p>
            <div className="mt-6 bg-[#c9a84c]/10 border border-[#c9a84c]/20 rounded-xl px-4 py-3">
              <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-wider">Replace with your photo</p>
            </div>
          </div>
        </div>
 
      </div>
 
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1200 60" xmlns="http://www.w3.org/2000/svg" className="w-full text-white fill-current">
          <path d="M0,30 C300,60 900,0 1200,30 L1200,60 L0,60 Z" />
        </svg>
      </div>
 
    </section>
  );
}