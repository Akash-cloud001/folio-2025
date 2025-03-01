import React, { useLayoutEffect, useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { Hologram } from "./Hologram";
import { Center, OrbitControls, useHelper } from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";

const HeroRightScene = () => {
  const [resize, setResize] = useState(10);

  useLayoutEffect(() => {
    function handleResize() {
      const screen = window.innerWidth;
      let newSize = 10;
      if (screen >= 1280) {
        newSize = 12.1;
      } else if (screen >= 1028) {
        newSize = 11.0;
      } else if (screen >= 768) {
        newSize = 9;
      } else {
        newSize = 9;
      }
      setResize(newSize);
    }

    handleResize(); // Initial call to set the correct size

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // const { x, y, z,scale } = useControls("heroleft", {
  //   x: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
  //   y: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
  //   z: { value: 1.59, min: -Math.PI, max: Math.PI, step: 0.01 },
  //   scale: { value: 13.1, min: 1, max: 20 },
  // });
 
  const ref = useRef();

  return (
    <>
      <OrbitControls enableZoom={false} enablePan={false} minDistance={1} maxDistance={100} screenSpacePanning={false} 
      minPolarAngle={Math.PI / 2}  // Prevents looking too far up
      maxPolarAngle={Math.PI / 2} />
      <hemisphereLight skyColor={"#fff"} groundColor={"#fff"} intensity={4} />
      <pointLight
        ref={ref}
        position={[0.1, -0.3, -1.6]} // Centered in the model
        color={"#00f"} // Blue light
        power={500} // Higher power for better intensity
        distance={10} // Adjust range
        decay={10} // Light fading
      />
      <Center>
        <Hologram
          scale={resize}
          position={[1.6, 0.15, 0]}
          rotation={[0, 0, 1.59]}
          delay={0}
        />
      </Center>
    </>
  );
};

export default HeroRightScene;
