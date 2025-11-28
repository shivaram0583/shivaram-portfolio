import { motion } from "framer-motion";
import { HiOutlineUserGroup } from "react-icons/hi";

const Summary = () => {
  const stats = [
    { label: "Years", value: "4+", detail: "Enterprise engineering" },
    { label: "Transactions", value: "243k+", detail: "per BLP load" },
    { label: "Availability", value: "99.9%", detail: "cloud uptime" },
  ];

  const traits = ["ISO 20022", "Payments Domain", "Cloud Native", "Camunda BPM", "Lean Delivery"];

  return (
    <section id="about" className="px-6 sm:px-12 lg:px-24 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900/80 to-slate-900/50 border border-slate-800 p-6 sm:p-10 text-center backdrop-blur"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-200">
            <HiOutlineUserGroup size={24} />
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Professional <span className="text-cyan-400">Summary</span>
          </h2>
        </div>
        <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
          Backend-focused Software Engineer delivering resilient payment rails for UK banking clients. Experienced across
          Spring Boot microservices, Camunda BPM orchestration and hybrid-cloud deployments (PCF, PNF, AWS). I translate ISO 20022 standards into
          reliable APIs and operational playbooks for high-volume settlements.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{item.label}</p>
              <p className="mt-2 text-2xl font-semibold text-cyan-300">{item.value}</p>
              <p className="text-xs text-slate-400">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs">
          {traits.map((trait) => (
            <span
              key={trait}
              className="px-3 py-1 rounded-full border border-cyan-400/30 text-cyan-200 bg-cyan-500/5"
            >
              {trait}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Summary;
