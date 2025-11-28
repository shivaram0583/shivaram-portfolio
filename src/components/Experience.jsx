import { motion } from "framer-motion";
import { HiOutlineBriefcase, HiMiniCheckCircle } from "react-icons/hi2";

const experiences = [
  {
    company: "Capco Technologies · NatWest Group",
    role: "Consultant — Senior Payments Engineer",
    period: "Jan 2022 – Present",
    location: "Hyderabad, India (Hybrid)",
    summary: "Leading modernization of high-value payment rails and orchestration at scale.",
    stack: [
      "Spring Boot",
      "Microservices",
      "Camunda BPM",
      "AWS",
      "PCF → PNF",
      "Kafka",
      "ISO 20022",
      "Payments"
    ],
    highlights: [
      {
        title: "Bulk Listed Payments modernization",
        description:
          "Re-architected BLP microservices with resilient retry + reconciliation, unlocking massive batch throughput without SLA breaches."
      },
      {
        title: "Hybrid-cloud migration",
        description:
          "Drove phased move from PCF to on‑prem PNF and onwards to AWS EKS, tuning autoscaling + observability for 99.9% availability."
      },
      {
        title: "ISO 20022 ready APIs",
        description:
          "Designed canonical domain models + Camunda flows for CHAPS, SEPA and international payments with schema-first governance."
      },
      {
        title: "Real-time payment telemetry",
        description:
          "Delivered webhook + event streaming notifications from initiation through settlement, improving ops response time."
      }
    ]
  },
  {
    company: "Accenture",
    role: "Associate Software Developer",
    period: "Sep 2021 – Jan 2022",
    location: "Hyderabad, India",
    summary: "Supported application reliability for large enterprise programmes.",
    stack: ["Java", "ServiceNow", "Command Center Ops", "Incident Response"],
    highlights: [
      {
        title: "Release readiness",
        description:
          "Partnered with product owners to turn requirements into implementation playbooks, tightening feedback loops between business + engineering."
      },
      {
        title: "Operations command center",
        description:
          "Monitored KPI dashboards, triaged incidents end-to-end and ensured handoffs with distributed teams followed ITIL workflows."
      },
      {
        title: "Root-cause facilitation",
        description:
          "Documented recurring failure patterns, feeding remediation stories that reduced repeat incidents in following sprints."
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
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-200">
              <HiOutlineBriefcase size={22} />
            </span>
            <p className="text-xs uppercase tracking-[0.5em] text-cyan-400/80">career timeline</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Professional <span className="text-cyan-400">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-3xl mx-auto">
            Payments engineering across UK high-value rails, from ISO 20022 adoption to always-on operational support.
            I focus on dependable services, measurable outcomes and thoughtful developer experience.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={exp.company} className="relative pl-10 md:pl-16 border-l border-slate-800/70">
              <span className="absolute -left-[14px] top-3 h-6 w-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-[10px] text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.55)]">
                ★
              </span>
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: idx * 0.05 }}
                className="rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-900/40 border border-slate-800 p-6 sm:p-8 backdrop-blur shadow-[0_20px_50px_rgba(8,15,40,0.45)] text-left"
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
                      {exp.stack.map((tag) => (
                        <span
                          key={`${exp.company}-${tag}`}
                          className="px-2.5 py-0.5 rounded-full bg-slate-950/60 text-slate-200 border border-slate-700/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:flex-1 space-y-5">
                    <p className="text-sm text-slate-300 leading-relaxed lg:text-base">{exp.summary}</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {exp.highlights.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 flex gap-3 items-start"
                        >
                          <div className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                          <div>
                            <p className="text-sm font-medium text-slate-100">{item.title}</p>
                            <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
