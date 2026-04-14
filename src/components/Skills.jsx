import { motion } from "framer-motion";
import "../styles/Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiExpress, SiMongodb, SiPostman } from "react-icons/si";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const skillItem = {
  hidden: { opacity: 0, y: 10 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
    },
  }),
};

function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "JavaScript", icon: FaJs },
        { name: "React", icon: FaReact },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: SiExpress },
      ],
    },
    {
      category: "Database",
      skills: [{ name: "MongoDB", icon: SiMongodb }],
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", icon: FaGitAlt },
        { name: "GitHub", icon: FaGithub },
        { name: "Postman", icon: SiPostman },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <motion.div
        className="skills-container"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 variants={fadeUp}>My Skills</motion.h2>

        <motion.p className="section-intro" variants={fadeUp}>
          Technical skills built through real project experience
        </motion.p>

        <motion.div className="skills-grid" variants={container}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              variants={fadeUp}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: { duration: 0.25 },
              }}
            >
              <h3>{category.category}</h3>

              <ul>
                {category.skills.map((skill, i) => {
                  const Icon = skill.icon;

                  return (
                    <motion.li
                      key={i}
                      custom={i}
                      variants={skillItem}
                      className="skill-item"
                      whileHover={{
                        scale: 1.08,
                        y: -2,
                      }}
                    >
                      <Icon className="skill-icon" />
                      <span>{skill.name}</span>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Skills;
