import { motion } from "framer-motion";
import { HiOutlineBriefcase, HiMiniCheckCircle } from "react-icons/hi2";

const experiences = [
  {
    company: "Capco Technologies · NatWest Group",
    role: "Consultant — Java Backend Engineer",
    period: "Jan 2022 – Present",
    location: "Hyderabad, India (Hybrid)",
    summary: "Leading modernization of high-value payment rails, cloud migration, and enterprise payment systems at scale.",
    stack: [
      "Spring Boot",
      "Spring Cloud",
      "Microservices",
      "Camunda BPM",
      "AWS",
      "PCF → PNF",
      "IBM MQ",
      "ISO 20022",
      "SWIFT",
      "FPS",
      "CHAPS",
      "PostgreSQL",
      "Oracle",
      "OAuth2",
      "JWT",
      "API Gateway"
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
        description: "Currently contributing to AWS cloud migration for existing payment services and modernizing architecture for scalability."
      }
    ]
  },
  {
    company: "Accenture",
    role: "Associate Software Developer",
    period: "Sep 2021 – Jan 2022",
    location: "Hyderabad, India",
    summary: "Application lifecycle management and production support for enterprise pharmaceutical systems.",
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
  return (
    <section id="experience" className="px-6 sm:px-12 lg:px-24 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <motion.span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#161b22] border border-blue-400/25 text-blue-200" animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
              <HiOutlineBriefcase size={22} />
            </motion.span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
            Professional <span className="text-gradient">Experience</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-3xl mx-auto">
            Enterprise software engineering across <span className="text-blue-200 font-medium">payment systems</span>, <span className="text-blue-200 font-medium">cloud migration</span>, and <span className="text-blue-200 font-medium">microservices architecture</span>.
            I focus on scalable solutions, clean code practices, and measurable business outcomes.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={exp.company} 
              className="relative pl-10 md:pl-16 border-l border-slate-800/70"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            >
              <motion.span 
                className="absolute -left-[14px] top-3 h-6 w-6 rounded-full bg-[#0d1117] border-2 border-blue-400/45 flex items-center justify-center text-[10px] text-blue-200"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: idx * 0.5,
                  ease: "easeInOut"
                }}
              >
                ★
              </motion.span>
              <motion.article
                className="rounded-2xl bg-[#161b22]/55 border border-[#30363d] p-6 sm:p-8 backdrop-blur-sm text-left overflow-hidden group transition-all duration-200"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px -5px rgba(1, 4, 9, 0.55)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
                  <div className="lg:w-2/5 space-y-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{exp.period}</p>
                      <h3 className="mt-2 text-[1.4rem] sm:text-2xl font-semibold text-slate-100">{exp.role}</h3>
                      <p className="text-sm text-slate-300">{exp.company}</p>
                      <p className="text-xs text-slate-500">{exp.location}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 text-[11px]">
                      {exp.stack.map((tag, tagIdx) => (
                        <motion.span
                          key={`${exp.company}-${tag}`}
                          className="px-2.5 py-0.5 rounded-full bg-[#0d1117]/40 text-[11px] text-slate-200 border border-[#30363d] hover:border-[#3d444d] transition-all duration-200 cursor-default"
                          whileHover={{ 
                            scale: 1.05,
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 + tagIdx * 0.05, duration: 0.3 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:flex-1 space-y-5">
                    <motion.p 
                      className="text-sm text-slate-300 leading-relaxed lg:text-base"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      {exp.summary}
                    </motion.p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {exp.highlights.map((item, highlightIdx) => (
                        <motion.div
                          key={item.title}
                          className="rounded-xl border border-[#30363d] bg-[#0d1117]/30 p-4 flex gap-3 items-start group/highlight transition-all duration-200"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + highlightIdx * 0.05, duration: 0.4, ease: "easeOut" }}
                          whileHover={{
                            y: -2,
                            borderColor: "#3d444d",
                            boxShadow: "0 5px 15px -3px rgba(1, 4, 9, 0.55)",
                          }}
                        >
                          <motion.div 
                            className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 flex-shrink-0"
                            animate={{
                              scale: [1, 1.3, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: highlightIdx * 0.3,
                              ease: "easeInOut"
                            }}
                          />
                          <div>
                            <p className="text-sm font-medium text-slate-100 group-hover/highlight:text-slate-50 transition-colors">
                              {item.title}
                            </p>
                            <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
