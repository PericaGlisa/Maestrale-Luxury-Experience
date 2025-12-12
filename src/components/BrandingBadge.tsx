import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const BrandingBadge: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Allow the link to open in new tab
  };



  const handleTouchStart = (e: React.TouchEvent) => {
    if (isMobile) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    // Only prevent default on mobile to allow link navigation on desktop
    if (isMobile && !isExpanded) {
      e.preventDefault();
      setIsExpanded(true);
    }
  };

  return (
    <motion.div
      initial="idle"
      whileHover={!isMobile ? "hover" : undefined}
      animate={isExpanded ? "hover" : "idle"}
      onTouchStart={handleTouchStart}
      onClick={handleClick}
      className="fixed bottom-4 right-4 z-[100] flex items-center gap-0 overflow-hidden rounded-full bg-[#020617]/80 border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-xl cursor-pointer group select-none touch-manipulation"
    >
      {/* @ Symbol Container */}
      <div 
        className={`relative flex items-center justify-center ${isMobile ? 'w-10 h-10' : 'w-9 h-9'} bg-white/5 border-r border-white/5 group-hover:bg-white/10 transition-colors ${isMobile ? 'active:bg-white/20' : ''} cursor-pointer align-middle`}
        onClick={handleLogoClick}
      >
        <span className="text-[14px] font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-blue-400 group-hover:to-blue-500 transition-all duration-300 leading-none flex items-center justify-center w-full h-full">
          @
        </span>
      </div>

      {/* Expanding Text Section */}
      <motion.div
        variants={{
          idle: { width: 0, opacity: 0, paddingRight: 0 },
          hover: { width: 'auto', opacity: 1, paddingRight: isMobile ? 20 : 16 }
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center overflow-hidden whitespace-nowrap"
      >
        <a 
          href="https://petarmiodrag2.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className={`${isMobile ? 'pl-4' : 'pl-3'} flex flex-col justify-center h-full text-decoration-none`}
          onClick={handleLinkClick}
        >
          <span className="text-[8px] uppercase tracking-widest text-slate-400 font-bold leading-none mb-0.5">
            Designed by
          </span>
          <span className="text-[10px] font-display font-bold text-white tracking-wide leading-none">
            petarmiodrag2.xyz
          </span>
        </a>
        <a 
          href="https://petarmiodrag2.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2"
          onClick={handleLinkClick}
        >
          <svg className={`w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 ${isMobile ? 'scale-125' : ''}`} fill="none" stroke="url(#blue-gradient)" viewBox="0 0 24 24" strokeWidth={2.5}>
            <defs>
              <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
            </defs>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default BrandingBadge;