import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const MiddleScrollToTop = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate how far down the user has scrolled
      if (docHeight > 0) {
        const percentage = (scrollTop / docHeight) * 100;
        setScrollPercentage(percentage);
      }

      // Only show the indicator once they scroll past 150px
      if (scrollTop > 150) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center justify-center transition-all duration-500 ${
        showButton ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
      }`}
    >
      {/* SVG Circular Progress Ring */}
      <div className="relative w-12 h-12 flex items-center justify-center group">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
          {/* Background circle track */}
          <circle
            className="text-zinc-800"
            strokeWidth="2"
            stroke="currentColor"
            fill="transparent"
            r="16"
            cx="18"
            cy="18"
          />
          {/* Animated accent progress line matching your premium brand orange/red accent */}
          <circle
            className="text-red-700 transition-all duration-100 ease-out"
            strokeWidth="2.5"
            strokeDasharray="100, 100"
            strokeDashoffset={100 - scrollPercentage}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="16"
            cx="18"
            cy="18"
          />
        </svg>

        {/* Floating Interactive Core Trigger Button */}
        <button
          onClick={scrollToTop}
          className="absolute w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 transition-all duration-300 group-hover:bg-red-950 group-hover:text-white group-hover:border-red-900 group-hover:scale-110 shadow-lg"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );
};

export default MiddleScrollToTop;