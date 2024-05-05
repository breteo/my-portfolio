import "./App.css";
import { useRef, forwardRef } from "react";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const AboutWrap = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <About />
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

function App() {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);

  const handleScrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="animate-fadeIn">
        <Nav />
      </header>
      <main>
        <Home onClickAbout={() => handleScrollTo(aboutRef)} onClickProject={() => handleScrollTo(projectRef)}/>
        <AboutWrap ref={aboutRef}/>
        <ProjectsWrap ref={projectRef}/>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
