"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  link: string;
}

const CERTIFICATIONS: Certification[] = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    date: "Dec 2024",
    link: "https://aws.amazon.com/verification",
  },
  {
    name: "Meta Front-End Developer Professional",
    issuer: "Meta (via Coursera)",
    date: "Aug 2023",
    link: "https://coursera.org/verify",
  },
  {
    name: "MongoDB Certified Developer Associate",
    issuer: "MongoDB",
    date: "Mar 2023",
    link: "https://learn.mongodb.com",
  },
  {
    name: "PostgreSQL Advanced Developer Certification",
    issuer: "EnterpriseDB",
    date: "Nov 2022",
    link: "https://enterprisedb.com",
  },
];

export default function Certifications() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="certifications" className="py-24 bg-background relative overflow-hidden">
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
            Licenses & Certifications
          </h2>
          <div className="w-16 h-1 bg-primary-accent mx-auto rounded-full" />
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card p-6 rounded-[16px] border border-border-custom hover:border-zinc-800 flex items-start gap-4 relative group"
            >
              {/* Shield Icon */}
              <div className="p-3 bg-zinc-900 border border-white/5 rounded-xl text-secondary-accent group-hover:bg-blue-600/10 transition-colors duration-300">
                <ShieldCheck size={22} />
              </div>

              {/* Text details */}
              <div className="flex-grow min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold text-white tracking-tight leading-snug group-hover:text-secondary-accent transition-colors duration-300">
                    {cert.name}
                  </h3>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors mt-0.5"
                    aria-label={`Verify credential for ${cert.name}`}
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
                <p className="text-xs font-semibold text-zinc-400 mt-1">
                  {cert.issuer}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 mt-3 font-semibold uppercase tracking-wider">
                  <Award size={12} />
                  Issued {cert.date}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
