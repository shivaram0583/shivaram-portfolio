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
    title: "Programming",
    blurb: "Core languages and development",
    icon: HiOutlineCodeBracket,
    items: ["Java 11/17/21", "JavaScript", "SQL", "PL/SQL"],
  },
  {
    title: "Backend Frameworks",
    blurb: "Spring ecosystem & microservices",
    icon: HiOutlineServer,
    items: [
      "Spring Boot",
      "Spring Framework",
      "Spring MVC",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "Microservices Architecture",
      "RESTful API Development",
      "SOAP Web Services",
      "OAuth2",
      "JWT Authentication",
      "Camunda BPM",
    ],
  },
  {
    title: "Cloud & DevOps",
    blurb: "Cloud platforms and CI/CD",
    icon: HiOutlineCloud,
    items: [
      "AWS (EC2, S3, IAM, Lambda)",
      "PCF (Pivotal Cloud Foundry)",
      "CI/CD Pipelines",
      "Git",
      "GitLab",
      "Bitbucket",
      "TeamCity",
      "Maven",
      "JFrog Artifactory",
      "SonarQube",
    ],
  },
  {
    title: "Messaging & Integration",
    blurb: "Enterprise messaging and APIs",
    icon: HiOutlineGlobeAsiaAustralia,
    items: [
      "IBM MQ",
      "REST APIs",
      "Swagger",
      "API Gateway",
      "Camunda BPM",
    ],
  },
  {
    title: "Databases",
    blurb: "Relational and in-memory databases",
    icon: HiOutlineCircleStack,
    items: [
      "MySQL",
      "Oracle",
      "PostgreSQL",
      "H2 Database",
      "TOAD",
    ],
  },
  {
    title: "Testing & Monitoring",
    blurb: "Quality assurance and observability",
    icon: HiOutlineCircleStack,
    items: [
      "JUnit",
      "Mockito",
      "SonarQube",
      "Postman",
      "Swagger/OpenAI",
      "Splunk",
    ],
  },
  {
    title: "Domain Expertise",
    blurb: "Payment systems and banking",
    icon: HiOutlineGlobeAsiaAustralia,
    items: [
      "Payment Systems",
      "ISO 20022",
      "SWIFT",
      "FPS",
      "CHAPS",
      "Core Banking",
      "Transaction Processing",
    ],
  },
  {
    title: "Methodologies",
    blurb: "Development and architecture practices",
    icon: HiOutlineCodeBracket,
    items: [
      "Agile",
      "Scrum",
      "SDLC",
      "Design Patterns",
      "Jira and Confluence",
    ],
  },
  {
    title: "Architecture & Concepts",
    blurb: "System design and patterns",
    icon: HiOutlineServer,
    items: [
      "Microservices",
      "Distributed Systems",
      "API Gateway Architecture",
      "Design Patterns",
      "SDLC",
      "Agile & Scrum",
      "High-Volume Transaction Processing",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 sm:px-12 lg:px-24 py-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-cyan-400/80">Capabilities</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6">
            Technical <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base mt-3">
            Backend craftsmanship blended with <span className="text-cyan-300 font-medium">payments domain expertise</span> and <span className="text-cyan-300 font-medium">hybrid-cloud delivery</span>. I prioritize
            reliability, observability and clean API contracts that scale.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group"
              >
                <div className="rounded-2xl bg-gradient-to-br from-slate-900/80 via-slate-900/90 to-slate-800/80 border border-cyan-400/20 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 transition-all duration-300 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 group-hover:border-cyan-400/50">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-slate-100 transition-colors duration-300 group-hover:text-slate-50">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">{cat.blurb}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, itemIdx) => (
                      <motion.span
                        key={item}
                        className="px-2.5 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-xs text-cyan-200 border border-cyan-400/20 transition-all duration-300 hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-400/40 hover:text-cyan-100 hover:shadow-sm hover:shadow-cyan-500/20"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.1 + itemIdx * 0.05,
                          ease: "easeOut"
                        }}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
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
