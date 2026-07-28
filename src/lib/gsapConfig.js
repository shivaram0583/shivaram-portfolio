import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// Loader duration — hero choreography is timed against this.
export const LOADER_MS = 1200;
export const HERO_DELAY = (LOADER_MS + 150) / 1000;

// One easing word for the whole site.
export const EXPO = "expo.out";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export { gsap, ScrollTrigger, ScrollSmoother, SplitText };
