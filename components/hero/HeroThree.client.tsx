"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

function RotatingShape() {
  // Minimal geometry for performance - luxury without lag
  return (
    <mesh rotation={[0.4, 0.4, 0]}>
      <icosahedronGeometry args={[1.2, 1]} />
      <meshStandardMaterial 
        color="#FF4D4D" 
        roughness={0.35} 
        metalness={0.8} 
      />
    </mesh>
  );
}

export default function HeroThree() {
  return (
    <div className="h-96 overflow-hidden rounded-card border border-graphite-700/30 bg-gradient-to-br from-graphite-700/10 via-onyx to-vermilion/20">
      <Canvas camera={{ position: [0, 0, 4], fov: 40 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[4, 4, 4]} intensity={1.2} />
          <RotatingShape />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
