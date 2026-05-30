
export default function Hero() {
  const phoneNumber = "919876543210";
  const whatsappMessage = encodeURIComponent(
    "Hello! I am interested in maths coaching for my child. Please share details."
  );
 
  return (
    <section className="relative min-h-screen bg-[#0a1f44] overflow-hidden flex items-center">
 
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
              "Small batch sizes — personalised attention guaranteed",
              "Doubt-clearing sessions every week",
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
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-3 bg-[#c9a84c] hover:bg-[#b8962f] text-[#0a1f44] font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-lg hover:-translate-y-0.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              Call Now
            </a>
 
            <a
              href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="#25D366" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
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