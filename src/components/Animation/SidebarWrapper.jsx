import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 1, x: -300 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, y: -20 },
};

const SidebarWrapper = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{ height: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export default SidebarWrapper;