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
  
  const titleText = "FloatChat ";
  
  return (
    <div className="text-center w-full max-w-4xl mx-auto" ref={titleRef}>
      {showTitle && (
        <>
          <motion.div 
            className="text-6xl md:text-8xl font-black text-center mb-8 flex justify-center flex-wrap text-white"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            style={{
              fontFamily: "'Poppins', 'Montserrat', 'Inter', sans-serif",
              fontWeight: 900,
              color: '#ffffff',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)',
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5))'
            }}
          >
            {titleText.split('').map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterVariants}
                initial="hidden"
                animate={controls}
                className="inline-block"
                style={{
                  color: '#ffffff',
                  textShadow: 'inherit'
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.p 
            className="text-2xl md:text-3xl font-bold max-w-4xl mx-auto mb-8 text-white"
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
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)',
              filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5))'
            }}
          >
            Dive into Argo data effortlessly. Ask, visualize, and discover ocean insights in natural language.
          </motion.p>
          
          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 mx-auto mt-6 mb-10 rounded-full shadow-lg"
            variants={{
              hidden: { width: 0, opacity: 0 },
              visible: { 
                width: 128, 
                opacity: 1,
                transition: { 
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.215, 0.61, 0.355, 1]
                } 
              }
            }}
            initial="hidden"
            animate={controls}
            style={{
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.6), 0 4px 8px rgba(0, 0, 0, 0.3)'
            }}
          />
        </>
      )}
    </div>
  );
};

export default TitleReveal;
