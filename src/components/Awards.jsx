import { motion } from "framer-motion";

const awards = [
  {
    title: "Monthly Team Award",
    org: "Capco Technologies",
    date: "January 2023",
    description:
      "Recognized for exceptional delivery of CPS strategic solution release work and successful production deployment.",
  },
  {
    title: "Clap Award",
    org: "Capco Technologies",
    date: "September 2022",
    description:
      "Awarded for high level of commitment towards project work resulting in successful delivery.",
  },
];

const Awards = () => {
  return (
    <section id="awards" className="px-6 sm:px-12 lg:px-24 py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8">
        Honors & <span className="text-cyan-400">Awards</span>
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {awards.map((award, idx) => (
          <motion.div
            key={award.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 backdrop-blur hover:-translate-y-1 hover:border-cyan-400/70 transition-all duration-200"
          >
            <p className="text-xs text-cyan-300 mb-1">{award.date}</p>
            <h3 className="font-semibold text-slate-100 mb-1">{award.title}</h3>
            <p className="text-xs text-slate-400 mb-3">{award.org}</p>
            <p className="text-sm text-slate-300">{award.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
