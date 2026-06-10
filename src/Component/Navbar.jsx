import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Brand/Logo */}
        <a href="#" className="font-mono text-xl font-bold text-emerald-400 tracking-tight">
          DS<span className="text-slate-400">.dev</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <span className="text-emerald-400 mr-1">0{index + 1}.</span>
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-400 hover:text-emerald-400 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden pt-4 pb-2 border-t border-slate-800/60 mt-3 animate-fade-in">
          <div className="flex flex-col gap-4 font-mono text-sm px-2">
            {navLinks.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-emerald-400 transition-colors py-1"
              >
                <span className="text-emerald-400 mr-2">0{index + 1}.</span>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;