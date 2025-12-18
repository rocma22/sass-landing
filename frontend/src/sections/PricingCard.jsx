import Button from "../components/ui/Button";

export default function PricingCard({ title, price, description, features, popular = false }) {
  return (
    <div className={`relative rounded-xl border p-8 transition hover:shadow-lg hover:scale-[1.02] ${popular ? "border-primary shadow-lg" : "border-gray-200 dark:border-gray-700"}`}>
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm text-white">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-semibold text-dark dark:text-gray-100">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
      <div className="mt-6">
        <span className="text-4xl font-bold text-dark dark:text-gray-100">${price}</span>
        <span className="text-gray-600 dark:text-gray-400"> / month</span>
      </div>
      <ul className="mt-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
            <span className="mr-2 text-primary">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <Button className="mt-8 w-full">Get Started</Button>
    </div>
  );
}
