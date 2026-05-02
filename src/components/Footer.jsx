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
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
