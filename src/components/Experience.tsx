"use client";
import React from "react";
import { Calendar, Building, Award } from "lucide-react";
interface Job {
  company: string;
  role: string;
  duration: string;
  techStack: string[];
  achievements: string[];
}
const EXPERIENCES: Job[] = [
  {
    company: "ScaleGrid Technologies",
    role: "Senior Software Engineer",
    duration: "Jan 2024 - Present",
    techStack: ["Next.js", "React", "TypeScript", "Django", "PostgreSQL", "Tailwind CSS"],
    achievements: [
      "Designed and implemented modular frontend architectures, reducing bundle sizes by 40% and improving page-load performance across the SaaS platform.",
      "Spearheaded the migration of the client dashboard from React to Next.js App Router, resulting in a 35% improvement in Core Web Vitals and SEO visibility.",
      "Optimized slow-running PostgreSQL database queries and configured proper indexing, decreasing API response latency by 150ms on critical endpoints.",
      "Mentored a team of 4 junior developers, established strict TypeScript configurations, and reduced bug reports by 30% through automated testing.",
    ],
  },
  {
    company: "Innovate Labs",
    role: "Full Stack Developer",
    duration: "May 2022 - Dec 2023",
    techStack: ["React", "Django", "MongoDB", "Tailwind CSS"],
    achievements: [
      "Developed and launched 5+ secure, responsive enterprise-level web applications, accommodating 50,000+ active monthly users.",
      "Optimized deployment workflows, decreasing error rates and speeding up release cycles by 25%.",
      "Built secure authentication flows with role-based access control, strengthening user access security.",
      "Coauthored a shared UI component library based on Tailwind CSS, which decreased overall frontend design implementation times by 30%.",
    ],
  },
];
export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-primary-accent mx-auto rounded-full" />
        </div>
        {/* Timeline Grid */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-32 md:pl-12 pl-6 space-y-12">
          {EXPERIENCES.map((job, idx) => (
            <div
              key={idx}
              className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] md:-left-[55px] top-1 bg-background border-2 border-primary-accent w-4 h-4 rounded-full z-10 shadow-md shadow-primary-accent/40" />
              {/* Date Column (visible on md screens, placed absolute left) */}
              <div className="hidden md:block absolute -left-[160px] top-0.5 text-right w-[110px]">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wide flex items-center justify-end gap-1.5">
                  <Calendar size={12} className="text-zinc-400" />
                  {job.duration.split(" - ")[0]}
                </span>
                <span className="text-xs text-zinc-400 block mt-0.5">
                  to {job.duration.split(" - ")[1]}
                </span>
              </div>
              {/* Experience Card */}
              <div className="glass-card p-6 md:p-8 rounded-[16px] border border-border-custom relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 rounded-full blur-2xl pointer-events-none" />
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                      <Building size={18} className="text-secondary-accent" />
                      {job.company}
                    </h3>
                    <p className="text-sm font-semibold text-zinc-400 mt-1">
                      {job.role}
                    </p>
                  </div>
                  {/* Date badge for mobile screens */}
                  <span className="md:hidden inline-flex items-center gap-1.5 text-xs text-zinc-400 font-medium bg-zinc-900 border border-white/5 px-2.5 py-1 rounded-full self-start">
                    <Calendar size={12} />
                    {job.duration}
                  </span>
                </div>
                {/* Achievements List */}
                <ul className="space-y-3 mb-6">
                  {job.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="text-sm text-text-secondary leading-relaxed flex items-start gap-2">
                      <span className="mt-1.5 min-w-[5px] min-h-[5px] max-w-[5px] max-h-[5px] rounded-full bg-secondary-accent" />
                      {ach}
                    </li>
                  ))}
                </ul>
                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Award size={13} />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {job.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-semibold bg-zinc-950/80 border border-white/5 text-zinc-300 group-hover:border-zinc-700 transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
