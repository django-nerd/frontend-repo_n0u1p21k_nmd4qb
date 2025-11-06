import React from 'react';

const Navbar = () => {
  const links = [
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-black/40 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold tracking-tight text-lg">
          <span className="text-cyan-400">Dev</span> Portfolio
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-3 py-1.5 rounded-md bg-cyan-500/90 hover:bg-cyan-400 text-black font-medium transition-colors"
          >
            Hire Me
          </a>
        </div>
        <div className="md:hidden">
          <a
            href="#contact"
            className="px-3 py-1.5 rounded-md bg-cyan-500/90 hover:bg-cyan-400 text-black font-medium transition-colors"
          >
            Hire Me
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
