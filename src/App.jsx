import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import SoftwareWeUse from "./components/SoftwareWeUse";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

import InfluencerMarketing from "./pages/InfluencerMarketing";
import FashionBrand from "./pages/FashionBrand";
import EventPromotion from "./pages/EventPromotion";
import BrandPromotion from "./pages/BrandPromotion";
import Podcasts from "./pages/Podcasts";
import StoryTelling from "./pages/StoryTelling";
import ServicesWeOffer from "./pages/ServicesWeOffer";

function HomePage() {
  return (
    <div className="bg-[#07101d] text-white overflow-x-hidden">
      <Navbar />

      <Hero />

      <Stats />

      <About />

      {/* NEW SECTION */}
      <SoftwareWeUse />

      <Services />

      <Packages />

      <Portfolio />

      <Process />

      <Testimonials />

      <FAQ />

      <Contact />

      <Footer />

      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Homepage */}
      <Route path="/" element={<HomePage />} />

      {/* Portfolio Pages */}
      <Route
        path="/portfolio/influencer-marketing"
        element={<InfluencerMarketing />}
      />

      <Route
        path="/portfolio/fashion-brand"
        element={<FashionBrand />}
      />

      <Route
        path="/portfolio/event-promotion"
        element={<EventPromotion />}
      />

      <Route
        path="/portfolio/brand-promotion"
        element={<BrandPromotion />}
      />

      <Route
        path="/portfolio/podcasts"
        element={<Podcasts />}
      />

      <Route
        path="/portfolio/story-telling"
        element={<StoryTelling />}
      />

      {/* Services Page */}
      <Route
        path="/services-we-offer"
        element={<ServicesWeOffer />}
      />
    </Routes>
  );
}