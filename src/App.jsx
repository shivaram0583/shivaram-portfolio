import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Summary from "./components/Summary.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Awards from "./components/Awards.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Summary />
        <Skills />
        <Experience />
        <Projects />
        <Awards />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
