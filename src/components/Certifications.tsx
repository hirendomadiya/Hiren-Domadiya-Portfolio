"use client";
import React from "react";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";
interface Certification {
  name: string;
  issuer: string;
  date: string;
  link: string;
}
const CERTIFICATIONS: Certification[] = [
  {
    name: "Tata - GenAI Powered Data Analytics",
    issuer: "Tata",
    date: "July 2026",
    link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_6a4e564a3b58112d0531759e_1783519829451_completion_certificate.pdf",
  },
  {
    name: "Deloitte - Data Analytics",
    issuer: "Deloitte",
    date: "July 2026",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6a4e564a3b58112d0531759e_1783520420794_completion_certificate.pdf",
  },
  {
    name: "python",
    issuer: "infolabs",
    date: "July 2026",
    link: ""
  },
  {
    name: "Python",
    issuer: "Sparks to ideas",
    date: "aug 2023",
    link: ""
  },
];
export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Licenses & Certifications
          </h2>
          <div className="w-16 h-1 bg-primary-accent mx-auto rounded-full" />
        </div>
        {/* Certifications Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-[16px] border border-border-custom hover:border-zinc-800 flex items-start gap-4 relative group">
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
                    aria-label={`Verify credential for ${cert.name}`}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
