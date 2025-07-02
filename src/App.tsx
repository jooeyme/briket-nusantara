import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
// import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
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
import "./App.css";

function App() {
  return (
    <Router> {/* Wrap your application with Router */}
    

      <Routes> {/* Define your routes here */}
        <Route path="/" element={<SplashScreen />} />
        <Route element={<MainLayout />}>
        <Route path="/home" element={
        <>
          <Hero />
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
          <Team />
          </>
          } /> {/* This is your /about path */}
        <Route path="/catalogue" element={<Catalogue />} /> 
        <Route path="/gallery" element={
          <>
          <Services />
          <Gallery />
          </>
        } /> 
        <Route path="/contact" element={<Contact />} /> 
        </Route>
      </Routes>

      
    </Router>
  );
}

export default App;
