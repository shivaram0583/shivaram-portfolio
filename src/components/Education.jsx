import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import FillTitle from "./FillTitle.jsx";

const Education = () => {
  return (
    <section id="education" className="px-6 sm:px-12 lg:px-24 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span data-pop className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-400/20 text-[#a78bfa]">
              <HiOutlineAcademicCap size={22} />
            </span>
            <p className="text-xs uppercase tracking-[0.5em] text-[#8b8b96]">academics</p>
          </div>
          <FillTitle
            as="h2"
            className="text-3xl sm:text-4xl font-semibold"
            segments={[{ text: "Education", accent: true }, { text: "& Coursework" }]}
          />
          <p className="text-[#a1a1aa] mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            Computer science foundation with emphasis on distributed systems and secure software delivery.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="card spotlight p-6 sm:p-8"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#a78bfa]">July 2017 – June 2021</p>
              <h3 className="mt-2 font-semibold text-[#ededef]">
                Bachelor of Technology in Computer Science Engineering
              </h3>
              <p className="text-xs text-[#a1a1aa]">
                Vellore Institute of Technology, India
              </p>
              <p className="text-xs text-[#8b8b96] mt-1">
                Specialization: Network and Security
              </p>
            </div>
            <p className="text-xs font-medium text-[#a78bfa]">CGPA: 8.0 / 10</p>
          </div>

          <p className="text-xs uppercase tracking-[0.25em] text-[#8b8b96] mb-2">
            Relevant Coursework
          </p>
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["Computer Networks","OOP with Java","Data Structures & Algorithms","DBMS","Software Engineering","Operating Systems","Cloud Computing","Cyber Security","Network Programming","Cryptography"].map(
              (c) => (
                <span
                  key={c}
                  className="chip px-2 py-0.5"
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
