import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
   const [formData, setFormData] = useState({email: "", password: ""});
   const [error, setError] = useState("");
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

   const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value });
    setError("");
   };

   const handleSubmit = async (e) => {
     e.preventDefault();
     setLoading(true);

     try {
        const response = await fetch("http://localhost:8000/api/auth/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (data.success) {
            localStorage.setItem("adminToken", data.token);
            navigate("/admin.dashboard");
        } else {
        setError(data.message || "Invalid credentials");
        }

     } catch (err) {
        setError("Cannot connect to server. Make sure backend is running.");
     } finally {
        setLoading(false);
     }
   };
   
   return (
    <div className="in-h-screen bg-[#0a1f44] flex items-center jsutfiy-center px-4">
     <div className="bg-white rounded-3x1 p-10 w-full max-w-md shadow-2x1">
        
    {/*Header */} 
    <div className="text-center mb-8">
    <div className="w-16 h-16 bg-[#0a1f44] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#c9a84c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-[#0a1f44]">Admin Login</h1>
          <p className="text-gray-400 text-sm mt-1">Maths Coaching Dashboard</p>
        </div>
 
        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl mb-6">
            {error}
          </div>
        )}
 
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@mathscoaching.com"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:ring-2 focus:ring-[#c9a84c]/30 focus:border-[#c9a84c] transition-all"
            />
          </div>
 
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:ring-2 focus:ring-[#c9a84c]/30 focus:border-[#c9a84c] transition-all"
            />
          </div>
 
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#c9a84c] hover:bg-[#b8962f] text-[#0a1f44] font-bold py-4 rounded-xl transition-all duration-200 disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
 
        <p className="text-center text-gray-400 text-xs mt-6">
          This page is for admin use only.
        </p>
      </div>
    </div>
  );
}