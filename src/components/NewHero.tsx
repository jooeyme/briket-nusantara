// src/components/Hero.tsx

import React, { useState, useEffect } from 'react'; // Import useState dan useEffect
import { useNavigate } from 'react-router-dom';

// Impor 3 gambar latar belakang berbeda
import heroBg1 from '../assets/hero-1.jpg'; // Ganti dengan path gambar Anda
import heroBg2 from '../assets/hero-2.jpg'; // Ganti dengan path gambar Anda
import heroBg3 from '../assets/hero-3.jpg'; // Ganti dengan path gambar Anda
import heroBg4 from '../assets/hero-4.jpg';

// Daftar semua gambar yang akan diganti secara otomatis
const heroImages = [
  heroBg1,
  heroBg2,
  heroBg3,
  heroBg4,
];

interface HeroProps {
  welcomeText?: string;
  titleText?: string;
  descriptionText?: string;
  aboutButtonText?: string;
  exploreButtonText?: string;
}

export const NewHero: React.FC<HeroProps> = ({
  welcomeText = "WELCOME TO PT. PRADIPA MUDA NUSANTARA",
  titleText = "YOUR TRUSTED BRIQUETTE PARTNER",
  descriptionText = "PT. Pradipa Muda Nusantara takes pride in being a leading manufacturer and exporter of premium coconut charcoal briquettes, committed to quality, efficiency, and sustainability.",
  aboutButtonText = "ABOUT US",
  exploreButtonText = "EXPLORE PRODUCT",
}) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // State untuk mengontrol transisi opacity dan scale
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Set isTransitioning to true immediately after image index changes to start fade-out/zoom-out
    // Then set it to false after a short delay to start fade-in/zoom-in for the new image
    const interval = setInterval(() => {
      setIsTransitioning(true); // Mulai transisi keluar (jika ada)

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        setIsTransitioning(false); // Selesai transisi keluar, mulai transisi masuk
      }, 700); // Durasi fade out sebelum ganti gambar (misal 700ms)

    }, 5000); // Ganti gambar setiap 5 detik (termasuk durasi transisi)

    return () => clearInterval(interval);
  }, []);

  const handleAboutClick = () => {
    navigate('/about-company');
  };

  const handleExploreClick = () => {
    navigate('/catalogue');
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden" // Tambah overflow-hidden
    >
      {/* Container untuk gambar background dengan transisi zoom dan fade */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
          isTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100' // Fade out & zoom in saat transisi, Fade in & normal saat tidak transisi
        }`}
        style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
      ></div>

      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Konten Hero */}
      <div className="container relative z-10 text-white text-center py-24 md:py-32 lg:py-40 xl:py-48">
        {/* Welcome Text */}
        {welcomeText && (
          <p className="uppercase text-xl md:text-md font-semibold tracking-wider text-orange-300 mb-2 md:mb-4">
            {welcomeText}
          </p>
        )}

        {/* Title */}
        {titleText && (
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
            {titleText}
          </h1>
        )}

        {/* Description */}
        {descriptionText && (
          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto mb-8 md:mb-10">
            {descriptionText}
          </p>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {aboutButtonText && (
            <button
              onClick={handleAboutClick}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
            >
              {aboutButtonText}
            </button>
          )}
          {exploreButtonText && (
            <button
              onClick={handleExploreClick}
              className="bg-transparent border-2 border-orange-500 hover:bg-orange-500 hover:text-white text-orange-500 font-semibold py-3 px-6 rounded-md transition duration-300"
            >
              {exploreButtonText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};