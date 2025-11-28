import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  HiOutlinePaperAirplane,
  HiOutlineMapPin,
  HiOutlineDevicePhoneMobile,
  HiOutlineEnvelope,
} from "react-icons/hi2";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const toEmail = import.meta.env.VITE_CONTACT_TO_EMAIL || "dvvshivaram@gmail.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "Email service is not configured. Please try again later.",
      });
      return;
    }

    setStatus({ type: "loading", message: "Sending your message..." });

    try {
      const formData = new FormData(formRef.current);
      const payload = {
        from_name: formData.get("name"),
        reply_to: formData.get("email"),
        phone: formData.get("mobile"),
        message: formData.get("message"),
        to_email: toEmail,
      };

      await emailjs.send(serviceId, templateId, payload, {
        publicKey,
      });

      formRef.current?.reset();
      setStatus({
        type: "success",
        message: "Thanks for reaching out! I'll get back to you shortly.",
      });
    } catch (error) {
      console.error("EmailJS error", error);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again or email me directly.",
      });
    }
  };

  return (
    <section id="contact" className="px-6 sm:px-12 lg:px-24 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-200">
              <HiOutlinePaperAirplane size={22} />
            </span>
            <p className="text-xs uppercase tracking-[0.5em] text-cyan-400/80">Let's connect</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Tell me about your <span className="text-cyan-400">next build</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base max-w-3xl mx-auto">
            Open to backend engineering roles, payments platforms and cloud-native solutions. If you're building resilient
            financial systems or large-scale transaction platforms, I'd love to talk.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-900/40 border border-slate-800 p-6 backdrop-blur space-y-5"
          >
            <div className="space-y-3">
              {[ 
                {
                  icon: HiOutlineMapPin,
                  label: "Availability",
                  value: "Hyderabad, Telangana • GMT+5:30 • Hybrid / Remote-friendly",
                },
                {
                  icon: HiOutlineDevicePhoneMobile,
                  label: "Phone",
                  value: "+91 7036953734",
                },
                {
                  icon: HiOutlineEnvelope,
                  label: "Email",
                  value: "dvvshivaram@gmail.com",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950/70 border border-slate-800 text-cyan-200">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                      <p className="text-sm text-slate-200">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-3 text-xs">
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
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900/80 to-slate-900/60 border border-slate-800 p-6 sm:p-8 backdrop-blur space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs text-slate-300 mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
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
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg bg-slate-950/60 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-300 mb-1" htmlFor="mobile">
                  Mobile Number
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  type="text"
                  placeholder="e.g. +91 7036953734"
                  className="w-full rounded-lg bg-slate-950/60 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-slate-300 mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full rounded-lg bg-slate-950/60 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400"
              />
            </div>
            <button
              type="submit"
              disabled={status.type === "loading"}
              className="w-full mt-2 px-4 py-3 rounded-full bg-cyan-500 text-slate-950 text-sm font-medium hover:bg-cyan-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status.type === "loading" ? "Sending..." : "Send Message"}
            </button>
            {status.type !== "idle" && (
              <p
                className={`mt-2 text-xs ${
                  status.type === "success"
                    ? "text-emerald-400"
                    : status.type === "error"
                    ? "text-rose-400"
                    : "text-slate-300"
                }`}
              >
                {status.message}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
