import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const BrandingBadge: React.FC = () => {
  return (
    <motion.a
      href="https://petarmiodrag2.xyz"
      target="_blank"
      rel="noopener noreferrer"
      initial="idle"
      whileHover="hover"
      className="fixed bottom-4 right-4 z-[100] flex items-center gap-0 overflow-hidden rounded-full bg-[#020617]/80 border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-xl cursor-pointer group"
    >
      {/* Logo Icon Container */}
      <div className="relative flex items-center justify-center w-9 h-9 bg-white/5 border-r border-white/5 group-hover:bg-white/10 transition-colors">
        <div className="w-4 h-4 bg-gradient-to-tr from-[#3B82F6] to-blue-400 rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-500" />
      </div>

      {/* Expanding Text Section */}
      <motion.div
        variants={{
          idle: { width: 0, opacity: 0, paddingRight: 0 },
          hover: { width: 'auto', opacity: 1, paddingRight: 16 }
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center overflow-hidden whitespace-nowrap"
      >
        <div className="pl-3 flex flex-col justify-center h-full">
          <span className="text-[8px] uppercase tracking-widest text-slate-400 font-bold leading-none mb-0.5">
            Designed by
          </span>
          <span className="text-[10px] font-display font-bold text-white tracking-wide leading-none">
            petarmiodrag2.xyz
          </span>
        </div>
        <ArrowUpRight className="w-3 h-3 text-[#3B82F6] ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
      </motion.div>
    </motion.a>
  );
};

export default BrandingBadge;