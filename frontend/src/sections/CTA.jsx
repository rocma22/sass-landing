import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent dark:from-primary/20 dark:via-primary/10 dark:to-transparent">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles size={16} />
            Ready to get started?
          </div>

          <h2 className="text-4xl font-bold text-dark dark:text-white md:text-5xl">
            Transform Your Business
            <span className="block text-primary">Today</span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Join thousands of companies already using SaaSPro to streamline their operations,
            boost productivity, and drive growth. Start your free trial now.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <motion.button
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial
              <ArrowRight size={20} />
            </motion.button>

            <motion.button
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-8 py-4 text-lg font-semibold text-dark dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Demo
            </motion.button>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}