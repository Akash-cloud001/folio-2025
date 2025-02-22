import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import HeroRightScene from "./HeroRightScene";
import { Headphone } from "./Headphone";
import { Center, OrbitControls } from "@react-three/drei";
const Home = () => {
  return (
    <section className="home-container h-screen w-full flex items-center justify-center">
      <article className="hero-left w-3/4 h-full ff-betatron text-[150px] flex items-start justify-center pl-6 flex-col">
        <div className="flex items-center justify-start">
          <div className="headPhone h-[150px] w-[150px]">
            <Canvas
              gl={{
                powerPreference: "high-performance",
                alpha: false,
                antialias: true,
              }}
            >
            <color attach="background" args={["#0a0a0a"]} />
              <Suspense fallback={null}>
                <Center>
                  <Headphone scale={0.8} />
                </Center>
                <ambientLight intensity={2} color={'white'}/> 
              </Suspense>
            </Canvas>
          </div>
          <span>REATIVE</span>
        </div>
        <p className="-mt-20 text-stroke flex items-center justify-start">
          <span>DEVEL</span> <span>PER</span>
        </p>
      </article>
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
