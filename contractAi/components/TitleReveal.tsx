import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const TitleReveal = () => {
  const [showTitle, setShowTitle] = useState(true); // Start with title visible immediately
  const controls = useAnimation();
  const titleRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  
  // Immediately start animation when component mounts
  useEffect(() => {
    controls.start('visible');
    hasAnimated.current = true;
  }, [controls]);
  
  // Check if element is in viewport to trigger animation
  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const rect = titleRef.current.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
        
        if (isInView) {
          controls.start('visible');
        } else {
          // Reset animation when out of view so it will animate again when coming back
          controls.start('hidden');
        }
      }
    };
    
    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);
  
  // Text animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        type: 'spring',
        stiffness: 120
      }
    })
  };
  
  // Container variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        type: 'spring',
        stiffness: 100
      }
    }
  };
  
  const titleText = "ContractAI";
  
  return (
    <div className="text-center w-full max-w-4xl mx-auto" ref={titleRef}>
      {showTitle && (
        <>
          <motion.div 
            className="text-6xl md:text-8xl font-extrabold text-center mb-6 flex justify-center flex-wrap"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {titleText.split('').map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterVariants}
                initial="hidden"
                animate={controls}
                className={index >= 8 ? "text-primary-500" : ""}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-6"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { 
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.215, 0.61, 0.355, 1]
                } 
              }
            }}
            initial="hidden"
            animate={controls}
          >
            AI-powered contract analysis and management platform
          </motion.p>
          
          <motion.div
            className="w-24 h-1 bg-primary-500 mx-auto mt-4 mb-8"
            variants={{
              hidden: { width: 0 },
              visible: { 
                width: 96, 
                transition: { 
                  duration: 0.6,
                  delay: 0.5,
                  ease: [0.215, 0.61, 0.355, 1]
                } 
              }
            }}
            initial="hidden"
            animate={controls}
          />
        </>
      )}
    </div>
  );
};

export default TitleReveal;
