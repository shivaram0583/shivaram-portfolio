import { motion } from "framer-motion";
import { HiOutlineBeaker } from "react-icons/hi2";
import FillTitle from "./FillTitle.jsx";

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
            <span data-pop className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-400/20 text-[#a78bfa]">
              <HiOutlineBeaker size={22} />
            </span>
          </div>
          <FillTitle
            as="h2"
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold"
            segments={[{ text: "Featured" }, { text: "Projects", accent: true }]}
          />
          <p className="text-[#a1a1aa] mt-3 text-sm sm:text-base max-w-3xl mx-auto">
            Production-grade side projects that demonstrate <span className="text-[#a78bfa] font-medium">API design</span>, <span className="text-[#a78bfa] font-medium">orchestration</span> and <span className="text-[#a78bfa] font-medium">full-stack craftsmanship</span>.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project, idx) => (
            <div key={project.name} data-reveal>
            <article className="card spotlight lift group p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-stretch">
                <div className="flex flex-col">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {project.featured && (
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#a78bfa] bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-400/20">
                        Latest Build
                      </span>
                    )}
                    <span className="text-xs text-[#a1a1aa] bg-white/[0.03] px-2 py-1 rounded-full border border-[#26262e]">
                      {project.date}
                    </span>
                  </div>
                  <h3 className="font-semibold text-2xl sm:text-3xl text-[#ededef] group-hover:text-[#a78bfa] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm sm:text-base text-[#a1a1aa] mt-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-auto pt-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#8b8b96] mb-3">Built with</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="chip px-2.5 py-1 text-xs cursor-default"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-indigo-500 bg-indigo-500 px-4 py-2 text-sm text-white hover:bg-indigo-600 hover:border-indigo-600 font-medium transition-colors"
                    >
                      <span>View on GitHub</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="rounded-xl bg-white/[0.03] border border-[#26262e] p-5 sm:p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#8b8b96] mb-4">Key Features</p>
                  <ul className="space-y-3.5">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm text-[#a1a1aa] leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
