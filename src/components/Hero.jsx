import { motion } from "framer-motion";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import profileImg from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative px-6 sm:px-12 lg:px-24 py-24 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-80 w-80 bg-cyan-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 h-96 w-96 bg-violet-500/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto grid gap-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.85fr)] items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-200">
                <HiOutlineRocketLaunch size={22} />
              </span>
              <p className="text-xs uppercase tracking-[0.5em] text-cyan-400/80">Java Backend • Commercial Banking • Cloud</p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
              I'm <span className="text-cyan-400">Venkata Shivaram Doddi</span>
            </h1>
            <p className="text-lg text-slate-300">
              Software Engineer with 4+ years building
              <span className="text-cyan-300 font-medium"> designing and delivering enterprise payment systems </span>
              using Java, Spring Boot, Microservices and AWS. Experienced in ISO 20022, SWIFT, FPS, SEPA and real-time banking platforms.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-medium hover:bg-cyan-400 transition-colors duration-200"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-slate-600 text-slate-100 hover:border-cyan-400 hover:text-cyan-300 transition-colors duration-200"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <div className="relative">
              <div className="pointer-events-none absolute -inset-4 rounded-[2.75rem] bg-gradient-to-r from-cyan-500/25 via-violet-500/25 to-cyan-400/25 blur-2xl" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-[2.5rem] overflow-hidden border border-slate-800 bg-slate-900/70 shadow-xl shadow-cyan-900/30">
                <img
                  src={profileImg}
                  alt="Venkata Shivaram Doddi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-6 rounded-2xl border border-cyan-400/30 bg-slate-900/80 px-4 py-3 backdrop-blur text-left">
                <p className="text-lg font-semibold text-slate-100 leading-none">4+ years</p>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300 mt-1">Software Engineer</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[ 
            {
              label: "Bulk Listed Payments",
              value: "243k+",
              sub: "transactions peak hour",
            },
            {
              label: "Throughput",
              value: "232k+",
              sub: "transactions/hour",
            },
            {
              label: "Availability",
              value: "99.9%",
              sub: "uptime on cloud",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 p-4 backdrop-blur text-center hover:-translate-y-1 hover:border-cyan-400/70 transition-transform transition-colors duration-200"
            >
              <p className="text-xs text-slate-400">{item.label}</p>
              <p className="mt-2 text-2xl font-semibold text-cyan-300">{item.value}</p>
              <p className="text-xs text-slate-400">{item.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
