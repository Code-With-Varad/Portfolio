"use client";

import Link from "next/link";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-5">
      <nav
        className="
          flex
          items-center
          justify-between
          w-[90%]
          max-w-6xl
          rounded-2xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          px-8
          py-4
          shadow-lg
        "
      >
        {/* Logo */}
        <Link
          href="#home"
          className="text-xl font-bold tracking-wide text-white"
        >
          VG
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="
                text-gray-300
                transition-all
                duration-300
                hover:text-cyan-400
                hover:-translate-y-0.5
              "
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Resume Button */}
        <Link
          href="/resume.pdf"
          target="_blank"
          className="
            rounded-xl
            bg-gradient-to-r
            from-indigo-500
            to-cyan-500
            px-5
            py-2
            text-white
            font-medium
            transition
            duration-300
            hover:scale-105
            hover:shadow-[0_0_30px_rgba(34,211,238,.5)]
          "
        >
          Resume
        </Link>
      </nav>
    </header>
  );
}