import { useState } from "react";
 
const initialState = {
  studentName: "",
  parentName: "",
  phone: "",
  className: "",
  board: "",
  message: "",
};
 
export default function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
 
  const validate = () => {
    const newErrors = {};
    if (!formData.studentName.trim()) newErrors.studentName = "Required";
    if (!formData.parentName.trim()) newErrors.parentName = "Required";
    if (!formData.phone.trim() || formData.phone.length < 10) newErrors.phone = "Enter valid 10-digit number";
    if (!formData.className) newErrors.className = "Required";
    if (!formData.board) newErrors.board = "Required";
    return newErrors;
  };
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Frontend only for now — backend wiring in Day 6
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData(initialState);
  };
 
  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-gray-700 bg-white outline-none transition-all duration-200 focus:ring-2 focus:ring-[#c9a84c]/30 focus:border-[#c9a84c] ${
      errors[field] ? "border-red-400" : "border-gray-200"
    }`;
 
  return (
    <section className="bg-gray-50 py-24 px-6" id="contact">
      <div className="max-w-7xl mx-auto">
 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
 
          {/* Left — Info */}
          <div>
            <span className="inline-block text-[#c9a84c] text-sm font-bold uppercase tracking-[0.2em] mb-3">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] leading-tight mb-6">
              Book a Free <span className="text-[#c9a84c]">Trial Class</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Fill out the form and we'll get back to you within 24 hours to schedule your child's free trial class.
            </p>
 
            {/* Contact details */}
            <div className="space-y-5">
              {[
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Phone",
                  value: "+91 98765 43210",
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "arun.sharma@mathscoaching.com",
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Location",
                  value: "Sector 22, Chandigarh",
                },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0a1f44] text-[#c9a84c] rounded-xl flex items-center justify-center flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">{label}</div>
                    <div className="text-[#0a1f44] font-semibold text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
 
          {/* Right — Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
 
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0a1f44] mb-2">Enquiry Received!</h3>
                <p className="text-gray-500 mb-6">We'll contact you within 24 hours to schedule the free trial class.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#0a1f44] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#112559] transition-colors"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-[#0a1f44] mb-6">Enquiry Form</h3>
 
                {/* Student & Parent name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      Student Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder="Student's name"
                      className={inputClass("studentName")}
                    />
                    {errors.studentName && <p className="text-red-400 text-xs mt-1">{errors.studentName}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      Parent Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="Parent's name"
                      className={inputClass("parentName")}
                    />
                    {errors.parentName && <p className="text-red-400 text-xs mt-1">{errors.parentName}</p>}
                  </div>
                </div>
 
                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className={inputClass("phone")}
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
 
                {/* Class & Board */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      Class <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="className"
                      value={formData.className}
                      onChange={handleChange}
                      className={inputClass("className")}
                    >
                      <option value="">Select class</option>
                      {[7, 8, 9, 10, 11, 12].map((c) => (
                        <option key={c} value={`Class ${c}`}>Class {c}</option>
                      ))}
                    </select>
                    {errors.className && <p className="text-red-400 text-xs mt-1">{errors.className}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      Board <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="board"
                      value={formData.board}
                      onChange={handleChange}
                      className={inputClass("board")}
                    >
                      <option value="">Select board</option>
                      <option value="CBSE">CBSE</option>
                      <option value="ICSE">ICSE</option>
                    </select>
                    {errors.board && <p className="text-red-400 text-xs mt-1">{errors.board}</p>}
                  </div>
                </div>
 
                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                    Message / Query
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any specific topics, timing preferences, or questions..."
                    rows={4}
                    className={`${inputClass("message")} resize-none`}
                  />
                </div>
 
                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#c9a84c] hover:bg-[#b8962f] text-[#0a1f44] font-bold py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-[#c9a84c]/30 hover:shadow-xl"
                >
                  Book Free Trial Class
                </button>
 
                <p className="text-center text-gray-400 text-xs">
                  No payment required. We'll call you to confirm the slot.
                </p>
              </form>
            )}
          </div>
 
        </div>
      </div>
    </section>
  );
}