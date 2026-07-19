import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../lib/gsapConfig.js";

// Editorial type band: two counter-scrolling rows of large Fraunces type.
// Scroll velocity accelerates and skews the band, then it settles on a spring.
const ITEMS = [
  "Java Backend",
  "Spring Boot",
  "Microservices",
  "AWS Cloud",
  "ISO 20022",
  "Real-time Payments",
  "Camunda BPM",
  "System Design",
];

const Row = ({ reverse = false, outline = false }) => {
  const trackRef = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const track = trackRef.current;

      const tween = gsap.fromTo(
        track,
        { xPercent: reverse ? -50 : 0 },
        { xPercent: reverse ? 0 : -50, duration: 30, ease: "none", repeat: -1 }
      );

      const decay = gsap.to(tween, {
        timeScale: 1,
        duration: 1.4,
        ease: "power2.out",
        paused: true,
      });

      const skewSetter = gsap.quickTo(track, "skewX", {
        duration: 0.4,
        ease: "power3.out",
      });

      const st = ScrollTrigger.create({
        onUpdate(self) {
          const v = self.getVelocity();
          const boost = gsap.utils.clamp(1, 4, 1 + Math.abs(v) / 1500);
          if (boost > tween.timeScale()) {
            tween.timeScale(boost);
            decay.invalidate().restart();
          }
          skewSetter(gsap.utils.clamp(-5, 5, v / 400));
          gsap.delayedCall(0.2, () => skewSetter(0));
        },
      });

      return () => st.kill();
    },
    { scope: trackRef, dependencies: [reverse] }
  );

  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden">
      <div
        ref={trackRef}
        className="flex w-max items-baseline gap-10 pr-10 whitespace-nowrap py-3"
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`text-4xl sm:text-6xl font-semibold ${
              outline
                ? i % 2 === 0
                  ? "outline-ink"
                  : "text-[#b5451f] italic"
                : i % 2 === 0
                ? "text-[#1c1917]"
                : "outline-accent italic"
            }`}
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            {item}
            <span className="mx-6 inline-block align-middle text-2xl text-[#b5451f]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const Marquee = () => {
  return (
    <section aria-hidden="true" className="relative overflow-hidden py-8 sm:py-12">
      <div className="-mx-[5%] w-[110%] -rotate-[1.5deg]">
        <div className="border-y border-[#e7ded2] bg-[#f7ece6]/50 py-4">
          <Row />
          <Row reverse outline />
        </div>
      </div>
    </section>
  );
};

export default Marquee;
