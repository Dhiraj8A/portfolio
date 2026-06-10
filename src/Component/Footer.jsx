import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-800/60 py-8 px-6 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500">
        <div>
          <p>© {new Date().getFullYear()} Dhiraj Shahani. All rights reserved.</p>
        </div>
        
        <div className="flex items-center gap-2 text-slate-400">
          <span>Built with</span>
          <span className="text-emerald-400">React</span>
          <span>&</span>
          <span className="text-emerald-400">Tailwind CSS</span>
        </div>

        <div>
          <p className="text-slate-600">// Status: Open for opportunities</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;