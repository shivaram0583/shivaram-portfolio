import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  HiOutlinePaperAirplane,
  HiOutlineMapPin,
  HiOutlineDevicePhoneMobile,
  HiOutlineEnvelope,
} from "react-icons/hi2";
import emailjs from "@emailjs/browser";
import FillTitle from "./FillTitle.jsx";

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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7ece6] border border-[#ead7cd] text-[#b5451f]">
              <HiOutlinePaperAirplane size={22} />
            </span>
            <p className="text-xs uppercase tracking-[0.5em] text-[#8a837c]">Let's connect</p>
          </div>
          <FillTitle
            as="h2"
            className="text-3xl sm:text-4xl font-semibold"
            segments={[{ text: "Tell me about your" }, { text: "next build", accent: true }]}
          />
          <p className="text-[#6b6560] mt-3 text-sm sm:text-base max-w-3xl mx-auto">
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
            className="rounded-3xl bg-white border border-[#e7ded2] p-6 shadow-[0_14px_40px_rgba(120,100,80,0.08)] space-y-5"
          >
            <div className="space-y-3">
              {[ 
                {
                  icon: HiOutlineMapPin,
                  label: "Location",
                  value: "Hyderabad, Telangana - 507140",
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
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f7ece6] border border-[#ead7cd] text-[#b5451f]">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#8a837c]">{item.label}</p>
                      <p className="text-sm text-[#292524]">{item.value}</p>
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
                className="px-4 py-2 rounded-full border border-[#d8ccbb] text-[#44403c] hover:border-[#b5451f] hover:text-[#b5451f] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/shivaram0583"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full border border-[#d8ccbb] text-[#44403c] hover:border-[#b5451f] hover:text-[#b5451f] transition-colors"
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
            className="rounded-3xl bg-white border border-[#e7ded2] p-6 sm:p-8 shadow-[0_14px_40px_rgba(120,100,80,0.08)] space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs text-[#44403c] mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg bg-[#faf7f2] border border-[#e7ded2] px-3 py-2 text-sm text-[#1c1917] placeholder:text-[#a8a29e] focus:outline-none focus:ring-1 focus:ring-[#b5451f] focus:border-[#b5451f]"
                />
              </div>
              <div>
                <label className="block text-xs text-[#44403c] mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg bg-[#faf7f2] border border-[#e7ded2] px-3 py-2 text-sm text-[#1c1917] placeholder:text-[#a8a29e] focus:outline-none focus:ring-1 focus:ring-[#b5451f] focus:border-[#b5451f]"
                />
              </div>
              <div>
                <label className="block text-xs text-[#44403c] mb-1" htmlFor="mobile">
                  Mobile Number
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  type="text"
                  placeholder="e.g. +91 7036953734"
                  className="w-full rounded-lg bg-[#faf7f2] border border-[#e7ded2] px-3 py-2 text-sm text-[#1c1917] placeholder:text-[#a8a29e] focus:outline-none focus:ring-1 focus:ring-[#b5451f] focus:border-[#b5451f]"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-[#44403c] mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full rounded-lg bg-[#faf7f2] border border-[#e7ded2] px-3 py-2 text-sm text-[#1c1917] placeholder:text-[#a8a29e] focus:outline-none focus:ring-1 focus:ring-[#b5451f] focus:border-[#b5451f]"
              />
            </div>
            <button
              type="submit"
              disabled={status.type === "loading"}
              className="btn-primary w-full mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status.type === "loading" ? "Sending..." : "Send Message"}
            </button>
            {status.type !== "idle" && (
              <p
                className={`mt-2 text-xs ${
                  status.type === "success"
                    ? "text-emerald-700"
                    : status.type === "error"
                    ? "text-rose-600"
                    : "text-[#6b6560]"
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
