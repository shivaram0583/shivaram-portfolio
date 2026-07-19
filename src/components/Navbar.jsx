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
      className="fixed top-0 inset-x-0 z-30 transition-colors duration-300 border-b"
      style={{
        backgroundColor: scrolled ? "rgba(250, 247, 242, 0.85)" : "transparent",
        borderBottomColor: scrolled ? "#e7ded2" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <nav className="flex items-center justify-between px-6 sm:px-12 lg:px-24 py-4">
        <a href="#home" className="text-lg font-semibold tracking-tight text-[#1c1917]" style={{ fontFamily: "'Fraunces', serif" }}>
          VS<span className="text-[#b5451f]">D</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#57534e] hover:text-[#b5451f] transition-colors"
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
            className="px-3 py-1.5 rounded-full border border-[#d8ccbb] text-[#44403c] hover:border-[#b5451f] hover:text-[#b5451f] transition-colors flex items-center gap-1.5"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shivaram-doddi"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-full bg-[#b5451f] text-[#faf7f2] font-medium hover:bg-[#973714] active:bg-[#7f2f10] transition-colors flex items-center gap-1.5"
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
