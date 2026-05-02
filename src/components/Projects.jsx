import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";

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
    y: 50,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Projects() {
  const projects = [
    {
      id: 1,
      title: "J³ Fitness",
      subtitle: "Gym Management & Member Platform",
      description:
        "Full-stack gym management platform with class booking, trainer profiles, workout tracking, and admin dashboard.",
      problem:
        "Local gyms lack digital tools for class scheduling, trainer management, and member workout tracking — everything runs on paper or scattered apps.",
      solution:
        "Built an all-in-one platform where members book classes, track workouts, manage memberships, and admins handle trainers, payments, and analytics in one place.",
      live: "https://j3fitness.vercel.app",
      coverImage: "/images/j3_img.png",
      tech: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "Node.js",
        "Express.js",
        "MongoDB Atlas",
        "Cloudinary",
        "JWT Auth",
        "Render",
        "Vercel",
      ],
      features: [
        "Role-based auth (member, trainer, admin)",
        "Class booking with capacity tracking",
        "Trainer profiles with face-aware image cropping",
        "Workout routine builder & history",
        "Real-time membership status & streaks",
        "Admin dashboard with analytics",
        "Trainer application & approval system",
        "Responsive mobile-first design",
      ],
      github: "https://github.com/cyemo124/J3fitness",
      status: "Live", // or "Completed" or "In Progress"
    },
    {
      id: 2,
      title: "Givex",
      subtitle: "Money-Gifting & Request Platform",
      description:
        "Full-stack application for sending money and requesting funds from friends.",
      problem:
        "Sending money to friends is complicated; existing platforms require third-party integrations.",
      solution:
        "Built a streamlined platform with real-time notifications and secure fund transfers.",
      live: "https://givex.onrender.com",
      coverImage: "/images/givex_image.png",
      tech: ["Node.js", "Express.js", "MongoDB", "EJS", "REST API"],
      features: [
        "User authentication",
        "Fund requests & transfers",
        "Real-time notifications",
        "Transaction history",
      ],
      github: "https://github.com/yourname/givex",
      status: "In Progress",
    },
    {
      id: 3,
      title: "FIT-TRACK",
      subtitle: "Personal Health & Fitness Dashboard",
      description:
        "Full-stack fitness tracking application with secure user accounts, real-time data visualization, and comprehensive health metrics management.",
      problem:
        "Users lacked a centralized, persistent way to track weight progression, meal intake, and fitness goals across devices without losing their data when switching browsers or clearing cache.",
      solution:
        "Built a secure Next.js application with MongoDB backend, allowing users to create accounts, persist their fitness data, and access personalized dashboards with interactive charts and meal logging from any device.",
      coverImage: "/images/fit_track_img.png",
      tech: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "NextAuth.js",
        "Mongoose",
        "Tailwind CSS",
        "Recharts",
        "shadcn/ui",
      ],
      features: [
        "Secure user authentication (register/login)",
        "Persistent weight tracking with visual charts",
        "Daily meal logging with calorie tracking",
        "Personal dashboard with daily summaries",
        "Goal setting and progress monitoring",
        "Responsive mobile-first design",
        "Data export capabilities",
        "Account settings & profile management",
      ],
      // github: "https://github.com/yourname/fit-track",
      status: "Incoming",
    },
  ];

  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects-container"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        <motion.h2 variants={fadeUp}>My Projects</motion.h2>

        <motion.p className="section-intro" variants={fadeUp}>
          Diverse full-stack projects showcasing my core skills
        </motion.p>

        <motion.div className="projects-grid" variants={container}>
          {projects.map((project) => (
            <motion.div key={project.id} variants={fadeUp}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;
