import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';




const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen relative">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
    </div>
  );
};

export default App;
