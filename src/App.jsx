import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Journey from './components/Journey';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <VisionMission />
        <About />
        <Journey />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
