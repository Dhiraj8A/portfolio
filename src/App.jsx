import React from 'react';
import MainLayout from './Layout/MainLayout';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import About from './sections/About';
import Contact from './sections/Contact';

export default function App() {
  return (
   <MainLayout>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <About />
      <Contact />
    </MainLayout>
  );
}