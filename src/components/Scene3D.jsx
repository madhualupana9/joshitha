import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Float } from '@react-three/drei'
import * as THREE from 'three'

// Building Component
function Building({ position, height, color }) {
  return (
    <Float speed={1.5} rotationIntensity={0} floatIntensity={0.3}>
      <mesh position={position} castShadow>
        <boxGeometry args={[1, height, 1]} />
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.2}
        />
        {/* Windows */}
        {Array.from({ length: Math.floor(height * 3) }).map((_, i) => (
          <mesh key={i} position={[0.51, -height/2 + i * 0.4 + 0.2, 0]}>
            <planeGeometry args={[0.8, 0.3]} />
            <meshStandardMaterial
              color="#4fc3f7"
              emissive="#4fc3f7"
              emissiveIntensity={Math.random() > 0.5 ? 0.5 : 0.1}
            />
          </mesh>
        ))}
      </mesh>
    </Float>
  )
}

// City Skyline
function CitySkyline() {
  const buildings = useMemo(() => [
    { position: [-4, 0.5, -2], height: 3, color: '#f43f75' },
    { position: [-2, 1, -1], height: 4, color: '#e11d5f' },
    { position: [0, 0, 0], height: 2, color: '#c31250' },
    { position: [2, 1.5, -1], height: 5, color: '#a11246' },
    { position: [4, 0.5, -2], height: 3, color: '#86075f' },
    { position: [-3, 0, -3], height: 2, color: '#f43f75' },
    { position: [3, 0.2, -3], height: 2.5, color: '#e11d5f' },
  ], [])

  return (
    <group>
      {buildings.map((building, index) => (
        <Building key={index} {...building} />
      ))}
    </group>
  )
}



// Main Scene
const Scene3D = () => {
  return (
    <Canvas shadows className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
      
      {/* Lights */}
      <ambientLight intensity={0.3} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1} 
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, 10, -10]} intensity={0.5} color="#f43f75" />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#4fc3f7" />
      
      {/* Scene Elements */}
      <CitySkyline />
      
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial 
          color="#0a0a0a" 
          metalness={0.8}
          roughness={0.4}
        />
      </mesh>
      
      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  )
}

export default Scene3D

