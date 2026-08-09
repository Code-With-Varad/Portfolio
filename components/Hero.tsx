"use client";

import Button from "@/components/ui/Button";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center">

      {/* image */}
      <img
        src="/profile.png"
        alt="Profile"
        className="h-40 w-40 rounded-full object-cover border-2 border-cyan-400 shadow-lg shadow-cyan-400/30"
      />

      <h1 className="mt-6 text-center text-7xl font-black text-white">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Varad
        </span>
      </h1>

        <div className="mt-8 text-2xl font-semibold text-cyan-300 md:text-4xl">
    <TypeAnimation
      sequence={[
        "Java Backend Developer",
        2000,
        "Full Stack Developer",
        2000,
        "AI Enthusiast",
        2000,
        "Problem Solver",
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  </div>

  {/* Add below this */}

  <p className="mt-6 max-w-2xl text-center text-lg text-gray-300">
    I build scalable backend systems, full-stack applications,
    and AI-powered solutions.
  </p>

  <div className="mt-8 flex gap-4">
    <Button text="View Projects" link="#projects" />
    <Button text="Contact Me" link="#contact" />
  </div>

    </section>
  );
}