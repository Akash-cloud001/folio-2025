import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { FloatingDock } from "./Components/FloatingDock";
import { AnimatePresence } from "motion/react";
import { Route, Routes, useLocation } from "react-router-dom";
import UiLayout from "./Components/UiLayout";
import NavBar from "./Components/NavBar";

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();

  return (
    <main className="main-container pb-4">
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<UiLayout />} />
        </Routes>
      </AnimatePresence>
      <section className="fixed z-50 min-w-fit right-8 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 bottom-8 sm:bottom-10">
        <FloatingDock />
      </section>
    </main>
  );
}

export default App;
