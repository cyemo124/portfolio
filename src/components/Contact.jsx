import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Contact.css";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
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

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);

    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-container"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 variants={fadeUp}>Let's Connect</motion.h2>

        <motion.p className="section-intro" variants={fadeUp}>
          Interested in collaborating or want to chat about development?
        </motion.p>

        <div className="contact-content">
          {/* LEFT SIDE */}
          <motion.div className="contact-info" variants={fadeUp}>
            {[
              {
                title: "Email",
                value: "cyemo21@gmail.com",
                link: "mailto:cyemo21@gmail.com",
              },
              {
                title: "GitHub",
                value: "github.com/cyemo124",
                link: "https://github.com/cyemo124",
              },
              {
                title: "LinkedIn",
                value: "linkedin.com/in/MomohChristopher",
                link: "https://www.linkedin.com/in/momoh-christopher-404854305",
              },
            ].map((item, i) => (
              <motion.div key={i} className="info-item" whileHover={{ x: 5 }}>
                <h3>{item.title}</h3>
                <a
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  {item.value}
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* FORM */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            variants={fadeUp}
          >
            {["name", "email"].map((field, i) => (
              <motion.div
                key={i}
                className="form-group"
                whileFocus={{ scale: 1.01 }}
              >
                <label htmlFor={field}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <motion.input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  placeholder={
                    field === "name" ? "Your name" : "your.email@example.com"
                  }
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>
            ))}

            <motion.div className="form-group">
              <label htmlFor="message">Message</label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your opportunity..."
                rows="5"
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>

            <motion.button
              type="submit"
              className="btn btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>

            <AnimatePresence>
              {submitted && (
                <motion.p
                  className="success-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  Message sent! I'll get back to you soon.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
