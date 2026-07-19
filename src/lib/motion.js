// Shared motion language for the whole site.
// One easing vocabulary => everything feels like it belongs together.

// Expo-out: decisive start, long graceful settle. The "expensive" curve.
export const EASE = [0.22, 1, 0.36, 1];
export const EASE_IN_OUT = [0.65, 0, 0.35, 1];

// Spring used for tactile hovers / magnetic motion.
export const SPRING = { type: "spring", stiffness: 220, damping: 26, mass: 0.6 };
export const SPRING_SOFT = { type: "spring", stiffness: 120, damping: 20, mass: 0.6 };

export const viewportOnce = { once: true, amount: 0.3 };

// Fade + rise. `custom` = index for stagger.
export const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE, delay: i * 0.07 },
  }),
};

// Container that staggers its children.
export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

// Child of `stagger`.
export const staggerChild = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};
