"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#benefits", label: "Benefits" },
];

const navLinkClasses =
  "px-2 py-[6px] md:py-[2px] rounded-xl hover:bg-[rgba(var(--color-primary-rgb),0.08)] transition-colors";

const LandingHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const smoothScrollTo = (targetY: number, duration: number = 300) => {
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    const startTime = performance.now();

    const easeOutQuad = (t: number) => t * (2 - t);

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuad(progress);
      window.scrollTo(0, startY + distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offset = 100;
      const targetY = offsetTop - offset;
      smoothScrollTo(targetY, 300);
      closeMenu();
    }
  };

  const handleLogoClick = () => {
    if (scrolled) {
      smoothScrollTo(0, 300);
    }
  };

  return (
    <header
      className={`header-glass ${
        scrolled
          ? "backdrop-blur-lg shadow-lg bg-[linear-gradient(180deg,rgba(255,255,255,0.6),rgba(255,255,255,0.55))]"
          : "shadow-md bg-header-bg"
      }`}
    >
      <div
        className={`flex items-center gap-2 ${
          scrolled ? "cursor-pointer" : ""
        }`}
        onClick={handleLogoClick}
        role="button"
        tabIndex={scrolled ? 0 : -1}
        onKeyDown={(e) => {
          if (scrolled && (e.key === "Enter" || e.key === " ")) {
            handleLogoClick();
          }
        }}
      >
        <Image src="/icons/schedule.png" alt="Logo" width={32} height={32} />
        <div className="flex flex-col">
          <h1
            className="text-lg sm:text-xl font-bold text-gradient"
            style={
              {
                "--gradient-angle": "90deg",
                "--gradient-start": "22%",
                "--gradient-end": "100%",
              } as React.CSSProperties
            }
          >
            Class SchedEuler
          </h1>
          <p className="text-[10px] sm:text-xs font-bold text-[#6B7280]">
            Plan With Ease, No Conflicts Please!
          </p>
        </div>
      </div>

      <nav className="hidden md:block">
        <ul className="flex gap-4 md:gap-1 text-[var(--color-text-header)]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={navLinkClasses}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-[var(--color-text-header)] transition-transform duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-[var(--color-text-header)] transition-opacity duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-[var(--color-text-header)] transition-transform duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {menuOpen && (
        <div className="md:hidden absolute top-full right-4 mt-2 bg-white/95 backdrop-blur-lg shadow-lg z-40 rounded-xl overflow-hidden min-w-[200px]">
          <nav className="p-4">
            <ul className="flex flex-col gap-2 text-[var(--color-text-header)]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`${navLinkClasses} block text-center active:bg-[rgba(var(--color-primary-rgb),0.12)]`}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      <div className="hidden md:flex gap-2">
        <button className="hidden lg:block rounded-2xl px-4 py-1 border border-[var(--color-outline-btn)] text-[var(--color-primary)] font-semibold text-base cursor-pointer transition-all duration-200 ease-in-out hover:scale-105">
          Login
        </button>
        <button className="rounded-2xl px-4 py-1 bg-[var(--color-primary)] text-white border border-transparent font-semibold text-base cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-md hover:bg-[rgba(var(--color-primary-rgb),0.9)]">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default LandingHeader;
