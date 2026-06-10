import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-32 max-w-2xl mx-auto px-6 text-center">
      <p className="text-emerald-400 font-mono mb-3">// What's Next?</p>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-200 mb-4">Get In Touch</h2>
      
      <p className="text-slate-400 mb-8 leading-relaxed">
        I am currently looking for a <strong className="text-slate-300">Full Stack or Backend Developer role</strong> in Hyderabad or remotely. 
        If you have an opening that fits my skillset, want to collaborate on a security project, or just want to chat about Java architecture—my inbox is always open!
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a 
          href={`mailto:${personalInfo.email}`}
          className="border border-emerald-400 text-emerald-400 bg-transparent px-8 py-4 rounded font-mono hover:bg-emerald-400/10 transition-all duration-200"
        >
          Ping_Me.sh
        </a>
        
        <a 
          href="tel:+916302443671"
          className="text-slate-400 font-mono hover:text-emerald-400 transition-colors py-2 text-sm"
        >
          +91 6302443671
        </a>
      </div>
    </section>
  );
}