"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Globe() {
  const globeRef = useRef<THREE.Group>(null);
  const dotsRef = useRef<THREE.Points>(null);
  const ringsRef = useRef<THREE.Group>(null);

  // Create globe dots (lat/long grid)
  const { dotPositions, dotColors } = useMemo(() => {
    const positions: number[] = [];
    const colors: number[] = [];
    const radius = 1.6;
    const dotCount = 2000;

    for (let i = 0; i < dotCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / dotCount);
      const theta = Math.sqrt(dotCount * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      positions.push(x, y, z);

      // Color gradient: blue at equator, cyan at poles
      const latFactor = Math.abs(y) / radius;
      colors.push(
        0.31 + latFactor * 0.0, // R
        0.56 + latFactor * 0.34, // G
        0.97 + latFactor * 0.03  // B
      );
    }

    return {
      dotPositions: new Float32Array(positions),
      dotColors: new Float32Array(colors),
    };
  }, []);

  useFrame((state) => {
    if (!globeRef.current) return;
    globeRef.current.rotation.y = state.clock.elapsedTime * 0.08;

    // Rings pulse
    if (ringsRef.current) {
      ringsRef.current.children.forEach((ring, i) => {
        const mesh = ring as THREE.Mesh;
        const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5 + i * 0.5) * 0.05;
        mesh.scale.set(scale, scale, scale);
      });
    }
  });

  return (
    <group ref={globeRef}>
      {/* Globe dots */}
      <points ref={dotsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[dotPositions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[dotColors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.015}
          vertexColors
          transparent
          opacity={0.6}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Orbit rings */}
      <group ref={ringsRef}>
        {[1.8, 2.0, 2.2].map((radius, i) => (
          <mesh key={i} rotation={[Math.PI / (3 + i * 0.5), 0, i * 0.3]}>
            <ringGeometry args={[radius, radius + 0.005, 128]} />
            <meshBasicMaterial
              color={i === 0 ? "#007AFF" : i === 1 ? "#14B8A6" : "#00C853"}
              transparent
              opacity={0.15}
              side={THREE.DoubleSide}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        ))}
      </group>

      {/* Highlight points (conference locations) */}
      {[
        { lat: 20.24, lon: 85.8, color: "#14B8A6" }, // Bhubaneswar
        { lat: 40.71, lon: -74.01, color: "#007AFF" }, // New York
        { lat: 51.51, lon: -0.13, color: "#007AFF" }, // London
        { lat: 35.68, lon: 139.69, color: "#00C853" }, // Tokyo
        { lat: -33.87, lon: 151.21, color: "#00C853" }, // Sydney
        { lat: 48.86, lon: 2.35, color: "#007AFF" }, // Paris
        { lat: 37.39, lon: -122.08, color: "#14B8A6" }, // Silicon Valley
      ].map((loc, i) => {
        const phi = (90 - loc.lat) * (Math.PI / 180);
        const theta = (loc.lon + 180) * (Math.PI / 180);
        const r = 1.62;
        return (
          <mesh
            key={i}
            position={[
              -r * Math.sin(phi) * Math.cos(theta),
              r * Math.cos(phi),
              r * Math.sin(phi) * Math.sin(theta),
            ]}
          >
            <sphereGeometry args={[i === 0 ? 0.04 : 0.025, 16, 16]} />
            <meshBasicMaterial
              color={loc.color}
              transparent
              opacity={0.9}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function GlobeVisualization() {
  return (
    <div className="relative w-full h-full min-h-[400px]" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.5} />
        <Globe />
      </Canvas>

      {/* Glow overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-accent-blue/10 blur-[80px]" />
      </div>
    </div>
  );
}
