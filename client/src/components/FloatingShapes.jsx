import { motion } from 'framer-motion';

export default function FloatingShapes({ count = 5, className = '' }) {
  const shapes = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 150 + 80,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 20,
    delay: Math.random() * 5,
  }));

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
            background: shape.id % 3 === 0
              ? 'radial-gradient(circle, hsl(var(--primary) / 0.2), transparent 70%)'
              : shape.id % 3 === 1
              ? 'radial-gradient(circle, hsl(var(--secondary) / 0.2), transparent 70%)'
              : 'radial-gradient(circle, hsl(var(--primary) / 0.15), hsl(var(--secondary) / 0.15), transparent 70%)',
            filter: 'blur(30px)',
            boxShadow: shape.id % 2 === 0
              ? '0 0 60px hsl(var(--primary) / 0.3)'
              : '0 0 60px hsl(var(--secondary) / 0.3)',
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, shape.id % 2 === 0 ? 30 : -30, 0],
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
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
