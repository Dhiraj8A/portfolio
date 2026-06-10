import React from 'react';
import { skills } from '../Data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-slate-200 mb-10 flex items-center">
        <span className="text-emerald-400 font-mono mr-2">01.</span> Technical Toolkit
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
            <h3 className="text-emerald-400 font-mono capitalize mb-4 text-lg">
              {`> ${category}`}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span 
                  key={skill} 
                  className="bg-slate-900 text-slate-300 px-3 py-1 rounded text-sm border border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}