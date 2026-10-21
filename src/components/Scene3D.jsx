import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls, Environment } from '@react-three/drei'

function Bottle() {
  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1.2}>
      <group>
        {/* Body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.7, 0.85, 2.2, 32]} />
          <meshStandardMaterial color="#2f6b4f" roughness={0.25} metalness={0.1} transparent opacity={0.9} />
        </mesh>
        {/* Label band */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.72, 0.72, 0.9, 32]} />
          <meshStandardMaterial color="#f4efe4" roughness={0.6} />
        </mesh>
        {/* Neck */}
        <mesh position={[0, 1.45, 0]}>
          <cylinderGeometry args={[0.28, 0.4, 0.7, 24]} />
          <meshStandardMaterial color="#2f6b4f" roughness={0.25} metalness={0.1} transparent opacity={0.9} />
        </mesh>
        {/* Cap */}
        <mesh position={[0, 1.9, 0]}>
          <cylinderGeometry args={[0.34, 0.34, 0.35, 24]} />
          <meshStandardMaterial color="#c89050" roughness={0.4} metalness={0.3} />
        </mesh>
      </group>
    </Float>
  )
}

function Leaves() {
  return (
    <group>
      {[0, 1, 2].map((i) => (
        <Float key={i} speed={2 + i} rotationIntensity={0.8} floatIntensity={1.5}>
          <mesh
            position={[i === 0 ? -2.2 : i === 1 ? 2.4 : 0, i === 2 ? 1.6 : -0.4, i === 1 ? -1 : 0.5]}
            rotation={[0.4, i * 1.2, 0.2]}
          >
            <boxGeometry args={[1.1, 0.05, 0.6]} />
            <meshStandardMaterial color="#5a9c6c" roughness={0.7} />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

export default function Scene3D() {
  return (
    <div className="w-full h-[420px] rounded-3xl overflow-hidden bg-gradient-to-br from-sand to-green-900/10">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 6, 4]} intensity={1.1} />
        <pointLight position={[-4, -2, -4]} intensity={0.6} color="#c89050" />
        <Bottle />
        <Leaves />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
        <Environment preset="studio" />
      </Canvas>
    </div>
  )
}
