import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";

import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      
      <Education />
      <Experience />
      <Blog />
      <Contact />
    </div>
  );
};

export default Index;
