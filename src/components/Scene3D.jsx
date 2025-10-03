import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Float } from '@react-three/drei'

// Enhanced Building Component
function Building({ position, height, color, width = 1, depth = 1 }) {
  const windowsRef = useRef()

  useFrame((state) => {
    if (windowsRef.current) {
      windowsRef.current.children.forEach((window, i) => {
        if (window.material) {
          window.material.emissiveIntensity = 0.1 + Math.sin(state.clock.elapsedTime * 1.5 + i * 0.5) * 0.3
        }
      })
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.01} floatIntensity={0.2}>
      <mesh position={position} castShadow>
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          emissive={color}
          emissiveIntensity={0.1}
        />

        {/* Animated Windows */}
        <group ref={windowsRef}>
          {Array.from({ length: Math.floor(height * 2) }).map((_, floor) => (
            <group key={floor}>
              {/* Front Face Windows */}
              {Array.from({ length: Math.max(2, Math.floor(width * 2)) }).map((_, col) => (
                <mesh
                  key={`front-${col}`}
                  position={[
                    (col - Math.floor(width)) * width * 0.3,
                    -height/2 + floor * 0.5 + 0.3,
                    depth/2 + 0.01
                  ]}
                >
                  <planeGeometry args={[width * 0.2, 0.4]} />
                  <meshStandardMaterial
                    color="#00bcd4"
                    emissive="#00bcd4"
                    emissiveIntensity={0.3}
                    transparent
                    opacity={0.8}
                  />
                </mesh>
              ))}
            </group>
          ))}
        </group>

        {/* Rooftop Element */}
        
      </mesh>
    </Float>
  )
}

// Construction Crane Component
function ConstructionCrane({ position }) {
  const craneRef = useRef()

  useFrame(() => {
    if (craneRef.current) {
      craneRef.current.rotation.y += 0.005
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.02} floatIntensity={0.1}>
      <group ref={craneRef} position={position}>
        {/* Crane Base */}
       
      </group>
    </Float>
  )
}

// Enhanced City Skyline
function CitySkyline() {
  const buildings = useMemo(() => [
    { position: [1, 0.5, -2], height: 6, color: '#f43f75' },
    { position: [4, 1, -1], height: 6, color: '#e11d5f' },
    { position: [6, 0, 0], height: 6, color: '#c31250' },
    { position: [8, 1.5, -1], height: 6, color: '#a11246' },
    { position: [6, 0.5, -2], height: 6, color: '#86075f' },
    { position: [3, 0, -3], height: 6, color: '#f43f75' },
    { position: [5, 0.2, -3], height: 6, color: '#e11d5f' },
  ], [])

  return (
    <group>
      {buildings.map((building, index) => (
        <Building key={index} {...building} />
      ))}
      <ConstructionCrane position={[-8, 0, -1]} />
      <ConstructionCrane position={[9, 0, -2]} />
    </group>
  )
}

// Floating Particles for Atmosphere
function FloatingParticles() {
  const particlesRef = useRef()

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < 30; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 30,
          Math.random() * 15,
          (Math.random() - 0.5) * 30
        ],
        speed: Math.random() * 0.01 + 0.005
      })
    }
    return temp
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.children.forEach((particle, i) => {
        particle.position.y += particles[i].speed
        if (particle.position.y > 15) {
          particle.position.y = -2
        }
        particle.material.opacity = 0.1 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.05
      })
    }
  })

  return (
    <group ref={particlesRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[0.02]} />
          <meshStandardMaterial
            color="#00bcd4"
            emissive="#00bcd4"
            emissiveIntensity={0.5}
            transparent
            opacity={0.1}
          />
        </mesh>
      ))}
    </group>
  )
}

// Main Scene
const Scene3D = () => {
  return (
    <Canvas shadows className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 2, 12]} fov={60} />

      {/* Enhanced Lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight
        position={[15, 15, 10]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />

      {/* Colored Accent Lights */}
      <pointLight position={[-15, 8, -5]} intensity={0.8} color="#e91e63" />
      <pointLight position={[15, 8, -5]} intensity={0.8} color="#2196f3" />
      <pointLight position={[0, 12, 5]} intensity={0.6} color="#00bcd4" />
      <spotLight
        position={[0, 20, 0]}
        intensity={0.5}
        angle={Math.PI / 4}
        penumbra={0.5}
        color="#ffffff"
        castShadow
      />

      {/* Scene Elements */}
      <CitySkyline />
      <FloatingParticles />

      {/* Enhanced Ground with Grid Pattern */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[80, 80]} />
        <meshStandardMaterial
          color="#0a0a0a"
          metalness={0.9}
          roughness={0.3}
          emissive="#001122"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Grid Lines */}
      {Array.from({ length: 17 }).map((_, i) => (
        <group key={i}>
          <mesh position={[(-40 + i * 5), -0.98, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[0.05, 80]} />
            <meshStandardMaterial
              color="#00bcd4"
              emissive="#00bcd4"
              emissiveIntensity={1}
              transparent
              opacity={1}
            />
          </mesh>
          <mesh position={[0, -0.98, (-40 + i * 5)]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
            <planeGeometry args={[0.05, 80]} />
            <meshStandardMaterial
              color="#00bcd4"
              emissive="#00bcd4"
              emissiveIntensity={0.2}
              transparent
              opacity={0.3}
            />
          </mesh>
        </group>
      ))}

      {/* Controls */}
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={1}
        maxPolarAngle={Math.PI / 2.2}
        minPolarAngle={Math.PI / 6}
        maxDistance={20}
        minDistance={10}
      />
    </Canvas>
  )
}

export default Scene3D

