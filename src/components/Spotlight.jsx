// Surface that carries the cursor-tracked glow.
// Coordinates are fed by a single delegated listener in App, so this is
// just a styling wrapper — no per-card event handlers.
const Spotlight = ({ as: Tag = "div", className = "", children, ...rest }) => (
  <Tag className={`spotlight ${className}`} {...rest}>
    {children}
  </Tag>
);

export default Spotlight;
