"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, FileText, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { submitContactForm } from "@/app/actions";

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    
    try {
      const res = await submitContactForm(formData.name, formData.email, formData.message);
      if (res.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrors((prev) => ({ ...prev, submit: res.error || "Failed to submit message." }));
        setStatus("error");
      }
    } catch {
      setErrors((prev) => ({ ...prev, submit: "An unexpected error occurred. Please try again." }));
      setStatus("error");
    }
  };

  const socialLinks = [
    {
      icon: <Mail size={16} />,
      label: "Email",
      value: "hirendomadiya@gmail.com",
      href: "mailto:hirendomadiya@gmail.com",
    },
    {
      icon: <LinkedinIcon size={16} />,
      label: "LinkedIn",
      value: "linkedin.com/in/hirendomadiya",
      href: "https://linkedin.com/in/hirendomadiya",
    },
    {
      icon: <GithubIcon size={16} />,
      label: "GitHub",
      value: "github.com/hirendomadiya",
      href: "https://github.com/hirendomadiya",
    },
    {
      icon: <FileText size={16} />,
      label: "Resume",
      value: "View CV",
      href: "/Hiren-Domadiya-Resume.pdf",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="bg-glow-blue top-[15%] left-[5%] w-[350px] h-[350px]" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Let&apos;s Connect
          </h2>
          <div className="w-16 h-1 bg-primary-accent mx-auto rounded-full" />
        </motion.div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          {/* Left Column: Social channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                Have a project or opportunity in mind?
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                I am always open to discussing new software development initiatives, full-time opportunities, or tech solutions. Reach out and I will reply as soon as possible.
              </p>
            </div>

            {/* Social details list */}
            <div className="space-y-3.5 pt-4">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass-card p-4 rounded-xl border border-border-custom hover:border-zinc-800 transition-colors group"
                >
                  <div className="p-2.5 bg-zinc-900 border border-white/5 rounded-lg text-zinc-400 group-hover:text-secondary-accent transition-colors duration-300">
                    {link.icon}
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider block">
                      {link.label}
                    </span>
                    <span className="text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors duration-250 truncate block mt-0.5">
                      {link.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-7 glass-card p-6 md:p-8 rounded-[16px] border border-border-custom relative"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-full text-success-accent mb-4">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-sm text-text-secondary max-w-sm">
                    Thank you for reaching out. Your message has been received successfully, and I will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-xs font-bold text-secondary-accent hover:text-white uppercase tracking-wider transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                >
                  {/* Name Field */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`px-4 py-3 bg-zinc-900 border ${
                        errors.name ? "border-red-500/50 focus:border-red-500" : "border-white/5 focus:border-secondary-accent/50"
                      } text-sm text-white rounded-lg focus:outline-none transition-colors duration-250`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <span className="text-xs text-red-500 mt-1.5 flex items-center gap-1.5 font-medium">
                        <AlertCircle size={12} />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`px-4 py-3 bg-zinc-900 border ${
                        errors.email ? "border-red-500/50 focus:border-red-500" : "border-white/5 focus:border-secondary-accent/50"
                      } text-sm text-white rounded-lg focus:outline-none transition-colors duration-250`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500 mt-1.5 flex items-center gap-1.5 font-medium">
                        <AlertCircle size={12} />
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`px-4 py-3 bg-zinc-900 border ${
                        errors.message ? "border-red-500/50 focus:border-red-500" : "border-white/5 focus:border-secondary-accent/50"
                      } text-sm text-white rounded-lg focus:outline-none transition-colors duration-250 resize-none`}
                      placeholder="Write your message here..."
                    />
                    {errors.message && (
                      <span className="text-xs text-red-500 mt-1.5 flex items-center gap-1.5 font-medium">
                        <AlertCircle size={12} />
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 bg-primary-accent hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-semibold py-3.5 rounded-lg border border-white/5 transition-all duration-300 hover:shadow-lg hover:shadow-primary-accent/20 cursor-pointer disabled:cursor-not-allowed text-sm mt-2"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>

                  {status === "error" && (
                    <div className="p-3.5 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg text-xs flex items-center gap-2 font-medium">
                      <AlertCircle size={14} />
                      {errors.submit || "Something went wrong. Please try again."}
                    </div>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
