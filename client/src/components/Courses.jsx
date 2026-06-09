import { useState } from "react";
 
const coursesData = {
  CBSE: [
    {
      class: "Class 7",
      topics: ["Integers & Fractions", "Algebra Basics", "Geometry", "Data Handling", "Ratio & Proportion"],
      duration: "3 months",
      sessions: "3 sessions/week",
    },
    {
      class: "Class 8",
      topics: ["Linear Equations", "Quadrilaterals", "Squares & Cubes", "Mensuration", "Exponents"],
      duration: "3 months",
      sessions: "3 sessions/week",
    },
    {
      class: "Class 9",
      topics: ["Number Systems", "Polynomials", "Coordinate Geometry", "Triangles", "Statistics"],
      duration: "4 months",
      sessions: "4 sessions/week",
    },
    {
      class: "Class 10",
      topics: ["Real Numbers", "Quadratic Equations", "Arithmetic Progressions", "Trigonometry", "Probability"],
      duration: "4 months",
      sessions: "4 sessions/week",
      highlight: true,
    },
    {
      class: "Class 11",
      topics: ["Sets & Functions", "Trigonometry", "Complex Numbers", "Permutations", "Straight Lines"],
      duration: "5 months",
      sessions: "5 sessions/week",
    },
    {
      class: "Class 12",
      topics: ["Relations & Functions", "Matrices", "Integrals", "Differential Equations", "Probability"],
      duration: "5 months",
      sessions: "5 sessions/week",
      highlight: true,
    },
  ],
  ICSE: [
    {
      class: "Class 7",
      topics: ["Number Theory", "Ratio & Proportion", "Algebra", "Geometry", "Mensuration"],
      duration: "3 months",
      sessions: "3 sessions/week",
    },
    {
      class: "Class 8",
      topics: ["Rational Numbers", "Linear Equations", "Percentage", "Profit & Loss", "Geometry"],
      duration: "3 months",
      sessions: "3 sessions/week",
    },
    {
      class: "Class 9",
      topics: ["Pure Arithmetic", "Commercial Maths", "Algebra", "Geometry", "Statistics"],
      duration: "4 months",
      sessions: "4 sessions/week",
    },
    {
      class: "Class 10",
      topics: ["GST & Banking", "Quadratic Equations", "Matrices", "Coordinate Geometry", "Trigonometry"],
      duration: "4 months",
      sessions: "4 sessions/week",
      highlight: true,
    },
    {
      class: "Class 11",
      topics: ["Sets & Relations", "Logarithms", "Complex Numbers", "Quadratics", "Sequences"],
      duration: "5 months",
      sessions: "5 sessions/week",
    },
    {
      class: "Class 12",
      topics: ["Functions", "Calculus", "Vectors", "Linear Programming", "Probability"],
      duration: "5 months",
      sessions: "5 sessions/week",
      highlight: true,
    },
  ],
};
 
export default function Courses() {
  const [activeBoard, setActiveBoard] = useState("CBSE");
 
  return (
    <section className="bg-gray-50 py-24 px-6" id="courses">
      <div className="max-w-7xl mx-auto">
 
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#c9a84c] text-sm font-bold uppercase tracking-[0.2em] mb-3">
            What We Teach
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] leading-tight">
            Courses Offered
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Structured curriculum for every class — built around board exam patterns.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-16 bg-[#c9a84c] rounded-full" />
          </div>
        </div>
 
        {/* CBSE / ICSE Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white border border-gray-200 rounded-2xl p-1.5 shadow-sm">
            {["CBSE", "ICSE"].map((board) => (
              <button
                key={board}
                onClick={() => setActiveBoard(board)}
                className={`px-10 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                  activeBoard === board
                    ? "bg-[#0a1f44] text-white shadow-md"
                    : "text-gray-500 hover:text-[#0a1f44]"
                }`}
              >
                {board}
              </button>
            ))}
          </div>
        </div>
 
        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData[activeBoard].map((course, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-7 shadow-sm border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                course.highlight
                  ? "border-[#c9a84c]/40 ring-1 ring-[#c9a84c]/20"
                  : "border-gray-100 hover:border-[#c9a84c]/20"
              }`}
            >
              {/* Popular badge */}
              {course.highlight && (
                <div className="absolute -top-3 left-6 bg-[#c9a84c] text-[#0a1f44] text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
 
              {/* Card header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-xl font-bold text-[#0a1f44]">{course.class}</h3>
                  <span className="inline-block mt-1 text-xs font-semibold bg-[#0a1f44]/5 text-[#0a1f44] px-2 py-0.5 rounded-full">
                    {activeBoard}
                  </span>
                </div>
                <div className="w-12 h-12 bg-[#0a1f44]/5 rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#0a1f44]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
 
              {/* Topics */}
              <ul className="space-y-2 mb-6">
                {course.topics.map((topic) => (
                  <li key={topic} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full flex-shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
 
              {/* Duration & sessions */}
              <div className="flex gap-3 mb-6">
                <div className="flex-1 bg-gray-50 rounded-xl p-3 text-center">
                  <div className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">Duration</div>
                  <div className="text-sm font-bold text-[#0a1f44]">{course.duration}</div>
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-3 text-center">
                  <div className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">Schedule</div>
                  <div className="text-sm font-bold text-[#0a1f44]">{course.sessions}</div>
                </div>
              </div>
 
              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                  course.highlight
                    ? "bg-[#c9a84c] hover:bg-[#b8962f] text-[#0a1f44]"
                    : "bg-[#0a1f44]/5 hover:bg-[#0a1f44] hover:text-white text-[#0a1f44]"
                }`}
              >
                Enquire Now
              </a>
            </div>
          ))}
        </div>
 
        {/* Bottom note */}
        <p className="text-center text-gray-400 text-sm mt-10">
          All batches include weekly doubt sessions + monthly progress reports.
          <span className="text-[#c9a84c] font-semibold"> First trial class is free.</span>
        </p>
 
      </div>
    </section>
  );
}