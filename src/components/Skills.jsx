import { motion } from "framer-motion";

const categories = [
  {
    title: "Languages",
    items: ["Java 11+", "SQL", "JavaScript", "React"],
  },
  {
    title: "Frameworks & Backend",
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
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
            Technical <span className="text-cyan-400">Skillset</span>
          </h2>
          <p className="text-slate-300 max-w-2xl text-sm sm:text-base">
            A blend of backend engineering, payments domain expertise and cloud-native
            delivery. Strong focus on reliability, observability and clean API design.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-5 backdrop-blur hover:-translate-y-1 hover:border-cyan-400/70 transition-all duration-200"
            >
              <h3 className="text-sm font-semibold text-slate-100 mb-3">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-full bg-slate-800 text-xs text-slate-200 border border-slate-700/80 hover:border-cyan-400/60 hover:text-cyan-200 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
