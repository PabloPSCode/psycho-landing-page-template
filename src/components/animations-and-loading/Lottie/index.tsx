'use client';

import type { CSSProperties } from "react";
import lottie, { type AnimationItem } from "lottie-web";
import { useEffect, useRef } from "react";

interface LottieAnimationProps {
  /** Animação a ser renderizada. Pode ser um JSON, verificar exemplo.*/
  animation: unknown;
  /** Altura da animação. */
  height: number;
  /** Largura da animação. */
  width: number;
  /** Repetir animação. */
  loop?: boolean;
  /** Iniciar animação automaticamente. */
  autoplay?: boolean;
  /** Estilos personalizados para a animação. */
  style?: CSSProperties;
}

/** Componente de animação baseado na biblioteca Lottie. Para mais detalhes, ver documentação em https://github.com/airbnb/lottie-web. */
export default function LottieAnimation({
  animation,
  height,
  width,
  loop = true,
  autoplay = true,
  style,
}: LottieAnimationProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    animationRef.current?.destroy();
    container.innerHTML = "";

    const animationInstance = lottie.loadAnimation({
      container,
      renderer: "svg",
      loop,
      autoplay,
      animationData: animation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    });

    animationRef.current = animationInstance;

    if (autoplay) {
      animationInstance.goToAndPlay(0, true);
    } else {
      animationInstance.goToAndStop(0, true);
    }

    return () => {
      animationInstance.destroy();

      if (animationRef.current === animationInstance) {
        animationRef.current = null;
      }
    };
  }, [animation, autoplay, loop]);

  return (
    <div
      ref={containerRef}
      style={{
        width,
        height,
        overflow: "hidden",
        margin: "0 auto",
        ...style,
      }}
    />
  );
}

