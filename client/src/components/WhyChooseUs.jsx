import useInView from "../hooks/useInView";

const reasons = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Small Batch Sizes",
    description:
      "Maximum 10–12 students per batch ensures every child gets individual attention, not lost in a crowd.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Regular Tests & Reports",
    description:
      "Weekly chapter tests and monthly progress reports keep parents informed and students on track.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Doubt Clearing Sessions",
    description:
      "Dedicated doubt sessions every Saturday — students never carry confusion into the next topic.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "CBSE & ICSE Expertise",
    description:
      "Deep knowledge of both boards — curriculum, exam patterns, marking schemes, and board paper strategies.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Concept-First Teaching",
    description:
      "No rote learning. Students understand the 'why' behind every formula — making problem-solving natural.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "15+ Years of Results",
    description:
      "Hundreds of students have gone from struggling to scoring 90+ marks — track record speaks for itself.",
  },
];
 
export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
 
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#c9a84c] text-sm font-bold uppercase tracking-[0.2em] mb-3">
            Why Parents Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] leading-tight">
            More than just a tuition class
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            We build mathematical thinking, not just exam marks.
          </p>
          {/* Gold underline */}
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-16 bg-[#c9a84c] rounded-full" />
          </div>
        </div>
 
        {/* Grid of reason cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-[#c9a84c]/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#0a1f44]/5 group-hover:bg-[#0a1f44] text-[#0a1f44] group-hover:text-[#c9a84c] rounded-xl mb-5 transition-all duration-300">
                {reason.icon}
              </div>
 
              {/* Number accent */}
              <div className="absolute top-6 right-6 text-5xl font-black text-gray-50 group-hover:text-[#c9a84c]/10 select-none transition-colors duration-300">
                {String(index + 1).padStart(2, "0")}
              </div>
 
              <h3 className="text-xl font-bold text-[#0a1f44] mb-3">{reason.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
 
        {/* Bottom CTA strip */}
        <div className="mt-16 bg-[#0a1f44] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h3 className="text-2xl font-bold mb-2">Ready to see the difference?</h3>
            <p className="text-blue-200/70">Book a free trial class — no commitment, no fees.</p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-[#c9a84c] hover:bg-[#b8962f] text-[#0a1f44] font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-[#c9a84c]/30 hover:shadow-xl whitespace-nowrap"
          >
            Book Free Trial Class →
          </a>
        </div>
 
      </div>
    </section>
  );
}