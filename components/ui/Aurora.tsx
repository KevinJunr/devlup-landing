"use client";

import { useEffect, useRef } from "react";
import { Renderer, Camera, Transform, Mesh, Program, Geometry, Vec2 } from "ogl";

interface AuroraProps {
  colorStops?: string[];
  blend?: number;
  amplitude?: number;
  speed?: number;
}

export function Aurora({
  colorStops = ["#FF6A00", "#87CEFA", "#E100FF"],
  blend = 0.5,
  amplitude = 1.0,
  speed = 0.5,
}: AuroraProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const renderer = new Renderer({ canvas, alpha: true });
    const gl = renderer.gl;

    gl.clearColor(0, 0, 0, 0);

    const camera = new Camera(gl, { fov: 45 });
    camera.position.z = 5;

    const scene = new Transform();

    // Convert hex colors to RGB
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16) / 255,
            g: parseInt(result[2], 16) / 255,
            b: parseInt(result[3], 16) / 255,
          }
        : { r: 1, g: 1, b: 1 };
    };

    const colors = colorStops.map(hexToRgb);

    const vertex = /* glsl */ `
      attribute vec2 uv;
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
      }
    `;

    const fragment = /* glsl */ `
      precision highp float;
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec3 uColor1;
      uniform vec3 uColor2;
      uniform vec3 uColor3;
      uniform float uBlend;
      uniform float uAmplitude;
      uniform float uSpeed;
      varying vec2 vUv;

      void main() {
        vec2 uv = vUv;
        float time = uTime * uSpeed;

        // Background color (bleu marine)
        vec3 bgColor = vec3(0.106, 0.067, 0.173); // #1B112C

        // Spot 1 - Orange (top right, moving)
        vec2 spot1Pos = vec2(0.75 + sin(time * 0.3) * 0.15, 0.75 + cos(time * 0.25) * 0.1);
        float spot1 = smoothstep(0.4, 0.0, distance(uv, spot1Pos));
        vec3 color1 = uColor1 * spot1 * 0.3;

        // Spot 2 - Aqua (bottom left, moving)
        vec2 spot2Pos = vec2(0.25 + cos(time * 0.28) * 0.12, 0.3 + sin(time * 0.32) * 0.15);
        float spot2 = smoothstep(0.45, 0.0, distance(uv, spot2Pos));
        vec3 color2 = uColor2 * spot2 * 0.2;

        // Spot 3 - Rose (top left, moving)
        vec2 spot3Pos = vec2(0.2 + sin(time * 0.26) * 0.1, 0.7 + cos(time * 0.3) * 0.13);
        float spot3 = smoothstep(0.38, 0.0, distance(uv, spot3Pos));
        vec3 color3 = uColor3 * spot3 * 0.25;

        // Combine all
        vec3 finalColor = bgColor + color1 + color2 + color3;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const geometry = new Geometry(gl, {
      position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) },
      uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) },
    });

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new Vec2(gl.canvas.width, gl.canvas.height) },
        uColor1: { value: [colors[0].r, colors[0].g, colors[0].b] },
        uColor2: { value: [colors[1].r, colors[1].g, colors[1].b] },
        uColor3: { value: [colors[2].r, colors[2].g, colors[2].b] },
        uBlend: { value: blend },
        uAmplitude: { value: amplitude },
        uSpeed: { value: speed },
      },
      transparent: true,
    });

    const mesh = new Mesh(gl, { geometry, program });
    mesh.setParent(scene);

    let animationId: number;

    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
      program.uniforms.uResolution.value = new Vec2(gl.canvas.width, gl.canvas.height);
    };

    const update = (t: number) => {
      animationId = requestAnimationFrame(update);
      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene, camera });
    };

    window.addEventListener("resize", resize);
    resize();
    update(0);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
      renderer.gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [colorStops, blend, amplitude, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  );
}
