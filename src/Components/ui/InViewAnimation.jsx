import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const InViewAnimation = ({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 50,
  once = true,
  className = '',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '0px 0px -50px 0px' });

  const variants = {
    hidden: {
      y: yOffset,
      opacity: 0,
      filter: 'blur(10px)',
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Smooth easing curve
        filter: { duration: duration * 0.8 }, // Slightly faster blur transition
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default InViewAnimation;