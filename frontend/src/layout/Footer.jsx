import Container from "./Container";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 scroll-mt-24 scroll-snap-align-start" id="contact">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-dark dark:text-white">
              SaaS<span className="text-primary">Pro</span>
            </h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Modern SaaS landing page template built with React & Tailwind CSS. 
              Empower your business with cutting-edge solutions.
            </p>
            <div className="mt-6 flex space-x-4">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-dark dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a href="#home" className="hover:text-primary transition-colors cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-primary transition-colors cursor-pointer">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors cursor-pointer">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors cursor-pointer">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-dark dark:text-white mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <span>hello@saaspro.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-dark dark:text-white mb-4">
              Stay Updated
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and features.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 text-sm text-dark dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <motion.button 
                className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="border-t border-gray-200 dark:border-gray-800 py-6 text-center"
      >
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} SaaSPro. All rights reserved.</p>
          <div className="mt-2 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

