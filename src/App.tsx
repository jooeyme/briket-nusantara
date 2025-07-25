import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
// import { Footer } from "./components/Footer";
// import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
// import { Navbar } from "./components/Navbar";
// import { Newsletter } from "./components/Newsletter";
// import { Pricing } from "./components/Pricing";
// import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
// import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";
// import { Testimonials } from "./components/Testimonials";
import { Catalogue } from "./components/Catalogue";
import { Gallery } from "./components/Gallery";
import { SplashScreen } from "./components/SplashScreen";
import { MainLayout } from "./components/MainLayout";
import { ClickableCarousel } from "./components/Carousel";
import { Contact } from "./components/Contact";
import { AboutCompany } from "./components/AboutCompany";
import { Footage } from "./components/Footage";
import { ProductAdv } from "./components/Product-advantages";
import { MockupProfile } from "./components/MockupProfile";
import { ProductFeaturesSection } from "./components/Icon";
import { Certifications } from "./components/Certified";
import { NewHero } from "./components/NewHero";
import { ProductionFlow } from "./components/ProductionFlow";
import { WhatsAppWidget } from "./components/WhatsAppWidget";
import "./App.css";

function App() {
  return (
    <Router> {/* Wrap your application with Router */}
    

      <Routes> {/* Define your routes here */}
        <Route path="/" element={<SplashScreen />} />
        <Route element={<MainLayout />}>
        <Route path="/home" element={
        <>
        <NewHero />
          {/* <Hero /> */}
          {/* <Sponsors /> */}
          <About />
          <ClickableCarousel/>
          <Cta />
          {/* <Testimonials /> */}
          {/* <Pricing /> */}
          {/* <Newsletter /> */}
          <FAQ /> 
          
          
        </>
        } />
        <Route path="/about-company" element={
          <>
          <AboutCompany />
          <HowItWorks />
          <Features />
          <Footage />
          <ProductAdv />
          <ProductionFlow />
          <Team />
          <MockupProfile pdfUrl="/Company Profile PT PRADIPA MUDA NUSANTARA.pdf"/>
          </>
          } /> {/* This is your /about path */}
        <Route path="/catalogue" element={
          <>
          <Services />
          <Catalogue />
          <ProductFeaturesSection/>
          <Certifications/>
          </>
          } /> 
        <Route path="/gallery" element={
          <>
         
          <Gallery />
          </>
        } /> 
        <Route path="/contact" element={<Contact />} /> 
        </Route>
      </Routes>

      <WhatsAppWidget whatsappNumber="6281548468353" companyName="PT. Pradipa Muda Nusantara" />
    </Router>
  );
}

export default App;
