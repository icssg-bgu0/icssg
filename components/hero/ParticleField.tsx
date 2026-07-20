"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ParticleSystem() {
  const meshRef = useRef<THREE.Points>(null);
  const lineRef = useRef<THREE.LineSegments>(null);

  const particleCount = 120;
  const connectionDistance = 2.5;

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;

      velocities[i * 3] = (Math.random() - 0.5) * 0.005;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.003;
    }

    return { positions, velocities };
  }, []);

  const linePositions = useMemo(
    () => new Float32Array(particleCount * particleCount * 6),
    []
  );

  const lineColors = useMemo(
    () => new Float32Array(particleCount * particleCount * 6),
    []
  );

  useFrame((state) => {
    if (!meshRef.current || !lineRef.current) return;

    const posArray = meshRef.current.geometry.attributes.position
      .array as Float32Array;

    // Update particle positions
    for (let i = 0; i < particleCount; i++) {
      posArray[i * 3] += velocities[i * 3];
      posArray[i * 3 + 1] += velocities[i * 3 + 1];
      posArray[i * 3 + 2] += velocities[i * 3 + 2];

      // Boundary bounce
      for (let j = 0; j < 3; j++) {
        const limit = j === 0 ? 6 : j === 1 ? 4 : 3;
        if (Math.abs(posArray[i * 3 + j]) > limit) {
          velocities[i * 3 + j] *= -1;
        }
      }
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true;

    // Build connections
    let lineIndex = 0;
    const lineGeo = lineRef.current.geometry;

    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = posArray[i * 3] - posArray[j * 3];
        const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
        const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < connectionDistance) {
          const opacity = 1 - dist / connectionDistance;

          linePositions[lineIndex * 6] = posArray[i * 3];
          linePositions[lineIndex * 6 + 1] = posArray[i * 3 + 1];
          linePositions[lineIndex * 6 + 2] = posArray[i * 3 + 2];
          linePositions[lineIndex * 6 + 3] = posArray[j * 3];
          linePositions[lineIndex * 6 + 4] = posArray[j * 3 + 1];
          linePositions[lineIndex * 6 + 5] = posArray[j * 3 + 2];

          // Blue tint for connections
          lineColors[lineIndex * 6] = 0.31 * opacity;
          lineColors[lineIndex * 6 + 1] = 0.56 * opacity;
          lineColors[lineIndex * 6 + 2] = 0.97 * opacity;
          lineColors[lineIndex * 6 + 3] = 0.31 * opacity;
          lineColors[lineIndex * 6 + 4] = 0.56 * opacity;
          lineColors[lineIndex * 6 + 5] = 0.97 * opacity;

          lineIndex++;
        }
      }
    }

    lineGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions.slice(0, lineIndex * 6), 3)
    );
    lineGeo.setAttribute(
      "color",
      new THREE.BufferAttribute(lineColors.slice(0, lineIndex * 6), 3)
    );
    lineGeo.attributes.position.needsUpdate = true;
    lineGeo.attributes.color.needsUpdate = true;

    // Slow rotation
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    lineRef.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <>
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          transparent
          color="#007AFF"
          size={0.05}
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
      <lineSegments ref={lineRef}>
        <bufferGeometry />
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <ParticleSystem />
      </Canvas>
    </div>
  );
}
