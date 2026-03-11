'use client';

import { motion } from "motion/react";

interface LiveGradientWavesProps {
  from: string;
  via: string;
  to: string;
}

export default function LiveGradientWaves({
  from,
  via,
  to,
}: LiveGradientWavesProps) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute left-[-16%] top-[-10%] h-[44%] w-[78%] rounded-[50%] blur-3xl"
        style={{
          background: `radial-gradient(ellipse at center, ${via} 0%, ${from} 40%, transparent 74%)`,
          opacity: 0.28,
        }}
        animate={{
          x: ["-6%", "5%", "-2%"],
          y: ["0%", "4%", "1%"],
          scaleX: [1, 1.08, 0.98],
          scaleY: [1, 0.94, 1.02],
          rotate: [-5, 2, -3],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute left-[-12%] top-[30%] h-[24%] w-[124%] blur-2xl"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${from} 18%, ${via} 48%, ${to} 78%, transparent 100%)`,
          opacity: 0.18,
          borderRadius: "999px",
        }}
        animate={{
          x: ["-4%", "3.5%", "-3%"],
          y: ["0%", "6%", "0%"],
          scaleX: [1, 1.04, 0.99],
          scaleY: [1, 0.86, 1],
          rotate: [-3, 2, -1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[-18%] right-[-18%] h-[58%] w-[84%] rounded-[50%] blur-3xl"
        style={{
          background: `radial-gradient(ellipse at center, ${to} 0%, ${via} 36%, transparent 76%)`,
          opacity: 0.22,
        }}
        animate={{
          x: ["4%", "-5%", "2%"],
          y: ["0%", "-5%", "1%"],
          scaleX: [0.98, 1.05, 1],
          scaleY: [1, 0.93, 1.04],
          rotate: [6, -2, 4],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[18%] left-[-10%] h-[16%] w-[118%] blur-xl"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${via} 24%, ${to} 52%, ${from} 76%, transparent 100%)`,
          opacity: 0.14,
          borderRadius: "999px",
        }}
        animate={{
          x: ["3%", "-4%", "2%"],
          y: ["0%", "-4%", "1%"],
          scaleX: [1, 1.03, 0.98],
          scaleY: [1, 0.82, 1],
          rotate: [2, -2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
