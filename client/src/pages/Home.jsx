import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Courses from "../components/Courses";
 
export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      {/* More sections come in Day 3 and 4 */}
      <Courses />
    </main>
  );
}
 