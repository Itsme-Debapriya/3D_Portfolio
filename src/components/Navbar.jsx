import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "@/context/ThemeContext";

const logoLight = "/portfolio_logo.png";
const logoInvert = "/portfolio_logo_invert.png";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme } = useTheme();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);

          const sections = navItems.map((item) => item.href.substring(1));
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= 100 && rect.bottom >= 100) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScroll = (e, href) => {
    e.preventDefault();
    if (href === "#home" || href === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setActiveSection("home");
      setIsOpen(false);
      return;
    }
    const targetId = href.startsWith("#") ? href : `#${href}`;
    const element = document.querySelector(targetId);
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(href.replace("#", ""));
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 md:backdrop-blur-lg ${
          scrolled
            ? "bg-white/45 dark:bg-transparent md:dark:bg-[#121212]/45 border-b border-black/10 md:dark:border-white/10 shadow-md md:dark:shadow-black/30 max-md:bg-transparent max-md:border-transparent max-md:shadow-none"
            : "bg-white/20 dark:bg-transparent md:dark:bg-transparent border-b border-transparent shadow-none"
        }`}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center h-full"
            >
              <a
                href="#home"
                onClick={(e) => smoothScroll(e, "#home")}
                className="flex items-center h-full py-1"
              >
                <img
                  src={theme === "dark" ? logoInvert : logoLight}
                  alt="Logo"
                  className="h-12 w-auto object-contain transition-transform duration-200 hover:scale-105"
                />
              </a>
            </motion.div>

            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => smoothScroll(e, item.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    activeSection === item.href.substring(1)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                  data-testid={`link-${item.name.toLowerCase()}`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </motion.a>
              ))}
              <ThemeToggle />
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setIsOpen(!isOpen)}
                data-testid="button-menu-toggle"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-lg" />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-16 right-0 bottom-0 w-64 bg-card border-l border-primary/20 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => smoothScroll(e, item.href)}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`text-lg font-medium py-2 px-4 rounded-md transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                    data-testid={`link-mobile-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
