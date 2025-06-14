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
import Project from "./Pages/Project"
import Footer from "./Components/Footer";
import Works from "./Pages/Works";

function App() {
  useLenisSmoothScroll()
  const [count, setCount] = useState(0);
  const [isFooter, setIsFooter] = useState(false);
  const location = useLocation();
  useEffect(() => {

    /**
     * if location.pathname is '/' -> CLICKS should work normally
     * however if are at '/blogs' or '/(-path-name-)' and we click any non-page item 
     * then we need to redirect to the '/' then scrolls to the dedicated section smoothly
     */


    if(location.pathname === "/blogs"){
      setIsFooter(false);
    }else{
      setIsFooter(true);
    }
    console.log(location, " :: location")
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [location.pathname]);
  return (
    <main className="main-container pb-4  mx-auto">
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/my-works" element={<Works />} />
          <Route path="/my-works/:id" element={<Project />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </AnimatePresence>
      {isFooter && <Footer />}

      {/* <section className="fixed z-50 min-w-fit right-8 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 bottom-6">
        <FloatingDock />
      </section> */}
    </main>
  );
}

export default App;
