import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Stats from "./components/stats";
import Serivces from "./components/services";
import Benefits from "./components/benefits";
import Testimonials from "./components/testimonials";
import Signup from "./components/signup";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="bg-[#0e132b] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Serivces />
      <Benefits />
      <Testimonials />
      <Signup />
      <Footer />
    </main>
  );
}
