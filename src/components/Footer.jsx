import { motion } from "framer-motion";
import "../styles/Footer.css";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="footer"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div className="footer-content" variants={fadeUp}>
        <motion.p
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          &copy; {currentYear} Christopher Momoh. All rights reserved.
        </motion.p>

        {/* Optional links (uncomment if needed) */}
        {/*
        <motion.div className="footer-links" variants={fadeUp}>
          {[
            { name: "GitHub", link: "https://github.com/yourname" },
            { name: "LinkedIn", link: "https://linkedin.com/in/yourname" },
            { name: "Email", link: "mailto:your.email@example.com" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>
        */}
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
