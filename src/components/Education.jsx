import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="px-6 sm:px-12 lg:px-24 py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
        <span className="text-cyan-400">Education</span> & Coursework
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 backdrop-blur"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
          <div>
            <h3 className="font-semibold text-slate-100">
              Bachelor of Technology in Computer Science Engineering
            </h3>
            <p className="text-xs text-slate-400">
              Vellore Institute of Technology, India   July 2017   June 2021
            </p>
          </div>
          <p className="text-xs text-cyan-300">CGPA: 8.0 / 10</p>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
          Relevant Coursework
        </p>
        <div className="flex flex-wrap gap-2 text-[11px]">
          {["Computer Networks","OOP with Java","Data Structures & Algorithms","DBMS","Software Engineering","Operating Systems","Cloud Computing","Cyber Security","Network Programming","Cryptography"].map(
            (c) => (
              <span
                key={c}
                className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-200 border border-slate-700"
              >
                {c}
              </span>
            )
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
