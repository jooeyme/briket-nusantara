// src/layouts/MainLayout.jsx

import { Outlet } from 'react-router-dom'; // Outlet renders child routes
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { WhatsAppWidget } from './WhatsAppWidget';

export const MainLayout = () => {
  return (
    <>
      <Navbar /> {/* Navbar will appear on pages using this layout */}
     
      <Outlet /> 
      <ScrollToTop /> {/* ScrollToTop will appear on pages using this layout */}
      <Footer />
      <WhatsAppWidget whatsappNumber='6281548468353' companyName='PT. Pradipa Muda Nusantara' />
    </>
  );
};