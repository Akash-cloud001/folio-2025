
import { motion } from 'framer-motion';
import React from 'react';
const transition = (OgComp) => {
  return (props) => (
    <>
      {/* <motion.div
        initial={{ 
          filter: "blur(0px)", 
          scale: 1, 
          opacity: 1 
        }}
        animate={{ 
          filter: "blur(0px)", 
          scale: 1, 
          opacity: 1 
        }}
        exit={{ 
          filter: "blur(10px)", 
          scale: 0.9, 
          opacity: 0.8 
        }}
        transition={{ 
          duration: 0.6, 
          ease: [0.22, 1, 0.26, 1] 
        }}
        className="page-wrapper"
      >
        <OgComp {...props} />
      </motion.div> */}
      <OgComp />
      <motion.div
        className='slide-in'
        initial={{scaleY:0}}
        animate={{scaleY:0}}
        exit={{scaleY: 1}}
        transition={{duration: 3, ease:[0.22, 1, 0.36, 1]}}
      />
      <motion.div
        className='slide-out'
        initial={{scaleY:1}}
        animate={{scaleY:0}}
        exit={{scaleY: 0}}
        transition={{duration: 3, ease:[0.22, 1, 0.36, 1]}}
      />

    </>
  );
};

export default transition;