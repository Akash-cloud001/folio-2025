import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { FloatingDock } from "./Components/FloatingDock";
import { AnimatePresence } from "motion/react";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";
import useLenisSmoothScroll from "./hooks/useLenisSmoothScroll";
import Home from "./Pages/HomePage";
import Blogs from "./Pages/Blogs";
import Footer from "./Components/Footer";
import Works from "./Pages/Works";
import InViewAnimation from "./Components/ui/InViewAnimation";
import ScrollProgressBar from "./Components/ui/ScrollProgressBar";

function App() {
  const lenis = useLenisSmoothScroll(); // Get lenis instance
  const [count, setCount] = useState(0);
  const [isFooter, setIsFooter] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Handle footer visibility
    if(location.pathname === "/blogs"){
      setIsFooter(false);
    } else {
      setIsFooter(true);
    }

    // Handle scroll to top with Lenis
    const scrollToTop = () => {
      if (lenis) {
        // Use Lenis scrollTo method
        lenis.scrollTo(0, {
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      } else {
        // Fallback to native scroll if Lenis isn't ready
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    };

    // Add a small delay to ensure route transition is complete
    const timeoutId = setTimeout(scrollToTop, 100);

    return () => clearTimeout(timeoutId);
  }, [location.pathname, lenis]);

  return (
    <main className="main-container pb-4 mx-auto">
      <ScrollProgressBar />
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/my-works" element={<Works />} />
          {/* <Route path="/my-works/:id" element={<Project />} /> */}
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </AnimatePresence>
      {isFooter &&
      <InViewAnimation delay={0.5} yOffset={50} duration={1.25}>
        <Footer />
      </InViewAnimation>
      }

      {/* <section className="fixed z-50 min-w-fit right-8 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 bottom-6">
        <FloatingDock />
      </section> */}
    </main>
  );
}

export default App;