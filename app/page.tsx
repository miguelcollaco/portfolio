import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
import Now from "./_components/Now";
import Setup from "./_components/Setup";
import Experience from "./_components/Experience";
import About from "./_components/About";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Projects />
        <Now />
        <Setup />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
