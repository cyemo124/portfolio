import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    hidden: { x: "100%" },
    show: {
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
    exit: {
      x: "100%",
      transition: { duration: 0.3 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 20 },
    show: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <motion.header
      className={`header ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="header-container">
        <div className="logo">
          <h1>Christopher Momoh</h1>
          <p className="tagline">Full-Stack Developer</p>
        </div>

        {/* HAMBURGER */}
        <button className="menu-toggle" onClick={toggleMenu}>
          <motion.div
            animate={isMenuOpen ? "open" : "closed"}
            className="hamburger"
          >
            <span />
            <span />
            <span />
          </motion.div>
        </button>

        {/* DESKTOP NAV */}
        <nav className="nav desktop">
          {["Projects", "Skills", "Contact"].map((item, i) => (
            <motion.a
              key={i}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2 }}
              style={{
                color: scrolled ? "#e2e8f0" : "#94a3b8", // 👈 dark at top, light when scrolled
                fontWeight: 500,
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="menu-backdrop"
              onClick={toggleMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* PANEL */}
            <motion.nav
              className="mobile-menu"
              variants={menuVariants}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <motion.button
                className="close-menu"
                onClick={toggleMenu}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
              {["Projects", "Skills", "Contact"].map((item, i) => (
                <motion.a
                  key={i}
                  href={`#${item.toLowerCase()}`}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="show"
                  onClick={toggleMenu}
                >
                  {item}
                </motion.a>
              ))}

              <motion.a
                href="https://github.com/cyemo124"
                target="_blank"
                rel="noopener noreferrer"
                custom={3}
                variants={linkVariants}
                initial="hidden"
                animate="show"
              >
                GitHub
              </motion.a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
