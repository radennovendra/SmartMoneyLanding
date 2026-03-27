import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import LiveSignal from "./components/LiveSignal";
import Proof from "./components/Proof";
import WhyUs from "./components/WhyUs";
import Testimonial from "./components/Testimonial";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <LiveSignal />
      <Proof />
      <WhyUs />
      <Testimonial />
      <Pricing />
      <CTA />
    </main>
  );
}