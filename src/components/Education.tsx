"use client";
import React from "react";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";
interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  description: string;
}
const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "Gujarat Technological University",
    duration: "2018 - 2022",
    description: "Built a solid foundation in core computer science, database management systems, data structures, object-oriented programming, and software engineering. Participated in local hackathons and completed a full-stack e-commerce project as a senior capstone."
  },
  {
    degree: "Higher Secondary Certificate (HSC) - Science",
    institution: "Gujarat Secondary Education Board",
    duration: "2016 - 2018",
    description: "Completed coursework focused on Physics, Chemistry, and Advanced Mathematics, along with introductory computer programming in C++."
  }
];
export default function Education() {
  return (
    <section id="education" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Education
          </h2>
          <div className="w-16 h-1 bg-primary-accent mx-auto rounded-full" />
        </div>
        {/* Education List */}
        <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-6 before:md:left-8 before:w-[1px] before:bg-zinc-800">
          {EDUCATION_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="relative pl-14 md:pl-20">
              {/* Timeline marker */}
              <div className="absolute left-[13px] md:left-[21px] top-1 bg-zinc-950 border-2 border-primary-accent w-6 h-6 rounded-full flex items-center justify-center z-10 shadow-md shadow-primary-accent/20">
                <GraduationCap size={12} className="text-secondary-accent" />
              </div>
              <div className="glass-card p-6 md:p-8 rounded-[16px] border border-border-custom relative overflow-hidden group">
                {/* Accent glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/0 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-tight group-hover:text-secondary-accent transition-colors duration-300">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-semibold text-zinc-400 mt-1">
                      {item.institution}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400 font-semibold bg-zinc-900 border border-white/5 px-3 py-1.5 rounded-full self-start md:self-center">
                    <Calendar size={12} />
                    {item.duration}
                  </span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed flex items-start gap-2.5">
                  <BookOpen size={16} className="text-zinc-400 mt-1 min-w-[16px]" />
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
