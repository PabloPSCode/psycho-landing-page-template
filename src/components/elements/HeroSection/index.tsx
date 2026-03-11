'use client';

import LiveGradientWaves from "@/components/elements/LiveGradientWaves";
import clsx from "clsx";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "motion/react";
import type { FC, ReactNode } from "react";
import { useEffect, useRef } from "react";

interface ScrollGradientColors {
  /** Cor inicial do gradiente. */
  from: string;
  /** Cor intermediária do gradiente. */
  via: string;
  /** Cor final do gradiente. */
  to: string;
  /** Cor inicial ao final do scroll. */
  fromScrolled: string;
  /** Cor intermediária ao final do scroll. */
  viaScrolled: string;
  /** Cor final ao final do scroll. */
  toScrolled: string;
  /** Ângulo do gradiente. Ex.: `135deg`. */
  angle?: string;
}

interface HeroSectionProps {
  /** Tamanho da largura da seção */
  size: "full" | "middle";
  /** Título da seção */
  title?: string;
  /** Subtítulo da seção */
  subtitle?: string;
  /** Texto do botão */
  buttonText?: string;
  /** URL da imagem de fundo */
  backgroundImageLocalPath?: string;
  /** Classes adicionais para customização da seção */
  sectionClassName?: string;
  /** Classes adicionais para customização do título */
  titleClassName?: string;
  /** Classes adicionais para customização do subtítulo */
  subtitleClassName?: string;
  /** Classes adicionais para customização do botão */
  buttonClassName?: string;
  /** Função chamada ao clicar no botão */
  onButtonClick?: () => void;
  /** Gradiente linear animado conforme o scroll da hero. */
  scrollGradientColors?: ScrollGradientColors;
  /** Ativa uma animação contínua do gradiente, sem depender do scroll. */
  liveGradient?: boolean;
  /** Conteúdo adicional a ser renderizado dentro da seção */
  children?: ReactNode;
}

export const HeroSection: FC<HeroSectionProps> = ({
  size,
  title,
  subtitle,
  buttonText,
  backgroundImageLocalPath,
  sectionClassName,
  titleClassName,
  subtitleClassName,
  buttonClassName,
  onButtonClick,
  scrollGradientColors,
  liveGradient = false,
  children,
}: HeroSectionProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const gradientFrom = useTransform(
    scrollYProgress,
    [0, 1],
    [
      scrollGradientColors?.from ?? "transparent",
      scrollGradientColors?.fromScrolled ?? "transparent",
    ]
  );
  const gradientVia = useTransform(
    scrollYProgress,
    [0, 1],
    [
      scrollGradientColors?.via ?? "transparent",
      scrollGradientColors?.viaScrolled ?? "transparent",
    ]
  );
  const gradientTo = useTransform(
    scrollYProgress,
    [0, 1],
    [
      scrollGradientColors?.to ?? "transparent",
      scrollGradientColors?.toScrolled ?? "transparent",
    ]
  );
  const liveGradientFrom = useMotionValue(
    scrollGradientColors?.from ?? "transparent"
  );
  const liveGradientVia = useMotionValue(
    scrollGradientColors?.via ?? "transparent"
  );
  const liveGradientTo = useMotionValue(
    scrollGradientColors?.to ?? "transparent"
  );

  useEffect(() => {
    if (!liveGradient || !scrollGradientColors) {
      liveGradientFrom.set(scrollGradientColors?.from ?? "transparent");
      liveGradientVia.set(scrollGradientColors?.via ?? "transparent");
      liveGradientTo.set(scrollGradientColors?.to ?? "transparent");

      return;
    }

    const duration = 8;
    const fromControls = animate(
      liveGradientFrom,
      [scrollGradientColors.from, scrollGradientColors.fromScrolled],
      {
        duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }
    );
    const viaControls = animate(
      liveGradientVia,
      [scrollGradientColors.via, scrollGradientColors.viaScrolled],
      {
        duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }
    );
    const toControls = animate(
      liveGradientTo,
      [scrollGradientColors.to, scrollGradientColors.toScrolled],
      {
        duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }
    );

    return () => {
      fromControls.stop();
      viaControls.stop();
      toControls.stop();
    };
  }, [
    liveGradient,
    liveGradientFrom,
    liveGradientTo,
    liveGradientVia,
    scrollGradientColors,
  ]);

  const gradientAngle = scrollGradientColors?.angle ?? "135deg";
  const activeGradientFrom = liveGradient ? liveGradientFrom : gradientFrom;
  const activeGradientVia = liveGradient ? liveGradientVia : gradientVia;
  const activeGradientTo = liveGradient ? liveGradientTo : gradientTo;
  const animatedGradient = useMotionTemplate`linear-gradient(${gradientAngle}, ${activeGradientFrom}, ${activeGradientVia}, ${activeGradientTo})`;

  const sectionStyle =
    scrollGradientColors || backgroundImageLocalPath
      ? {
          backgroundImage:
            scrollGradientColors && backgroundImageLocalPath
              ? `${animatedGradient}, url(${backgroundImageLocalPath})`
              : scrollGradientColors
                ? animatedGradient
                : `url(${backgroundImageLocalPath})`,
        }
      : undefined;

  return (
    <motion.section
      ref={sectionRef}
      className={clsx(
        size === "full" ? "w-full" : "w-full max-w-7xl mx-auto",
        "relative isolate flex flex-col items-center px-8 py-12",
        "bg-cover bg-center",
        liveGradient && "overflow-hidden",
        sectionClassName
      )}
      style={sectionStyle}
    >
      {liveGradient && scrollGradientColors && (
        <LiveGradientWaves
          from={scrollGradientColors.from}
          via={scrollGradientColors.via}
          to={scrollGradientColors.to}
        />
      )}

      <div className="relative z-10 flex w-full flex-col items-center">
        {title && (
          <h1
            className={clsx(
              "text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-2 text-foreground",

              titleClassName
            )}
          >
            {title}
          </h1>
        )}
        {subtitle && (
          <h2
            className={clsx(
              "text-base sm:text-lg  text-foreground/60 font-regular font-secondary text-center",
              subtitleClassName
            )}
          >
            {subtitle}
          </h2>
        )}
        {children && children}
        {buttonText && (
          <button
            className={clsx(
              "mt-4 bg-primary-500 rounded-md py-2 px-4",
              buttonClassName
            )}
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        )}
      </div>
    </motion.section>
  );
};
