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
        className="max-w-6xl mx-auto rounded-3xl bg-white border border-[#e7ded2] p-6 sm:p-10 text-center shadow-[0_16px_44px_rgba(120,100,80,0.08)]"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7ece6] border border-[#ead7cd] text-[#b5451f]">
            <HiOutlineUserGroup size={24} />
          </span>
          <FillTitle
            as="h2"
            className="text-3xl sm:text-4xl font-semibold"
            segments={[{ text: "Professional" }, { text: "Summary", accent: true }]}
          />
        </div>
        <p className="text-[#44403c] max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
          Software Engineer with 5 years of experience in designing and developing microservices, cloud-native applications, and real-time payment systems. Expert in Java, Spring Boot, Spring Cloud, REST APIs, Microservices, AWS, and distributed system design. Hands-on experience implementing ISO 20022, SWIFT, FPS, CHAPS, and large-scale transaction processing with strong focus on clean code, CI/CD, and Agile delivery.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[#e7ded2] bg-[#faf7f2] p-4"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#8a837c]">{item.label}</p>
              <p className="mt-2 text-2xl font-semibold text-[#b5451f]">
                <CountUp value={item.value} />
              </p>
              <p className="text-xs text-[#6b6560]">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs">
          {traits.map((trait) => (
            <span
              key={trait}
              className="px-3 py-1 rounded-full border border-[#e7ded2] text-[#44403c] bg-white"
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
