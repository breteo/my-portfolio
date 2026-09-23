import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";

export default function Page() {
  return (
    <>
      <div id="about">
        <Hero />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
