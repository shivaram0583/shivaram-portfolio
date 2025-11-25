import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="px-6 sm:px-12 lg:px-24 py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8">
        Professional <span className="text-cyan-400">Experience</span>
      </h2>
      <div className="space-y-8">
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
                Capco Technologies  Consultant  NatWest
              </h3>
              <p className="text-xs text-slate-400">Jan 2022  Present  Hyderabad, India</p>
            </div>
            <div className="flex flex-wrap gap-2 text-[10px]">
              {["Spring Boot", "Microservices", "Camunda BPM", "AWS", "PCF", "PNF", "ISO 20022", "Payments"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-200 border border-slate-700"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
            <li>
              Engineered highly scalable Spring Boot microservices and Camunda-based BPM
              orchestration for high-availability payment processing (CHAPS, SWIFT, BLP),
              exposing ISO 20022-compliant REST APIs.
            </li>
            <li>
              Led migration of critical services from PCF to PNF and then to AWS, delivering
              ~30% infrastructure cost reduction and improved scalability.
            </li>
            <li>
              Designed and implemented the Bulk Listed Payment system handling 243,000+
              transactions per load and 232k+ transactions per hour with robust error
              handling and reconciliation.
            </li>
            <li>
              Contributed to architecture and low-level design for SEPA, International,
              CHAPS and future dated payments, ensuring full ISO 20022 (PAIN, PACS)
              compliance.
            </li>
            <li>
              Built real-time payment status notifications with webhook integration,
              providing instant updates across initiation, processing and settlement.
            </li>
            <li>
              Ensured 99.9% uptime via proactive monitoring (Splunk), code quality
              enforcement (SonarQube) and CI/CD execution.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 backdrop-blur"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
            <div>
              <h3 className="font-semibold text-slate-100">
                Accenture  Associate Software Developer
              </h3>
              <p className="text-xs text-slate-400">Sep 2021  Jan 2022</p>
            </div>
          </div>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
            <li>
              Contributed to application lifecycle management, requirement analysis and
              implementation planning for enterprise systems.
            </li>
            <li>
              Monitored and managed application behaviour through command center
              operations, ensuring system stability and performance.
            </li>
            <li>
              Participated in incident management and root cause analysis for
              production issues with cross-functional teams.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
