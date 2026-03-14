import { motion } from "framer-motion";
import { HiOutlineRocketLaunch, HiOutlineSparkles } from "react-icons/hi2";
import profileImg from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative px-6 sm:px-12 lg:px-24 py-24 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div 
          className="absolute -top-32 -left-32 h-96 w-96 bg-slate-800/20 blur-3xl rounded-full"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 h-96 w-96 bg-slate-800/15 blur-3xl rounded-full"
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 h-32 w-32 bg-slate-800/10 blur-2xl rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Simple floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-slate-600/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Simple grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(slate-600/10 1px, transparent 1px),
              linear-gradient(90deg, slate-600/10 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto grid gap-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.85fr)] items-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <motion.span 
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 border border-slate-700 text-slate-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <HiOutlineRocketLaunch size={22} />
              </motion.span>
              <motion.p 
                className="text-xs uppercase tracking-[0.5em] text-cyan-400/80 font-medium"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              >
                Java Backend • Microservices • Cloud Native
              </motion.p>
            </div>
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            >
              I'm{" "}
              <motion.span 
                className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Venkata Shivaram Doddi
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-lg text-slate-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            >
              Software Engineer with 5 years of experience in
              <motion.span 
                className="text-cyan-300 font-medium inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {" "}designing and developing microservices, cloud-native applications, and real-time payment systems{" "}
              </motion.span>
              using Java, Spring Boot, and AWS. Expert in ISO 20022, SWIFT, FPS, CHAPS, and enterprise banking solutions.
            </motion.p>
            <motion.div 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
            >
              <motion.a
                href="#projects"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-medium transition-all duration-300 hover:from-cyan-400 hover:to-blue-400 hover:shadow-lg hover:shadow-cyan-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 py-3 rounded-full border border-cyan-400/50 text-cyan-300 font-medium transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <motion.div 
              className="relative"
              whileHover={{ 
                scale: 1.05,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-[2.5rem] overflow-hidden border border-slate-700 bg-slate-900/70 shadow-2xl backdrop-blur-sm"
                whileHover={{
                  borderColor: "slate-600",
                }}
              >
                <img
                  src={profileImg}
                  alt="Venkata Shivaram Doddi"
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -right-6 rounded-2xl border border-cyan-400/40 bg-slate-900/90 px-4 py-3 backdrop-blur-md text-left"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
                whileHover={{
                  scale: 1.1,
                  borderColor: "cyan-400/60",
                }}
              >
                <p className="text-lg font-semibold text-slate-100 leading-none">5 years</p>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300 mt-1">Software Engineer</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[ 
            {
              label: "Bulk Listed Payments",
              value: "243k+",
              sub: "transactions peak hour",
              icon: "📊",
            },
            {
              label: "Throughput",
              value: "232k+",
              sub: "transactions/hour",
              icon: "⚡",
            },
            {
              label: "Availability",
              value: "99.9%",
              sub: "uptime on cloud",
              icon: "🛡️",
            },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="group relative rounded-2xl bg-slate-900/80 border border-slate-800 p-4 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-lg font-semibold text-slate-100 leading-none">{item.value}</p>
                  <p className="text-xs text-slate-400 mt-1">{item.label}</p>
                  <p className="text-xs text-slate-500 mt-1">{item.sub}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
