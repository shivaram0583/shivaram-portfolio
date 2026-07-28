import { motion } from "framer-motion";
import { Fragment, useRef } from "react";
import { useGSAP } from "@gsap/react";
import profileImg from "../assets/profile.jpg";
import MagneticButton from "./MagneticButton.jsx";
import Spotlight from "./Spotlight.jsx";
import {
  gsap,
  HERO_DELAY,
  EXPO,
  prefersReducedMotion,
} from "../lib/gsapConfig.js";

// Hand-split so the reveal never depends on async font loading.
// If JS never runs, the words simply render in place — visible by default.
const headline = [
  { text: "I'm", accent: false },
  { text: "Venkata", accent: true },
  { text: "Shivaram", accent: true },
  { text: "Doddi", accent: true },
];

const pillars = [
  {
    label: "Enterprise Banking Platforms",
    sub: "Corporate & Bulk Listed Payments",
  },
  {
    label: "Microservices & Distributed Systems",
    sub: "Java · Spring Boot · AWS · Camunda",
  },
  {
    label: "Real-time Payment Processing",
    sub: "ISO 20022 · SWIFT · CHAPS · FPS",
  },
];

const Hero = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      // Built synchronously — every tween exists before the timeline starts.
      const tl = gsap.timeline({ delay: HERO_DELAY });

      tl.from(".hero-word", {
        yPercent: 115,
        duration: 1,
        ease: EXPO,
        stagger: 0.06,
      }, 0)
        .from(".hero-pill", { opacity: 0, y: 10, duration: 0.7, ease: EXPO }, 0)
        .from(
          ".hero-fade",
          { opacity: 0, y: 16, duration: 0.85, ease: EXPO, stagger: 0.09 },
          0.35
        )
        .fromTo(
          ".hero-photo",
          { clipPath: "inset(0% 0% 100% 0% round 20px)", scale: 1.06 },
          {
            clipPath: "inset(0% 0% 0% 0% round 20px)",
            scale: 1,
            duration: 1.15,
            ease: EXPO,
          },
          0.25
        );

      // Hero recedes as the page scrolls past it — depth, not distraction.
      gsap.to(".hero-inner", {
        opacity: 0.18,
        y: -60,
        scale: 0.975,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom 25%",
          scrub: 0.6,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative px-6 sm:px-12 lg:px-24 pt-16 pb-24 overflow-hidden"
    >
      <div className="hero-inner max-w-6xl mx-auto grid gap-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.82fr)] items-center">
          <div className="space-y-7 text-center lg:text-left">
            <div className="hero-pill inline-flex items-center gap-2.5 rounded-full border border-[#26262e] bg-white/[0.03] px-3.5 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#a1a1aa]">
                Senior Software Engineer · Wells Fargo
              </span>
            </div>

            <h1
              id="hero-title"
              className="text-[2.6rem] sm:text-6xl lg:text-[4.2rem] font-semibold leading-[1.06]"
            >
              {headline.map((word, i) => (
                <Fragment key={word.text}>
                  <span className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em]">
                    <span
                      className={`hero-word inline-block ${
                        word.accent ? "text-gradient" : ""
                      }`}
                    >
                      {word.text}
                    </span>
                  </span>
                  {i < headline.length - 1 ? " " : null}
                </Fragment>
              ))}
            </h1>

            <p className="hero-fade text-lg sm:text-xl text-[#ededef] font-medium leading-snug max-w-xl mx-auto lg:mx-0">
              Building payment systems that move billions, reliably.
            </p>

            <p className="hero-fade text-base text-[#a1a1aa] leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty">
              Software engineer with 5 years designing microservices, cloud-native
              platforms and real-time payment rails with Java, Spring Boot and AWS —
              across ISO 20022, SWIFT, CHAPS and Faster Payments.
            </p>

            <div className="hero-fade flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <MagneticButton href="#projects" className="btn-primary" strength={0.35}>
                View My Work
              </MagneticButton>
              <MagneticButton href="#contact" className="btn-secondary" strength={0.35}>
                Get In Touch
              </MagneticButton>
            </div>
          </div>

          <div data-lag="0.12" className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="hero-photo relative w-[17rem] h-[19rem] sm:w-[19rem] sm:h-[21.5rem] overflow-hidden rounded-[20px] border border-[#26262e]">
                <img
                  src={profileImg}
                  alt="Venkata Shivaram Doddi"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/12 to-transparent" />
              </div>

              <motion.div
                className="hero-fade absolute -bottom-5 -left-5 rounded-xl border border-[#26262e] bg-[#131317]/95 px-4 py-3 backdrop-blur-md"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <p className="text-xl font-semibold text-[#ededef] leading-none">5+</p>
                <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#8b8b96]">
                  Years shipping
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="hero-fade grid gap-4 sm:grid-cols-3">
          {pillars.map((item) => (
            <Spotlight key={item.label} className="card p-5">
              <p className="text-sm font-medium text-[#ededef] leading-snug">
                {item.label}
              </p>
              <p className="mt-2 font-mono text-[11px] text-[#8b8b96] leading-relaxed">
                {item.sub}
              </p>
            </Spotlight>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
