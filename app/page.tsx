import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="home">
      
  <Navbar />
  <Hero />

  <About />
  <Projects />
  <Skills />
  <Contacts />
  <Footer />
  
</div>
  );
}