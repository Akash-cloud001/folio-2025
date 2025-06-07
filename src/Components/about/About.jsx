import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const About = () => {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Create smooth transitions for different sections
  // First 25% (0-50vh): #0a0a0a
  // Middle 50% (50-150vh): #fbfaf3  
  // Last 25% (150-200vh): #0a0a0a
  
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.75, 0.8],
    ["#0a0a0a", "#fbfaf3", "#fbfaf3", "#0a0a0a"]
  )

  return (
    <motion.section 
      ref={containerRef}
      id='about' 
      className='min-h-screen w-full padding-top-nav px-5 sm:px-8 relative'
    >
        <p className='text-4xl sm:text-6xl font-bold border  border-white/20 px-10 py-4 w-max absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          About me
        </p>
    </motion.section>
  )
}

export default About