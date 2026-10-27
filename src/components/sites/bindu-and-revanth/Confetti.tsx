"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface Confetto {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  width: number;
  height: number;
  color: string;
  gravity: number;
  opacity: number;
}

const COLORS = [
  "rgba(166, 138, 91, 0.95)",
  "rgba(186, 158, 101, 0.9)",
  "rgba(201, 178, 136, 0.85)",
  "rgba(224, 211, 193, 0.9)",
  "rgba(246, 237, 226, 0.95)",
  "rgba(249, 243, 234, 0.95)",
];

const CONFETTI_COUNT = 120;
const FADE_START_FRAME = 210;
const MAX_FRAMES = 300;

/** Gold confetti burst that fires once when the closing blessing scrolls into view. */
export function Confetti({ trigger }: { trigger: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hasFired = useRef(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!trigger || hasFired.current || reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    hasFired.current = true;

    const ratio = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.scale(ratio, ratio);

    const confetti: Confetto[] = Array.from({ length: CONFETTI_COUNT }, () => ({
      x: width * 0.3 + Math.random() * width * 0.4,
      y: -10 - Math.random() * height * 0.3,
      vx: (Math.random() - 0.5) * 6,
      vy: Math.random() * 2 + 1,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.15,
      width: Math.random() * 3 + 2,
      height: Math.random() * 6 + 4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      gravity: 0.06 + Math.random() * 0.04,
      opacity: 1,
    }));

    let frame = 0;
    let animation = 0;

    const draw = () => {
      context.clearRect(0, 0, width, height);
      frame += 1;

      let visible = false;

      for (const piece of confetti) {
        piece.vy += piece.gravity;
        piece.x += piece.vx;
        piece.y += piece.vy;
        piece.vx *= 0.99;
        piece.rotation += piece.rotationSpeed;

        if (frame > FADE_START_FRAME) {
          piece.opacity = Math.max(0, piece.opacity - 0.015);
        }

        if (piece.y < height + 20 && piece.opacity > 0) {
          visible = true;
          context.save();
          context.translate(piece.x, piece.y);
          context.rotate(piece.rotation);
          context.globalAlpha = piece.opacity;
          context.beginPath();
          context.ellipse(0, 0, piece.width, piece.height, 0, 0, Math.PI * 2);
          context.fillStyle = piece.color;
          context.fill();
          context.restore();
        }
      }

      if (visible && frame < MAX_FRAMES) {
        animation = requestAnimationFrame(draw);
      } else {
        canvas.style.opacity = "0";
      }
    };

    canvas.style.opacity = "1";
    animation = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(animation);
  }, [trigger, reducedMotion]);

  if (reducedMotion) return null;

  return <canvas ref={canvasRef} className="confetti" aria-hidden="true" />;
}
