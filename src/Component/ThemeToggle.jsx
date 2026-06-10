import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isTerminalTheme, setIsTerminalTheme] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isTerminalTheme) {
      root.classList.add('terminal-mode');
    } else {
      root.classList.remove('terminal-mode');
    }
  }, [isTerminalTheme]);

  return (
    <button
      onClick={() => setIsTerminalTheme(!isTerminalTheme)}
      className="fixed bottom-6 right-6 z-50 p-3 bg-slate-800 border border-slate-700 hover:border-emerald-400 text-slate-300 rounded-full shadow-lg transition-all duration-200"
      title="Toggle Interface Mode"
    >
      {isTerminalTheme ? (
        <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.242 17.657l.707.707M6.343 6.344l.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;