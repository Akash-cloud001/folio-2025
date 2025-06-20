// import React, { useEffect } from "react";
// import Lenis from "lenis";

// const useLenisSmoothScroll = () => {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2, // Control scroll speed
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function for smoothness
//       smooth: true,
//     });

//     // Request animation frame to update the scroll position
//     const raf = (time) => {
//       lenis.raf(time); // Update the scroll position
//       requestAnimationFrame(raf); // Recursively request animation frame
//     };

//     requestAnimationFrame(raf); // Start the loop

//     // Update the scroll position when the scroll event triggers
//     lenis.on("scroll", () => {
//       // You can update any other state here or trigger effects based on scroll
//     });

//     return () => {
//       lenis.destroy(); // Cleanup Lenis on unmount
//     };
//   }, []);
// };

// export default useLenisSmoothScroll;


import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

const useLenisSmoothScroll = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Create Lenis instance
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false, // Disable smooth scroll on touch devices to avoid conflicts
      touchMultiplier: 2, // Adjust touch sensitivity
    });

    lenisRef.current = lenis;

    // Animation frame function
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the animation loop
    requestAnimationFrame(raf);

    // Optional: Handle scroll events
    const handleScroll = (e) => {
      // You can add custom scroll handling here
      // console.log('Scroll position:', e.scroll);
    };

    lenis.on("scroll", handleScroll);

    // Cleanup function
    return () => {
      lenis.off("scroll", handleScroll); // Remove event listener
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Return the lenis instance for external use
  return lenisRef.current;
};

export default useLenisSmoothScroll;