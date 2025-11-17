import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, Sparkles } from "lucide-react";

const experiences = [
  {
    role: "IBM Internship Emerging Technologies (AI & Cloud)",
    company: "Edunet Foundation (IBM).",
    duration: "July 2024 - August 2024",
    achievements: [
      "4-week Internship, leveraging SkillsBuild & IBM Cloud Platform in Emerging Technologies (AI & Cloud)",
      "IBM Cloud (Watson Studio) + Data Analytics",
      "Model Building (Algorithm Explanation) Auto AI + Assignment",
      "NLP/GenAI/LLM mode",
    ],
  },
  {
    role: "Data Visualisation (CERTIFICATION)",
    company: "Forage (TATA)",
    duration: "December 2024",
    achievements: [
      "Data Visualisation: Transforming Data into Actionable Insights",
      "Exploring data visualization techniques to present complex data in an understandable format.",
      "Hands-on experience with tools and libraries for effective data visualization.",
    ],
  },
  {
    role: "Generative AI (CERTIFICATION)",
    company: "GUVI",
    duration: "September 2024",
    achievements: [
      "Generative AI: Building Intelligent Systems with Advanced Algorithms",
      "Exploring the capabilities of Generative AI in creating innovative solutions.",
      "Hands-on experience with AI models and their applications in real-world scenarios.",
    ],
  },
  {
    role: "Introduction to Git and GitHub (CERTIFICATION)",
    company: "COURSERA",
    duration: "January 2024 - November 2024",
    achievements: [
      "Introduction to Git and GitHub: Mastering Version Control for Collaborative Development",
      "Learning the fundamentals of Git and GitHub for effective version control.",
      "Hands-on experience with branching, merging, and collaboration in software projects.",
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      {/* Animated vertical line particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-px h-20 bg-gradient-to-b from-transparent via-primary to-transparent"
          style={{
            left: `${10 + i * 10}%`,
            top: 0,
          }}
          animate={{
            y: ["0%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "linear",
          }}
        />
      ))}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
            Experience
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
            My professional journey through various roles and companies,
            building impactful solutions.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated timeline */}
          <motion.div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary rounded-full"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              transformOrigin: "top",
              boxShadow: "0 0 20px hsl(var(--primary) / 0.5)",
            }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col gap-8`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                data-testid={`experience-${index}`}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  } text-left`}
                >
                  <motion.div
                    className="inline-block p-6 rounded-xl bg-card/80 backdrop-blur-md border-2 border-primary/30 w-full relative overflow-hidden group"
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      rotateY: index % 2 === 0 ? 2 : -2,
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Bright animated gradient on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        background: [
                          "linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--secondary) / 0.15))",
                          "linear-gradient(225deg, hsl(var(--secondary) / 0.15), hsl(var(--primary) / 0.15))",
                          "linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--secondary) / 0.15))",
                        ],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />

                    {/* Bright glow on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-xl pointer-events-none"
                      animate={
                        hoveredIndex === index
                          ? {
                              boxShadow: [
                                "0 0 40px hsl(var(--primary) / 0.4), inset 0 0 40px hsl(var(--primary) / 0.2)",
                                "0 0 60px hsl(var(--primary) / 0.6), inset 0 0 60px hsl(var(--secondary) / 0.3)",
                                "0 0 40px hsl(var(--primary) / 0.4), inset 0 0 40px hsl(var(--primary) / 0.2)",
                              ],
                            }
                          : {}
                      }
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    <div className="relative space-y-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary group-hover:drop-shadow-[0_0_15px_hsl(var(--primary))] transition-all duration-300">
                        {exp.role}
                      </h3>
                      <div className="text-primary font-semibold drop-shadow-[0_0_10px_hsl(var(--primary)/0.3)]">
                        {exp.company}
                      </div>
                      <div
                        className={`text-sm text-muted-foreground flex items-center gap-2 ${
                          index % 2 === 0
                            ? "md:justify-end"
                            : "md:justify-start"
                        } justify-start group-hover:text-foreground transition-colors`}
                      >
                        <Briefcase className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.2 + i * 0.1 }}
                          >
                            <Sparkles className="w-3 h-3 text-primary mt-1 flex-shrink-0 drop-shadow-[0_0_5px_hsl(var(--primary))]" />
                            <span
                              className={`${
                                index === 0 ? "text-right w-full" : ""
                              }`}
                            >
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Corner accents */}
                    <motion.div
                      className="absolute top-0 left-0 w-16 h-16"
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                      }}
                    >
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent" />
                      <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-primary to-transparent" />
                    </motion.div>

                    {/* Floating particles on hover */}
                    {hoveredIndex === index &&
                      [...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1.5 h-1.5 rounded-full bg-primary"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            boxShadow: "0 0 10px hsl(var(--primary))",
                          }}
                          animate={{
                            y: [0, -30],
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
                  </motion.div>
                </div>

                {/* 3D animated timeline dot */}
                <motion.div
                  className="absolute left-0 md:left-1/2 -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-background relative"
                    animate={{
                      scale: hoveredIndex === index ? [1, 1.3, 1] : 1,
                      boxShadow:
                        hoveredIndex === index
                          ? [
                              "0 0 20px hsl(var(--primary) / 0.6)",
                              "0 0 40px hsl(var(--secondary) / 0.8)",
                              "0 0 20px hsl(var(--primary) / 0.6)",
                            ]
                          : "0 0 10px hsl(var(--primary) / 0.4)",
                    }}
                    transition={{
                      scale: { duration: 1, repeat: Infinity },
                      boxShadow: { duration: 2, repeat: Infinity },
                    }}
                    whileHover={{
                      rotateY: 360,
                      transition: { duration: 0.6 },
                    }}
                  >
                    {/* Pulsing ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary/50"
                      animate={{
                        scale: [1, 2, 2],
                        opacity: [0.5, 0, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: index * 0.5,
                      }}
                    />
                  </motion.div>
                </motion.div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
