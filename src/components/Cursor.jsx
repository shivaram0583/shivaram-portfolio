import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsapConfig.js";

// Custom cursor: a terracotta dot that tracks tightly plus a lagging ink ring.
// The ring swells over interactive elements. Disabled for touch devices and
// prefers-reduced-motion users (they keep the native cursor).
const INTERACTIVE = "a, button, input, textarea, select, [data-cursor]";

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches && !prefersReducedMotion()) {
      setEnabled(true);
    }
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add("custom-cursor");
    gsap.set([dot, ring], { xPercent: 0, yPercent: 0, force3D: true });

    const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" });

    const onMove = (e) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const onOver = (e) => {
      if (!e.target.closest?.(INTERACTIVE)) return;
      document.body.classList.add("cursor-hover");
      gsap.to(ring, { scale: 1.9, duration: 0.35, ease: "power3.out" });
      gsap.to(dot, { scale: 0.5, duration: 0.35, ease: "power3.out" });
    };

    const onOut = (e) => {
      if (!e.target.closest?.(INTERACTIVE)) return;
      document.body.classList.remove("cursor-hover");
      gsap.to(ring, { scale: 1, duration: 0.35, ease: "power3.out" });
      gsap.to(dot, { scale: 1, duration: 0.35, ease: "power3.out" });
    };

    const onDown = () => gsap.to(ring, { scale: 0.82, duration: 0.18, ease: "power3.out" });
    const onUp = () => gsap.to(ring, { scale: 1, duration: 0.3, ease: "power3.out" });

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    return () => {
      document.body.classList.remove("custom-cursor", "cursor-hover");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
};

export default Cursor;
