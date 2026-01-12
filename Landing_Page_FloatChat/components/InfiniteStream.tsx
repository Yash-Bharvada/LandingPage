import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Declare vanta for TypeScript
declare global {
  interface Window {
    VANTA: any;
  }
}

const InfiniteStream = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    // Dynamically import Vanta NET effect
    const loadVanta = async () => {
      if (!window.VANTA) {
        // Load Three.js first
        const threeScript = document.createElement('script');
        threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
        threeScript.onload = () => {
          // Load Vanta library after Three.js
          const vantaScript = document.createElement('script');
          vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js';
          vantaScript.onload = () => {
            initVanta();
          };
          document.head.appendChild(vantaScript);
        };
        document.head.appendChild(threeScript);
      } else {
        initVanta();
      }
    };

    const initVanta = () => {
      if (vantaRef.current && window.VANTA && window.THREE) {
        vantaEffect.current = window.VANTA.DOTS({
          el: vantaRef.current,
          THREE: window.THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x4DA6FF, // Light Blue (Primary Accent)
          color2: 0x80CFFF, // Sky Blue (Secondary)
          backgroundColor: 0xFFFFFF, // White background
          size: 8.00, // Smaller dots for scattered effect
          spacing: 20.00, // More spacing for scattered appearance
          showLines: false // Remove connecting lines to eliminate globe effect
        });
      }
    };

    loadVanta();

    // Cleanup function
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      {/* Vanta.js background */}
      <div 
        ref={vantaRef} 
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-1" />
      
      {/* Radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.7)_70%)] z-1" />
    </div>
  );
};

export default InfiniteStream;