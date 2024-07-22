"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";

const Scene = () => {
  return (
    <Canvas className="h-full w-full">
      <axesHelper
        scale={2}
        position={[0, 0, 0]}
        onUpdate={(self) => self.setColors("#ff2080", "#20ff80", "#2080ff")}
      />
    </Canvas>
  );
};

export default Scene;
