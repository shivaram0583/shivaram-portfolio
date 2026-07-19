import { motion } from "framer-motion";
import useMagnetic from "../hooks/useMagnetic";
import { SPRING } from "../lib/motion";

// A link/button that leans toward the cursor and presses on tap.
const MagneticButton = ({ href, children, className = "", strength = 0.4, ...rest }) => {
  const { ref, onMouseMove, onMouseLeave, style } = useMagnetic(strength);

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={style}
      className={className}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={SPRING}
      {...rest}
    >
      <span className="pointer-events-none inline-flex items-center gap-2">{children}</span>
    </motion.a>
  );
};

export default MagneticButton;
