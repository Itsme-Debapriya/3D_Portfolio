import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code2, Palette, Rocket, Sparkles, Zap, Box } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(springY, [-300, 300], [20, -20]);
  const rotateY = useTransform(springX, [-300, 300], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);

      setMousePosition({
        x: (e.clientX - centerX) / rect.width,
        y: (e.clientY - centerY) / rect.height,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatingIcons = [
    {
      Icon: Code2,
      color: "primary",
      position: { top: "10%", right: "5%" },
      delay: 0,
    },
    {
      Icon: Palette,
      color: "secondary",
      position: { top: "30%", left: "8%" },
      delay: 0.5,
    },
    {
      Icon: Sparkles,
      color: "primary",
      position: { bottom: "25%", right: "10%" },
      delay: 1,
    },
    {
      Icon: Zap,
      color: "secondary",
      position: { bottom: "15%", left: "5%" },
      delay: 1.5,
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <motion.div
            variants={itemVariants}
            className="relative order-2 lg:order-1"
          >
            <motion.div
              className="relative w-full max-w-md mx-auto aspect-square"
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Main 3D Container */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 via-secondary/20 to-primary/30 backdrop-blur-sm border-2 border-primary/40"
                animate={{
                  boxShadow: [
                    "0 0 30px hsl(var(--primary) / 0.4), 0 0 60px hsl(var(--secondary) / 0.2)",
                    "0 0 60px hsl(var(--secondary) / 0.4), 0 0 90px hsl(var(--primary) / 0.2)",
                    "0 0 30px hsl(var(--primary) / 0.4), 0 0 60px hsl(var(--secondary) / 0.2)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Inner rotating card */}
              <motion.div
                className="absolute inset-8 rounded-xl bg-card/90 backdrop-blur-md border-2 border-primary/30 flex items-center justify-center overflow-hidden"
                style={{
                  transform: `translateZ(50px)`,
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  boxShadow: [
                    "0 10px 40px rgba(0,0,0,0.3)",
                    "0 20px 60px rgba(0,0,0,0.4)",
                    "0 10px 40px rgba(0,0,0,0.3)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 opacity-20"
                  animate={{
                    background: [
                      "linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)))",
                      "linear-gradient(135deg, hsl(var(--secondary)), hsl(var(--primary)))",
                      "linear-gradient(225deg, hsl(var(--primary)), hsl(var(--secondary)))",
                      "linear-gradient(315deg, hsl(var(--secondary)), hsl(var(--primary)))",
                      "linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)))",
                    ],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />

                {/* Multi-layer rotating circles */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="relative w-56 h-56"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0"
                      style={{
                        transform: `rotateZ(${i * 45}deg) translateZ(${
                          i * 10
                        }px)`,
                      }}
                    >
                      <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
                      <div
                        className={`absolute inset-${
                          i * 4
                        } rounded-full border-4 border-secondary/20`}
                      />
                    </motion.div>
                  ))}

                  {/* Center icon with 3D effect */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    animate={{
                      rotateY: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotateY: {
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Box className="w-20 h-20 text-primary drop-shadow-[0_0_20px_hsl(var(--primary))]" />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Floating 3D orbs */}
              <motion.div
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-primary via-primary/80 to-secondary flex items-center justify-center"
                style={{
                  transform: `translateZ(80px)`,
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  y: [0, -20, 0],
                  rotateY: [0, 180, 360],
                  boxShadow: [
                    "0 10px 40px hsl(var(--primary) / 0.6)",
                    "0 20px 60px hsl(var(--primary) / 0.8)",
                    "0 10px 40px hsl(var(--primary) / 0.6)",
                  ],
                }}
                transition={{
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotateY: { duration: 4, repeat: Infinity, ease: "linear" },
                  boxShadow: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <Rocket className="w-16 h-16 text-white drop-shadow-2xl" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-br from-secondary via-secondary/80 to-primary flex items-center justify-center"
                style={{
                  transform: `translateZ(60px)`,
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  y: [0, 15, 0],
                  rotateX: [0, 180, 360],
                  boxShadow: [
                    "0 10px 40px hsl(var(--secondary) / 0.6)",
                    "0 20px 60px hsl(var(--secondary) / 0.8)",
                    "0 10px 40px hsl(var(--secondary) / 0.6)",
                  ],
                }}
                transition={{
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  },
                  rotateX: { duration: 4, repeat: Infinity, ease: "linear" },
                  boxShadow: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  },
                }}
              >
                <Palette className="w-12 h-12 text-white drop-shadow-2xl" />
              </motion.div>

              {/* Floating icons around the main container */}
              {floatingIcons.map(({ Icon, color, position, delay }, index) => (
                <motion.div
                  key={index}
                  className={`absolute w-12 h-12 rounded-lg bg-gradient-to-br from-${color} to-${
                    color === "primary" ? "secondary" : "primary"
                  } flex items-center justify-center`}
                  style={{
                    ...position,
                    transform: `translateZ(${30 + index * 10}px)`,
                    transformStyle: "preserve-3d",
                  }}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      `0 5px 20px hsl(var(--${color}) / 0.5)`,
                      `0 10px 40px hsl(var(--${color}) / 0.8)`,
                      `0 5px 20px hsl(var(--${color}) / 0.5)`,
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay,
                  }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
              ))}

              {/* Particle effects */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-primary"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    y: [0, -50],
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

          <motion.div
            variants={itemVariants}
            className="space-y-6 order-1 lg:order-2"
          >
            <div className="space-y-4">
              <motion.h2
                variants={itemVariants}
                className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent"
              >
                About Me
              </motion.h2>
              <motion.div
                variants={itemVariants}
                className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                animate={{
                  width: ["80px", "120px", "80px"],
                  boxShadow: [
                    "0 0 10px hsl(var(--primary) / 0.5)",
                    "0 0 20px hsl(var(--secondary) / 0.8)",
                    "0 0 10px hsl(var(--primary) / 0.5)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I'm a motivated and detail-oriented full-stack developer with
              hands-on experience in building modern, dynamic web applications.
              With a strong foundation in HTML, CSS, JavaScript, SCSS, and the
              MERN stack, I enjoy transforming ideas into clean, functional, and
              visually appealing digital experiences. I’m passionate about
              writing efficient, maintainable code and approaching every project
              with creativity and precision.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              My goal is to blend aesthetic appeal with solid technical
              execution, ensuring that every solution I create is both intuitive
              and high-performing. I’m driven by continuous learning and staying
              aligned with current industry trends, allowing me to contribute
              meaningfully to innovative, forward-thinking technology projects.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-6"
            >
              {[
                { label: "Years Experience", value: "2+", icon: Zap },
                { label: "Projects Completed", value: "10+", icon: Box },
                // { label: "Happy Clients", value: "30+", icon: Sparkles },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="relative text-center p-6 rounded-xl bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 backdrop-blur-sm overflow-hidden group"
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                    borderColor: "hsl(var(--primary))",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  data-testid={`stat-${stat.label
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {/* Bright hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      background: [
                        "linear-gradient(135deg, hsl(var(--primary) / 0.3), hsl(var(--secondary) / 0.3))",
                        "linear-gradient(225deg, hsl(var(--secondary) / 0.3), hsl(var(--primary) / 0.3))",
                        "linear-gradient(135deg, hsl(var(--primary) / 0.3), hsl(var(--secondary) / 0.3))",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  <motion.div
                    className="relative"
                    animate={{
                      rotateY: [0, 360],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary group-hover:text-secondary transition-colors drop-shadow-[0_0_10px_hsl(var(--primary))] group-hover:drop-shadow-[0_0_20px_hsl(var(--secondary))]" />
                  </motion.div>

                  <div className="relative text-3xl font-bold text-primary group-hover:text-secondary transition-colors group-hover:drop-shadow-[0_0_10px_hsl(var(--secondary))]">
                    {stat.value}
                  </div>
                  <div className="relative text-sm text-muted-foreground mt-1 group-hover:text-foreground transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
