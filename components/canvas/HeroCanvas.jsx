"use client";

import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  Points,
  PointMaterial,
  Preload,
  OrbitControls,
} from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import * as random from "maath/random/dist/maath-random.esm";

const xrp_img = "/xrp.png";

const Stars = (props) => {
  const ref = useRef();
  const [sphere, setSphere] = useState(null);

  const texture = useLoader(TextureLoader, xrp_img);

  useEffect(() => {
    setSphere(() => random.inSphere(new Float32Array(900), { radius: 2 }));
    // console.log(sphere);
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#575757"
          map={texture}
          size={0.035}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const HeroCanvas = () => {
  return (
    <div className="w-full h-screen absolute top-0 left-0 inset-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        {/* <OrbitControls
					autoRotate
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/> */}
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
