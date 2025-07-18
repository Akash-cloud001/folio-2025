import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import HeroRightScene from "./HeroRightScene";
import {motion} from 'motion/react'
import Orb from '../Orb/Orb'
import { spring } from "motion";
import DecryptedText from "../ui/DecryptedText";

const Home = () => {
  const [mouseY, setMouseY] = useState('0');

  const handleMouseMove = (e)=>{
    setMouseY(String((e.clientY / window.innerHeight * 180 - 90) * 0.04)+'deg');
  }
  const rotation = (mouseY / window.innerHeight) * 180 - 90;
  return (
    <section onMouseMove={handleMouseMove} className="home-container relative h-dvh w-full flex flex-col-reverse md:flex-row items-start justify-center md:items-center md:justify-center overflow-hidden pt-[120px] sm:pt-[64px] md:pt-0" >
      <article className="hero-left w-full md:w-3/4 h-full ff-betatron flex items-start justify-center pl-2 md:pl-6 flex-col relative z-[1] select-none top-[6%] sm:-top-[25%] -translate-y-1/2 md:translate-y-0  md:top-auto">
        <div className="flex items-center justify-start text-white text-7xl sm:text-[120px] md:text-[100px] lg:text-[120px] xl:text-[150px]">
          <motion.div className="headPhone h-[76px] w-[76px] sm:h-[120px] sm:w-[120px] md:h-[100px] md:w-[100px]  lg:h-[140px]  lg:w-[140px]" style={{rotate: mouseY, transformOrigin:'left center'}} >
            <img
              src="/svgs/headphone.svg"
              alt="headphone"
              className="-rotate-90 h-full w-full"
            />
          </motion.div>
          <DecryptedText text={'REATIVE'} animateOn="hover" speed={100} sequential={true} />
          {/* <span>REATIVE</span> */}
        </div>
        <div className="pl-4 mt-0 text-[55px] text-7xl sm:text-[100px] md:text-[100px] lg:text-[110px] xl:text-[150px] text-stroke flex items-center justify-start">
          <span>DEVEL</span>
          <div className="h-[76px] w-[76px] sm:h-[100px] sm:w-[100px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] relative">
            <Orb
              hoverIntensity={0.5}
              rotateOnHover={true}
              hue={0}
              forceHoverState={false}
            />
          </div>
          <span>PER</span>
        </div>
        <aside className="pl-4 sm:pl-5 mt-2 flex items-center gap-5 sm:gap-6">
        <p className="ff-gs-regular text-white/80">
          Designer + Coder + Vibe Curator = Me
        </p>
      </aside>
      </article>
      <aside id="hero-canvas" className="hero-right relative -top-8 sm:-top-[9%] md:top-auto rotate-90 md:rotate-0 w-[100%] h-[100vw] h-  md:h-dvh md:w-[30%] lg:w-[30%]  xl:w-1/4 ">
        <Canvas
          gl={{
            powerPreference: "high-performance",
            alpha: false,
            antialias: true,
            // stencil: true,
            // depth: true,
          }}
          className="w-full"
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
