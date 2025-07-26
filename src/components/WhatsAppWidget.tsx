// src/components/WhatsAppWidget.tsx

import React, { useState } from 'react';
import { MessageSquareText, ChevronDown, ChevronUp, X } from 'lucide-react'; // Import necessary icons

import logo from '../assets/logo.jpg'
interface WhatsAppWidgetProps {
  whatsappNumber: string; // Your WhatsApp number (e.g., "6281234567890")
  initialMessage?: string; // Optional: Initial message in the chat
  companyName?: string; // Optional: Your company name for the message
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({
  whatsappNumber,
  initialMessage = "Hi! I'd like to ask about your coconut shell briquettes. Could you share more details?",
  companyName = "PT. Pradipa Muda Nusantara", // Default company name
}) => {
  const [isOpen, setIsOpen] = useState(false); // State to control widget visibility

  // Replace placeholder with actual company name
  const formattedInitialMessage = initialMessage.replace("[Your Company Name]", companyName);

  const handleOpenWhatsApp = () => {
    // Construct the WhatsApp URL with pre-filled message
    const encodedMessage = encodeURIComponent(formattedInitialMessage);
    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(url, '_blank'); // Open in a new tab
  };

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[999]"> {/* Fixed position, high z-index */}
      {/* Expandable Chat Widget */}
      {isOpen && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-72 mb-4 overflow-hidden transform transition-all duration-300 ease-in-out scale-100 opacity-100">
          <div className="bg-green-500 text-white p-3 flex items-center justify-between rounded-t-lg cursor-pointer" onClick={handleOpenWhatsApp}>
            <div className="flex items-center gap-2">
              <MessageSquareText className="w-6 h-6" />
              <span className="font-semibold text-lg">Let's chat on WhatsApp</span>
            </div>
            {/* Arrow icon for opening/closing */}
            {isOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
          </div>

          <div className="p-4 text-gray-800 dark:text-gray-200">
            {/* Mimic chat bubble */}
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg max-w-[85%] mb-2 text-sm break-words">
              {/* This is the pre-filled message shown in the bubble */}
              {formattedInitialMessage.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
              <span className="block text-right text-xs text-gray-500 dark:text-gray-400 mt-2">22:27</span>
            </div>
            
            {/* Mimic a "Yoga" profile from your image */}
            <div className="flex items-center gap-2 mb-2 text-xs">
                <img src={logo} alt="" className="rounded-full w-6 h-6" />
                <span>Hawa</span>
            </div>

            {/* Input area (dummy) */}
            <div className="relative border-t border-gray-200 dark:border-gray-700 pt-3">
              <input
                type="text"
                placeholder="Write your message..."
                className="w-full p-2 pr-10 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <button className="absolute right-0 top-3 text-green-500 p-2" onClick={handleOpenWhatsApp}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <button
        onClick={toggleWidget}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transform transition-transform duration-200 ease-in-out hover:scale-110"
      >
        {isOpen ? <X className="w-7 h-7" /> : <MessageSquareText className="w-7 h-7" />}
      </button>
    </div>
  );
};