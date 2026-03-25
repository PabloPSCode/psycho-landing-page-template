'use client';

import { motion, useInView } from "motion/react";
import React, { useRef } from "react";

interface RevealContainerProps {
  children: React.ReactNode;
  /** Percentagem do elemento que deve estar visível na viewport para executar a animação. Padrão: 0.25 */
  visibilityAmount?: number;
  /** Executar a animação apenas na 1ª vez que entrar em viewport. */
  once?: boolean;
  /** Offset da animação em relação à posição original. */
  offSet?: number;
  /** Delay da animação em segundos */
  delay?: number;
  /** Classes adicionais para customização do container */
  className?: string;
  /** Faz o reveal entrar da esquerda para a direita. */
  fromLeft?: boolean;
  /** Faz o reveal entrar da direita para a esquerda. */
  fromRight?: boolean;
}

/** Container de animação com efeito reveal up, com suporte opcional a entrada lateral. */
export default function RevealContainer({
  children,
  visibilityAmount = 0.25,
  once = false,
  offSet = 80,
  delay = 0,
  className,
  fromLeft = false,
  fromRight = false,
}: RevealContainerProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  // Detecta visibilidade
  const inView = useInView(ref, { amount: visibilityAmount, once });
  const hiddenState = fromLeft
    ? { opacity: 0, x: "-100vw" }
    : fromRight
      ? { opacity: 0, x: "100vw" }
      : { opacity: 0, y: offSet };
  const visibleState = fromLeft || fromRight
    ? { opacity: 1, x: 0 }
    : { opacity: 1, y: 0 };

  return (
    <div ref={ref} className={className}>
      <motion.div
        animate={inView ? visibleState : hiddenState}
        transition={{ duration: 0.8, delay: delay * 0.1 }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
