import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
    const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("adminToken");
        if (!token) {
            navigate("/admin");
            return;
        }

        fetchEnquiries(token);
    }, []);

    const fetchEnquiries = async (token) => {
  try {
    const response = await fetch("http://localhost:8000/api/enquiry", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();

    if (data.success) {
      setEnquiries(data.data);
    } else {
      setError("Failed to fetch enquiries");
      if (response.status === 401) {
        localStorage.removeItem("adminToken");
        navigate("/admin");
      }
    }
  } catch (err) {
    setError("Cannot connect to server.");
  } finally {
    setLoading(false);
  }
};

    const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin");
    };

   return (
    <div className="min-h-screen bg-gray-50">
 
      {/* Header */}
      <div className="bg-[#0a1f44] text-white px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <p className="text-blue-200/60 text-sm">Maths Coaching — Enquiries</p>
        </div>
        <button
          onClick={handleLogout}
          className="bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all"
        >
          Logout
        </button>
      </div>
 
      <div className="max-w-7xl mx-auto px-6 py-10">
 
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {[
            { label: "Total Enquiries", value: enquiries.length },
            { label: "CBSE", value: enquiries.filter((e) => e.board === "CBSE").length },
            { label: "ICSE", value: enquiries.filter((e) => e.board === "ICSE").length },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="text-4xl font-bold text-[#0a1f44]">{value}</div>
              <div className="text-gray-400 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
 
        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="font-bold text-[#0a1f44]">All Enquiries</h2>
          </div>
 
          {loading ? (
            <div className="text-center py-16 text-gray-400">Loading...</div>
          ) : error ? (
            <div className="text-center py-16 text-red-400">{error}</div>
          ) : enquiries.length === 0 ? (
            <div className="text-center py-16 text-gray-400">No enquiries yet.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wide">
                  <tr>
                    {["Student", "Parent", "Phone", "Class", "Board", "Message", "Date"].map((h) => (
                      <th key={h} className="px-6 py-3 text-left font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {enquiries.map((e) => (
                    <tr key={e._id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-[#0a1f44]">{e.studentName}</td>
                      <td className="px-6 py-4 text-gray-600">{e.parentName}</td>
                      <td className="px-6 py-4 text-gray-600">{e.phone}</td>
                      <td className="px-6 py-4 text-gray-600">{e.className}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${e.board === "CBSE" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"}`}>
                          {e.board}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-500 max-w-xs truncate">{e.message || "—"}</td>
                      <td className="px-6 py-4 text-gray-400">
                        {new Date(e.createdAt).toLocaleDateString("en-IN")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}