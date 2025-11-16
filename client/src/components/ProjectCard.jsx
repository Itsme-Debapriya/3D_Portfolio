import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Sparkles, Code2, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';

const projectIcons = [Code2, Rocket, Zap, Sparkles];

export default function ProjectCard({ title, description, technologies, demoUrl, githubUrl, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const ProjectIcon = projectIcons[index % projectIcons.length];

  const handleDemoClick = () => {
    if (demoUrl) {
      window.open(demoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleGithubClick = () => {
    if (githubUrl) {
      window.open(githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -12, 
        scale: 1.02,
        rotateY: 2,
        transition: { duration: 0.3 }
      }}
      className="group perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`card-project-${index}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <Card className="h-full border-2 border-primary/30 bg-card/80 backdrop-blur-md overflow-hidden relative group-hover:border-primary/80 transition-all duration-300">
        {/* Bright animated gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{
            background: [
              'linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--secondary) / 0.15))',
              'linear-gradient(225deg, hsl(var(--secondary) / 0.15), hsl(var(--primary) / 0.15))',
              'linear-gradient(315deg, hsl(var(--primary) / 0.15), hsl(var(--secondary) / 0.15))',
              'linear-gradient(45deg, hsl(var(--secondary) / 0.15), hsl(var(--primary) / 0.15))',
              'linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--secondary) / 0.15))',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />

        {/* Bright glow effect on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={isHovered ? {
            boxShadow: [
              '0 0 30px hsl(var(--primary) / 0.4), inset 0 0 30px hsl(var(--secondary) / 0.2)',
              '0 0 50px hsl(var(--secondary) / 0.4), inset 0 0 50px hsl(var(--primary) / 0.2)',
              '0 0 30px hsl(var(--primary) / 0.4), inset 0 0 30px hsl(var(--secondary) / 0.2)',
            ],
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Floating 3D icon */}
        <motion.div
          className="absolute top-4 right-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center z-10"
          animate={{
            y: isHovered ? [0, -10, 0] : 0,
            rotateY: [0, 360],
            scale: isHovered ? [1, 1.1, 1] : 1,
            boxShadow: isHovered 
              ? [
                  '0 10px 30px hsl(var(--primary) / 0.6)',
                  '0 15px 50px hsl(var(--secondary) / 0.8)',
                  '0 10px 30px hsl(var(--primary) / 0.6)',
                ]
              : '0 5px 15px hsl(var(--primary) / 0.3)',
          }}
          transition={{
            y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            rotateY: { duration: 3, repeat: Infinity, ease: 'linear' },
            scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            boxShadow: { duration: 2, repeat: Infinity },
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <ProjectIcon className="w-8 h-8 text-white drop-shadow-lg" />
        </motion.div>
        
        <CardHeader className="relative pt-24">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2 flex-1">
              <CardTitle className="text-2xl group-hover:text-primary transition-colors group-hover:drop-shadow-[0_0_15px_hsl(var(--primary))] duration-300">
                {title}
              </CardTitle>
              <CardDescription className="text-muted-foreground group-hover:text-foreground transition-colors">
                {description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="relative space-y-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, techIndex) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                whileHover={{ 
                  scale: 1.1,
                  y: -2,
                }}
              >
                <Badge
                  variant="secondary"
                  className="bg-primary/20 text-primary border-2 border-primary/40 hover:bg-primary/30 hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.6)] transition-all duration-300 cursor-pointer"
                  data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>

        <CardFooter className="relative flex gap-3">
          {demoUrl && (
            <Button
              size="sm"
              onClick={handleDemoClick}
              className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 border-2 border-primary/40 hover:border-primary hover:shadow-[0_0_30px_hsl(var(--primary)/0.8)] transition-all duration-300 group/btn"
              data-testid="button-demo"
            >
              <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 group-hover/btn:scale-110 transition-transform" />
              Live Demo
            </Button>
          )}
          {githubUrl && (
            <Button
              size="sm"
              variant="outline"
              onClick={handleGithubClick}
              className="flex-1 border-2 border-primary/40 hover:border-primary hover:bg-primary/20 hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-all duration-300 group/btn"
              data-testid="button-github"
            >
              <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 group-hover/btn:scale-110 transition-transform" />
              Code
            </Button>
          )}
        </CardFooter>

        {/* Animated corner accents */}
        <motion.div
          className="absolute top-0 left-0 w-20 h-20"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
        >
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent" />
          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-primary to-transparent" />
        </motion.div>

        <motion.div
          className="absolute bottom-0 right-0 w-20 h-20"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
        >
          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-secondary to-transparent" />
          <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-secondary to-transparent" />
        </motion.div>

        {/* Particles on hover */}
        {isHovered && [...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              y: [0, -30],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeOut',
            }}
          />
        ))}

        {/* Rotating glow orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-2xl pointer-events-none"
          animate={{
            x: isHovered ? ['-50%', '50%', '-50%'] : '-50%',
            y: isHovered ? ['-50%', '50%', '-50%'] : '-50%',
            scale: isHovered ? [1, 1.5, 1] : 1,
            opacity: isHovered ? [0.3, 0.6, 0.3] : 0.2,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </Card>
    </motion.div>
  );
}
