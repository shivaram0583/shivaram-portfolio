import { motion } from "framer-motion";

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
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8">
        Selected <span className="text-cyan-400">Projects</span>
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 flex flex-col justify-between backdrop-blur hover:-translate-y-1 hover:border-cyan-400/70 transition-all duration-200"
          >
            <div>
              <h3 className="font-semibold text-lg mb-2 text-slate-100">
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
            <div className="mt-2 flex justify-between items-center">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-cyan-300 hover:text-cyan-200"
              >
                View on GitHub
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
