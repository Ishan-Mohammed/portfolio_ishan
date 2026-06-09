import { useEffect, useState } from 'react';

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    // Check if touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsHidden(false);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.classList.contains('clickable') ||
          target.closest('.clickable'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Smooth trail effect using linear interpolation in custom animation frame
  useEffect(() => {
    if (isHidden) return;

    let animFrame: number;
    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        // Ease speed
        const speed = 0.15;
        return {
          x: prev.x + dx * speed,
          y: prev.y + dy * speed,
        };
      });
      animFrame = requestAnimationFrame(updateTrail);
    };

    animFrame = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animFrame);
  }, [position, isHidden]);

  if (isHidden) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        id="custom-cursor-ring"
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-amber-500/50 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50 transition-transform duration-200 ease-out"
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.6 : 1})`,
          backgroundColor: isHovered ? 'rgba(245, 158, 11, 0.08)' : 'transparent',
        }}
      />
      {/* Inner dot */}
      <div
        id="custom-cursor-dot"
        className="fixed top-0 left-0 w-2 h-2 bg-amber-500 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50 transition-transform duration-100 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 0.3 : 1})`,
        }}
      />
    </>
  );
}
