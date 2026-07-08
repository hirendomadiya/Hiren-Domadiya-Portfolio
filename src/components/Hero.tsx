"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";

export default function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector("#projects");
    if (targetElement) {
      const offsetTop = (targetElement as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const badges = [
    "Software Engineer",
    "Problem Solver",
    "Full Stack Developer",
    "Open to Opportunities",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-background"
    >
      {/* Background glow effects */}
      <div className="bg-glow-blue top-[10%] left-[5%]" />
      <div className="bg-glow-secondary bottom-[10%] right-[5%]" />

      <div className="w-full max-w-[1280px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Side: Professional Introduction */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          <motion.span
            variants={itemVariants}
            className="text-secondary-accent text-sm font-semibold tracking-wider uppercase mb-3 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-secondary-accent animate-pulse"></span>
            Hello, I&apos;m
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4"
          >
            Hiren Domadiya
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent mb-6"
          >
            Software Engineer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-text-secondary leading-relaxed mb-8 max-w-xl"
          >
            Building scalable, reliable, and user-focused software solutions with
            modern technologies and best engineering practices. Specializing in full-stack architecture and premium web experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-10 w-full sm:w-auto"
          >
            <button
              onClick={handleScrollToProjects}
              className="flex items-center justify-center gap-2 bg-primary-accent hover:bg-blue-700 text-white font-medium px-7 py-3.5 rounded-lg border border-white/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-accent/20 cursor-pointer text-sm w-full sm:w-auto"
            >
              View Projects
              <ArrowUpRight size={18} />
            </button>

            <a
              href="/Hiren-Domadiya-Resume.pdf"
              download
              className="flex items-center justify-center gap-2 bg-card hover:bg-zinc-800 text-white font-medium px-7 py-3.5 rounded-lg border border-border-custom transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-700 text-sm w-full sm:w-auto"
            >
              Download Resume
              <FileText size={18} />
            </a>
          </motion.div>

          {/* Professional Badges */}
          <motion.div variants={itemVariants} className="w-full">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              Professional Focus
            </p>
            <div className="flex flex-wrap gap-2.5">
              {badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-900/60 border border-white/5 text-zinc-300 flex items-center gap-1.5"
                >
                  {badge === "Open to Opportunities" && (
                    <span className="w-1.5 h-1.5 rounded-full bg-success-accent"></span>
                  )}
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Professional Portrait Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Subtle blue glow backdrop */}
          <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-[80px] w-[80%] h-[80%] mx-auto z-0 pointer-events-none" />

          {/* Picture Card Frame */}
          <div className="relative z-10 glass-card p-3 rounded-[16px] max-w-[340px] md:max-w-[380px] w-full overflow-hidden">
            <div className="relative aspect-[3/4] w-full rounded-[12px] overflow-hidden bg-zinc-900 border border-white/5">
              <Image
                src="/hiren-portrait.jpg"
                alt="Hiren Domadiya - Software Engineer"
                width={380}
                height={507}
                priority
                sizes="(max-width: 640px) 300px, (max-width: 768px) 340px, 380px"
                quality={85}
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Quick status bar inside the photo card */}
            <div className="mt-4 px-2 py-1.5 flex items-center justify-between text-xs">
              <span className="text-zinc-400 font-medium">Hiren Domadiya</span>
              <span className="flex items-center gap-1.5 text-success-accent font-semibold">
                <span className="w-2 h-2 rounded-full bg-success-accent animate-pulse"></span>
                Active Role Search
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
