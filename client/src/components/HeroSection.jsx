import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingShapes from "./FloatingShapes";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      <FloatingShapes count={15} />

      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-secondary/10 pointer-events-none" />

      {/* Animated 3D rotating rings */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className={`absolute inset-0`}
            animate={{
              rotateZ: 360,
              rotateX: i * 30,
            }}
            transition={{
              rotateZ: {
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className={`w-full h-full rounded-full border-2 opacity-30`}
              style={{
                borderColor:
                  i % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--secondary))",
                boxShadow:
                  i % 2 === 0
                    ? "0 0 30px hsl(var(--primary) / 0.5)"
                    : "0 0 30px hsl(var(--secondary) / 0.5)",
                transform: `scale(${1 - i * 0.15})`,
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Floating 3D particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background:
              i % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--secondary))",
            boxShadow: `0 0 10px ${
              i % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--secondary))"
            }`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeOut",
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Animated icon */}
          <motion.div
            className="flex justify-center mb-6"
            animate={{
              rotateY: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotateY: { duration: 4, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <div className="relative">
              <Code2 className="w-20 h-20 text-primary drop-shadow-[0_0_30px_hsl(var(--primary))]" />
              <motion.div
                className="absolute inset-0"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Sparkles className="w-6 h-6 text-secondary absolute -top-2 -right-2 drop-shadow-[0_0_20px_hsl(var(--secondary))]" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--foreground)), hsl(var(--primary)), hsl(var(--secondary)))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Hi, I'm DEBAPRIYA DEY.
            </motion.h1>
            <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground drop-shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
              I develop modern, scalable web systems.{" "}
            </motion.h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Full-stack developer crafting beautiful, functional web applications
            with cutting-edge technologies and a passion for clean code.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 border-2 border-primary/50 hover:border-primary hover:shadow-[0_0_40px_hsl(var(--primary)/0.8)] transition-all duration-300"
                data-testid="button-view-work"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      "linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)))",
                      "linear-gradient(135deg, hsl(var(--secondary)), hsl(var(--primary)))",
                      "linear-gradient(225deg, hsl(var(--primary)), hsl(var(--secondary)))",
                      "linear-gradient(315deg, hsl(var(--secondary)), hsl(var(--primary)))",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-primary/50 hover:border-primary hover:bg-primary/20 hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] transition-all duration-300"
                data-testid="button-contact"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6 pt-8"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/Itsme-Debapriya",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/debapriya-dey-4012a62b5/",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "https://mail.google.com/mail/?view=cm&fs=1&to=debapriyadey03srp@gmail.com&body=I%20want%20to%20connect!",
                label: "Email",
              },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  rotate: 5,
                }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center hover:border-primary hover:bg-primary/20 hover:shadow-[0_0_30px_hsl(var(--primary)/0.8)] transition-all duration-300 group"
                data-testid={`link-${social.label.toLowerCase()}`}
              >
                <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:drop-shadow-[0_0_10px_hsl(var(--primary))] transition-all duration-300" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => scrollToSection("about")}
        whileHover={{ scale: 1.2 }}
      >
        <div className="w-7 h-11 border-2 border-primary/70 rounded-full flex justify-center p-1.5 shadow-[0_0_20px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.8)] transition-shadow">
          <motion.div
            className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_hsl(var(--primary))]"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
