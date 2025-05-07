"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import { CanvasLoader } from "@/components";

const Coin = ({ position, rotation, scale }) => {
  const coin = useGLTF("/models/xrp_model.glb");

  return (
    <primitive
      castShadow
      object={coin.scene}
      scale={scale}
      position-x={position[0]}
      position-y={position[1]}
      rotation-x={rotation[0]}
      rotation-y={rotation[1]}
      rotation-z={rotation[2]}
    />
  );
};

const CoinCanvas = () => {
  return (
    <Canvas
      shadows
      // frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotateSpeed={5}
        />
        <ambientLight />
        <directionalLight
          position={[-5, 5, 5]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <Coin position={[0, -0.2, 0]} rotation={[1.5, 0, 0]} scale={2.5} />
        <mesh
          rotation={[-0.5 * Math.PI, 0, 0]}
          position={[0, -0.5, 0]}
          receiveShadow
        >
          <planeGeometry args={[10, 10, 1, 1]} />
          <shadowMaterial transparent opacity={0.2} />
        </mesh>

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default CoinCanvas;

useGLTF.preload("/models/xrp_model.glb");
