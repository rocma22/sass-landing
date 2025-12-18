import { useState, useEffect } from "react";
import Container from "./Container";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import useActiveSection from "../hooks/useActiveSection";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const activeSection = useActiveSection([
    "home",
    "features",
    "pricing",
    "contact",
  ]);

  // Dark mode persistence
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // Navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark");
    localStorage.theme = isDark ? "dark" : "light";
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const navLink = (id) =>
    `px-4 py-2 rounded-full text-sm font-medium transition
    ${
      activeSection === id
        ? "bg-primary text-white shadow"
        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700 transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold text-dark dark:text-white"
        >
          SaaS<span className="text-primary">Pro</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2" aria-label="Main navigation">
          <button onClick={() => scrollToSection("home")} className={navLink("home")}>
            Home
          </button>
          <button onClick={() => scrollToSection("features")} className={navLink("features")}>
            Features
          </button>
          <button onClick={() => scrollToSection("pricing")} className={navLink("pricing")}>
            Pricing
          </button>
          <button onClick={() => scrollToSection("contact")} className={navLink("contact")}>
            Contact
          </button>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="ml-4 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition"
          >
            Get Started
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
          >
            <Container className="flex flex-col gap-4 py-6">
              <button onClick={() => scrollToSection("home")} className={navLink("home")}>
                Home
              </button>
              <button onClick={() => scrollToSection("features")} className={navLink("features")}>
                Features
              </button>
              <button onClick={() => scrollToSection("pricing")} className={navLink("pricing")}>
                Pricing
              </button>
              <button onClick={() => scrollToSection("contact")} className={navLink("contact")}>
                Contact
              </button>

              {/* CTA Button */}
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition"
              >
                Get Started
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                className="mt-2 flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                <span className="text-sm">Toggle Theme</span>
              </button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
