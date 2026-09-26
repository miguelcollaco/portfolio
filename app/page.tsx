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
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Experience />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
