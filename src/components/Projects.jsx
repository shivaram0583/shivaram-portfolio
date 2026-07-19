import { motion } from "framer-motion";
import { HiOutlineBeaker } from "react-icons/hi2";

const projects = [
  {
    name: "Inventory Management System",
    tech: ["React", "Node.js", "Express", "SQLite", "Tailwind CSS", "JWT", "Recharts"],
    description:
      "A full-stack inventory and billing platform for small to medium-scale trading businesses. It covers the complete retail workflow — products and categories, purchases, point-of-sale, and business analytics — with secure multi-user access and print-ready receipts.",
    highlights: [
      "Point-of-sale checkout with multi-item cart and live stock validation",
      "Auto-generated product IDs with low-stock alerts",
      "Printable A4 receipts with cash, card and UPI tracking",
      "Role-based access control, JWT auth and login audit logs",
      "Analytics with revenue trends and CSV export",
    ],
    date: "March 2026",
    link: "https://github.com/shivaram0583/inventory-management",
    featured: true,
  },
  {
    name: "Mortgage Loan Microservice",
    tech: ["Spring Boot", "Java", "MySQL", "H2", "Swagger", "React"],
    description:
      "A RESTful microservice for mortgage loan processing, built with a clean API contract and a React front-end for user interaction.",
    highlights: [
      "Complete CRUD API for mortgage loan processing",
      "Custom exception handling and request validation",
      "Dual database support — H2 in-memory and MySQL",
      "Swagger UI documentation with a React-based front-end",
    ],
    date: "February 2022",
    link: "https://github.com/shivaram0583",
  },
  {
    name: "Online Food Ordering System",
    tech: ["PHP", "JavaScript", "HTML", "CSS"],
    description:
      "A full-stack web application connecting restaurants with customers for online food ordering, built with a responsive interface for any device.",
    highlights: [
      "Ordering flow connecting restaurants and customers",
      "Admin panel for restaurant and menu management",
      "Order tracking across the customer journey",
      "Responsive UI for cross-device compatibility",
    ],
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
            <motion.span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-[#ead7cd] text-[#b5451f] shadow-[0_6px_18px_rgba(120,100,80,0.08)]" animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
              <HiOutlineBeaker size={22} />
            </motion.span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
            Featured <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-[#6b6560] mt-3 text-sm sm:text-base max-w-3xl mx-auto">
            Production-grade side projects that demonstrate <span className="text-[#b5451f] font-medium">API design</span>, <span className="text-[#b5451f] font-medium">orchestration</span> and <span className="text-[#b5451f] font-medium">full-stack craftsmanship</span>.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project, idx) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group rounded-2xl bg-white border border-[#e7ded2] p-6 sm:p-8 shadow-[0_10px_30px_rgba(120,100,80,0.06)] transition-all duration-200 hover:border-[#d8ccbb] hover:shadow-[0_18px_44px_rgba(120,100,80,0.12)]"
            >
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-stretch">
                <div className="flex flex-col">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {project.featured && (
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#b5451f] bg-[#f7ece6] px-2.5 py-1 rounded-full border border-[#ead7cd]">
                        Latest Build
                      </span>
                    )}
                    <span className="text-xs text-[#57534e] bg-[#faf7f2] px-2 py-1 rounded-full border border-[#e7ded2]">
                      {project.date}
                    </span>
                  </div>
                  <h3 className="font-semibold text-2xl sm:text-3xl text-[#1c1917] group-hover:text-[#b5451f] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm sm:text-base text-[#44403c] mt-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-auto pt-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#8a837c] mb-3">Built with</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs rounded-full bg-[#faf7f2] text-[#57534e] border border-[#e7ded2] hover:border-[#d8ccbb] hover:text-[#b5451f] transition-all duration-200 cursor-default"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#b5451f] bg-[#b5451f] px-4 py-2 text-sm text-[#faf7f2] hover:bg-[#973714] hover:border-[#973714] font-medium transition-colors"
                    >
                      <span>View on GitHub</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="rounded-xl bg-[#faf7f2] border border-[#e7ded2] p-5 sm:p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#8a837c] mb-4">Key Features</p>
                  <ul className="space-y-3.5">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm text-[#44403c] leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#b5451f] to-[#d97706] flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
