import { motion } from "framer-motion";
import { HiOutlineStar } from "react-icons/hi2";

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
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-200">
              <HiOutlineStar size={22} />
            </span>
            <p className="text-xs uppercase tracking-[0.5em] text-cyan-400/80">recognition</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Honors & <span className="text-cyan-400">Awards</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            Appreciations from programme leadership for going beyond delivery expectations and driving dependable launches.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {awards.map((award, idx) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-900/40 border border-slate-800 p-6 backdrop-blur shadow-[0_12px_32px_rgba(8,15,40,0.35)] hover:-translate-y-1 hover:border-cyan-400/70 transition-all duration-200 text-left"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300 mb-2">{award.date}</p>
              <h3 className="font-semibold text-lg text-slate-100">{award.title}</h3>
              <p className="text-xs text-slate-400 mb-3">{award.org}</p>
              <p className="text-sm text-slate-300 leading-relaxed">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
