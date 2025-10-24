"use client";
import Image from "next/image";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#support", label: "Support" },
  { href: "#privacy", label: "Privacy" },
  { href: "#terms", label: "Terms" },
];

const navLinkClasses =
  "font-bold lg:text-base md:text-[10px] text-[var(--color-text-header)] px-2 py-[6px] hover:bg-[rgba(var(--color-primary-rgb),0.08)] rounded-xl transition-colors active:bg-[rgba(var(--color-primary-rgb),0.12)]";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center w-full px-8 lg:px-16 py-4 md:py-2 mt-auto gap-6 md:gap-0 border-t border-gray-200">
      <div className="hidden md:flex flex-col">
        <h3 className="text-base font-bold text-color-text-heading">
          SchedEuler
        </h3>
        <p className="text-sm text-[var(--color-text-desc)] font-bold">
          Plan With Ease, No Conflicts Please!
        </p>
        <p className="font-inter text-xs text-[var(--color-text-desc)]">
          &copy; 2025 SchedEuler&mdash;Israel M. Binongo. All rights reserved.
        </p>
      </div>

      <div className="flex md:hidden flex-col items-center gap-2">
        <ul className="flex gap-6">
          <li>
            <a href="" className="hover:opacity-70 transition-opacity">
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
          </li>
          <li>
            <a href="" className="hover:opacity-70 transition-opacity">
              <Image
                src="/icons/github.svg"
                alt="GitHub"
                width={24}
                height={24}
              />
            </a>
          </li>
          <li>
            <a href="" className="hover:opacity-70 transition-opacity">
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
          </li>
        </ul>

        <ul className="flex flex-wrap justify-center gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={navLinkClasses}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="font-inter text-xs text-[var(--color-text-desc)] text-center">
          &copy; 2025 SchedEuler&mdash;Israel M. Binongo. All rights reserved.
        </p>
      </div>

      <ul className="hidden md:flex gap-1 lg:gap-4">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={navLinkClasses}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <ul className="hidden md:flex gap-4">
        <li>
          <a href="" className="hover:opacity-70 transition-opacity">
            <Image
              src="/icons/facebook.svg"
              alt="Facebook"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href="" className="hover:opacity-70 transition-opacity">
            <Image
              src="/icons/github.svg"
              alt="GitHub"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href="" className="hover:opacity-70 transition-opacity">
            <Image
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
