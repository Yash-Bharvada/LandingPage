import { useEffect, useRef, useState } from 'react';

const InfiniteStream = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    
    // Animation properties
    const particleCount = 150;
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
      vz: number;
      active: boolean;
    }> = [];
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const hue = Math.random() > 0.5 ? 
        Math.floor(Math.random() * 60 + 220) : // Blue/Purple range
        Math.floor(Math.random() * 60 + 280); // Purple/Pink range
      
      // Spread particles across more of the screen (20-80% instead of 30-70%)
      const x = (Math.random() * 60 + 20) * canvas.width / 100; // 20-80% of canvas width
      const y = (Math.random() * 60 + 20) * canvas.height / 100; // 20-80% of canvas height
      
      particles.push({
        x: x,
        y: y,
        z: Math.random() * 1000,
        radius: Math.random() * 2.5 + 1, // Slightly larger particles
        color: `hsla(${hue}, 100%, 70%, ${Math.random() * 0.5 + 0.4})`, // More visible
        vx: (Math.random() - 0.5) * 0.4, // Slightly faster movement
        vy: (Math.random() - 0.5) * 0.4, // Slightly faster movement
        vz: Math.random() * 3 + 1.5, // Faster z-movement
        active: true
      });
    }
    
    // Create lines between particles
    const connections: Array<{
      p1: number;
      p2: number;
    }> = [];
    
    // Connect some particles
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        if (Math.random() < 0.03) {
          connections.push({
            p1: i,
            p2: j
          });
        }
      }
    }
    
    // Animation loop
    let animationId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background gradient with time-based pulsing
      const time = Date.now() * 0.001;
      const pulseIntensity = Math.sin(time * 0.2) * 0.1 + 0.9;
      
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, `rgba(${10 * pulseIntensity}, ${10 * pulseIntensity}, ${30 * pulseIntensity}, 1)`);
      gradient.addColorStop(0.5, `rgba(${40 * pulseIntensity}, ${10 * pulseIntensity}, ${60 * pulseIntensity}, 1)`);
      gradient.addColorStop(1, `rgba(${10 * pulseIntensity}, ${10 * pulseIntensity}, ${30 * pulseIntensity}, 1)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        // Update position
        p.z -= p.vz;
        if (p.z < 1) {
          p.z = 1000;
          // When resetting particles, keep them spread across more of the screen
          p.x = (Math.random() * 60 + 20) * canvas.width / 100; // 20-80% of canvas width
          p.y = (Math.random() * 60 + 20) * canvas.height / 100; // 20-80% of canvas height
        }
        
        // Calculate perspective
        const scale = 1000 / (1000 + p.z);
        const x2d = (p.x - canvas.width / 2) * scale + canvas.width / 2;
        const y2d = (p.y - canvas.height / 2) * scale + canvas.height / 2;
        const r2d = p.radius * scale;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(x2d, y2d, r2d, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        // Add glow for closer particles
        if (p.z < 500) {
          const glowSize = (1 - p.z / 500) * 3;
          ctx.beginPath();
          ctx.arc(x2d, y2d, r2d * (1 + glowSize), 0, Math.PI * 2);
          ctx.fillStyle = p.color.replace(/[^,]+(?=\))/, '0.15');
          ctx.fill();
        }
      });
      
      // Draw connections
      connections.forEach(conn => {
        const p1 = particles[conn.p1];
        const p2 = particles[conn.p2];
        
        // Calculate perspective for both points
        const scale1 = 1000 / (1000 + p1.z);
        const x1 = (p1.x - canvas.width / 2) * scale1 + canvas.width / 2;
        const y1 = (p1.y - canvas.height / 2) * scale1 + canvas.height / 2;
        
        const scale2 = 1000 / (1000 + p2.z);
        const x2 = (p2.x - canvas.width / 2) * scale2 + canvas.width / 2;
        const y2 = (p2.y - canvas.height / 2) * scale2 + canvas.height / 2;
        
        // Calculate distance and opacity
        const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const maxDistance = canvas.width / 3;
        
        if (distance < maxDistance) {
          // Calculate opacity based on distance and z-position
          const opacity = (1 - distance / maxDistance) * 0.2 * 
                         (1 - Math.min(p1.z, p2.z) / 1000);
          
          // Draw line with gradient
          const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
          gradient.addColorStop(0, p1.color.replace(/[^,]+(?=\))/, opacity.toString()));
          gradient.addColorStop(1, p2.color.replace(/[^,]+(?=\))/, opacity.toString()));
          
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = Math.max(0.5, 2 * (1 - Math.min(p1.z, p2.z) / 1000));
          ctx.stroke();
        }
      });
      
      // Always request next frame regardless of FPS limiting
      animationId = requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Cleanup function
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [dimensions]);
  
  // Particle effect
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    let particles: HTMLDivElement[] = [];
    const particleCount = 60; // Reduced from 80 to remove some particles
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      container.appendChild(particle);
      particles.push(particle);
      
      // Spread particles across more of the screen
      const x = Math.random() * 60 + 20; // 20-80% of viewport width
      const y = Math.random() * 60 + 20; // 20-80% of viewport height
      const z = Math.random() * 600 - 300; // Increased z-range for more depth
      
      // Set initial styles
      particle.style.setProperty('--x', `${x}vw`);
      particle.style.setProperty('--y', `${y}vh`);
      particle.style.setProperty('--z', `${z}px`);
      particle.style.setProperty('--delay', `${Math.random() * 5}s`);
      particle.style.setProperty('--duration', `${Math.random() * 8 + 6}s`); // Faster animation
      particle.style.setProperty('--size', `${Math.random() * 3 + 1.5}px`); // Slightly larger particles
      particle.style.setProperty('--opacity', `${Math.random() * 0.4 + 0.3}`) // More visible
    }
    
    return () => {
      particles.forEach(p => p.remove());
    };
  }, []);
  
  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      {/* Canvas background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />
      
      {/* 3D Particle container */}
      <div ref={containerRef} className="particles-container absolute inset-0 perspective-1000" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-1" />
      
      {/* Radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.7)_70%)] z-1" />
      
      {/* 3D Grid with perspective */}
      <div className="absolute inset-0 grid-container z-1">
        <div className="grid-floor" />
      </div>
      
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .particle {
          position: absolute;
          width: var(--size);
          height: var(--size);
          background-color: rgba(255, 255, 255, var(--opacity));
          border-radius: 50%;
          left: var(--x);
          top: var(--y);
          transform: translateZ(var(--z));
          animation: float var(--duration) ease-in-out var(--delay) infinite;
          pointer-events: none;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateZ(var(--z)) translateY(0) translateX(0);
          }
          25% {
            transform: translateZ(var(--z)) translateY(-30px) translateX(15px);
          }
          50% {
            transform: translateZ(var(--z)) translateY(-15px) translateX(-15px);
          }
          75% {
            transform: translateZ(var(--z)) translateY(15px) translateX(15px);
          }
        }
        
        /* 3D Grid styles */
        .grid-container {
          perspective: 1000px;
          transform-style: preserve-3d;
          pointer-events: none;
        }
        
        .grid-floor {
          position: absolute;
          width: 400%;
          height: 400%;
          top: 50%;
          left: -150%;
          background-image: linear-gradient(rgba(123, 58, 237, 0.03) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(123, 58, 237, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          transform: rotateX(80deg) translateY(-50%);
          animation: grid-move 25s linear infinite;
          pointer-events: none;
        }
        
        @keyframes grid-move {
          0% { transform: rotateX(80deg) translateY(-50%) translateZ(0px); }
          100% { transform: rotateX(80deg) translateY(-50%) translateZ(1000px); }
        }
      `}</style>
    </div>
  );
};

export default InfiniteStream;