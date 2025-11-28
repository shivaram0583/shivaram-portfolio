import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
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
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-500 origin-left z-40"
        style={{ scaleX: scrollYProgress }}
      />

      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="h-16 w-16 rounded-full border-4 border-slate-800 border-t-cyan-400 animate-spin" />
            <p className="mt-4 text-xs tracking-[0.4em] uppercase text-slate-400">Loading</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="bg-slate-950 text-slate-100 min-h-screen"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ pointerEvents: isLoading ? "none" : "auto" }}
      >
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
      </motion.div>
    </>
  );
}

export default App;
