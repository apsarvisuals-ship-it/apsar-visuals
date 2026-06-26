import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
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
import AcademyPromotion from "./pages/AcademyPromotion";
import Podcasts from "./pages/Podcasts";
import StoryTelling from "./pages/StoryTelling";

function HomePage() {
  return (
    <div className="bg-[#07101d] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <About />
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

      <Route path="/" element={<HomePage />} />

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
        path="/portfolio/academy-promotion"
        element={<AcademyPromotion />}
      />

      <Route
        path="/portfolio/podcasts"
        element={<Podcasts />}
      />

      <Route
        path="/portfolio/story-telling"
        element={<StoryTelling />}
      />

    </Routes>
  );
}