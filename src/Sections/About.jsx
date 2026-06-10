import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-slate-200 mb-10 flex items-center">
        <span className="text-emerald-400 font-mono mr-2">04.</span> About Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-4 text-slate-400 leading-relaxed">
          <p>
            My journey into software development started with a deep curiosity about how data moves securely across the web. 
            I holds a <strong className="text-slate-200">Master of Computer Applications (MCA)</strong> and a <strong className="text-slate-200">B.Sc. in Computer Science</strong> from Osmania University. Throughout my academic career, I maintained a strong focus on core computing principles, graduating with an 8.08 and 8.6 CGPA respectively.
          </p>
          <p>
            Fast-forward to today, and I have transitioned that academic foundation into hands-on engineering. My core focus 
            is building architecture that doesn't just work smoothly, but is inherently safe from modern web vulnerabilities. 
            Whether implementing cryptographic controls or building modular microservices, I love breaking down complex backend logic.
          </p>
          <p>
            When I'm not coding, you can usually find me exploring new penetration testing methodologies, optimizing database schemas, 
            or tinkering with frontend state management in React.
          </p>
        </div>

        {/* Education Quick Cards */}
        <div className="space-y-4">
          <h3 className="text-sm font-mono text-emerald-400"> Education History</h3>
          
          <div className="bg-slate-800/40 p-4 rounded border border-slate-700/50">
            <h4 className="text-sm font-bold text-slate-200">MCA</h4>
            <p className="text-xs text-slate-400">St. John's PG College</p>
            <p className="text-xs font-mono text-emerald-400/80 mt-1">Graduated: 2025 | 8.08 CGPA</p>
          </div>

          <div className="bg-slate-800/40 p-4 rounded border border-slate-700/50">
            <h4 className="text-sm font-bold text-slate-200">B.Sc. Computer Science</h4>
            <p className="text-xs text-slate-400">Rainbow Integrated Degree College</p>
            <p className="text-xs font-mono text-emerald-400/80 mt-1">Graduated: 2023 | 8.6 CGPA</p>
          </div>
        </div>
      </div>
    </section>
  );
}