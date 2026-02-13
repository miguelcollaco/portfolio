"use client";

import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Experience from "./_components/Experience";
import Expertise from "./_components/Expertise";
import Contact from "./_components/Contact";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Experience />
      <Expertise />
      <Contact />
    </div>
  );
};
