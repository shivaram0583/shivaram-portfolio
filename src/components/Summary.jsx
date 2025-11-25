import { motion } from "framer-motion";

const Summary = () => {
  return (
    <section id="about" className="px-6 sm:px-12 lg:px-24 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Professional <span className="text-cyan-400">Summary</span>
        </h2>
        <p className="text-slate-300 max-w-3xl leading-relaxed">
          Software Engineer with 4+ years of experience in Java, Spring Boot, Microservices,
          PCF, PNF and AWS Cloud, specializing in high-volume payment systems and core
          banking platforms. Proven track record designing ISO 20022-compliant services,
          real-time payment orchestration and resilient transaction processing for mission-
          critical applications.
        </p>
      </motion.div>
    </section>
  );
};

export default Summary;
