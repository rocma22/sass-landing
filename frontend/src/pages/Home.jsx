// pages/Home.jsx
import Navbar from "../layout/Navbar";
import Hero from "../sections/Hero";
import Features from "../sections/Features";
import Pricing from "../sections/Pricing";
import CTA from "../sections/CTA";
import Footer from "../layout/Footer";
import SEOHead from "../components/SEOHead";

export default function Home() {
  return (
    <>
      <SEOHead />
      <Navbar />
      <main id="main-content" className="scroll-snap-y-mandatory">
        <Hero />
        <Features />
        <Pricing />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
