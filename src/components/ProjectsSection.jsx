import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import FloatingShapes from "./FloatingShapes";

const projects = [
  {
    title: "Mutual Funds MERN Stack Web Application",
    description:
      "A comprehensive mutual funds investment platform built with the MERN stack (MongoDB, Express.js, React, Node.js) and Tailwind CSS.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express.js"],
    demoUrl: "https://mutual-fund-web-app.netlify.app/",
    githubUrl: "https://github.com/Itsme-Debapriya/mutual-funds-app",
  },
  {
    title: "E-Commerece-Book_Store_Web_app",
    description:
      "A full-stack web application for browsing, buying, and managing books. Built to demonstrate clean architecture, responsive design, and seamless user experiences for both customers and admins.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    githubUrl:
      "https://github.com/Itsme-Debapriya/E-Commerece-Book_Store_Web_app",
  },
  {
    title: "Edu Verse (E-learning Website)",
    description:
      "Our Educational Website would provide all the education related stuffs: Notes, Sample Papers, Online Video Lectures and courses to crack competitiveexams like JEE-Main, JEE-Advanced, GATE, etc. Students can clear their doubts by sending their questions to our website. We have added Quizzes for Students who are willing to solve problems on different topics. We have also added Interview questions for students who are preparing for placements.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://itsme-debapriya.github.io/Eduverse-main/",
    githubUrl: "https://github.com/Itsme-Debapriya/Eduverse-main",
  },
  {
    title: "AUREVIA-CONNECTING POTENTIAL. INSPIRING FUTURES",
    description:
      "Aurevia is a unified, real-time community ecosystem designed for seamless interactive communication, social sharing, and administrative control.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    demoUrl: "https://aurevia-user.onrender.com/",
  },
  {
    title: "Theatre ticket booking",
    description:
      "A responsive, interactive web application for selecting and booking theater seats by section with real-time price calculation, theme customization, and persistent user preferences.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://itsme-debapriya.github.io/Theatre_ticket_booking/",
    githubUrl: "https://github.com/Itsme-Debapriya/Theatre_ticket_booking",
  },
  {
    title: "ReviewForge - AI-Powered Customer Feedback Analysis Platform",
    description:
      "ReviewForge is an enterprise-grade, full-stack AI-Powered Customer Feedback Analytics Platform.It transforms raw, unstructured customer reviews, CSV datasets, Excel workbooks, and support comments into real-time actionable sentiment intelligence, emotion breakdowns, and high-level executive insights.",
    technologies: ["Python", "JavaScript", "CSS", "HTML"],
    demoUrl: "https://feedback-analysis-frontend.onrender.com/",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-14 lg:py-20 bg-muted/30 overflow-hidden"
    >
      <FloatingShapes count={4} className="opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl lg:text-5xl font-bold">Featured Projects</h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"
          />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise across various
            technologies and domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
