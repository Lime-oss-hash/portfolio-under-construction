"use client";

import { House, BriefcaseBusiness, UserRound, Contact } from "lucide-react";
import { Navbar } from "@/app/components/ui/Navbar";
import Hero from "@/app/components/Hero";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Footer from "@/app/components/Footer";

const navItems = [
  { name: "Home", link: "#home", icon: <House /> },
  { name: "Projects", link: "#projects", icon: <BriefcaseBusiness /> },
  { name: "About", link: "#about", icon: <UserRound /> },
  { name: "Contact", link: "#contact", icon: <Contact /> },
];

export default function Homepage() {
  return (
    <main className="flex flex-col px-5 sm:px-10 relative">
      <div className="max-w-7xl mx-auto w-full">
        <Navbar navItems={navItems} />
        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
