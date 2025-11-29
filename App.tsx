import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Manifesto from './components/Manifesto';
import ManifestoDetail from './components/ManifestoDetail';
import Feedback from './components/Feedback';
import DevelopmentProjects from './components/DevelopmentProjects';
import Updates from './components/Updates';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="font-hind text-slate-800 bg-slate-50 min-h-screen">
        <Routes>
          {/* Main Home Page */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <main>
                  <Hero />
                  <Stats />
                  <About />
                  <Updates />
                  <Manifesto />
                  <Feedback />
                  <DevelopmentProjects />
                </main>
                <Footer />
              </>
            }
          />

          {/* Manifesto Detail Page */}
          <Route
            path="/manifesto-detail"
            element={
              <>
                <Navbar />
                <main>
                  <ManifestoDetail />
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;