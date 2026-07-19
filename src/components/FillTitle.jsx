import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "../lib/gsapConfig.js";

// Section heading whose words tint from faint warm grey to their final color
// (ink, or terracotta for accent words) scrubbed to scroll position.
// segments: [{ text: "Technical" }, { text: "Skills", accent: true }]
const FillTitle = ({ as: Tag = "h2", className = "", segments }) => {
  const ref = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const words = ref.current.querySelectorAll("[data-fill-word]");
      gsap.fromTo(
        words,
        { color: "#ddd2c3" },
        {
          color: (i, el) => el.dataset.finalColor,
          stagger: 0.18,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 88%",
            end: "top 42%",
            scrub: 0.6,
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className}>
      {segments.map((seg, i) =>
        seg.text.split(" ").map((word, j) => (
          <span
            key={`${i}-${j}`}
            data-fill-word
            data-final-color={seg.accent ? "#b5451f" : "#1c1917"}
            className={`inline-block ${seg.accent ? "text-gradient" : ""}`}
          >
            {word}
            {" "}
          </span>
        ))
      )}
    </Tag>
  );
};

export default FillTitle;
