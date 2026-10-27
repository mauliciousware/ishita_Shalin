"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  fadeSpeed: number;
  phase: number;
}

const PARTICLE_COUNT = 35;
const GOLD_RGB = "166, 138, 91";

/** Slow gold dust drifting upward through the opening scene. */
export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reducedMotion) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let particles: Particle[] = [];
    let phase = 0;

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      context.scale(ratio, ratio);
    };

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.offsetWidth,
      y: canvas.offsetHeight + Math.random() * 40,
      size: Math.random() * 2.5 + 0.8,
      speedY: -(Math.random() * 0.4 + 0.15),
      speedX: (Math.random() - 0.5) * 0.15,
      opacity: 0,
      fadeSpeed: Math.random() * 0.008 + 0.003,
      phase: Math.random() * Math.PI * 2,
    });

    const seed = () => {
      resize();
      particles = Array.from({ length: PARTICLE_COUNT }, () => {
        const particle = createParticle();
        particle.y = Math.random() * canvas.offsetHeight;
        particle.opacity = Math.random() * 0.6;
        return particle;
      });
    };

    const draw = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      context.clearRect(0, 0, width, height);
      phase += 0.01;

      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];

        particle.y += particle.speedY;
        particle.x += particle.speedX + Math.sin(phase + particle.phase) * 0.12;

        if (particle.y > height * 0.7) {
          particle.opacity = Math.min(
            particle.opacity + particle.fadeSpeed * 2,
            0.7,
          );
        } else if (particle.y < height * 0.15) {
          particle.opacity = Math.max(
            particle.opacity - particle.fadeSpeed * 3,
            0,
          );
        }

        if (
          particle.y < -10 ||
          (particle.y < height * 0.1 && particle.opacity <= 0)
        ) {
          particles[i] = createParticle();
          continue;
        }

        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(${GOLD_RGB}, ${particle.opacity})`;
        context.fill();
      }

      frame = requestAnimationFrame(draw);
    };

    seed();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return <canvas ref={canvasRef} className="particles" aria-hidden="true" />;
}
