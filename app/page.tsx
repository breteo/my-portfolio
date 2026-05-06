"use client";

import { useState } from "react";
import Nav from "@/components/Nav/Nav";
import Home from "@/components/Home/Home";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Page() {
  const [showMenu, setShowMenu] = useState(false);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const onClickAbout = () => scrollTo("about");
  const onClickProject = () => scrollTo("projects");
  const onClickContact = () => scrollTo("contact");

  return (
    <>
      <Nav
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        onClickAbout={onClickAbout}
        onClickProject={onClickProject}
        onClickContact={onClickContact}
      />
      <Home
        showMenu={showMenu}
        onClickAbout={onClickAbout}
        onClickProject={onClickProject}
      />
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}
