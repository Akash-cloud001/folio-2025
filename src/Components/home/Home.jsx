import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import HeroRightScene from "./HeroRightScene";
import {motion} from 'motion/react'
import Orb from '../Orb/Orb'
import { spring } from "motion";

const Home = () => {
  const [mouseY, setMouseY] = useState('0');

  const handleMouseMove = (e)=>{
    setMouseY(String((e.clientY / window.innerHeight * 180 - 90) * 0.04)+'deg');
    console.log(e.clientY / window.innerHeight * 180)
  }
  const rotation = (mouseY / window.innerHeight) * 180 - 90;
  return (
    <section onMouseMove={handleMouseMove} className="home-container h-screen w-full flex items-center justify-center">
      <article className="hero-left w-3/4 h-full ff-betatron text-[150px] flex items-start justify-center pl-6 flex-col relative z-[1] select-none">
        <div className="flex items-center justify-start text-light">
          <motion.div className="headPhone h-[150px] w-[150px]" style={{rotate: mouseY, transformOrigin:'left center'}} >
            <img
              src="/svgs/headphone.svg"
              alt="headphone"
              className="-rotate-90 h-full w-full"
            />
          </motion.div>
          <span>REATIVE</span>
        </div>
        <div className="-mt-20 text-stroke flex items-center justify-start">
          <span>DEVEL</span>
          <div className="h-[150px] w-[150px] relative">
            <Orb
              hoverIntensity={0.5}
              rotateOnHover={true}
              hue={0}
              forceHoverState={false}
            />
          </div>
          <span>PER</span>
        </div>
        <div className="w-4/5 ff-gs-regular text-base flex items-start justify-start text-light opacity-70 pl-6 relative top-16">
          <div className="relative">
            <div className="absolute -left-5 top-[10px] flex gap-1">
              <div className="h-1 w-1 rounded-full bg-light-900"></div>
              <div className="h-1 w-1 rounded-full bg-light-900"></div>
            </div>
            <p className="tracking-wide">A Frontend Developer</p>
            <p className="tracking-wide">specializing in Crafting Interactive</p>
            <p className="tracking-wide">and Immersive Digital Experiences.</p>
          </div>
        </div>
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
