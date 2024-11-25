import React from 'react';
import Button from './Button'; // Import the reusable button component

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#121f26] text-white h-screen flex items-center overflow-hidden">
      {/* Circle Image as Full-Page Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/circles.png" // Path to the circle PNG
          alt="Circle Background"
          className="w-full h-full object-cover" // Makes it cover the entire page
        />
      </div>

      {/* Hero Content (Left Side) */}
      <div className="z-10 flex flex-col items-start justify-center pl-8 pr-8 md:pl-16 md:pr-16 w-full md:w-1/2 relative">
        {/* Star and Gradient Above Hero Text */}
        <div className="absolute -top-12 left-8 md:-top-16 md:left-16">
          {/* Gradient Image */}
          <img
            src="/bg-gradient-img.png"
            alt="Gradient"
            className="absolute -top-4 -left-4 w-24 h-24 md:w-32 md:h-32"
          />
          {/* First Star */}
          <img
            src="/star-img.png"
            alt="Star"
            className="w-12 h-12 md:w-16 md:h-16"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Trusted Multi-Chain <span className="text-yellow-500">DEX</span> Platform
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Trade, earn, and own crypto on the all-in-one multi-chain DEX.
        </p>
        <div className="flex justify-start space-x-4 mb-8">
          <Button label="Connect Wallet" onClick={() => console.log('Wallet Connected')} />
          <Button label="Trade Crypto" variant="secondary" />
        </div>
      </div>

      {/* Solar Image with Circular Shape */}
      <div className="z-10 ml-auto mr-8 relative">
        {/* Star Above Solar Image */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <img
            src="/star-img-2.png"
            alt="Star"
            className="w-10 h-10 md:w-14 md:h-14"
          />
        </div>

        <div className="w-[440px] h-[440px] rounded-full overflow-hidden">
          <img
            src="/bg-gradient-img-1.png"
            alt="Solar Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Star Below Solar Image */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
          <img
            src="/star-img-1.png"
            alt="Star"
            className="w-10 h-10 md:w-14 md:h-14"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
