"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Mail } from "lucide-react";

export default function About() {
  const infoCards = [
    {
      icon: <Briefcase className="text-secondary-accent" size={22} />,
      label: "Experience",
      value: "3+ Years",
      subText: "Web & Software Dev",
    },
    {
      icon: <GraduationCap className="text-secondary-accent" size={22} />,
      label: "Education",
      value: "B.E. Computer Eng.",
      subText: "GTU",
    },
    {
      icon: <MapPin className="text-secondary-accent" size={22} />,
      label: "Location",
      value: "Gujarat, India",
      subText: "Remote / Hybrid",
    },
    {
      icon: <Mail className="text-secondary-accent" size={22} />,
      label: "Email",
      value: "hirendomadiya@gmail.com",
      subText: "Click to mail",
      href: "mailto:hirendomadiya@gmail.com",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary-accent mx-auto lg:mx-0 rounded-full" />
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Biography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 space-y-6 text-text-secondary leading-relaxed"
          >
            <h3 className="text-xl font-semibold text-white">
              An engineering-first mindset dedicated to crafting robust software solutions.
            </h3>
            
            <p>
              I am a Software Engineer driven by a passion for solving complex technical problems
              and building highly scalable, performant web applications. My development philosophy revolves
              around clean code, solid architecture, and keeping user experience at the core of my decisions.
            </p>

            <p>
              With hands-on experience in full-stack ecosystems, I enjoy working at the intersection of
              dynamic user interfaces and stable backend APIs. I thrive in collaborative environments where
              sharing knowledge, conducting thorough code reviews, and designing scalable system architectures are valued.
            </p>

            <p>
              Continuous learning is my default mode. Whether it&apos;s diving deep into new framework releases,
              architecting cloud infrastructure, or optimizing database queries, I embrace new engineering challenges
              with enthusiasm and a goal to implement industry best practices.
            </p>
          </motion.div>

          {/* Right Column: Info Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {infoCards.map((card, idx) => {
              const CardWrapper = card.href ? "a" : "div";
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card p-6 rounded-[16px] flex flex-col justify-between h-[150px]"
                >
                  <CardWrapper
                    {...(card.href ? { href: card.href, className: "group flex flex-col h-full justify-between" } : { className: "flex flex-col h-full justify-between" })}
                  >
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 bg-zinc-900/80 rounded-xl border border-white/5">
                        {card.icon}
                      </div>
                      <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
                        {card.label}
                      </span>
                    </div>

                    <div className="mt-3">
                      <p className={`font-semibold text-white tracking-wide ${card.label === "Email" ? "text-sm break-all" : "text-base"}`}>
                        {card.value}
                      </p>
                      <p className="text-xs text-zinc-500 mt-0.5 group-hover:text-secondary-accent transition-colors duration-250">
                        {card.subText}
                      </p>
                    </div>
                  </CardWrapper>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
