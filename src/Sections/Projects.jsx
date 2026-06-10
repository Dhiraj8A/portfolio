import React from 'react';
import { projects } from '../data/portfolioData';
import AttackDashboard from '../Features/attack-simulator/AttackDashboard'; // Optional interactive feature

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-slate-200 mb-10 flex items-center">
        <span className="text-emerald-400 font-mono mr-2">03.</span> Things I've Built
      </h2>

      <div className="space-y-16">
        {projects.map((project) => (
          <div key={project.id} className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
            <h3 className="text-2xl font-bold text-slate-100 mb-2">{project.title}</h3>
            <p className="text-slate-400 mb-6 max-w-3xl">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span key={t} className="text-emerald-400 font-mono text-xs bg-emerald-400/5 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>

            {/* If the project has an interactive dashboard feature, render it here */}
            {project.id === '2fa-platform' && (
              <div className="mt-6 p-4 bg-slate-900 rounded-lg border border-slate-800">
                <p className="text-xs font-mono text-slate-500 mb-3">// Interactive Showcase:</p>
                <AttackDashboard />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
