"use client";

import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Experience from "./_components/Experience";
import Expertise from "./_components/Expertise";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Expertise />
      <Contact />
      <Footer />
    </div>
  );
};
