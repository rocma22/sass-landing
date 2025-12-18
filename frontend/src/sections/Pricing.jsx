import Container from "../layout/Container";
import PricingCard from "./PricingCard";
import { motion } from "framer-motion";

const pricingData = [
  {
    title: "Starter",
    price: "19",
    description: "Perfect for small projects",
    features: ["1 Website", "Basic Support", "Responsive Design"],
  },
  {
    title: "Professional",
    price: "49",
    description: "Best for growing businesses",
    popular: true,
    features: [
      "Unlimited Websites",
      "Priority Support",
      "Advanced Components",
    ],
  },
  {
    title: "Enterprise",
    price: "99",
    description: "For large teams",
    features: [
      "Custom Solutions",
      "Dedicated Support",
      "Performance Optimization",
    ],
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

export default function Pricing() {
  return (
    <motion.section
      id="pricing"
      className="
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
            Simple, transparent pricing
          </h2>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Choose the plan that fits your needs.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pricingData.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ scale: 1.03 }}
            >
              <PricingCard {...plan} />
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
}
