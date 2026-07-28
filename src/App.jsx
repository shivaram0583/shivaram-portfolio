import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useGSAP } from "@gsap/react";
import {
  gsap,
  ScrollTrigger,
  ScrollSmoother,
  LOADER_MS,
  prefersReducedMotion,
} from "./lib/gsapConfig.js";
import { EASE } from "./lib/motion.js";
import Starfield from "./components/Starfield.jsx";
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
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), LOADER_MS);
    return () => clearTimeout(timeout);
  }, []);

  // Inertial smooth scrolling + data-speed / data-lag parallax.
  useGSAP(() => {
    if (prefersReducedMotion()) return;
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.1,
      effects: true,
      smoothTouch: 0.1,
    });
    return () => smoother.kill();
  });

  // Coordinated entrance for every [data-reveal] surface.
  // Initial state is set in JS (never CSS) so content stays visible if JS fails.
  useGSAP(() => {
    const items = gsap.utils.toArray("[data-reveal]");
    if (!items.length || prefersReducedMotion()) return;

    // Transform + opacity only. Animating `filter: blur()` across this many
    // composited layers is what causes repaint flicker.
    gsap.set(items, { opacity: 0, y: 30, force3D: true });

    const batch = ScrollTrigger.batch(items, {
      start: "top 88%",
      once: true,
      onEnter: (group) =>
        gsap.to(group, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "expo.out",
          stagger: 0.08,
          force3D: true,
          overwrite: true,
          clearProps: "opacity,transform",
        }),
    });

    return () => batch.forEach((t) => t.kill());
  });

  // Section icon badges spring in when their section arrives.
  useGSAP(() => {
    const badges = gsap.utils.toArray("[data-pop]");
    if (!badges.length || prefersReducedMotion()) return;

    const tweens = badges.map((el) =>
      gsap.from(el, {
        scale: 0.5,
        opacity: 0,
        rotate: -12,
        duration: 0.85,
        ease: "back.out(1.7)",
        force3D: true,
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      })
    );

    return () => tweens.forEach((t) => t.scrollTrigger?.kill());
  });

  // One delegated listener drives the cursor glow on every .spotlight surface.
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const onMove = (e) => {
      const el = e.target.closest?.(".spotlight");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    document.addEventListener("mousemove", onMove, { passive: true });
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  // Anchor clicks glide through the smoother.
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
        smoother.scrollTo(target, true, "top 84px");
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
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-40"
        style={{
          scaleX: progress,
          background: "linear-gradient(90deg, #6366f1, #a78bfa, #6366f1)",
        }}
      />

      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#08080a]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.55, ease: EASE } }}
          >
            <motion.div
              className="text-2xl font-semibold tracking-tight text-[#ededef]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              VS<span className="text-gradient">D</span>
            </motion.div>
            <div className="mt-6 h-[2px] w-40 overflow-hidden rounded-full bg-[#1e1e25]">
              <motion.div
                className="h-full rounded-full"
                style={{
                  originX: 0,
                  background: "linear-gradient(90deg, #6366f1, #a78bfa)",
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.05, ease: EASE }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Starfield />

      <Navbar />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <motion.div
            className="min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoading ? 0 : 1 }}
            transition={{ duration: 0.5, ease: EASE }}
            style={{ pointerEvents: isLoading ? "none" : "auto" }}
          >
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
        </div>
      </div>
    </>
  );
}

export default App;
