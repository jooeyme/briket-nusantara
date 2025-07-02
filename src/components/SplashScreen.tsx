// src/components/SplashScreen.jsx

import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import imageCover from '../assets/cover.png';
import { Mail, Instagram, MessageSquareText  } from 'lucide-react'; // Mengimpor ikon yang diperlukan


export const SplashScreen = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  // Function to handle Enter button click
  const handleEnterClick = () => {
    navigate('/home'); // Navigate to your main home page path
    // You could also use: navigate('/'); if your main content is on the root
    // Adjust '/home' to match the actual path of your main content
  };

  return (
    <div className="relative w-full h-screen flex">
      {/* Background Image Section (Left) */}
      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imageCover})` }} // Update path to your actual image
      >
        {/* Overlay for text readability on the left */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-black bg-opacity-50 flex items-center p-8">
          <h1 className="text-white text-6xl font-bold leading-tight">
            {/* YOUR TRUSTED SUPPLIER OF PREMIUM INDONESIAN CHARCOAL */}
          </h1>
        </div>
      </div>

      {/* Welcome Section (Right) */}
      <div className="w-1/2 h-full bg-black text-white flex flex-col justify-center items-center p-8 text-center">
        <h2 className="text-5xl font-bold mb-8">
          WELCOME TO <br /> Pradipa Muda Nusantara
        </h2>
        <div className="text-sm leading-relaxed max-w-lg mb-8 text-gray-300">
          <p className="mb-4">
            PT Pradipa Muda Nusantara is an Indonesia-based company focused on producing and 
            exporting premium-quality coconut shell briquettes. Originating from the land of 
            abundant coconuts and community spirit, we deliver eco-friendly, efficient, and sustainable 
            energy solutions to the world. 
             </p>
          <p className="mb-4">
           We believe Indonesia is not only the world's top coconut producer but also a source of 
           inspiration for high-quality and value-driven products. By combining natural heritage with innovation, 
           we are committed to bridging local resources with global needs.
          </p>
          <p>
          </p>
        </div>
        
        {/* Enter Button */}
        <button
          onClick={handleEnterClick}
          className="px-12 py-4 bg-white text-black font-semibold text-lg rounded-md hover:bg-gray-200 transition-colors mb-8"
        >
          ENTER
        </button>

        {/* Social Icons (simplified) */}

        <div className="flex space-x-6 text-gray-400">
          {/* Gmail Icon */}
          <a href="mailto:pradipamudanusantara@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
            <Mail className="w-6 h-6 hover:text-white transition-colors" />
          </a>
          
          {/* Instagram Icon */}
          <a href="https://instagram.com/pradipamuda.id" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="w-6 h-6 hover:text-white transition-colors" />
          </a>
          
          {/* WhatsApp Icon */}
          <a href="https://wa.me/+6281548468353" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <MessageSquareText  className="w-6 h-6 hover:text-white transition-colors" />
          </a>

          {/* You can keep other icons like X (Twitter), LinkedIn, Facebook, etc. if you import them from Lucide */}
          {/* Example for X/Twitter: <a href="https://twitter.com/your_twitter" target="_blank" rel="noopener noreferrer"><X className="w-6 h-6" /></a> */}
          
          
          </div>
      </div>
    </div>
  );
};