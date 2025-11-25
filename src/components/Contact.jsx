import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <section id="contact" className="px-6 sm:px-12 lg:px-24 py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
        Let's <span className="text-cyan-400">Connect</span>
      </h2>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-slate-300 text-sm sm:text-base max-w-xl">
            Open to backend engineering roles, payments platforms, and cloud-native
            solutions. If you're building resilient financial systems or large-scale
            transaction platforms, I'd love to talk.
          </p>
          <div className="space-y-1 text-sm">
            <p className="text-slate-200">Hyderabad, Telangana - 507140</p>
            <p className="text-slate-300">
              Phone: <span className="text-cyan-300">+91 7036953734</span>
            </p>
            <p className="text-slate-300">
              Email: <span className="text-cyan-300">dvvshivaram@gmail.com</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-xs mt-2">
            <a
              href="https://www.linkedin.com/in/shivaram-doddi"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/shivaram0583"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 backdrop-blur space-y-4"
        >
          <div>
            <label className="block text-xs text-slate-300 mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full rounded-lg bg-slate-950/60 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-300 mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full rounded-lg bg-slate-950/60 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-300 mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              required
              className="w-full rounded-lg bg-slate-950/60 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-2 px-4 py-2 rounded-full bg-cyan-500 text-slate-950 text-sm font-medium hover:bg-cyan-400 transition-colors"
          >
            Send Message
          </button>
          {submitted && (
            <p className="mt-2 text-xs text-emerald-400">
              Thanks for reaching out! This demo form doesn't send emails yet, but your
              interest is appreciated.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
