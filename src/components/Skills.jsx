import FillTitle from "./FillTitle.jsx";
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
      "mTLS",
      "Camunda BPM",
    ],
  },
  {
    title: "Databases",
    blurb: "Relational, NoSQL and migrations",
    icon: HiOutlineCircleStack,
    items: [
      "Oracle",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "H2 Database",
      "Liquibase",
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
      "Gradle",
      "JFrog Artifactory",
      "SonarQube",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Linux Scripting",
      "AutoSys & Batch Processing",
    ],
  },
  {
    title: "Messaging & Integration",
    blurb: "Event streaming and API gateways",
    icon: HiOutlineGlobeAsiaAustralia,
    items: [
      "Apache Kafka",
      "IBM MQ",
      "REST APIs",
      "API Gateway",
      "Apigee",
      "TYK",
      "IBM DataPower",
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
      "Swagger / OpenAPI",
      "Splunk",
      "DXAPM",
    ],
  },
  {
    title: "Security & Secrets",
    blurb: "Authentication and certificate management",
    icon: HiOutlineServer,
    items: [
      "OAuth2",
      "JWT",
      "mTLS",
      "Spring Security",
      "HashiCorp Vault",
      "Venafi",
    ],
  },
  {
    title: "Domain Expertise",
    blurb: "Payment systems and banking",
    icon: HiOutlineGlobeAsiaAustralia,
    items: [
      "Payment Systems",
      "ISO 20022 (PAIN & PACS)",
      "SWIFT",
      "FPS",
      "CHAPS",
      "SEPA",
      "Core Banking",
      "High-Volume Transaction Processing",
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
          <p className="text-xs uppercase tracking-[0.5em] text-[#8b8b96]">Capabilities</p>
          <FillTitle
            as="h2"
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6"
            segments={[{ text: "Technical" }, { text: "Skills", accent: true }]}
          />
          <p className="text-[#a1a1aa] max-w-3xl mx-auto text-sm sm:text-base mt-3">
            Backend craftsmanship blended with <span className="text-[#a78bfa] font-medium">payments domain expertise</span> and <span className="text-[#a78bfa] font-medium">hybrid-cloud delivery</span>. I prioritize
            reliability, observability and clean API contracts that scale.
          </p>
        </div>

        <div className="columns-1 md:columns-2 xl:columns-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={cat.title} className="group mb-6 break-inside-avoid">
                <div data-reveal className="card spotlight lift p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-400/20 text-[#a78bfa] transition-all duration-200 group-hover:border-indigo-400/40">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-[#ededef] transition-colors duration-300 group-hover:text-[#a78bfa]">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-[#8b8b96] mt-1">{cat.blurb}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="chip px-2.5 py-1 text-xs">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
