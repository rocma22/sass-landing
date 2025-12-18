export default function Button({ children, variant = "primary", className = "" }) {
  const base = "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-all duration-300 ease-in-out";

  const variants = {
    primary: "bg-primary text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800",
  };

  return <button className={`${base} ${variants[variant]} ${className}`}>{children}</button>;
}
