// src/components/ProductionFlow.tsx

import React from 'react';
import productionFlowImage from '../assets/prodflow.png'; // <-- Main image (the flow chart)
import myBackgroundImage from '../assets/cover.png'; // <-- Background image for the section

export const ProductionFlow: React.FC = () => {
  return (
    <section
      id="production-flow"
      className="relative py-8 md:py-16 flex items-center justify-center min-h-screen" // Simplified min-h-screen for clarity, adjust as needed
      style={{
        backgroundImage: `url(${myBackgroundImage})`, // Background image for the entire section
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for text readability - MUST be positioned *behind* the main content */}
      {/* Removed group-hover as it's not applicable to the section without a 'group' class */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Main content container - Needs z-10 to be above the overlay */}
      <div className="container mx-auto px-4 flex justify-center items-center relative z-10">
        <img
          src={productionFlowImage}
          alt="Production Flow Briquettes"
          className="w-full max-w-full md:max-w-2xl h-auto object-contain rounded-lg shadow-lg"
          // w-full: takes full width of its container
          // max-w-full: ensures it doesn't exceed its natural width
          // md:max-w-2xl: limits max width on medium screens and up
          // h-auto: maintains aspect ratio
          // object-contain: ensures the entire image is visible
        />
      </div>
    </section>
  );
};