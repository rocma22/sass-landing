import { useEffect, useState } from 'react';

export default function SkipLink() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Tab') {
        setIsVisible(true);
      }
    };

    const handleClick = () => {
      setIsVisible(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <a
      href="#main-content"
      className={`fixed top-4 left-4 z-40 bg-primary text-white px-4 py-2 rounded-md transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      onFocus={() => setIsVisible(true)}
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      Skip to main content
    </a>
  );
}