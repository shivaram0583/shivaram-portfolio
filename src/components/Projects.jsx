import { motion } from "framer-motion";
import { HiOutlineBeaker } from "react-icons/hi2";

const projects = [
  {
    name: "Mortgage Loan Microservice",
    tech: ["Spring Boot", "Java", "MySQL", "H2", "Swagger", "React"],
    description:
      "Developed RESTful microservice for mortgage loan processing implementing complete CRUD operations. Integrated custom exception handling and data validation mechanisms for robust error management. Configured dual database connectivity supporting H2 in-memory database and MySQL for production. Implemented Swagger UI for API documentation and developed React-based UI for user interaction.",
    date: "February 2022",
    link: "https://github.com/shivaram0583",
  },
  {
    name: "Online Food Ordering System",
    tech: ["PHP", "JavaScript", "HTML", "CSS"],
    description:
      "Developed full-stack web application connecting restaurants with customers for online food ordering. Implemented admin panel for restaurant management, menu updates, and order tracking. Created responsive UI using HTML, CSS, and JavaScript for cross-device compatibility.",
    date: "December 2020",
    link: "https://github.com/shivaram0583",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 sm:px-12 lg:px-24 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="mb-4 flex items-center justify-center gap-3">
            <motion.span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 border border-cyan-400/50 text-cyan-300" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
              <HiOutlineBeaker size={22} />
            </motion.span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
            Featured <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-slate-400 mt-3 text-sm sm:text-base max-w-3xl mx-auto">
            Production-grade side projects that demonstrate <span className="text-cyan-300 font-medium">API design</span>, <span className="text-cyan-300 font-medium">orchestration</span> and <span className="text-cyan-300 font-medium">full-stack craftsmanship</span>.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group rounded-2xl bg-gradient-to-br from-slate-900/80 via-slate-900/90 to-slate-800/80 border border-cyan-400/20 p-6 flex flex-col justify-between backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-900/90 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div>
                <motion.div 
                  className="flex items-start justify-between mb-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.h3 
                    className="font-semibold text-xl mb-2 text-slate-100 group-hover:text-slate-50 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.name}
                  </motion.h3>
                  <motion.div
                    className="text-xs text-cyan-300 bg-cyan-400/10 px-2 py-1 rounded-full border border-cyan-400/20"
                    whileHover={{ scale: 1.1, backgroundColor: "cyan-400/20" }}
                  >
                    {project.date}
                  </motion.div>
                </motion.div>
                <motion.p 
                  className="text-sm text-slate-300 mb-3 leading-relaxed"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {project.description}
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-2 mb-4"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.1,
                      },
                    },
                  }}
                >
                  {project.tech.map((t, techIdx) => (
                    <motion.span
                      key={t}
                      className="px-2 py-0.5 text-[10px] rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-200 border border-cyan-400/20 hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-400/40 hover:text-cyan-100 hover:shadow-sm hover:shadow-cyan-500/20 transition-all duration-300 cursor-default"
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              <motion.div 
                className="mt-4 flex justify-between items-center border-t border-slate-800 pt-4"
                whileHover={{ y: -2 }}
              >
                <motion.span 
                  className="text-xs text-slate-400"
                  whileHover={{ color: "slate-300" }}
                >
                  {project.date}
                </motion.span>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link inline-flex items-center gap-1 text-xs text-cyan-300 hover:text-cyan-200 font-medium transition-colors"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View on GitHub</span>
                  <motion.svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </motion.svg>
                </motion.a>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
