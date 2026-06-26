import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about"   element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin"   element={<AdminLogin/>} />
        <Route path="/admin/dashboard" element={<AdminDashboard/>} />
      </Routes>

       {/* Floating WhatsApp button — visible on every page */}
      <WhatsAppButton />

    </Router>
  );
}

export default App;