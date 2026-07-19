import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi2";

const Education = () => {
  return (
    <section id="education" className="px-6 sm:px-12 lg:px-24 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7ece6] border border-[#ead7cd] text-[#b5451f]">
              <HiOutlineAcademicCap size={22} />
            </span>
            <p className="text-xs uppercase tracking-[0.5em] text-[#8a837c]">academics</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold">
            <span className="text-gradient">Education</span> & Coursework
          </h2>
          <p className="text-[#6b6560] mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            Computer science foundation with emphasis on distributed systems and secure software delivery.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white border border-[#e7ded2] p-6 sm:p-8 shadow-[0_14px_40px_rgba(120,100,80,0.08)]"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#b5451f]">July 2017 – June 2021</p>
              <h3 className="mt-2 font-semibold text-[#1c1917]">
                Bachelor of Technology in Computer Science Engineering
              </h3>
              <p className="text-xs text-[#6b6560]">
                Vellore Institute of Technology, India
              </p>
              <p className="text-xs text-[#8a837c] mt-1">
                Specialization: Network and Security
              </p>
            </div>
            <p className="text-xs font-medium text-[#b5451f]">CGPA: 8.0 / 10</p>
          </div>

          <p className="text-xs uppercase tracking-[0.25em] text-[#8a837c] mb-2">
            Relevant Coursework
          </p>
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["Computer Networks","OOP with Java","Data Structures & Algorithms","DBMS","Software Engineering","Operating Systems","Cloud Computing","Cyber Security","Network Programming","Cryptography"].map(
              (c) => (
                <span
                  key={c}
                  className="px-2 py-0.5 rounded-full bg-[#faf7f2] text-[#57534e] border border-[#e7ded2]"
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
