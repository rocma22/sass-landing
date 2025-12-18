export default function FeatureCard({ title, description, icon }) {
  return (
    <div className="rounded-xl border border-gray-200 p-6 text-left transition hover:shadow-lg hover:scale-[1.03] duration-300 dark:border-gray-700">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold text-dark dark:text-gray-100">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
