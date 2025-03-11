import React, { useEffect } from "react";
import Lenis from "lenis";

const useLenisSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Control scroll speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function for smoothness
      smooth: true,
    });

    // Request animation frame to update the scroll position
    const raf = (time) => {
      lenis.raf(time); // Update the scroll position
      requestAnimationFrame(raf); // Recursively request animation frame
    };

    requestAnimationFrame(raf); // Start the loop

    // Update the scroll position when the scroll event triggers
    lenis.on("scroll", () => {
      // You can update any other state here or trigger effects based on scroll
    });

    return () => {
      lenis.destroy(); // Cleanup Lenis on unmount
    };
  }, []);
};

export default useLenisSmoothScroll;
