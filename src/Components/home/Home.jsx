import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import HeroRightScene from "./HeroRightScene";
const Home = () => {
  return (
    <section className="home-container h-screen w-full border flex items-center justify-center">
      <article className="hero-left w-3/4 h-full border border-red-400"></article>
      <aside
        id="hero-canvas"
        className="hero-right w-1/4 h-full border border-purple-400"
      >
        <Canvas>
          <Suspense fallback={null}>
            <HeroRightScene />
          </Suspense>
        </Canvas>
      </aside>
    </section>
  );
};

export default Home;
