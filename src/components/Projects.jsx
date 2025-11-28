import { motion } from "framer-motion";
import { HiOutlineBeaker } from "react-icons/hi2";

const projects = [
  {
    name: "Mortgage Loan Microservice",
    tech: ["Spring Boot", "Java", "MySQL", "H2", "Swagger", "React"],
    description:
      "RESTful microservice for mortgage loan processing with complete CRUD operations, custom exception handling and dual database connectivity (H2 for dev, MySQL for prod).",
    link: "https://github.com/shivaram0583",
  },
  {
    name: "Online Food Ordering System",
    tech: ["PHP", "JavaScript", "HTML", "CSS"],
    description:
      "Full-stack web application connecting restaurants and customers with online ordering, admin panel for menu management and responsive UI.",
    link: "https://github.com/shivaram0583",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 sm:px-12 lg:px-24 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-200">
              <HiOutlineBeaker size={22} />
            </span>
            <p className="text-xs uppercase tracking-[0.5em] text-cyan-400/80">builds</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Selected <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base max-w-3xl mx-auto">
            Production-grade side projects that demonstrate API design, orchestration and full-stack craftsmanship.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-900/40 border border-slate-800 p-6 flex flex-col justify-between backdrop-blur shadow-[0_15px_40px_rgba(8,15,40,0.35)] hover:-translate-y-1 hover:border-cyan-400/70 transition-all duration-200"
            >
              <div>
                <h3 className="font-semibold text-xl mb-2 text-slate-100">
                  {project.name}
                </h3>
                <p className="text-sm text-slate-300 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] rounded-full bg-slate-800 text-slate-200 border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center border-t border-slate-800 pt-4 text-xs text-cyan-300">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-cyan-200"
                >
                  View on GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
