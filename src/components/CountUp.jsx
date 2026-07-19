import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "../lib/gsapConfig.js";

// Number that counts up from 0 when scrolled into view.
// Handles values like "5", "243k+", "99.9%".
const CountUp = ({ value, className = "" }) => {
  const ref = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const match = String(value).match(/^([\d.]+)(.*)$/);
      if (!match) return;
      const target = parseFloat(match[1]);
      const suffix = match[2] || "";
      const decimals = match[1].includes(".") ? 1 : 0;

      const state = { v: 0 };
      ref.current.textContent = (0).toFixed(decimals) + suffix;

      gsap.to(state, {
        v: target,
        duration: 1.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 88%", once: true },
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = state.v.toFixed(decimals) + suffix;
          }
        },
      });
    },
    { scope: ref }
  );

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
};

export default CountUp;
