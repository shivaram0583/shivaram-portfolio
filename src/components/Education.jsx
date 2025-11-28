import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi2";

const Education = () => {
  return (
    <section id="education" className="px-6 sm:px-12 lg:px-24 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-200">
              <HiOutlineAcademicCap size={22} />
            </span>
            <p className="text-xs uppercase tracking-[0.5em] text-cyan-400/80">academics</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold">
            <span className="text-cyan-400">Education</span> & Coursework
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            Computer science foundation with emphasis on distributed systems and secure software delivery.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-900/40 border border-slate-800 p-6 sm:p-8 backdrop-blur shadow-[0_12px_32px_rgba(8,15,40,0.35)]"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">2017 – 2021</p>
              <h3 className="mt-2 font-semibold text-slate-100">
                Bachelor of Technology · Computer Science Engineering
              </h3>
              <p className="text-xs text-slate-400">
                Vellore Institute of Technology, India
              </p>
            </div>
            <p className="text-xs text-cyan-300">CGPA: 8.0 / 10</p>
          </div>

          <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-2">
            Relevant Coursework
          </p>
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["Computer Networks","OOP with Java","Data Structures & Algorithms","DBMS","Software Engineering","Operating Systems","Cloud Computing","Cyber Security","Network Programming","Cryptography"].map(
              (c) => (
                <span
                  key={c}
                  className="px-2 py-0.5 rounded-full bg-slate-950/60 text-slate-200 border border-slate-700"
                >
                  {c}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
