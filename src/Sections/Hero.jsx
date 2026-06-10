import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-6 max-w-5xl mx-auto">
      <p className="text-emerald-400 font-mono mb-3"> Hello, my name is</p>
      <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4">
        {personalInfo.name}.
      </h1>
      <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-6">
        {personalInfo.title}
      </h2>
      <p className="text-slate-400 max-w-xl text-lg mb-8">
        I specialize in building secure, scalable microservices-based web applications. 
        From architecting robust Java/Spring Boot backends to designing seamless React frontends, 
        I bridge the gap between high performance and cryptographic security.
      </p>
      <a 
        href="/Dhiraj_Shahani_Resume.pdf" 
        download
        className="border border-emerald-400 text-emerald-400 px-6 py-3 rounded font-mono hover:bg-emerald-400/10 transition-colors"
      >
        Download_Resume.exe
      </a>
    </section>
  );
}