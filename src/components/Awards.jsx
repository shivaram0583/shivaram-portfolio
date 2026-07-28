import { HiOutlineStar } from "react-icons/hi2";
import FillTitle from "./FillTitle.jsx";

const awards = [
  {
    title: "Clap Award",
    org: "Capco Technologies",
    date: "December 2025",
    description:
      "Awarded for demonstrating high level of commitment towards project work resulting in BLP successful delivery.",
  },
  {
    title: "Clap Award",
    org: "Capco Technologies",
    date: "November 2024",
    description:
      "Awarded for demonstrating high level of commitment towards project work resulting in SEPA CT & CHAPS successful delivery.",
  },
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
      "Awarded for demonstrating high level of commitment towards project work resulting in FPS successful delivery.",
  },
];

const Awards = () => {
  return (
    <section id="awards" className="px-6 sm:px-12 lg:px-24 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span data-pop className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-400/20 text-[#a78bfa]">
              <HiOutlineStar size={22} />
            </span>
            <p className="text-xs uppercase tracking-[0.5em] text-[#8b8b96]">recognition</p>
          </div>
          <FillTitle
            as="h2"
            className="text-3xl sm:text-4xl font-semibold"
            segments={[{ text: "Honors &" }, { text: "Awards", accent: true }]}
          />
          <p className="text-[#a1a1aa] mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            Appreciations from programme leadership for going beyond delivery expectations and driving dependable launches.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {awards.map((award, idx) => (
            <div key={`${award.title}-${award.date}`} data-reveal>
              <div className="card spotlight lift p-6 text-left h-full">
                <p className="text-xs uppercase tracking-[0.3em] text-[#a78bfa] mb-2">{award.date}</p>
                <h3 className="font-semibold text-lg text-[#ededef]">{award.title}</h3>
                <p className="text-xs text-[#8b8b96] mb-3">{award.org}</p>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
