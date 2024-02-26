// Import necessary libraries
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType  from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
 // Import Tailwind CSS styles

// Initialize GSAP and ScrollTrigger plugins
gsap.registerPlugin(ScrollTrigger);

const TextAnimation = ({ text, design }) => {
  const textRef = useRef(null);

  useEffect(() => {
    // Split the text using Split-Type
    const split = new SplitType(textRef.current, {
      types: 'chars',
      linesClass: 'chars chars--$',
    });

    // Set up GSAP animations
    gsap.from(split.chars, {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%', // Adjust as needed
        end: 'bottom 20%', // Adjust as needed
        scrub: true,
      },
    });
  }, []);

  return (
    
      <div
        ref={textRef}
        className={design}
      >
        {text}
      </div>
    
  );
};

export default TextAnimation;
