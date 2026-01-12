import React from 'react';

const VideoBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        style={{ filter: 'brightness(0.7)' }}
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay for better text readability and theme consistency */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/30 z-10"></div>
    </div>
  );
};

export default VideoBackground;