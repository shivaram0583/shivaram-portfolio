import { motion } from "framer-motion";
import {
  HiOutlineCodeBracket,
  HiOutlineServer,
  HiOutlineCloud,
  HiOutlineCircleStack,
  HiOutlineGlobeAsiaAustralia,
} from "react-icons/hi2";

const categories = [
  {
    title: "Languages",
    blurb: "Java-first with frontend empathy",
    icon: HiOutlineCodeBracket,
    items: ["Java 11+", "SQL", "JavaScript", "React"],
  },
  {
    title: "Frameworks & Backend",
    blurb: "Spring ecosystem & orchestration",
    icon: HiOutlineServer,
    items: [
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Spring Cloud",
      "Hibernate",
      "RESTful APIs",
      "Microservices",
      "OAuth2",
      "Camunda BPM",
      "SOAP",
      "JUnit",
    ],
  },
  {
    title: "Cloud & DevOps",
    blurb: "Hybrid-cloud operations & pipelines",
    icon: HiOutlineCloud,
    items: [
      "AWS Services",
      "PCF",
      "PNF",
      "CI/CD Pipelines",
      "IBM MQ",
      "Swagger",
      "SonarQube",
      "Splunk",
      "TeamCity",
      "Git / GitLab / Bitbucket",
    ],
  },
  {
    title: "Databases & Tools",
    blurb: "Polyglot persistence & delivery",
    icon: HiOutlineCircleStack,
    items: [
      "MySQL",
      "Oracle",
      "PostgreSQL",
      "H2",
      "TOAD for Oracle",
      "Postman",
      "Jira",
      "Confluence",
    ],
  },
  {
    title: "Domain Expertise",
    blurb: "Payments, ISO 20022 and rails",
    icon: HiOutlineGlobeAsiaAustralia,
    items: [
      "Payment Systems",
      "ISO 20022",
      "SWIFT",
      "FPS",
      "SEPA",
      "INTL",
      "CHAPS",
      "BLP",
      "Core & Commercial Banking",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 sm:px-12 lg:px-24 py-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-cyan-400/80">Capabilities</p>
          <h2 className="text-3xl sm:text-4xl font-semibold mt-2">
            Technical <span className="text-cyan-400">Skillset</span>
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base mt-3">
            Backend craftsmanship blended with payments domain expertise and hybrid-cloud delivery. I prioritize
            reliability, observability and clean API contracts that scale.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-900/40 border border-slate-800 p-6 backdrop-blur shadow-[0_15px_40px_rgba(8,15,40,0.35)] hover:-translate-y-1 hover:border-cyan-400/60 transition-all duration-200"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-200">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-100">{cat.title}</h3>
                    <p className="text-xs text-slate-400 mt-1">{cat.blurb}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-full bg-slate-950/60 text-xs text-slate-200 border border-slate-700/80 hover:border-cyan-400/60 hover:text-cyan-200 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
