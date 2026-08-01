import { motion } from "framer-motion";
import { HiOutlineAcademicCap, HiOutlineCheckBadge } from "react-icons/hi2";
import FillTitle from "./FillTitle.jsx";

const certifications = [
  {
    name: "AWS Certified Developer – Associate",
    code: "DVA-C02",
    issuer: "Amazon Web Services",
  },
  {
    name: "DevOps Certification",
    code: "Docker · Kubernetes · Terraform · Azure DevOps",
    issuer: "Professional Certification",
  },
  {
    name: "Generative AI Essentials: Overview and Impact",
    code: "GenAI",
    issuer: "Professional Certification",
  },
  {
    name: "Responsible AI in the Generative AI Era",
    code: "Responsible AI",
    issuer: "Professional Certification",
  },
];

const languages = [
  { name: "English", level: "Full Professional Proficiency" },
  { name: "Hindi", level: "Professional Working Proficiency" },
  { name: "Telugu", level: "Native Proficiency" },
];

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
            segments={[{ text: "Education &" }, { text: "Certifications", accent: true }]}
          />
          <p className="text-[#a1a1aa] mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            Computer science foundation in networks and security, backed by cloud and DevOps certification.
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

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)]">
          <div data-reveal>
            <div className="card spotlight lift p-6 sm:p-8 h-full">
              <div className="flex items-center gap-2.5 mb-5">
                <HiOutlineCheckBadge className="text-[#a78bfa]" size={18} />
                <p className="text-xs uppercase tracking-[0.25em] text-[#8b8b96]">
                  Certifications
                </p>
              </div>
              <ul className="space-y-4">
                {certifications.map((cert) => (
                  <li key={cert.name} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400" />
                    <div>
                      <p className="text-sm font-medium text-[#ededef] leading-snug">
                        {cert.name}
                      </p>
                      <p className="mt-1 font-mono text-[11px] text-[#8b8b96]">
                        {cert.code} · {cert.issuer}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div data-reveal>
            <div className="card spotlight lift p-6 sm:p-8 h-full">
              <p className="text-xs uppercase tracking-[0.25em] text-[#8b8b96] mb-5">
                Languages
              </p>
              <ul className="space-y-4">
                {languages.map((lang) => (
                  <li key={lang.name}>
                    <p className="text-sm font-medium text-[#ededef]">{lang.name}</p>
                    <p className="mt-0.5 font-mono text-[11px] text-[#8b8b96] leading-relaxed">
                      {lang.level}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
