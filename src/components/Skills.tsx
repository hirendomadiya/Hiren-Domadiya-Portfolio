"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Layout, Server, Database, Cpu, Terminal } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Layout size={20} className="text-secondary-accent" />,
    skills: ["React", "Next.js", "TypeScript", "HTML5/CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <Server size={20} className="text-secondary-accent" />,
    skills: ["Django", "API Integration"],
  },
  {
    title: "Database",
    icon: <Database size={20} className="text-secondary-accent" />,
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Tools & Testing",
    icon: <Cpu size={20} className="text-secondary-accent" />,
    skills: ["Git & GitHub", "VS Code"],
  },
  {
    title: "Languages",
    icon: <Terminal size={20} className="text-secondary-accent" />,
    skills: ["JavaScript (ES6+)", "TypeScript", "SQL", "HTML5 & CSS3", "Python (Basics)"],
  },
];

export default function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Background radial glow */}
      <div className="bg-glow-blue top-[30%] right-[10%] w-[350px] h-[350px]" />

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
            Technical Expertise
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto text-sm">
            Categorized skills across frontend frameworks, backend APIs, databases, cloud, and tools.
          </p>
          <div className="w-16 h-1 bg-primary-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-card p-6 rounded-[16px] border border-border-custom hover:border-zinc-800 relative group overflow-hidden"
            >
              {/* Corner ambient glow on hover */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-600/5 group-hover:bg-blue-600/10 rounded-full blur-xl transition-all duration-500 pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-zinc-900 border border-white/5 rounded-xl">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {cat.title}
                </h3>
              </div>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-950/80 border border-white/5 text-zinc-300 hover:text-white hover:border-secondary-accent/40 cursor-default transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
