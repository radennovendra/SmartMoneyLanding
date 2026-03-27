import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Proof from "./components/Proof";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <Proof />
      <HowItWorks />
      <Pricing />
      <CTA />
    </main>
  );
}