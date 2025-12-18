import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import SEOHead from "../components/SEOHead";

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us"
        description="Learn about SaaSPro's mission to build modern SaaS applications with clean UI and exceptional user experience."
      />
      <Navbar />
      <main id="main-content" className="py-24 text-center">
        <h1 className="text-4xl font-bold text-dark dark:text-gray-100">About Us</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          We build modern SaaS applications with clean UI and smooth UX.
        </p>
      </main>
      <Footer />
    </>
  );
}
