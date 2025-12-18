import { useEffect } from 'react';

const SEOHead = ({ title, description, canonicalUrl, structuredData }) => {
  const defaultTitle = "SaaSPro - Modern SaaS Landing Page Template";
  const defaultDescription = "Launch your SaaS product with our modern, conversion-optimized landing page template. Built with React, Tailwind CSS, and Framer Motion. Free trial available.";

  const finalTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalCanonicalUrl = canonicalUrl || "https://saaspro-template.vercel.app/";

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SaaSPro",
    "description": finalDescription,
    "url": finalCanonicalUrl,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free trial available"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SaaSPro Team"
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  useEffect(() => {
    // Update document title
    document.title = finalTitle;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', finalDescription);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = finalDescription;
      document.head.appendChild(metaDescription);
    }

    // Update or create canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', finalCanonicalUrl);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = finalCanonicalUrl;
      document.head.appendChild(canonicalLink);
    }

    // Update Open Graph tags
    const updateMetaTag = (property, content) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        metaTag.setAttribute('content', content);
        document.head.appendChild(metaTag);
      }
    };

    updateMetaTag('og:title', finalTitle);
    updateMetaTag('og:description', finalDescription);
    updateMetaTag('og:url', finalCanonicalUrl);

    // Update Twitter tags
    updateMetaTag('twitter:title', finalTitle);
    updateMetaTag('twitter:description', finalDescription);

    // Update or create structured data script
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (structuredDataScript) {
      structuredDataScript.textContent = JSON.stringify(finalStructuredData);
    } else {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      structuredDataScript.textContent = JSON.stringify(finalStructuredData);
      document.head.appendChild(structuredDataScript);
    }

    // Cleanup function to remove dynamically added elements when component unmounts
    return () => {
      // Note: We don't remove the elements here as they might be needed by other components
      // or for SEO purposes. The next effect will update them appropriately.
    };
  }, [finalTitle, finalDescription, finalCanonicalUrl, finalStructuredData]);

  return null; // This component doesn't render anything
};

export default SEOHead;