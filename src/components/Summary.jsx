import { motion } from "framer-motion";
import { HiOutlineUserGroup } from "react-icons/hi";

const Summary = () => {
  const stats = [
    { label: "Years", value: "5", detail: "Software engineering" },
    { label: "Transactions", value: "243k+", detail: "per BLP load" },
    { label: "Availability", value: "99.9%", detail: "cloud uptime" },
  ];

  const traits = ["Java Backend", "Microservices", "Cloud Native", "Payment Systems", "System Design"];

  return (
    <section id="about" className="px-6 sm:px-12 lg:px-24 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto rounded-3xl bg-[#0d1117]/40 border border-[#30363d] p-6 sm:p-10 text-center backdrop-blur"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-400/25 text-blue-200">
            <HiOutlineUserGroup size={24} />
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Professional <span className="text-blue-300">Summary</span>
          </h2>
        </div>
        <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
          Software Engineer with 5 years of experience in designing and developing microservices, cloud-native applications, and real-time payment systems. Expert in Java, Spring Boot, Spring Cloud, REST APIs, Microservices, AWS, and distributed system design. Hands-on experience implementing ISO 20022, SWIFT, FPS, CHAPS, and large-scale transaction processing with strong focus on clean code, CI/CD, and Agile delivery.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[#30363d] bg-[#0d1117]/35 p-4"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{item.label}</p>
              <p className="mt-2 text-2xl font-semibold text-emerald-300">{item.value}</p>
              <p className="text-xs text-slate-400">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs">
          {traits.map((trait) => (
            <span
              key={trait}
              className="px-3 py-1 rounded-full border border-[#30363d] text-slate-200 bg-[#161b22]/40"
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
