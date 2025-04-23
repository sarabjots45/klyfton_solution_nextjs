
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Circle } from 'lucide-react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    // Set initial position off-screen
    gsap.set(cursor, { xPercent: -50, yPercent: -50, opacity: 0 });
    gsap.set(follower, { xPercent: -50, yPercent: -50, opacity: 0 });

    // Variables for mouse position
    let mouseX = 0;
    let mouseY = 0;
    
    // Variables for previous position
    let posX = 0;
    let posY = 0;
    
    // Speed factor (lower = smoother/slower)
    const speed = 0.2;

    // Animation function for the follower
    const animate = () => {
      // Calculate new position with easing
      posX += (mouseX - posX) * speed;
      posY += (mouseY - posY) * speed;

      // Apply the new position
      gsap.set(follower, { x: posX, y: posY });
      
      // Continue the animation loop
      requestAnimationFrame(animate);
    };

    // Start the animation loop
    animate();

    // Mouse move handler
    const onMouseMove = (e: MouseEvent) => {
      // Update mouse position
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Move the main cursor immediately to the mouse position
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: 'power1.out'
      });
    };

    // Show cursors when mouse enters the window
    const onMouseEnter = () => {
      gsap.to([cursor, follower], {
        opacity: 1,
        duration: 0.3,
        stagger: 0.1
      });
    };

    // Hide cursors when mouse leaves the window
    const onMouseLeave = () => {
      gsap.to([cursor, follower], {
        opacity: 0,
        duration: 0.3,
        stagger: 0.1
      });
    };

    // Add event listeners
    window.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseenter', onMouseEnter);
    document.body.addEventListener('mouseleave', onMouseLeave);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseenter', onMouseEnter);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      // Cancel any ongoing animations
      gsap.killTweensOf([cursor, follower]);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 bg-klyfton-blue rounded-full z-[9999] pointer-events-none mix-blend-difference"
      />
      
      {/* Following cursor with icon */}
      <div 
        ref={followerRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none flex items-center justify-center"
      >
        <Circle className="text-klyfton-teal opacity-50 w-8 h-8" />
      </div>
    </>
  );
};

export default CustomCursor;
