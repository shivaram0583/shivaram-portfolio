import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../lib/gsapConfig.js";

// Ambient backdrop: a soft aurora plus an old-GitHub style constellation —
// drifting nodes joined by lines whenever they come close, with the cursor
// acting as an extra node.
//
// Drawn on a single <canvas>: rendering this many lines as DOM elements would
// be ruinous, whereas one canvas is a single composited layer.
const LINK_DIST = 132;
const CURSOR_DIST = 190;

const Starfield = () => {
  const rootRef = useRef(null);
  const auroraRef = useRef(null);
  const fieldRef = useRef(null);
  const canvasRef = useRef(null);
  const pointer = useRef({ x: -9999, y: -9999 });

  // Constellation render loop.
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: true });
    let raf = 0;
    let w = 0;
    let h = 0;
    let nodes = [];

    const seed = () => {
      // Density scales with viewport so phones don't render a hairball.
      const count = Math.max(28, Math.min(84, Math.round((w * h) / 20000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.1 + 0.5,
        a: Math.random() * 0.4 + 0.22,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      const { x: mx, y: my } = pointer.current;

      for (let i = 0; i < nodes.length; i += 1) {
        const p = nodes[i];
        p.x += p.vx;
        p.y += p.vy;
        // wrap around the edges
        if (p.x < -30) p.x = w + 30;
        else if (p.x > w + 30) p.x = -30;
        if (p.y < -30) p.y = h + 30;
        else if (p.y > h + 30) p.y = -30;

        // links between neighbours
        for (let j = i + 1; j < nodes.length; j += 1) {
          const q = nodes[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST * LINK_DIST) {
            const t = 1 - Math.sqrt(d2) / LINK_DIST;
            ctx.strokeStyle = `rgba(148,150,255,${(t * 0.16).toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        // link to the cursor
        const cdx = p.x - mx;
        const cdy = p.y - my;
        const cd2 = cdx * cdx + cdy * cdy;
        if (cd2 < CURSOR_DIST * CURSOR_DIST) {
          const t = 1 - Math.sqrt(cd2) / CURSOR_DIST;
          ctx.strokeStyle = `rgba(168,160,255,${(t * 0.3).toFixed(3)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mx, my);
          ctx.stroke();
        }
      }

      for (const p of nodes) {
        ctx.fillStyle = `rgba(255,255,255,${p.a})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };
    // Don't burn cycles on a backgrounded tab.
    const onVisibility = () =>
      document.visibilityState === "visible" ? start() : stop();

    resize();
    start();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      // Glow leans toward the cursor; the field eases the other way for depth.
      // The wrapper owns this transform so the inner element's CSS "breathe"
      // animation is never fought over.
      const auroraX = gsap.quickTo(auroraRef.current, "x", { duration: 1.1, ease: "power3.out" });
      const auroraY = gsap.quickTo(auroraRef.current, "y", { duration: 1.1, ease: "power3.out" });
      const fieldX = gsap.quickTo(fieldRef.current, "x", { duration: 1.6, ease: "power3.out" });
      const fieldY = gsap.quickTo(fieldRef.current, "y", { duration: 1.6, ease: "power3.out" });

      const onMove = (e) => {
        pointer.current = { x: e.clientX, y: e.clientY };
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        auroraX(nx * 60);
        auroraY(ny * 38);
        fieldX(nx * -16);
        fieldY(ny * -10);
      };
      const onLeave = () => {
        pointer.current = { x: -9999, y: -9999 };
      };

      window.addEventListener("mousemove", onMove, { passive: true });
      document.addEventListener("mouseleave", onLeave);

      const parallax = gsap.to(fieldRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      return () => {
        window.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseleave", onLeave);
        parallax.scrollTrigger?.kill();
      };
    },
    { scope: rootRef }
  );

  return (
    <div className="starfield" ref={rootRef} aria-hidden="true">
      <div className="aurora-wrap" ref={auroraRef}>
        <div className="aurora" />
      </div>
      <div className="star-parallax" ref={fieldRef}>
        <canvas className="constellation" ref={canvasRef} />
      </div>
    </div>
  );
};

export default Starfield;
