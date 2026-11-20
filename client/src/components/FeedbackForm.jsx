// src/components/FeedbackForm.jsx
import { useState } from "react";

// Local testing: put REACT_APP_API_URL=http://localhost:8000 in client/.env.local
const API_BASE = process.env.REACT_APP_API_URL || "https://maths-coaching-backend.onrender.com";

const initialState = { name: "", rating: 0, message: "", canPublish: false };
const ratingLabels = ["", "Poor", "Fair", "Good", "Very good", "Excellent"];

function StarPicker({ value, onChange }) {
  const [hover, setHover] = useState(0);
  const active = hover || value;

  return (
    <div className="flex items-center gap-1" onMouseLeave={() => setHover(0)}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHover(star)}
          aria-label={`${star} out of 5`}
          className="p-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-9 h-9 transition-colors ${star <= active ? "text-[#c9a84c]" : "text-gray-200"}`}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </button>
      ))}
      <span className="ml-3 text-sm text-gray-500 min-w-[5rem]">{ratingLabels[active]}</span>
    </div>
  );
}

export default function FeedbackForm() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Enter your name.";
    if (formData.rating < 1) newErrors.rating = "Choose a star rating.";
    if (formData.message.trim().length < 10) newErrors.message = "Write at least 10 characters.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setServerError("");

    try {
      const response = await fetch(`${API_BASE}/api/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData(initialState);
      } else {
        setServerError(data.message || "Could not send your feedback. Please try again.");
      }
    } catch (err) {
      setServerError("Could not reach the server. Wait a minute and try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-gray-700 bg-white outline-none transition-all duration-200 focus:ring-2 focus:ring-[#c9a84c]/30 focus:border-[#c9a84c] ${
      errors[field] ? "border-red-400" : "border-gray-200"
    }`;

  return (
    <section className="bg-white py-24 px-6" id="feedback">
      <div className="max-w-2xl mx-auto">

        <div className="text-center mb-10">
          <span className="inline-block text-[#c9a84c] text-sm font-bold uppercase tracking-[0.2em] mb-3">
            Feedback
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] leading-tight">
            Tell us how we're doing
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Honest feedback helps the tutor improve and helps other parents decide.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0a1f44] mb-2">Thank you</h3>
              <p className="text-gray-500 mb-6">Your feedback has reached the tutor.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-[#0a1f44] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#112559] transition-colors"
              >
                Send more feedback
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>

              {serverError && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl">
                  {serverError}
                </div>
              )}

              <div>
                <label htmlFor="fb-name" className="block text-sm font-semibold text-gray-600 mb-1.5">
                  Your name
                </label>
                <input
                  id="fb-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength={80}
                  placeholder="e.g. Priya Mehta"
                  className={inputClass("name")}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <span className="block text-sm font-semibold text-gray-600 mb-1.5">Your rating</span>
                <StarPicker
                  value={formData.rating}
                  onChange={(rating) => {
                    setFormData((prev) => ({ ...prev, rating }));
                    if (errors.rating) setErrors((prev) => ({ ...prev, rating: "" }));
                  }}
                />
                {errors.rating && <p className="text-red-500 text-xs mt-1">{errors.rating}</p>}
              </div>

              <div>
                <label htmlFor="fb-message" className="block text-sm font-semibold text-gray-600 mb-1.5">
                  Your feedback
                </label>
                <textarea
                  id="fb-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={1000}
                  rows={5}
                  placeholder="What went well? What could be better?"
                  className={`${inputClass("message")} resize-none`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <label className="flex items-start gap-3 text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  name="canPublish"
                  checked={formData.canPublish}
                  onChange={handleChange}
                  className="mt-0.5 w-4 h-4 accent-[#c9a84c]"
                />
                You may show my feedback on this website.
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#c9a84c] hover:bg-[#b8962f] text-[#0a1f44] font-bold py-4 rounded-xl transition-colors duration-200 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send feedback"}
              </button>

              <p className="text-center text-gray-400 text-xs">
                Your feedback goes to the tutor only unless you tick the box above.
              </p>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}