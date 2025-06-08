import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ComingSoon = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="pt-16 h-screen bg-background relative overflow-x-hidden flex items-center justify-center">
      {/* Floating Geometric Shapes */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-20 w-20 h-20 border border-violet-500/20 rotate-45"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
        className="absolute top-40 right-32 w-16 h-16 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
        className="absolute bottom-32 left-40 w-12 h-12 border-2 border-amber-400/20 rounded-full"
      />

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 px-6 max-w-4xl mx-auto"
      >
        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary  to-background bg-clip-text text-transparent ff-betatron"
        >
          Coming Soon
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          variants={itemVariants}
          className="text-xl font-light bg-gradient-to-r from-primary  to-background bg-clip-text text-transparent ff-betatron mb-8"
        >
          Blog & Insights
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-lg bg-gradient-to-r from-white/80  to-white/60 bg-clip-text text-transparent  max-w-2xl mx-auto mb-8 leading-relaxed ff-poppins"
        >
          I'm crafting something special - a space where I'll share insights on web development, 
          Three.js experiments, design trends, and the latest in frontend technologies. 
          Stay tuned for deep dives into code, creativity, and innovation.
        </motion.p>

        {/* Feature Pills */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12 "
        >
          {['Development Tips', 'Three.js Tutorials', 'Design Insights', 'Tech Reviews'].map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/70 text-sm font-medium hover:bg-white/10 transition-all duration-300 cursor-default scale-80 sm:scale-100"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
};

export default ComingSoon;