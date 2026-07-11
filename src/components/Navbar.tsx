"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const scrollPosition = window.scrollY + 100;
      for (const item of NAV_ITEMS) {
        const el = document.querySelector(item.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = (el as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href.substring(1));
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = (targetElement as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`w-full transition-all duration-300 ${isScrolled
            ? "glass-nav py-4 shadow-lg shadow-black/20"
            : "bg-transparent py-6 border-b border-transparent"
          }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-white font-bold text-xl tracking-tight flex items-center gap-2 group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-primary-accent group-hover:scale-125 transition-transform duration-300"></span>
            Hiren Domadiya
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-sm font-medium tracking-wide transition-colors duration-300 relative py-1 ${activeSection === item.href.substring(1)
                        ? "text-secondary-accent font-semibold"
                        : "text-text-secondary hover:text-white"
                      }`}
                  >
                    {item.label}
                    {activeSection === item.href.substring(1) && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary-accent rounded-full transition-all duration-300" />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="/Hiren-Domadiya-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-white bg-zinc-900 border border-white/5 hover:bg-zinc-800 px-4 py-2 rounded-full transition-colors duration-250"
            >
              Resume
              <ArrowUpRight size={12} className="text-zinc-400" />
            </a>
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-secondary-accent transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden w-full bg-zinc-950/95 border-b border-border-custom backdrop-blur-lg overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-[380px] opacity-100 py-6" : "max-h-0 opacity-0 pointer-events-none"
          }`}
      >
        <nav className="max-w-[1280px] mx-auto px-6 flex flex-col gap-6">
          <ul className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-base font-medium block py-2 border-b border-white/5 transition-colors ${activeSection === item.href.substring(1)
                      ? "text-secondary-accent"
                      : "text-text-secondary hover:text-white"
                    }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/Hiren-Domadiya-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider bg-primary-accent hover:bg-blue-700 text-white py-3 rounded-lg border border-white/5 transition-all duration-300"
          >
            Resume
            <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}
