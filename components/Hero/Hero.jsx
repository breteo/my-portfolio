"use client";

import { useState } from "react";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Hero() {
  const [showMenu, setShowMenu] = useState(false);

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
    </>
  );
}
