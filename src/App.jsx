import "./App.css";
import About from "../src/Components/About/About";
import Nav from "./Components/Nav/Nav";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
