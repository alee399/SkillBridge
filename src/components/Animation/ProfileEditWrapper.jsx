import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, scale: 0.8 }, // Page starts smaller and invisible
  animate: { opacity: 1, scale: 1 },   // Zoom in to normal size
  exit: { opacity: 0, scale: 0.8 },    // Zoom out and fade on exit
};

const ProfileEditWrapper = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
      style={{ height: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export default ProfileEditWrapper;
