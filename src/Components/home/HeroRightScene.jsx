import React from 'react'
import { useLoader } from '@react-three/fiber'
import { Hologram } from './Hologram'
import { Center, OrbitControls } from '@react-three/drei'
import { useControls } from "leva"; 
const HeroRightScene = () => {
    // const { xAxis, yAxis, zAxis } = useControls("skyBorg", {
        //   xAxis: { value: 0, min: -10, max: 10, step: 0.01 },
        //   yAxis: { value: 0, min: -10, max: 10, step: 0.01 },
        //   zAxis: { value: 0, min: -10, max: 10, step: 0.01 },
        // });
    // const {x,y,z, rx, ry, rz,scale} = useControls('heroleft', {
    //     x: {value: 1.60, min: -10, max: 10, step: 0.01},
    //     y: {value: 0.15, min: -10, max: 10, step: 0.01},
    //     z: {value: 0, min: -10, max: 10, step: 0.01},
    //     rx: {value: 0, min: -Math.PI, max: Math.PI, step: 0.01},
    //     ry: {value: 0, min: -Math.PI, max: Math.PI, step: 0.01},
    //     rz: {value: 1.59, min: -Math.PI, max: Math.PI, step: 0.01},
    //     scale: {value: 13.1, min: 1, max: 20}
    // })

  return (
    <>
      <hemisphereLight skyColor={"#fff"} groundColor={"#fff"} intensity={4} />
    <Center>
    <pointLight
          position={[1.6, 0.15, 0]}  // Centered in the model
          color={"#00f"}             // Blue light
          power={200}                 // Higher power for better intensity
          distance={2}                 // Adjust range
          decay={2}                    // Light fading
        />
        {/* <Hologram scale={scale} position={[x,y,z]} rotation={[rx, ry, rz]}  /> */}
        <Hologram scale={13.1} position={[1.60, 0.15, 0]} rotation={[0, 0, 1.59]} delay={0} />
    </Center>
    </>
  )
}

export default HeroRightScene