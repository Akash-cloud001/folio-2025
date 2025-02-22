
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Headphone(props) {
  const { nodes, materials } = useGLTF('/models/headphone.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder3_lambert1_0.geometry}
          material={materials.lambert1}
          position={[0, 0.201, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/headphone.glb')