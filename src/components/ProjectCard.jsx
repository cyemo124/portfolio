import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/ProjectCard.css";

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="project-card"
      layout
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.25 },
      }}
    >
      {/* Image */}
      {project.coverImage && (
        <div className="project-image">
          <motion.img
            src={project.coverImage}
            alt={`${project.title} screenshot`}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      )}

      {/* Header */}
      <div className="project-header">
        <div>
          <h3>{project.title}</h3>
          <p className="subtitle">{project.subtitle}</p>
        </div>

        <motion.span
          className={`status ${project.status.toLowerCase().replace(" ", "-")}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          {project.status}
        </motion.span>
      </div>

      <p className="description">{project.description}</p>

      {/* Tech stack */}
      <div className="tech-stack">
        {project.tech.map((tech, index) => (
          <motion.span
            key={index}
            className="tech-badge"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.1 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>

      {/* Expandable content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="project-details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="detail-section">
              <h4>Problem</h4>
              <p>{project.problem}</p>
            </div>

            <div className="detail-section">
              <h4>Solution</h4>
              <p>{project.solution}</p>
            </div>

            <div className="detail-section">
              <h4>Key Features</h4>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <div className="project-footer">
        <motion.button
          className="btn-expand"
          onClick={() => setIsExpanded(!isExpanded)}
          whileTap={{ scale: 0.95 }}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </motion.button>

        <motion.a
          href={project.live || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="live-btn"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          style={{
            opacity: project.live ? 1 : 0.5,
            pointerEvents: project.live ? "auto" : "none",
          }}
        >
          Live Demo
        </motion.a>

        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          View Code
        </motion.a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
