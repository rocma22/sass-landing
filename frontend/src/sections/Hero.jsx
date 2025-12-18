import Container from "../layout/Container";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        pt-28
        md:pt-32
        pb-16
      "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Container>
        <div className="text-center">
          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-dark dark:text-gray-100 sm:text-5xl">
            Build modern SaaS websites faster with clean UI
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-300">
            Launch your product with a professional, responsive and scalable
            interface built using React and Tailwind CSS.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button>Start Free Trial</Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Button variant="outline">View Demo</Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
