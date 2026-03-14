import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedBackground = ({ children, className = "" }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = [...Array(12)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-40 -left-40 h-[28rem] w-[28rem] bg-gradient-to-br from-blue-500/18 via-indigo-500/12 to-purple-500/14 blur-3xl rounded-full"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/3 -right-40 h-[24rem] w-[24rem] bg-gradient-to-br from-purple-500/16 via-purple-500/12 to-fuchsia-500/12 blur-3xl rounded-full"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.7, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-1/3 h-72 w-72 bg-gradient-to-br from-emerald-500/12 via-teal-500/10 to-blue-500/8 blur-2xl rounded-full"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/4 right-1/3 h-56 w-56 bg-gradient-to-br from-sky-500/8 via-blue-500/10 to-indigo-500/8 blur-2xl rounded-full"
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: `radial-gradient(circle, ${['rgba(56, 139, 253, 0.55)', 'rgba(163, 113, 247, 0.55)', 'rgba(46, 160, 67, 0.5)', 'rgba(88, 166, 255, 0.5)', 'rgba(194, 151, 255, 0.5)'][particle.id % 5]}, transparent)`,
          }}
          animate={{
            y: [0, -200, 0],
            x: [0, Math.random() * 80 - 40, 0],
            opacity: [0, 1, 0],
            scale: [1, 2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated mesh gradient overlay */}
      <motion.div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, rgba(56, 139, 253, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(163, 113, 247, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 10%, rgba(46, 160, 67, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 10% 90%, rgba(88, 166, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 90% 50%, rgba(194, 151, 255, 0.04) 0%, transparent 50%)
          `,
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Enhanced geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-20 h-20 border-2 border-blue-400/15 rotate-45 backdrop-blur-sm"
        animate={{
          rotate: [45, 225, 405],
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          borderColor: ['rgba(56, 139, 253, 0.15)', 'rgba(163, 113, 247, 0.15)', 'rgba(56, 139, 253, 0.15)'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-16 w-16 h-16 border-2 border-purple-400/15 backdrop-blur-sm"
        animate={{
          rotate: [0, 360],
          scale: [1, 0.7, 1],
          opacity: [0.2, 0.35, 0.2],
          borderColor: ['rgba(163, 113, 247, 0.15)', 'rgba(56, 139, 253, 0.15)', 'rgba(163, 113, 247, 0.15)'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-10 w-12 h-12 border border-emerald-400/12 rotate-12 backdrop-blur-sm"
        animate={{
          rotate: [12, 192, 372],
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Enhanced grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(48, 54, 61, 0.22) 1px, transparent 1px),
            linear-gradient(90deg, rgba(48, 54, 61, 0.22) 1px, transparent 1px),
            linear-gradient(45deg, rgba(56, 139, 253, 0.05) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(163, 113, 247, 0.04) 1px, transparent 1px),
            linear-gradient(rgba(46, 160, 67, 0.03) 2px, transparent 2px)
          `,
          backgroundSize: '80px 80px, 80px 80px, 160px 160px, 160px 160px, 120px 120px',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;
