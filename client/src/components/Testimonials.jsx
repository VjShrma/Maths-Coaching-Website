
const testimonials = [
  {
    name: "Priya Mehta",
    role: "Parent of Class 10 student",
    board: "CBSE",
    rating: 5,
    text: "My daughter went from scoring 54% to 91% in Maths in just one semester. The teaching style here is very different — concepts are explained so clearly that she now actually enjoys solving problems.",
  },
  {
    name: "Rakesh Verma",
    role: "Parent of Class 12 student",
    board: "CBSE",
    rating: 5,
    text: "Board exam preparation was excellent. Regular mock tests and detailed feedback made all the difference. My son scored 95 in Maths in his boards. Highly recommend to every parent.",
  },
  {
    name: "Sunita Agarwal",
    role: "Parent of Class 9 student",
    board: "ICSE",
    rating: 5,
    text: "We tried two other tutors before this. The difference is night and day. Small batch size means my child actually gets attention. Doubt sessions on Saturdays are a brilliant idea.",
  },
  {
    name: "Amit Sharma",
    role: "Parent of Class 8 student",
    board: "CBSE",
    rating: 4,
    text: "Very systematic approach. Monthly progress reports keep us informed as parents. My son has become much more confident in Maths and no longer dreads exams.",
  },
];
 
function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 ${star <= rating ? "text-[#c9a84c]" : "text-gray-200"}`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}
 
export default function Testimonials() {
  return (
    <section className="bg-white py-24 px-6" id="testimonials">
      <div className="max-w-7xl mx-auto">
 
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#c9a84c] text-sm font-bold uppercase tracking-[0.2em] mb-3">
            What Parents Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] leading-tight">
            Results speak for themselves
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Hundreds of students have transformed their relationship with Maths.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-16 bg-[#c9a84c] rounded-full" />
          </div>
        </div>
 
        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Quote icon */}
              <div className="text-[#c9a84c] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
 
              {/* Review text */}
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">{t.text}</p>
 
              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-[#0a1f44] flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-[#0a1f44] text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
                <div className="text-right">
                  <StarRating rating={t.rating} />
                  <span className="text-xs text-gray-400 mt-1 block">{t.board}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
 
        {/* Stats strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "500+", label: "Students Taught" },
            { number: "98%", label: "Pass Rate" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "15+", label: "Years Experience" },
          ].map(({ number, label }) => (
            <div key={label} className="text-center bg-[#0a1f44] rounded-2xl py-6">
              <div className="text-3xl font-bold text-[#c9a84c]">{number}</div>
              <div className="text-blue-200/60 text-xs uppercase tracking-wider mt-1">{label}</div>
            </div>
          ))}
        </div>
 
      </div>
    </section>
  );
}