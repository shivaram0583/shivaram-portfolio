import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { HiOutlineBriefcase, HiMiniCheckCircle } from "react-icons/hi2";
import FillTitle from "./FillTitle.jsx";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../lib/gsapConfig.js";

const experiences = [
  {
    company: "Wells Fargo",
    team: "Digital & Technology Innovation",
    role: "Senior Software Engineer",
    period: "Jul 2026 – Present",
    location: "Hyderabad, India",
    summary: "Engineering the bank's Enterprise Letter and Document Generation platform, automating creation and delivery of customer communications across multiple lines of business.",
    stack: [
      "Java",
      "Spring Boot",
      "Microservices",
      "REST APIs",
      "Linux",
      "AutoSys",
      "Batch Processing",
      "GitHub Copilot",
      "Devin",
      "Enterprise Letter Generation",
      "Document Generation",
    ],
    highlights: [
      {
        title: "Enterprise Letter & Document Generation",
        description: "Building the platform that automates generation and delivery of customer letters and documents across the bank's lines of business."
      },
      {
        title: "Java & Spring Boot Services",
        description: "Designing and developing Java and Spring Boot services that power document generation workflows end to end."
      },
      {
        title: "Upstream Banking Integration",
        description: "Integrating document services with upstream banking systems to source and validate customer data reliably."
      },
      {
        title: "Batch Processing & Scheduling",
        description: "Automating high-volume document runs with AutoSys-scheduled batch jobs and Linux scripting."
      }
    ]
  },
  {
    company: "Capco Technologies",
    team: "Client: NatWest Bank · Payments Platform",
    role: "Consultant — Java Backend Engineer",
    period: "Jan 2022 – Jun 2026",
    location: "Hyderabad, India (Hybrid)",
    summary: "Delivered and modernised high-value payment rails for a UK tier-1 bank — building the Faster Payments platform from scratch, implementing ISO 20022 regulatory change, and migrating legacy systems to cloud-native microservices.",
    stack: [
      "Spring Boot",
      "Spring Cloud",
      "Microservices",
      "Camunda BPM",
      "AWS",
      "PCF → PNF",
      "IBM MQ",
      "Kafka",
      "ISO 20022",
      "SWIFT",
      "FPS",
      "CHAPS",
      "SEPA",
      "Oracle",
      "PostgreSQL",
      "Liquibase",
      "OAuth2",
      "mTLS",
      "JWT",
      "Apigee",
      "TYK",
      "IBM DataPower",
      "Vault",
      "AutoSys"
    ],
    highlights: [
      {
        title: "PCF to PNF Migration & Cloud Native",
        description: "Migrated legacy applications from PCF to PNF, converting standalone systems into Java microservices enabling cloud native deployment."
      },
      {
        title: "Faster Payments Scaling (FPS) Platform",
        description: "Built FPS platform from scratch using Spring Boot microservices and Camunda BPM to orchestrate payment flow from gateway to engines to customer PSNs."
      },
      {
        title: "Real-time PSN Generation",
        description: "Delivered real-time PSN generation enabling successful production rollout and live customer migration with zero downtime."
      },
      {
        title: "ISO 20022 Regulatory Implementation",
        description: "Implemented ISO 20022 regulatory features (PAIN & PACS) for CHAPS, INTL, SEPA, SWIFT, and Faster Payments with reusable translation libraries."
      },
      {
        title: "Enhanced CHAPS & INTL Capabilities",
        description: "Developed enhanced capabilities supporting ISO 20022 hybrid address structures for improved compliance and regulatory requirements."
      },
      {
        title: "Bulk Listed Payments (BLP) System",
        description: "Engineered BLP with single debit/multi credit processing for file channel customers; implemented payment execution and full batch/transaction PSNs."
      },
      {
        title: "AWS Cloud Migration",
        description: "Contributed to AWS cloud migration for existing payment services, modernising architecture for scalability."
      },
      {
        title: "Enterprise API Gateway Integration",
        description: "Integrated payment APIs with enterprise gateways including TYK, Apigee and IBM DataPower."
      },
      {
        title: "Security & Secrets Management",
        description: "Implemented OAuth2, mTLS and JWT auth across distributed microservices; managed certificate lifecycle via Venafi and secrets via HashiCorp Vault."
      },
      {
        title: "Database Engineering & Automation",
        description: "Designed Oracle and PostgreSQL schemas with Liquibase-automated migrations, and configured AutoSys batch jobs for payment file processing."
      }
    ]
  },
  {
    company: "Accenture",
    team: "Client: Takeda Pharmaceuticals",
    role: "Associate Software Developer",
    period: "Sep 2021 – Jan 2022",
    location: "Hyderabad, India",
    summary: "Provided application lifecycle management and production support for business-critical pharmaceutical enterprise systems.",
    stack: ["Java", "ServiceNow", "Command Center Ops", "Incident Management", "Root Cause Analysis"],
    highlights: [
      {
        title: "Application Lifecycle Management",
        description: "Supported application lifecycle management and production support activities for critical enterprise systems."
      },
      {
        title: "Incident Management & RCA",
        description: "Performed incident management and root cause analysis for critical enterprise applications ensuring minimal downtime."
      },
      {
        title: "Cross-functional Collaboration",
        description: "Collaborated with cross-functional teams for requirement gathering and implementation planning."
      },
      {
        title: "System Performance Monitoring",
        description: "Monitored system performance and ensured operational stability through command center support."
      }
    ]
  }
];

