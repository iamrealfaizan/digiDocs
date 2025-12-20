import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { ProblemSolution } from "@/components/landing/ProblemSolution";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Pricing } from "@/components/landing/Pricing";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans selection:bg-indigo-500/20">
      <Header />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Pricing />
      <Footer />
    </main>
  );
}
