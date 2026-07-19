import { motion } from "framer-motion";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import profileImg from "../assets/profile.jpg";
import MagneticButton from "./MagneticButton.jsx";
import {
  gsap,
  SplitText,
  HERO_DELAY,
  EXPO,
  prefersReducedMotion,
} from "../lib/gsapConfig.js";

const Hero = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set("#hero-title", { opacity: 1 });
        return;
      }

      // Character-level headline build, timed to start as the loader lifts.
      const split = SplitText.create("#hero-title", {
        type: "words,chars",
        autoSplit: true,
        onSplit(self) {
          gsap.set("#hero-title", { opacity: 1 });
          return gsap.from(self.chars, {
            yPercent: 90,
            autoAlpha: 0,
            filter: "blur(6px)",
            duration: 1.05,
            ease: EXPO,
            stagger: { each: 0.024, from: "start" },
            delay: HERO_DELAY,
          });
        },
      });

      gsap.from(".hero-eyebrow", {
        opacity: 0,
        y: 14,
        letterSpacing: "0.75em",
        duration: 1.1,
        ease: EXPO,
        delay: HERO_DELAY + 0.1,
      });

      gsap.fromTo(
        ".hero-photo-card",
        { clipPath: "inset(100% 0% 0% 0% round 2.5rem)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 2.5rem)",
          duration: 1.2,
          ease: EXPO,
          delay: HERO_DELAY + 0.15,
        }
      );
      gsap.fromTo(
        "#hero-photo-img",
        { scale: 1.35 },
        { scale: 1, duration: 1.7, ease: EXPO, delay: HERO_DELAY + 0.15 }
      );

      return () => split.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative px-6 sm:px-12 lg:px-24 py-24 overflow-hidden"
    >
      <div data-speed="0.9" className="pointer-events-none absolute inset-0 -z-10">
        <motion.div 
          className="absolute -top-32 -left-32 h-96 w-96 bg-[#b5451f]/10 blur-3xl rounded-full"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 h-96 w-96 bg-amber-400/12 blur-3xl rounded-full"
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 h-32 w-32 bg-rose-300/14 blur-2xl rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Simple floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-[#b5451f]/25 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Simple grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(120,113,108,0.09) 1px, transparent 1px),
              linear-gradient(90deg, rgba(120,113,108,0.09) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto grid gap-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.85fr)] items-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <motion.span 
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-[#e7ded2] text-[#b5451f] shadow-[0_6px_18px_rgba(120,100,80,0.08)]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <HiOutlineRocketLaunch size={22} />
              </motion.span>
              <p className="hero-eyebrow text-xs uppercase tracking-[0.5em] text-[#8a837c] font-medium">
                Java Backend • Microservices • Cloud Native
              </p>
            </div>
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.12] opacity-0"
            >
              I'm <span className="text-gradient">Venkata Shivaram Doddi</span>
            </h1>
            <motion.p
              className="text-lg text-[#44403c] leading-relaxed text-pretty"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: HERO_DELAY + 0.35, duration: 0.7, ease: "easeOut" }}
            >
              Software Engineer with 5 years of experience in{" "}
              <span className="text-[#b5451f] font-medium">
                designing and developing microservices, cloud-native applications, and real-time payment systems
              </span>{" "}
              using Java, Spring Boot, and AWS. Expert in ISO 20022, SWIFT, FPS, CHAPS, and enterprise banking solutions.
            </motion.p>
            <motion.div 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: HERO_DELAY + 0.5, duration: 0.7, ease: "easeOut" }}
            >
              <MagneticButton href="#projects" className="btn-primary" strength={0.5}>
                View My Work
              </MagneticButton>
              <MagneticButton href="#contact" className="btn-secondary" strength={0.5}>
                Get In Touch
              </MagneticButton>
            </motion.div>
          </motion.div>

          <div data-lag="0.18" className="flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <motion.div 
              className="relative"
              whileHover={{ 
                scale: 1.05,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="hero-photo-card relative w-64 h-64 sm:w-72 sm:h-72 rounded-[2.5rem] overflow-hidden border border-[#e7ded2] bg-white shadow-[0_24px_60px_rgba(120,100,80,0.18)]"
                whileHover={{
                  borderColor: "#d8ccbb",
                }}
              >
                <img
                  id="hero-photo-img"
                  src={profileImg}
                  alt="Venkata Shivaram Doddi"
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-[#1c1917]/20 via-transparent to-transparent"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -right-6 rounded-2xl border border-[#e7ded2] bg-white px-4 py-3 shadow-[0_12px_30px_rgba(120,100,80,0.16)] text-left"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: HERO_DELAY + 0.8, duration: 0.5, ease: "easeOut" }}
                whileHover={{
                  scale: 1.1,
                  borderColor: "rgba(181, 69, 31, 0.5)",
                }}
              >
                <p className="text-lg font-semibold text-[#1c1917] leading-none">5 years</p>
                <p className="text-xs uppercase tracking-[0.3em] text-[#b5451f] mt-1">Software Engineer</p>
              </motion.div>
            </motion.div>
          </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[ 
            {
              label: "Enterprise Banking Platforms",
              value: "",
              sub: "Corporate and Bulk Listed Payments",
              icon: "📊",
            },
            {
              label: "Microservices & Distributed Systems",
              value: "",
              sub: "Java • Spring Boot • AWS • Camunda",
              icon: "⚡",
            },
            {
              label: "Built Real-time payment processing",
              value: "",
              sub: "ISO 20022 • SWIFT • CHAPS • FPS",
              icon: "🛡️",
            },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="group relative rounded-2xl bg-white border border-[#e7ded2] p-4 shadow-[0_8px_24px_rgba(120,100,80,0.06)] transition-all duration-200 hover:border-[#d8ccbb] hover:shadow-[0_12px_30px_rgba(120,100,80,0.1)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-[#1c1917] leading-snug">{item.label}</p>
                  <p className="text-xs text-[#8a837c] mt-1">{item.sub}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
