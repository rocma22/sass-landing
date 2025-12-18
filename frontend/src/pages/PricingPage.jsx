import Navbar from "../layout/Navbar";
import Pricing from "../sections/Pricing";
import Footer from "../layout/Footer";
import SEOHead from "../components/SEOHead";

export default function PricingPage() {
  return (
    <>
      <SEOHead
        title="Pricing Plans"
        description="Choose the perfect SaaSPro plan for your business. Flexible pricing with no hidden fees. Start your free trial today."
      />
      <Navbar />
      <main id="main-content">
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
