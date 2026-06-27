import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="dot-pattern">
        <Hero />
        <Stats />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
