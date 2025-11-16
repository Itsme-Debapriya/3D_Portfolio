import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code2, Database, Wrench, Sparkles } from "lucide-react";
import FloatingShapes from "./FloatingShapes";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "React.js",
      "Next.js",
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
    ],
    color: "primary",
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "Python", "Express.js", "MongoDB", "Render", "SQLite"],
    color: "secondary",
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "Vercel", "VSCode", "Postman"],
    color: "primary",
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
    >
      <FloatingShapes count={12} className="opacity-40" />

      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            style={{
              top: `${(i + 1) * 5}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="w-8 h-8 text-primary drop-shadow-[0_0_20px_hsl(var(--primary))]" />
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <Sparkles className="w-8 h-8 text-secondary drop-shadow-[0_0_20px_hsl(var(--secondary))]" />
          </motion.div>
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
            A comprehensive toolkit of modern technologies and frameworks I use
            to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30, rotateX: -20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="relative group perspective-1000"
              onMouseEnter={() => setHoveredCategory(categoryIndex)}
              onMouseLeave={() => setHoveredCategory(null)}
              data-testid={`category-${category.title.toLowerCase()}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                className="p-8 rounded-xl bg-card/80 backdrop-blur-md border-2 border-primary/30 h-full relative overflow-hidden"
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  rotateY: 3,
                  borderColor: "hsl(var(--primary))",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Bright animated gradient on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    background: [
                      `linear-gradient(135deg, hsl(var(--${
                        category.color
                      }) / 0.15), hsl(var(--${
                        category.color === "primary" ? "secondary" : "primary"
                      }) / 0.15))`,
                      `linear-gradient(225deg, hsl(var(--${
                        category.color === "primary" ? "secondary" : "primary"
                      }) / 0.15), hsl(var(--${category.color}) / 0.15))`,
                      `linear-gradient(315deg, hsl(var(--${
                        category.color
                      }) / 0.15), hsl(var(--${
                        category.color === "primary" ? "secondary" : "primary"
                      }) / 0.15))`,
                      `linear-gradient(135deg, hsl(var(--${
                        category.color
                      }) / 0.15), hsl(var(--${
                        category.color === "primary" ? "secondary" : "primary"
                      }) / 0.15))`,
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Bright glow on hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none rounded-xl"
                  animate={
                    hoveredCategory === categoryIndex
                      ? {
                          boxShadow: [
                            `0 0 40px hsl(var(--${category.color}) / 0.4), inset 0 0 40px hsl(var(--${category.color}) / 0.2)`,
                            `0 0 60px hsl(var(--${category.color}) / 0.6), inset 0 0 60px hsl(var(--${category.color}) / 0.3)`,
                            `0 0 40px hsl(var(--${category.color}) / 0.4), inset 0 0 40px hsl(var(--${category.color}) / 0.2)`,
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <div className="relative space-y-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br from-${
                        category.color
                      } to-${
                        category.color === "primary" ? "secondary" : "primary"
                      } flex items-center justify-center relative`}
                      whileHover={{ rotateY: 360 }}
                      transition={{ duration: 0.8 }}
                      style={{
                        transformStyle: "preserve-3d",
                        boxShadow: `0 10px 30px hsl(var(--${category.color}) / 0.4)`,
                      }}
                      animate={{
                        boxShadow:
                          hoveredCategory === categoryIndex
                            ? [
                                `0 10px 30px hsl(var(--${category.color}) / 0.4)`,
                                `0 15px 50px hsl(var(--${category.color}) / 0.7)`,
                                `0 10px 30px hsl(var(--${category.color}) / 0.4)`,
                              ]
                            : `0 10px 30px hsl(var(--${category.color}) / 0.4)`,
                      }}
                    >
                      <category.icon className="w-8 h-8 text-white drop-shadow-lg" />

                      {/* Rotating border */}
                      <motion.div
                        className="absolute inset-0 rounded-xl border-2 border-white/30"
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </motion.div>
                    <h3 className="text-2xl font-bold group-hover:text-primary group-hover:drop-shadow-[0_0_10px_hsl(var(--primary))] transition-all duration-300">
                      {category.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.2 + skillIndex * 0.05,
                        }}
                        whileHover={{
                          scale: 1.1,
                          y: -3,
                          boxShadow: `0 5px 25px hsl(var(--${category.color}) / 0.6)`,
                        }}
                        className={`px-3 py-2 rounded-lg bg-${category.color}/10 text-sm font-medium text-center border-2 border-${category.color}/20 hover:border-${category.color} hover:bg-${category.color}/20 transition-all duration-300 cursor-pointer relative overflow-hidden`}
                        data-testid={`skill-${skill
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        {/* Shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{
                            x: ["-100%", "200%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: "easeInOut",
                          }}
                        />
                        <span className="relative">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating particles */}
                {hoveredCategory === categoryIndex &&
                  [...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1.5 h-1.5 rounded-full bg-${category.color}`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        boxShadow: `0 0 10px hsl(var(--${category.color}))`,
                      }}
                      animate={{
                        y: [0, -50],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeOut",
                      }}
                    />
                  ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
