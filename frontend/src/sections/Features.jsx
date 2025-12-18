import Container from "../layout/Container";
import FeatureCard from "./FeatureCard";
import { Code, Layout, Zap } from "lucide-react";
import { motion } from "framer-motion";

const featuresData = [
  {
    icon: <Code size={28} />,
    title: "Clean Code",
    description: "Maintainable, readable and scalable React architecture.",
  },
  {
    icon: <Layout size={28} />,
    title: "Responsive Design",
    description: "Perfect layout on mobile, tablet, and desktop.",
  },
  {
    icon: <Zap size={28} />,
    title: "Fast Performance",
    description: "Optimized builds with modern frontend tooling.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Features() {
  return (
    <motion.section
      id="features"
      className="
        bg-gray-50 dark:bg-gray-900
        min-h-screen
        flex
        items-start
        pt-28
        md:pt-32
        pb-24
        scroll-mt-16
      "
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
    >
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-dark dark:text-gray-100 sm:text-4xl">
            Everything you need to launch faster
          </h2>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Built with performance, scalability, and simplicity in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ scale: 1.03 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
}
