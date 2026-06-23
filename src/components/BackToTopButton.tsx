import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling past roughly the hero section (80% of viewport height)
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 p-3 sm:p-4 bg-neon text-[#010828] shadow-[0_0_20px_rgba(111,255,0,0.3)] transition-all duration-500 ease-in-out hover:bg-cream hover:shadow-[0_0_25px_rgba(239,244,255,0.4)] ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-12 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp size={24} className="stroke-[3px]" />
    </button>
  );
}
