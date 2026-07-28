import { useRef } from "react";
import { useSpring } from "framer-motion";

// Element is gently pulled toward the cursor while hovered, then springs back.
// Returns props to spread onto a motion element.
export default function useMagnetic(strength = 0.4) {
  const ref = useRef(null);
  const config = { stiffness: 200, damping: 15, mass: 0.4 };
  const x = useSpring(0, config);
  const y = useSpring(0, config);

  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onMouseMove = (e) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, onMouseMove, onMouseLeave, style: { x, y } };
}
