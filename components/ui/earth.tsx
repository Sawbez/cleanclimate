"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { FC, useRef } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

interface EarthModelProps {
  position: [x: number, y: number, z: number];
}

const EarthModel: FC<EarthModelProps> = ({ position }) => {
  const gltf = useLoader(GLTFLoader, "./earth.glb");
  const meshRef = useRef<any>(null);

  useFrame(() => {
    meshRef.current.rotation.y += 0.001;
  });

  return (
    <motion.mesh
      ref={meshRef}
      position={position}
      animate={{ y: 0.5 }}
      transition={{ ease: "circOut", duration: 3, delay: 2 }}
    >
      <primitive object={gltf.scene} scale={20} />
    </motion.mesh>
  );
};

const SpinningEarth = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={wrapperRef}
      className="absolute fit top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <Canvas>
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 3, 2]} intensity={11} color={0x67e290} />
        <pointLight position={[2, 3, 0]} intensity={13} color={0x5acba3} />
        <pointLight position={[2, 0, 2]} intensity={7} color={0x6eee88} />
        <pointLight position={[-3, -1, 2]} intensity={8} color={0x4bb3b4} />
        <pointLight position={[0, -2, 0]} intensity={11} color={0x61d799} />
        <pointLight position={[3, 0, 0]} intensity={9} color={0x73ffb5} />
        <pointLight position={[-1, 5, 0]} intensity={50} color={0xffffff} />
        <EarthModel position={[0, -10, 0]} />
      </Canvas>
    </div>
  );
};

export default SpinningEarth;
