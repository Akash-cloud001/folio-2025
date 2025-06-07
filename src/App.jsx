import { useState } from "react";
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

function App() {
  useLenisSmoothScroll()
  const [count, setCount] = useState(0);
  const location = useLocation();

  return (
    <main className="main-container pb-4">
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </AnimatePresence>
      <Footer />

      {/* <section className="fixed z-50 min-w-fit right-8 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 bottom-6">
        <FloatingDock />
      </section> */}
    </main>
  );
}

export default App;
