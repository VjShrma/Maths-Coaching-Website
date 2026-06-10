import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Courses from "../components/Courses";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
 
export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      {/* More sections come in Day 3 and 4 */}
      <Courses />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
 