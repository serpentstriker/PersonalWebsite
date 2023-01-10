import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Skills from "./components/Skills";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Projects />
      <Skills/>
      <Experience />
      <Contact/>
      <About/>
      <SocialLinks />
    </div>
  );
}

export default App;
