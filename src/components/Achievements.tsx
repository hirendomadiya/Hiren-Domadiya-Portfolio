"use client";
import React, { useState, useEffect, useRef } from "react";
import { Calendar, CheckSquare, Shield } from "lucide-react";
interface StatItem {
  icon: React.ReactNode;
  label: string;
  value: number;
  suffix?: string;
  description: string;
}
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 1.5; // seconds
      const steps = 40;
      const stepTime = (duration * 1000) / steps;
      const increment = end / steps;
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}
export default function Achievements() {
  const STATS: StatItem[] = [
    {
      icon: <Calendar size={20} className="text-secondary-accent" />,
      label: "Years of Experience",
      value: 3,
      suffix: "+",
      description: "Progressive roles in full stack development.",
    },
    {
      icon: <CheckSquare size={20} className="text-secondary-accent" />,
      label: "Projects Completed",
      value: 2,
      description: "Production web applications and tools.",
    },
    {
      icon: <Shield size={20} className="text-secondary-accent" />,
      label: "Professional Credentials",
      value: 4,
      description: "Validated industry certifications.",
    },
  ];
      return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-[16px] border border-border-custom text-center flex flex-col justify-between items-center">
              <div className="p-2.5 bg-zinc-900 border border-white/5 rounded-xl text-secondary-accent mb-4">
                {stat.icon}
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                  {stat.label}
                </h3>
              </div>
              <p className="text-[11px] text-zinc-400 leading-normal mt-2">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