const Experience = () => {
  const sectionRef = useRef(null);

  // The timeline rail fills with terracotta as each entry is read.
  useGSAP(
    () => {
      const lines = gsap.utils.toArray(".exp-line");
      if (prefersReducedMotion()) {
        gsap.set(lines, { scaleY: 1 });
        return;
      }
      lines.forEach((line) => {
        gsap.to(line, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: line.parentElement,
            start: "top 75%",
            end: "bottom 55%",
            scrub: 0.8,
          },
        });
      });

      // Each timeline node lights up while its role is the one being read.
      gsap.utils.toArray("[data-exp-item]").forEach((item) => {
        const dot = item.querySelector(".exp-dot");
        if (!dot) return;
        ScrollTrigger.create({
          trigger: item,
          start: "top 72%",
          end: "bottom 45%",
          onToggle: (self) => dot.classList.toggle("is-live", self.isActive),
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="experience" ref={sectionRef} className="px-6 sm:px-12 lg:px-24 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span data-pop className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-400/20 text-[#a78bfa]">
              <HiOutlineBriefcase size={22} />
            </span>
          </div>
          <FillTitle
            as="h2"
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold"
            segments={[{ text: "Professional" }, { text: "Experience", accent: true }]}
          />
          <p className="text-[#a1a1aa] text-sm sm:text-base mt-4 max-w-3xl mx-auto">
            Enterprise software engineering across <span className="text-[#a78bfa] font-medium">payment systems</span>, <span className="text-[#a78bfa] font-medium">cloud migration</span>, and <span className="text-[#a78bfa] font-medium">microservices architecture</span>.
            I focus on scalable solutions, clean code practices, and measurable business outcomes.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={exp.company}
              data-exp-item
              className="relative pl-10 md:pl-16 border-l border-[#26262e]"
            >
              <span
                aria-hidden="true"
                className="exp-line absolute -left-[2px] top-0 h-full w-[3px] origin-top scale-y-0 rounded-full bg-gradient-to-b from-indigo-400 to-violet-400"
              />
              <span className="exp-dot absolute -left-[14px] top-3 h-6 w-6 rounded-full bg-[#131317] border-2 border-[#35353f] flex items-center justify-center text-[10px] text-[#8b8b96]">
                ★
              </span>
              <div data-reveal>
                <article className="card spotlight lift p-6 sm:p-8 text-left group">
                  <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
                    <div className="lg:w-2/5 space-y-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-[#a78bfa]">{exp.period}</p>
                        <h3 className="mt-2 text-[1.4rem] sm:text-2xl font-semibold text-[#ededef]">{exp.role}</h3>
                        <p className="text-sm font-medium text-[#ededef]">{exp.company}</p>
                        {exp.team && (
                          <p className="text-xs text-[#a1a1aa] mt-0.5">{exp.team}</p>
                        )}
                        <p className="text-xs text-[#8b8b96] mt-0.5">{exp.location}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 text-[11px]">
                        {exp.stack.map((tag) => (
                          <span
                            key={`${exp.company}-${tag}`}
                            className="chip px-2.5 py-0.5 text-[11px] cursor-default"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="lg:flex-1 space-y-5">
                      <p className="text-sm text-[#a1a1aa] leading-relaxed lg:text-base">
                        {exp.summary}
                      </p>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {exp.highlights.map((item) => (
                          <div
                            key={item.title}
                            className="hl-card rounded-xl border border-[#26262e] bg-white/[0.03] p-4 flex gap-3 items-start group/highlight"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-[#ededef] group-hover/highlight:text-[#a78bfa] transition-colors">
                                {item.title}
                              </p>
                              <p className="text-xs text-[#a1a1aa] mt-1 leading-relaxed">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
