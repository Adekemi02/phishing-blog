'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PhishingAlert: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const resizeText = () => {
      if (textRef.current) {
        const container = textRef.current.parentElement;
        if (container instanceof HTMLElement) {
          let low = 8;
          let high = 100;
          let mid;

          while (low <= high) {
            mid = Math.floor((low + high) / 2);
            textRef.current.style.fontSize = `${mid}px`;
            
            if (textRef.current.scrollWidth <= container.clientWidth) {
              low = mid + 1;
            } else {
              high = mid - 1;
            }
          }

          setFontSize(high);
        }
      }
    };

    resizeText();
    window.addEventListener('resize', resizeText);
    return () => window.removeEventListener('resize', resizeText);
  }, []);

  return (
    <div className="my-8 w-full  ">
      <motion.div 
        className="bg-gray-100 w-[80] rounded-lg p-2 mb-2 flex items-center justify-center h-12"
        initial={{ x: "-100%" }}
        animate={{ 
          x: ["100%", "-100%"],
        }}
        transition={{ 
          repeat: Infinity, 
          repeatType: "reverse", 
          duration: 10,
          ease: "linear"
        }}
      >
        <motion.h2 
          ref={textRef}
          className="text-red-500 font-bold text-start text-2xl whitespace-nowrap"
          style={{ fontSize: `${fontSize}px` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Oops! You&apos;ve clicked a phishing link. Details may be compromised!
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default PhishingAlert