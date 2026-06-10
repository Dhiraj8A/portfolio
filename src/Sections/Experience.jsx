import React from 'react';

// You can move this to your portfolioData.js later
const experiences = [
  {
    role: "Java Backend Intern",
    company: "DataPoint",
    period: "Jun 2025 - Nov 2025",
    bullets: [
      "Developed backend modules for a secure Two-Factor Authentication (2FA) platform using Spring Boot and MySQL.",
      "Applied OOP concepts, debugging, exception handling, secure coding practices, API integration, and Agile development methodology using Git version control",
      "Implemented SHA-256 encryption, JWT tokens, and TLS security to safeguard user data.",
      "Mitigated brute-force, phishing, and DDoS threats via rate limiting and session management.",
      "Collaborated with frontend developers to integrate RESTful APIs and ensure seamless user experience."
    ]
  },
  {
    role: "Java Developer Intern (Virtual)",
    company: "Systecks Solutions",
    period: "Jan 2024 - Feb 2024",
    bullets: [
      "Built 3 desktop GUI applications using Java and JavaFX, applying OOP principles.",
      "Debugged and delivered functional modules within a 4-week self-directed timeline.",
      "Gained hands-on experience with JavaFX for UI design and event handling.",
      "Collaborated with a remote team, enhancing communication and project management skills."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-slate-200 mb-10 flex items-center">
        <span className="text-emerald-400 font-mono mr-2">02.</span> Experience
      </h2>

      <div className="space-y-12 relative border-l border-slate-700 ml-4">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8">
            {/* Timeline node icon */}
            <div className="absolute-left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-400 border-4 border-slate-900" />
            
            <h3 className="text-xl font-bold text-slate-200">
              {exp.role} <span className="text-emerald-400">@ {exp.company}</span>
            </h3>
            <p className="text-sm font-mono text-slate-400 mb-4">{exp.period}</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400 max-w-2xl">
              {exp.bullets.map((bullet, idx) => (
                <li key={idx} className="leading-relaxed">{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}