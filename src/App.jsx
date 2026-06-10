import React from 'react';
import MainLayout from './Layout/MainLayout';
import Hero from './Sections/Hero';
import Skills from './Sections/Skills';
import Experience from './Sections/Experience';
import Projects from './Sections/Projects';
import About from './Sections/About';
import Contact from './Sections/Contact';

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