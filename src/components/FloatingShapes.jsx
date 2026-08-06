import { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function FloatingShapes({ count = 5, className = '' }) {
  const shapes = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 120 + 70,
      x: Math.random() * 95,
      y: Math.random() * 95,
      duration: Math.random() * 10 + 18,
      delay: Math.random() * 3,
    }));
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            background:
              shape.id % 3 === 0
                ? 'radial-gradient(circle, hsl(var(--primary) / 0.18), transparent 70%)'
                : shape.id % 3 === 1
                ? 'radial-gradient(circle, hsl(var(--secondary) / 0.18), transparent 70%)'
                : 'radial-gradient(circle, hsl(var(--primary) / 0.12), hsl(var(--secondary) / 0.12), transparent 70%)',
            filter: 'blur(20px)',
            willChange: 'transform, opacity',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, shape.id % 2 === 0 ? 20 : -20, 0],
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
