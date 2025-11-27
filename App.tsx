import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Manifesto from './components/Manifesto';
import FeedbackProjects from './components/FeedbackProjects';
import Updates from './components/Updates';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-hind text-slate-800 bg-slate-50 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Manifesto />
        <FeedbackProjects />
        <Updates />
      </main>
      <Footer />
    </div>
  );
}

export default App;