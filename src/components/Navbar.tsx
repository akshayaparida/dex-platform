import React, { useState } from 'react';
import Button from './Button'; // Import reusable Button component

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 z-10 bg-transparent">
      {/* Left Side: Logo */}
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-[194px] h-[73px] object-contain"
        />
      </div>

      {/* Center: Navigation Links (hidden on mobile) */}
      <ul className="md:flex space-x-20 mx-auto">
  <li className="nav-link">Home</li>
  <li className="nav-link">About Us</li>
  <li className="nav-link">Roadmap</li>
  <li className="nav-link">FAQs</li>
  <li className="nav-link">Contact Us</li>
</ul>


      {/* Right Side: Connect Wallet Button */}
      <div className="flex items-center">
        <Button label="Connect Wallet" onClick={() => console.log('Wallet Connected')} />
      </div>

      {/* Mobile Hamburger Menu Icon */}
      <button
        className="md:hidden flex items-center space-x-2"
        onClick={toggleMenu}
      >
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>
    </nav>
  );
};

export default Navbar;
