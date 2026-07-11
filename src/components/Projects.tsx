"use client";
import React from "react";
import Image from "next/image";
import { ExternalLink, Activity, Cpu } from "lucide-react";
const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl: string;
  metricIcon: React.ReactNode;
}
const PROJECTS: Project[] = [
  {
    title: "E-commerce",
    description: "A real-time metrics collection and analytics engine designed for high-traffic websites. Features dynamic data aggregation, visual charts, and low-latency database queries.",
    image: "/project-analytics.png",
    techStack: ["Next.js", "React", "Node js", "PostgreSQL", "Tailwind CSS"],
    highlights: [
      "98% Lighthouse Performance Score",
      "Aggregates 10M+ events daily",
      "<50ms query response times via PostgreSQL optimization"
    ],
    githubUrl: "https://github.com/hirendomadiya/e-commerce.git",
    liveUrl: "nova-3d-jg.vercel.app",
    metricIcon: <Activity size={14} className="text-secondary-accent" />
  },
  {
    title: "High-Performance API Gateway",
    description: "A lightweight API gateway built for routing, rate limiting, and authenticating incoming microservice traffic. Designed for high scalability and secure token validation.",
    image: "/project-api.png",
    techStack: ["Go", "PostgreSQL", "Git"],
    highlights: [
      "Handles 15,000+ requests per second",
      "Dynamic rate limiting algorithm",
      "Token authentication in under 5ms"
    ],
    githubUrl: "https://github.com/hirendomadiya/api-gateway",
    liveUrl: "https://api.hirendomadiya.com",
    metricIcon: <Cpu size={14} className="text-secondary-accent" />
  }
];
export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Glow backdrop */}
      <div className="bg-glow-secondary bottom-[20%] left-[5%] w-[400px] h-[400px]" />
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto text-sm">
            A curated selection of technical projects showing full-stack architecture, performance optimizations, and clean code.
          </p>
          <div className="w-16 h-1 bg-primary-accent mx-auto mt-4 rounded-full" />
        </div>
        {/* Project Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="glass-card rounded-[16px] overflow-hidden flex flex-col h-full group">
              {/* Project Image Frame */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950 border-b border-border-custom">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60" />
              </div>
              {/* Card Body */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-secondary-accent transition-colors duration-300">
                  {project.title}
                </h3>
                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-semibold bg-zinc-900/80 border border-white/5 text-zinc-400">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Key Metrics / Highlights */}
                <div className="border-t border-border-custom pt-5 mb-6">
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                    Project Highlights
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="text-xs text-zinc-400 flex items-center gap-2">
                        {project.metricIcon}
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Action Buttons */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white border border-border-custom hover:border-zinc-700 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300">
                    <GithubIcon size={14} />
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-primary-accent hover:bg-blue-700 text-white py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-primary-accent/20">
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
