import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans antialiased selection:bg-emerald-400/20 selection:text-emerald-300 relative overflow-x-hidden">
      <Navbar />

      {/* Social and Email docks */}
      <div className="hidden lg:block fixed bottom-0 left-10 w-40 z-10 animate-fade-in">
        <div className="flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-slate-600">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 hover:-translate-y-1 transition-all font-mono text-sm">
            git
          </a>
        </div>
      </div>

      <div className="hidden lg:block fixed bottom-0 right-10 w-40 z-10 animate-fade-in">
        <div className="flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-slate-600">
          <a href="mailto:dhirajshahani90@gmail.com" className="text-slate-400 hover:text-emerald-400 hover:-translate-y-1 transition-all font-mono text-xs vertical-text tracking-widest" style={{ writingMode: 'vertical-rl' }}>
            dhirajshahani90@gmail.com
          </a>
        </div>
      </div>

      <main className="w-full min-h-screen">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;