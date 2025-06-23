"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Miconsulta.app",
    description:
      "Aplicacion desarrollada para publico profesional dedicado a la salud de las personas",
    image: "/Miconsulta.png",
    tags: ["React", "Node.js", "TypeScript"],
    link: "https://www.miconsulta.app/",
  },
  {
    id: 2,
    title: "Solutec",
    description: "Landing page de un emprendimiento de soluciones tecnicas",
    image: "/Solutec.png",
    tags: ["Next.js", "TypeScript", "JavaScript"],
    link: "https://www.solutecjuy.com/",
  },
  {
    id: 3,
    title: "Donna Lee",
    description: "E-commerce Moderno de moda femenina",
    image: "/DonnaLee.png",
    tags: ["php", "Node.js", "Css"],
    link: "https://donnalee.com.ar/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      className="work-card-animated"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
    >
      <div className="work-card-image-container">
        <motion.img
          src={project.image}
          alt={project.title}
          className="work-card-image"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        <motion.div
          className="work-card-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ justifyContent: "center" }}
        >
          <motion.a
            href={project.link}
            className="work-card-action-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15,3 21,3 21,9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      <div className="work-card-content">
        <motion.h3
          className="work-card-title"
          animate={{
            color: isHovered ? "var(--primary)" : "var(--text-color)",
          }}
          transition={{ duration: 0.3 }}
        >
          {project.title}
        </motion.h3>

        <p className="work-card-description">{project.description}</p>

        <div className="work-card-tags">
          {project.tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              className="work-card-tag"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.1 * tagIndex,
                duration: 0.3,
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "var(--primary)",
                color: "white",
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>

      <motion.div
        className="work-card-border"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.95,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const SectionHeader = ({ isInView }) => {
  return (
    <motion.div
      className="work-section-header"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="work-section-badge"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 3,
        }}
      >
        <span>Featured Work</span>
      </motion.div>

      <motion.h2
        className="work-section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Selected{" "}
        <motion.span
          className="work-section-title-gradient"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        >
          Projects
        </motion.span>
      </motion.h2>

      <motion.p
        className="work-section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        A curated collection of projects that showcase innovation, creativity,
        and technical excellence.
      </motion.p>
    </motion.div>
  );
};

const FloatingElements = () => {
  return (
    <>
      <motion.div
        className="floating-element floating-element-1"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="floating-element floating-element-2"
        animate={{
          y: [0, 20, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="floating-element floating-element-3"
        animate={{
          x: [0, 15, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </>
  );
};

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="work-section section-padding" ref={ref}>
      <motion.div
        className="work-section-bg"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(247, 110, 58, 0.1), transparent 40%)`,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.2 }}
      />

      <div className="container">
        <SectionHeader isInView={isInView} />

        <motion.div
          className="work-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>

      <FloatingElements />
    </section>
  );
}
