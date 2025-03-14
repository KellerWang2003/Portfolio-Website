import { motion } from 'framer-motion';

const AnimatedTextReveal = ({ children, className, isHovered }) => {
  return (
    <div 
      className={`relative overflow-hidden ${className}`}
    >
      {/* Original text */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isHovered ? '100%' : 0 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        {children}
      </motion.div>

      {/* Clone that slides down */}
      <motion.div
        className="absolute bottom-full left-0"
        initial={{ y: 0 }}
        animate={{ y: isHovered ? '100%' : 0 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedTextReveal;
