import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, Trophy, Star, Target } from "lucide-react";
import FloatingShapes from "./FloatingShapes";

const achievements = [
  {
    icon: Trophy,
    title: "TECH QUIZ WINNER",
    description:
      "Participated in the Tech Quiz competition at REFRESHKO(Tech Fest) , testing knowledge across cutting-edge technologies and current trends. Enhanced quick-thinking and problem-solving skills under competitive conditions.",
    year: "2025",
    color: "primary",
  },
  {
    icon: Star,
    title: "SIH Internal Hackathon 2025",
    description:
      "Participated in the SIH Internal Hackathon, collaborating with a team to build innovative solutions under tight deadlines. Gained hands-on experience in problem-solving, rapid prototyping, and teamwork.",
    year: "2025",
    color: "primary",
  },
];

export default function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="achievements"
      ref={ref}
      className="relative py-24 lg:py-32 bg-muted/30 overflow-hidden"
    >
      <FloatingShapes count={10} className="opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
            Achievements
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"
            style={{
              boxShadow: "0 0 20px hsl(var(--primary) / 0.5)",
            }}
          />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milestones and recognitions that mark my journey of continuous
            learning and excellence.
          </p>
        </motion.div>

        <div className="flex gap-10">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30, rotateY: -30 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{
                y: -15,
                rotateY: 5,
                scale: 1.05,
              }}
              className="group perspective-1000"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-testid={`achievement-${index}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative p-6 rounded-xl bg-card/80 backdrop-blur-md border-2 border-primary/30 h-full transform-gpu transition-all duration-300 group-hover:border-primary overflow-hidden">
                {/* Bright animated gradient on hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    background: [
                      `linear-gradient(135deg, hsl(var(--${
                        achievement.color
                      }) / 0.15), hsl(var(--${
                        achievement.color === "primary"
                          ? "secondary"
                          : "primary"
                      }) / 0.15))`,
                      `linear-gradient(225deg, hsl(var(--${
                        achievement.color === "primary"
                          ? "secondary"
                          : "primary"
                      }) / 0.15), hsl(var(--${achievement.color}) / 0.15))`,
                      `linear-gradient(135deg, hsl(var(--${
                        achievement.color
                      }) / 0.15), hsl(var(--${
                        achievement.color === "primary"
                          ? "secondary"
                          : "primary"
                      }) / 0.15))`,
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Bright glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  animate={
                    hoveredIndex === index
                      ? {
                          boxShadow: [
                            `0 0 40px hsl(var(--${achievement.color}) / 0.4), inset 0 0 40px hsl(var(--${achievement.color}) / 0.2)`,
                            `0 0 70px hsl(var(--${achievement.color}) / 0.7), inset 0 0 70px hsl(var(--${achievement.color}) / 0.4)`,
                            `0 0 40px hsl(var(--${achievement.color}) / 0.4), inset 0 0 40px hsl(var(--${achievement.color}) / 0.2)`,
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <div className="relative space-y-4">
                  {/* 3D rotating icon */}
                  <motion.div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br from-${
                      achievement.color
                    } to-${
                      achievement.color === "primary" ? "secondary" : "primary"
                    } flex items-center justify-center mx-auto relative`}
                    animate={{
                      rotateY: [0, 360],
                      scale: hoveredIndex === index ? [1, 1.15, 1] : 1,
                    }}
                    transition={{
                      rotateY: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                      boxShadow: `0 15px 40px hsl(var(--${achievement.color}) / 0.5)`,
                    }}
                  >
                    <achievement.icon className="w-10 h-10 text-white drop-shadow-xl" />

                    {/* Orbiting particles */}
                    {hoveredIndex === index &&
                      [...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-2 h-2 rounded-full bg-white`}
                          animate={{
                            rotate: 360,
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.66,
                          }}
                          style={{
                            left: "50%",
                            top: "50%",
                            marginLeft: "-4px",
                            marginTop: "-4px",
                            transformOrigin: `${30 + i * 5}px 0px`,
                          }}
                        />
                      ))}
                  </motion.div>

                  <div className="text-center space-y-2">
                    <motion.div
                      className={`text-sm font-semibold text-${achievement.color}`}
                      animate={
                        hoveredIndex === index
                          ? {
                              textShadow: [
                                `0 0 10px hsl(var(--${achievement.color}))`,
                                `0 0 20px hsl(var(--${achievement.color}))`,
                                `0 0 10px hsl(var(--${achievement.color}))`,
                              ],
                            }
                          : {}
                      }
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {achievement.year}
                    </motion.div>
                    <h3 className="text-lg font-bold group-hover:text-primary group-hover:drop-shadow-[0_0_15px_hsl(var(--primary))] transition-all duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {achievement.description}
                    </p>
                  </div>
                </div>

                {/* Corner accents */}
                <motion.div
                  className="absolute top-0 right-0 w-16 h-16"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                >
                  <div
                    className={`absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-${achievement.color} to-transparent`}
                  />
                  <div
                    className={`absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-${achievement.color} to-transparent`}
                  />
                </motion.div>

                {/* Floating glow orb */}
                <motion.div
                  className={`absolute w-24 h-24 rounded-full bg-gradient-to-br from-${achievement.color}/30 to-transparent blur-2xl pointer-events-none`}
                  animate={
                    hoveredIndex === index
                      ? {
                          x: ["-50%", "50%", "-50%"],
                          y: ["-50%", "50%", "-50%"],
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0.7, 0.3],
                        }
                      : {}
                  }
                  style={{
                    top: "50%",
                    left: "50%",
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Particle effects */}
                {hoveredIndex === index &&
                  [...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1.5 h-1.5 rounded-full bg-${achievement.color}`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        boxShadow: `0 0 10px hsl(var(--${achievement.color}))`,
                      }}
                      animate={{
                        y: [0, -40],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeOut",
                      }}
                    />
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
