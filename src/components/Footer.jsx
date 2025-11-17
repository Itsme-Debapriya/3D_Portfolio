import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Itsme-Debapriya",
      label: "GitHub",
      color: "primary",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/debapriya-dey-4012a62b5/",
      label: "LinkedIn",
      color: "secondary",
    },
    {
      icon: Mail,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=debapriyadey03srp@gmail.com&body=I%20want%20to%20connect!",
      label: "Email",
      color: "primary",
    },
  ];

  return (
    <footer className="relative bg-card border-t-2 border-primary/30 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      {/* Animated background particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 relative"
          >
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-primary drop-shadow-[0_0_10px_hsl(var(--primary))]" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-[0_0_10px_hsl(var(--primary)/0.3)]">
                Transforming ideas into digital reality.
              </h3>
              <Sparkles className="w-6 h-6 text-secondary drop-shadow-[0_0_10px_hsl(var(--secondary))]" />
            </div>
            <p className="text-muted-foreground">
              Always open to new opportunities and collaborations
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.2,
                  y: -8,
                  rotate: 5,
                }}
                whileTap={{ scale: 0.9 }}
                className="relative w-14 h-14 rounded-full bg-muted/50 backdrop-blur-md border-2 border-primary/30 flex items-center justify-center hover:border-primary group overflow-hidden"
                data-testid={`link-footer-${social.label.toLowerCase()}`}
                onMouseEnter={() => setHoveredSocial(index)}
                onMouseLeave={() => setHoveredSocial(null)}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    background: [
                      `linear-gradient(135deg, hsl(var(--${
                        social.color
                      }) / 0.2), hsl(var(--${
                        social.color === "primary" ? "secondary" : "primary"
                      }) / 0.2))`,
                      `linear-gradient(225deg, hsl(var(--${
                        social.color === "primary" ? "secondary" : "primary"
                      }) / 0.2), hsl(var(--${social.color}) / 0.2))`,
                      `linear-gradient(135deg, hsl(var(--${
                        social.color
                      }) / 0.2), hsl(var(--${
                        social.color === "primary" ? "secondary" : "primary"
                      }) / 0.2))`,
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Bright glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  animate={
                    hoveredSocial === index
                      ? {
                          boxShadow: [
                            `0 0 20px hsl(var(--${social.color}) / 0.4), inset 0 0 20px hsl(var(--${social.color}) / 0.2)`,
                            `0 0 40px hsl(var(--${social.color}) / 0.7), inset 0 0 40px hsl(var(--${social.color}) / 0.4)`,
                            `0 0 20px hsl(var(--${social.color}) / 0.4), inset 0 0 20px hsl(var(--${social.color}) / 0.2)`,
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:drop-shadow-[0_0_10px_hsl(var(--primary))] transition-all duration-300 relative z-10" />

                {/* Rotating border */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary/50 opacity-0 group-hover:opacity-100"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Particles on hover */}
                {hoveredSocial === index &&
                  [...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 rounded-full bg-${social.color}`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        boxShadow: `0 0 5px hsl(var(--${social.color}))`,
                      }}
                      animate={{
                        y: [0, -20],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeOut",
                      }}
                    />
                  ))}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent relative"
          >
            <motion.div
              className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-primary"
              animate={{
                left: ["0%", "100%"],
                boxShadow: [
                  "0 0 10px hsl(var(--primary))",
                  "0 0 20px hsl(var(--secondary))",
                  "0 0 10px hsl(var(--primary))",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ marginTop: "-4px" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center text-sm text-muted-foreground flex items-center gap-2"
          >
            <span>© 2025 Made By DEBAPRIYA DEY</span>
            <Heart className="w-4 h-4 text-primary fill-primary drop-shadow-[0_0_10px_hsl(var(--primary))]" />

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
