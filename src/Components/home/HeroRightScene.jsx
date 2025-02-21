import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { Hologram } from "./Hologram";
import { Center, OrbitControls, useHelper } from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from 'three'


const HeroRightScene = () => {
  
  // const {x,y,z, rx, ry, rz,scale} = useControls('heroleft', {
  //     x: {value: 1.60, min: -10, max: 10, step: 0.01},
  //     y: {value: 0.15, min: -10, max: 10, step: 0.01},
  //     z: {value: 0, min: -10, max: 10, step: 0.01},
  //     rx: {value: 0, min: -Math.PI, max: Math.PI, step: 0.01},
  //     ry: {value: 0, min: -Math.PI, max: Math.PI, step: 0.01},
  //     rz: {value: 1.59, min: -Math.PI, max: Math.PI, step: 0.01},
  //     scale: {value: 13.1, min: 1, max: 20}
  // })
  // const {x,y,z, power} = useControls('pointLight', {
  //     x: {value: 0.10, min: -10, max: 10, step: 0.01},
  //     y: {value: -0.30, min: -10, max: 10, step: 0.01},
  //     z: {value: -1.60, min: -10, max: 10, step: 0.01},
  //     power: {value: 100, min: 0, max: 500}
  // })
  const ref = useRef()

  // useHelper(ref, THREE.PointLightHelper, 0.5, '#00f')
  return (
    <>
      <hemisphereLight skyColor={"#fff"} groundColor={"#fff"} intensity={4} />
        <pointLight
          ref={ref}
          position={[0.10, -0.30, -1.60]} // Centered in the model
          color={"#00f"} // Blue light
          power={500} // Higher power for better intensity
          distance={10} // Adjust range
          decay={10} // Light fading
        />
      <Center>
        {/* <Hologram scale={scale} position={[x,y,z]} rotation={[rx, ry, rz]}  /> */}
        <Hologram
          scale={13.1}
          position={[1.6, 0.15, 0]}
          rotation={[0, 0, 1.59]}
          delay={0}
        />
      </Center>

    </>
  );
};

export default HeroRightScene;
