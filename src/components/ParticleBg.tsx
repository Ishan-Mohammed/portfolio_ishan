import { useEffect, useRef, useState } from 'react';

interface ParticleBgProps {
  theme: 'dark' | 'light';
}

export default function ParticleBg({ theme }: ParticleBgProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });

    resizeObserver.observe(container);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0 || dimensions.height === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const particleCount = Math.min(Math.floor((dimensions.width * dimensions.height) / 12000), 75);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }> = [];

    const accentColor = theme === 'dark' ? '245, 158, 11' : '212, 163, 89';

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    let animationFrameId: number;
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = dimensions.width;
        if (p.x > dimensions.width) p.x = 0;
        if (p.y < 0) p.y = dimensions.height;
        if (p.y > dimensions.height) p.y = 0;

        // Mouse attraction
        if (mouseX > 0 && mouseY > 0) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            p.x += dx * 0.005;
            p.y += dy * 0.005;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accentColor}, ${p.alpha})`;
        ctx.fill();

        // Connect lines
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            // Calculate opacity proportional to proximity
            const lineAlpha = (1 - dist / 110) * 0.11 * (theme === 'dark' ? 1 : 0.7);
            ctx.strokeStyle = `rgba(${accentColor}, ${lineAlpha})`;
            ctx.lineWidth = 0.55;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      if (canvas) {
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [dimensions, theme]);

  return (
    <div id="particle-container" ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
      <canvas ref={canvasRef} className="block w-full h-full pointer-events-auto opacity-70" />
    </div>
  );
}
