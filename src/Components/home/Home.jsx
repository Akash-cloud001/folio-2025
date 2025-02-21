import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import HeroRightScene from "./HeroRightScene";
const Home = () => {
  return (
    <section className="home-container h-screen w-full flex items-center justify-center">
      <article className="hero-left w-3/4 h-full"></article>
      <aside id="hero-canvas" className="hero-right w-1/4 h-full ">
        <Canvas
          gl={{
            powerPreference: "high-performance",
            alpha: false,
            antialias: true,
            // stencil: true,
            // depth: true,
          }}
        >
          <color attach="background" args={["#0a0a0a"]} />
          <Suspense fallback={null}>
            <HeroRightScene />
          </Suspense>
        
        </Canvas>
      </aside>
    </section>
  );
};

export default Home;
