import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useGSAP } from "@gsap/react";
import {
  ScrollSmoother,
  LOADER_MS,
  prefersReducedMotion,
} from "./lib/gsapConfig.js";
import { EASE } from "./lib/motion.js";
import Cursor from "./components/Cursor.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
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
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), LOADER_MS);
    return () => clearTimeout(timeout);
  }, []);

  // Inertial smooth scrolling + data-speed / data-lag parallax effects.
  useGSAP(() => {
    if (prefersReducedMotion()) return;
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
      smoothTouch: 0.1,
    });
    return () => smoother.kill();
  });

  // Route anchor clicks through the smoother for a long, eased glide.
  useEffect(() => {
    const onClick = (e) => {
      const anchor = e.target.closest?.('a[href^="#"]');
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash.length < 2) return;
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      const smoother = ScrollSmoother.get();
      if (smoother) {
        smoother.scrollTo(target, true, "top 88px");
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#b5451f] via-[#d97706] to-[#b5451f] origin-left z-40"
        style={{ scaleX: progress }}
      />

      <div className="grain" aria-hidden="true" />
      <Cursor />

      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#faf7f2]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: EASE } }}
          >
            <motion.p
              className="text-3xl font-semibold text-[#1c1917]"
              style={{ fontFamily: "'Fraunces', serif" }}
              initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              VS<span className="text-[#b5451f] italic">D</span>
            </motion.p>
            <div className="mt-5 h-px w-44 overflow-hidden bg-[#e7ded2]">
              <motion.div
                className="h-full bg-[#b5451f]"
                style={{ originX: 0 }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.05, ease: EASE }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <motion.div
            className="min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoading ? 0 : 1 }}
            transition={{ duration: 0.6, ease: EASE }}
            style={{ pointerEvents: isLoading ? "none" : "auto" }}
          >
            <main className="pt-20">
              <Hero />
              <Marquee />
              <Summary />
              <Skills />
              <Experience />
              <Projects />
              <Awards />
              <Education />
              <Contact />
            </main>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default App;
