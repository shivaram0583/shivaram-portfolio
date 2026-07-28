import { motion } from "framer-motion";
import { HiOutlineUserGroup } from "react-icons/hi";
import FillTitle from "./FillTitle.jsx";
import CountUp from "./CountUp.jsx";

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
        className="card max-w-6xl mx-auto p-6 sm:p-12 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <span data-pop className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-400/20 text-[#a78bfa]">
            <HiOutlineUserGroup size={24} />
          </span>
          <FillTitle
            as="h2"
            className="text-3xl sm:text-4xl font-semibold"
            segments={[{ text: "Professional" }, { text: "Summary", accent: true }]}
          />
        </div>
        <p className="text-[#a1a1aa] max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
          Software Engineer with 5 years of experience in designing and developing microservices, cloud-native applications, and real-time payment systems. Expert in Java, Spring Boot, Spring Cloud, REST APIs, Microservices, AWS, and distributed system design. Hands-on experience implementing ISO 20022, SWIFT, FPS, CHAPS, and large-scale transaction processing with strong focus on clean code, CI/CD, and Agile delivery.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[#26262e] bg-white/[0.03] p-4"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#8b8b96]">{item.label}</p>
              <p className="mt-2 text-2xl font-semibold text-[#a78bfa]">
                <CountUp value={item.value} />
              </p>
              <p className="text-xs text-[#a1a1aa]">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs">
          {traits.map((trait) => (
            <span
              key={trait}
              className="px-3 py-1 rounded-full border border-[#26262e] text-[#a1a1aa] bg-[#131317]"
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
