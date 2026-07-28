import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "../lib/gsapConfig.js";
import { SPRING, EASE } from "../lib/motion";

const links = [
  { href: "#home", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#awards", label: "Awards" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  // Highlight whichever section currently owns the middle of the viewport.
  useGSAP(() => {
    const triggers = links
      .filter((l) => document.querySelector(l.href))
      .map((l) =>
        ScrollTrigger.create({
          trigger: l.href,
          start: "top 45%",
          end: "bottom 45%",
          onToggle: (self) => {
            if (self.isActive) setActive(l.href);
          },
        })
      );
    return () => triggers.forEach((t) => t.kill());
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-30 transition-colors duration-300 border-b"
      style={{
        backgroundColor: scrolled ? "rgba(8, 8, 10, 0.72)" : "transparent",
        borderBottomColor: scrolled ? "#1e1e25" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <nav className="flex items-center justify-between px-6 sm:px-12 lg:px-24 py-4">
        <a
          href="#home"
          className="text-base font-semibold tracking-tight text-[#ededef]"
        >
          VS<span className="text-gradient">D</span>
        </a>

        <div className="hidden md:flex items-center gap-7 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link transition-colors ${
                active === link.href
                  ? "is-active"
                  : "text-[#a1a1aa] hover:text-[#ededef]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5 text-xs">
          <motion.a
            href="https://github.com/shivaram0583"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#26262e] text-[#a1a1aa] hover:text-[#ededef] hover:border-[#3f3f4a] transition-colors"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            transition={SPRING}
          >
            <FaGithub size={15} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/shivaram-doddi"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-medium text-white"
            style={{
              background: "linear-gradient(180deg, #6366f1 0%, #5457e5 100%)",
              boxShadow: "0 1px 0 0 rgba(255,255,255,0.16) inset",
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={SPRING}
          >
            <FaLinkedinIn size={13} />
            LinkedIn
          </motion.a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#26262e] text-[#ededef]"
          >
            {open ? <HiXMark size={17} /> : <HiBars3 size={17} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden overflow-hidden border-t border-[#1e1e25] bg-[#08080a]/95 backdrop-blur-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-[#a1a1aa] hover:text-[#ededef] hover:bg-white/[0.04] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex gap-2 px-3">
                <a
                  href="https://github.com/shivaram0583"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-lg border border-[#26262e] py-2 text-center text-xs text-[#a1a1aa]"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/shivaram-doddi"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-lg py-2 text-center text-xs font-medium text-white"
                  style={{ background: "linear-gradient(180deg, #6366f1, #5457e5)" }}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
