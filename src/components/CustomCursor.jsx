import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      // Smooth cursor movement with faster response
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;

      if (cursor) {
        cursor.style.transform = `translate(${cursorX - 8}px, ${cursorY - 8}px)`;
      }

      requestAnimationFrame(animateCursor);
    };

    // Show custom cursor on hover
    const handleMouseEnter = () => {
      if (cursor) cursor.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      if (cursor) cursor.style.opacity = '0';
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Start animation
    animateCursor();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Simple cursor dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 bg-purple-400 rounded-full pointer-events-none z-[60] opacity-0 transition-opacity duration-200"
        style={{
          transform: 'translate(-50%, -50%)',
          filter: 'blur(0.5px)',
          boxShadow: '0 0 10px rgba(168, 85, 247, 0.5)'
        }}
      />
    </>
  );
};

export default CustomCursor; 