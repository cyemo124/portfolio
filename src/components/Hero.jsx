import { motion } from "framer-motion";
import "../styles/Hero.css";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // premium easing
    },
  },
};

function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 variants={reveal}>Building Real Web Applications</motion.h2>

        <motion.p variants={reveal}>
          I'm a full-stack developer passionate about creating practical,
          user-focused web solutions. I specialize in Node.js, MongoDB, and
          React, with experience building everything from REST APIs to
          full-stack CRUD applications.
        </motion.p>

        <motion.div className="hero-buttons" variants={reveal}>
          <motion.a
            href="#projects"
            className="btn btn-primary"
            whileHover={{
              scale: 1.06,
              y: -2,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.96 }}
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            className="btn btn-secondary"
            whileHover={{
              scale: 1.06,
              y: -2,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.96 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
