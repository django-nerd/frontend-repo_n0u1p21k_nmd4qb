import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay (don't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Backend Developer & Data Analyst
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            I design resilient APIs, optimize data pipelines, and turn complex datasets into actionable insights.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-md bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-md border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Parallax background accents */}
      <div className="pointer-events-none absolute -left-24 -top-24 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl animate-pulse"></div>
      <div className="pointer-events-none absolute -right-24 top-1/3 w-96 h-96 rounded-full bg-fuchsia-500/20 blur-3xl animate-pulse"></div>
    </section>
  );
};

export default Hero;
