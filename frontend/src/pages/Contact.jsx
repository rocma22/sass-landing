import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import SEOHead from "../components/SEOHead";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
  };

  if (submitted) {
    return (
      <>
        <SEOHead
          title="Contact Us"
          description="Get in touch with SaaSPro. We'd love to hear from you and discuss how we can help your business grow."
        />
        <main id="main-content">
          <section
            id="contact"
            className="relative min-h-dvh flex items-center justify-center py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
          >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 md:p-12 shadow-xl text-center"
        >
          <h2 className="text-2xl font-bold text-dark dark:text-white">
            Thank you!
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Your message has been sent. We'll get back to you soon.
          </p>
          <Button
            onClick={() => setSubmitted(false)}
            className="mt-6 px-6 py-2"
          >
            Send Another Message
          </Button>
        </motion.div>
      </section>
      </main>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Get in touch with SaaSPro. We'd love to hear from you and discuss how we can help your business grow."
      />
      <main id="main-content">
        <section
          id="contact"
          className="relative min-h-dvh flex items-center justify-center py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
        >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 md:p-12 shadow-xl"
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-white">
            Let’s build something great
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Have a project in mind? Fill the form and we’ll get back to you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-6 md:grid-cols-2">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 text-sm text-dark dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            required
            className="rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 text-sm text-dark dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            rows="5"
            required
            className="md:col-span-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 text-sm text-dark dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <div className="md:col-span-2 text-center">
            <Button type="submit" disabled={isSubmitting} className="px-8 py-3 text-base">
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </motion.div>
    </section>
    </main>
    </>
  );
}
