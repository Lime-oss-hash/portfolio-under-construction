import { Navbar } from "@/app/components/ui/Navbar";
import Hero from "@/app/components/Hero";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import ContactCTA from "@/app/components/ContactCTA";
import Footer from "@/app/components/Footer";

export default function Homepage() {
  return (
    <main className="flex flex-col px-5 sm:px-10 relative">
      <div className="max-w-6xl mx-auto w-full">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <ContactCTA />
        <Footer />
      </div>
    </main>
  );
}
