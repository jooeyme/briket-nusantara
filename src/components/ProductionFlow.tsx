// src/components/ProductionFlow.tsx

import React from 'react';
// Import the background image you want for the section
import sectionBgImage from '../assets/cover.png'; // <-- Replace with your desired background image path

// You mentioned a specific image for the whole flow, let's assume it's `prodflow.jpg`
// import prodflowImageContent from '../assets/prodflow.jpg'; // If you decide to include it as content image again

// --- Definisi Tipe Data untuk Langkah Produksi ---
interface ProductionStepProps {
  step: number;
  title: string;
  description: string;
  // icon: React.ElementType; // No longer needed
}

// Data Langkah Produksi
const productionSteps: ProductionStepProps[] = [
  {
    step: 1,
    title: "RAW MATERIAL SELECTION",
    description: "We use only high quality, fully matured coconut shells that have been naturally sun-dried.",
    // icon: Hand, // No longer needed
  },
  {
    step: 2,
    title: "CARBONIZATION",
    description: "The coconut shells are burned in a specialized low-oxygen kiln (pyrolysis) to produce high-quality pure charcoal.",
    // icon: Flame, // No longer needed
  },
  {
    step: 3,
    title: "CRUSHING & SCREENING",
    description: "The resulting charcoal is crushed into fine powder and screened to separate coarse particles.",
    // icon: Scale, // No longer needed
  },
  {
    step: 4,
    title: "MIXING & BINDING",
    description: "The charcoal powder is mixed with natural binders (such as tapioca) and water to form a dough-like mixture ready for molding.",
    // icon: MixerHorizontal, // No longer needed
  },
  {
    step: 5,
    title: "BRIQUETTING & DRYING",
    description: "The mixture is shaped into briquettes (cube or hexagonal) and dried in a controlled-temperature oven to reduce moisture content.",
    // icon: Shape, // No longer needed
  },
  {
    step: 6,
    title: "PACKING & QUALITY CHECK",
    description: "After passing quality control tests (moisture, ash content, burning duration), the briquettes are packed in kraft cartons and prepared for export.",
    // icon: PackageCheck, // No longer needed
  },
];

export const ProductionFlow: React.FC = () => {
  return (
    <section
      id="production-flow"
      className="relative py-12 md:py-24 bg-cover bg-center text-white overflow-hidden" // Added overflow-hidden
      style={{ backgroundImage: `url(${sectionBgImage})` }} // Using a general background image
    >
      {/* Overlay Gelap untuk Keterbacaan Teks */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* Judul Utama Bagian */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12"> {/* Changed font to extrabold, text color white */}
          PRODUCTION FLOW <br /> BRIQUETTES
        </h2>

        {/* --- Kontainer Utama untuk Langkah-langkah --- */}
        <div className="flex flex-col gap-8 max-w-full md:max-w-xl lg:max-w-2xl"> {/* Adjusted gap */}
          {productionSteps.map((step, index) => (
            <div
              key={step.step}
              // Wrapper untuk setiap baris langkah
              className={`
                flex flex-col md:flex-row items-start gap-4 md:gap-8 justify-center
                
                w-full
              `}
            >
              {/* Card Konten Langkah */}
              <div
                className={`
                  relative p-6 rounded-lg flex items-start gap-4 w-full max-w-sm md:max-w-md
                  // Remove bg colors from card, rely on transparent effect against overlay
                  bg-transparent // No background color for the card itself
                 
                `}
              >
                {/* Nomor Langkah */}
                <div className={`
                  flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg shadow-md border-2 border-orange-300
                  ${(index + 1) % 2 === 0 ? 'md:order-2' : 'md:order-1'} /* Order nomor */
                `}>
                  {step.step}
                </div>

                {/* Konten Teks */}
                <div className={`
                  flex flex-col flex-grow
                  ${(index + 1) % 2 === 0 ? 'md:order-1' : 'md:order-2'} /* Order konten teks */
                `}>
                  {/* Title */}
                  <h3 className="font-bold text-xl text-orange-500 mb-2"> {/* Title color orange */}
                    {step.title}
                  </h3>
                  {/* Description */}
                  <p className="text-white text-sm"> {/* Description color white */}
                    {step.description}
                  </p>
                </div>
                {/* Visual Ikon (Opsional) - ini akan memerlukan gambar spesifik atau SVG kustom */}
                {/* Sesuai gambar, ikonnya berada di luar kotak teks dan ada di sisi kanan atas (untuk ganjil) atau kiri atas (untuk genap) */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};