import "./App.css";
import { useRef, forwardRef, useState } from "react";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const AboutWrap = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <About className="scroll-m-0" />
    </div>
  );
});
AboutWrap.displayName = "AboutWrap";

const ProjectsWrap = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Projects />
    </div>
  );
});
ProjectsWrap.displayName = "ProjectsWrap";

const ContactWrap = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Contact />
    </div>
  );
});
ContactWrap.displayName = "ContactWrap";

function App() {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const yOffset = 14;
  

  

  const handleScrollTo = (ref) => {
    
    if (ref.current) {
      const y = ref.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="animate-fadeIn">
        <Nav
          onClickAbout={() => handleScrollTo(aboutRef)}
          onClickProject={() => handleScrollTo(projectRef)}
          onClickContact={() => handleScrollTo(contactRef)}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
      </header>
      <main>
        <Home
          onClickAbout={() => handleScrollTo(aboutRef)}
          onClickProject={() => handleScrollTo(projectRef)}
          showMenu={showMenu}
        />
        <AboutWrap ref={aboutRef} />
        <ProjectsWrap ref={projectRef} />
        <ContactWrap ref={contactRef} />
      </main>
      <Footer />
    </>
  );
}

export default App;
