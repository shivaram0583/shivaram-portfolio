import { motion } from "framer-motion";
import {
  HiOutlineCodeBracket,
  HiOutlineServer,
  HiOutlineCloud,
  HiOutlineCircleStack,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineSparkles,
} from "react-icons/hi2";

const categories = [
  {
    title: "Programming",
    blurb: "Core languages and development",
    icon: HiOutlineCodeBracket,
    items: ["Java 11/17/21", "JavaScript", "SQL", "PL/SQL"],
  },
  {
    title: "AI-Assisted Development",
    blurb: "AI pair-programming and agents",
    icon: HiOutlineSparkles,
    items: [
      "Claude",
      "GitHub Copilot",
      "Devin",
      "Agentic Workflows",
    ],
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
    title: "Databases",
    blurb: "Relational and in-memory databases",
    icon: HiOutlineCircleStack,
    items: [
      "MySQL",
      "Oracle",
      "PostgreSQL",
      "MongoDB",
      "H2 Database",
      "TOAD",
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
      "GitHub Actions",
      "Git",
      "GitHub",
      "GitLab",
      "Bitbucket",
      "TeamCity",
      "Maven",
      "JFrog Artifactory",
      "SonarQube",
      "Linux Scripting",
      "AutoSys",
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
    title: "Architecture & Practices",
    blurb: "System design and delivery methods",
    icon: HiOutlineServer,
    items: [
      "Microservices",
      "Distributed Systems",
      "API Gateway Architecture",
      "High-Volume Transaction Processing",
      "Design Patterns",
      "SDLC",
      "Agile & Scrum",
      "Jira & Confluence",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 sm:px-12 lg:px-24 py-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-[#8a837c]">Capabilities</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-[#44403c] max-w-3xl mx-auto text-sm sm:text-base mt-3">
            Backend craftsmanship blended with <span className="text-[#b5451f] font-medium">payments domain expertise</span> and <span className="text-[#b5451f] font-medium">hybrid-cloud delivery</span>. I prioritize
            reliability, observability and clean API contracts that scale.
          </p>
        </div>

        <div className="columns-1 md:columns-2 xl:columns-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: "easeOut" }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group mb-6 break-inside-avoid"
              >
                <div className="rounded-2xl bg-white border border-[#e7ded2] p-6 shadow-[0_10px_30px_rgba(120,100,80,0.06)] transition-all duration-200 hover:border-[#d8ccbb] hover:shadow-[0_14px_36px_rgba(120,100,80,0.1)]">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#f7ece6] border border-[#ead7cd] text-[#b5451f] transition-all duration-200 group-hover:border-[#e0c3b6]">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-[#1c1917] transition-colors duration-300 group-hover:text-[#b5451f]">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-[#8a837c] mt-1">{cat.blurb}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, itemIdx) => (
                      <motion.span
                        key={item}
                        className="px-2.5 py-1 rounded-full bg-[#faf7f2] text-xs text-[#57534e] border border-[#e7ded2] transition-all duration-200 hover:border-[#d8ccbb] hover:text-[#b5451f]"
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
