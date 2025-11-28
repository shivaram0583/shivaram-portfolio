import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

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

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-30 transition-colors duration-300 backdrop-blur border-b ${
        scrolled ? "bg-slate-950/70 border-slate-800" : "bg-transparent border-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 sm:px-12 lg:px-24 py-4">
        <a href="#home" className="font-semibold tracking-tight text-slate-100">
          VS<span className="text-cyan-400">D</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-cyan-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3 text-xs">
          <a
            href="https://github.com/shivaram0583"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-full border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shivaram-doddi"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-full bg-cyan-500 text-slate-950 font-medium hover:bg-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <FaLinkedinIn />
            LinkedIn
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
