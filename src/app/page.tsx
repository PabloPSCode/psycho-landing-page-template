"use client";

import FadeContainer from "@/components/animations-and-loading/FadeContainer";
import { FadeText } from "@/components/animations-and-loading/FadeText";
import Lottie from "@/components/animations-and-loading/Lottie";
import RevealContainer from "@/components/animations-and-loading/RevealContainer";
import UpFadeText from "@/components/animations-and-loading/UpFadeText";
import ZoomContainer from "@/components/animations-and-loading/ZoomContainer";
import Button from "@/components/buttons/Button";
import TestimonialCard from "@/components/cards/TestimonialCard";
import Footer from "@/components/elements/Footer";
import { HeroSection } from "@/components/elements/HeroSection";
import LandingHeader from "@/components/elements/LandingHeader";
import { Section } from "@/components/elements/Section";
import { Accordeon } from "@/components/miscellaneous/Accordeon";
import Paragraph from "@/components/typography/Paragraph";
import Subtitle from "@/components/typography/Subtitle";
import {
  psychologistLandingMock,
  type SupportIconName,
} from "@/mocks/psychologistLanding";
import {
  BrainIcon,
  HeartbeatIcon,
  InstagramLogoIcon,
  MapPinIcon,
  TargetIcon,
  UsersThreeIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";
import happyFaceAniamtion from "../../public/animations/happy_face.json";

const supportIcons: Record<SupportIconName, React.ReactNode> = {
  mente: <BrainIcon className="h-14 w-14 text-primary-700" weight="regular" />,
  ansiedade: (
    <HeartbeatIcon className="h-14 w-14 text-primary-700" weight="regular" />
  ),
  familia: (
    <UsersThreeIcon className="h-14 w-14 text-primary-700" weight="regular" />
  ),
  proposito: (
    <TargetIcon className="h-14 w-14 text-primary-700" weight="regular" />
  ),
};

const testimonials = [
  {
    avatarUrl: "/images/testimonial_1.png",
    userName: "",
    userRole: "Depoimento real",
    rating: 5,
    testimonial:
      "Comecei a terapia com receio, sem saber exatamente o que esperar, mas logo nas primeiras sessões percebi mudanças importantes. Aos poucos, as peças da minha história começaram a se encaixar e aquilo que antes parecia confuso passou a fazer sentido. Eu vivia um período de ansiedade intensa, mas aprendi a compreender melhor minhas emoções e a lidar com elas. Hoje me sinto mais calma, forte e consciente de mim mesma. Foi uma das decisões mais transformadoras que já tomei na vida. 💜",
  },
  {
    avatarUrl: "/images/testimonial_2.png",
    userName: "",
    userRole: "34 anos",
    rating: 5,
    testimonial:
      "Aos 34 anos, mesmo no auge da carreira, comecei a sofrer com fortes dores de cabeça que nenhum exame médico conseguia explicar. No trabalho, a pressão e o medo constante de não ser bom o suficiente só aumentavam esse sofrimento. Ao iniciar a TRG, compreendi que essas dores estavam ligadas a marcas emocionais da infância. Durante o processo terapêutico, essas memórias foram reprocessadas e o peso que eu carregava começou a desaparecer. Hoje vivo com muito mais tranquilidade, confiança e sem aquelas dores constantes.",
  },
  {
    avatarUrl: "/images/testimonial_3.png",
    userName: "",
    userRole: "Depoimento real",
    rating: 5,
    testimonial:
      "Antes de conhecer a TRG, eu vivia com confusão, ansiedade constante e um cansaço emocional difícil de explicar. Situações simples me sobrecarregavam e meu corpo reagia com dores frequentes e sensação de alerta. Ao iniciar a terapia, comecei a perceber mudanças profundas na forma de lidar com minhas emoções. O peso que eu carregava foi diminuindo, trazendo mais calma e clareza. Hoje me sinto mais leve, segura e grata por essa transformação. ✨",
  },
];

const siteUrl = psychologistLandingMock.siteUrl;
const phoneHref = `tel:${psychologistLandingMock.phoneE164}`;
const emailHref = `mailto:${psychologistLandingMock.email}`;
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: psychologistLandingMock.seo.title,
      description: psychologistLandingMock.seo.description,
      inLanguage: "pt-BR",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#professional-service`,
      name: psychologistLandingMock.pageName,
      url: siteUrl,
      description: psychologistLandingMock.seo.description,
      image: [
        `${siteUrl}/og-image.png`,
        `${siteUrl}${psychologistLandingMock.about.imageUrl}`,
      ],
      areaServed: [
        {
          "@type": "City",
          name: psychologistLandingMock.location.city,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: psychologistLandingMock.location.state,
          },
        },
      ],
      serviceType: [
        "Terapia de Reprocessamento Generativo",
        "Terapia para ansiedade",
        "Terapia para traumas emocionais",
        "Terapia para bloqueios emocionais",
      ],
      telephone: psychologistLandingMock.phoneE164,
      email: psychologistLandingMock.email,
      sameAs: [psychologistLandingMock.instagramUrl],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          telephone: psychologistLandingMock.phoneE164,
          email: psychologistLandingMock.email,
          availableLanguage: ["pt-BR"],
          areaServed: psychologistLandingMock.location.serviceAreaLabel,
          url: psychologistLandingMock.whatsappUrl,
        },
      ],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#camila-almeida`,
      name: psychologistLandingMock.professionalName,
      jobTitle: psychologistLandingMock.professionalRole,
      description: psychologistLandingMock.about.paragraphs.join(" "),
      url: siteUrl,
      image: `${siteUrl}${psychologistLandingMock.about.imageUrl}`,
      sameAs: [psychologistLandingMock.instagramUrl],
      worksFor: {
        "@id": `${siteUrl}/#professional-service`,
      },
      knowsAbout: [
        "Terapia de Reprocessamento Generativo",
        "Ansiedade",
        "Traumas emocionais",
        "Bloqueios emocionais",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: psychologistLandingMock.faq.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleWhatsappClick = () => {
    window.open(
      psychologistLandingMock.whatsappUrl,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="overflow-x-hidden bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <LandingHeader.Root
        size="md"
        bordered
        sticky
        className="relative !bg-background/95 backdrop-blur"
      >
        <LandingHeader.Left className="gap-3">
          <Image
            src="/trg_logo.png"
            alt="TRG Logo"
            width={32}
            height={32}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full ml-8"
          />
        </LandingHeader.Left>

        <LandingHeader.Center>
          <LandingHeader.Nav className="justify-center font-['Lexend']">
            {psychologistLandingMock.headerLinks.map((item) => (
              <LandingHeader.Nav.Item key={item.href} href={item.href}>
                {item.label}
              </LandingHeader.Nav.Item>
            ))}
          </LandingHeader.Nav>
        </LandingHeader.Center>

        <LandingHeader.Right className="gap-2">
          <LandingHeader.MobileMenuToggle
            open={showMobileMenu}
            onToggle={setShowMobileMenu as never}
          />
          <LandingHeader.MobileMenuPanel
            open={showMobileMenu}
            cta={
              <LandingHeader.CTA
                label={psychologistLandingMock.hero.ctaLabel}
                className="w-full justify-center"
                onClick={handleWhatsappClick}
              />
            }
          >
            {psychologistLandingMock.headerLinks.map((item) => (
              <LandingHeader.Nav.Item
                key={`mobile-${item.href}`}
                href={item.href}
                onClick={() => setShowMobileMenu(false)}
              >
                {item.label}
              </LandingHeader.Nav.Item>
            ))}
          </LandingHeader.MobileMenuPanel>

          <LandingHeader.CTA
            className="hidden md:flex"
            label={psychologistLandingMock.hero.ctaLabel}
            onClick={handleWhatsappClick}
          />
        </LandingHeader.Right>
      </LandingHeader.Root>

      <main className="flex flex-col">
        <HeroSection
          size="full"
          sectionClassName="!px-0 !py-0"
          liveGradient
          scrollGradientColors={{
            from: "#fceed4",
            via: "#f8ddb9",
            to: "#f0c590",
            fromScrolled: "#e8b676",
            viaScrolled: "#f5f3f1",
            toScrolled: "#e5d4c3",
            angle: "135deg",
          }}
        >
          <div
            id="inicio"
            className="relative isolate w-full min-h-[calc(100vh-4.5rem)] border-b border-primary-300/60"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute left-[6%] top-[22%] hidden h-24 w-24 rounded-full border border-white/10 md:block"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute left-[5%] top-[44%] hidden h-px w-28 bg-white/15 md:block"
            />

            <div className="relative mx-auto flex flex-col sm:flex-row min-h-[calc(100vh-4.5rem)] w-full max-w-7xl items-center px-6 py-14 md:px-10 lg:px-14">
              <div className="max-w-4xl">
                <FadeContainer once>
                  <Subtitle
                    content={psychologistLandingMock.hero.eyebrow}
                    className="!text-sm !font-medium !uppercase !tracking-[0.35em] !text-primary-800 md:!text-base"
                  />
                </FadeContainer>

                <RevealContainer once className="mt-5">
                  <h1 className="text-5xl font-semibold leading-[0.95] text-primary-700 md:text-7xl lg:text-8xl">
                    <UpFadeText
                      texts={[psychologistLandingMock.hero.title]}
                      auto={false}
                      loop={false}
                      animatePresenceInitial
                      staggerDuration={0.04}
                      splitBy="characters"
                      elementLevelClassName="will-change-transform"
                    />
                  </h1>
                </RevealContainer>

                <FadeContainer once delay={1} className="mt-7 max-w-3xl">
                  <Paragraph
                    content={psychologistLandingMock.hero.description}
                    className="!text-lg !leading-relaxed !text-primary-600/90 md:!text-2xl"
                  />
                </FadeContainer>
              </div>
              <ZoomContainer once delay={2} className="mt-9">
                <div>
                  <Lottie
                    animation={happyFaceAniamtion}
                    height={240}
                    width={240}
                    autoplay
                  />
                  <Button
                    animatedBorder
                    label={psychologistLandingMock.hero.ctaLabel}
                    onClick={handleWhatsappClick}
                    className="!rounded-xl !bg-primary-300 !px-8 !py-3 !text-sm !font-semibold !uppercase tracking-[0.2em] !text-primary-900"
                  />
                </div>
              </ZoomContainer>
            </div>
          </div>
        </HeroSection>

        <Section
          size="full"
          sectionClassName="!px-0 !py-0 bg-background border-b border-primary-300/60"
        >
          <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center overflow-hidden">
            <RevealContainer
              once
              className="relative z-10 flex justify-center px-6 py-12 md:px-10 lg:px-14"
            >
              <div className="max-w-xl flex flex-col items-center">
                <h2 className="text-2xl font-semibold leading-tight text-primary-700 md:text-4xl">
                  <UpFadeText
                    texts={[psychologistLandingMock.transformation.title]}
                    auto={false}
                    loop={false}
                    animatePresenceInitial
                    staggerDuration={0.04}
                    splitBy="characters"
                    contentClassName="w-full justify-center text-center"
                    elementLevelClassName="will-change-transform"
                  />
                </h2>
                <div className="mt-7 space-y-3">
                  {psychologistLandingMock.transformation.paragraphs.map(
                    (text) => (
                      <Paragraph
                        key={text}
                        content={text}
                        className="!text-base !leading-relaxed !text-foreground/90 md:!text-xl text-center"
                      />
                    ),
                  )}
                </div>
              </div>
            </RevealContainer>
          </div>
        </Section>

        <Section
          size="full"
          sectionClassName="!px-0 !py-0 bg-gradient-to-br from-primary-600 to-primary-600 via-primary-500 border-b border-primary-300/60"
          liveGradient
          scrollGradientColors={{
            from: "#8d5410",
            via: "#c68e45",
            to: "#7b5716",
            fromScrolled: "#d6811a",
            viaScrolled: "#c6996c",
            toScrolled: "#986623",
            angle: "135deg",
          }}
        >
          <div
            id="metodo"
            className="relative mx-auto w-full max-w-7xl overflow-hidden px-6 py-16 md:px-12 md:py-20"
          >
            <FadeContainer
              once
              className="relative z-10 mx-auto max-w-5xl text-center"
            >
              <h2 className="text-2xl font-semibold leading-tight text-white md:text-4xl">
                <UpFadeText
                  texts={[psychologistLandingMock.method.title]}
                  auto={false}
                  loop={false}
                  animatePresenceInitial
                  staggerDuration={0.04}
                  splitBy="characters"
                  contentClassName="w-full justify-center text-center"
                  elementLevelClassName="will-change-transform"
                />
              </h2>
              <Subtitle
                content={psychologistLandingMock.method.subtitle}
                element="h3"
                className="mt-6 !text-xl !font-semibold !uppercase !tracking-wide !text-primary-300 md:!text-2xl"
              />
            </FadeContainer>

            <div className="relative z-10 mt-12 grid items-center gap-10 md:grid-cols-[0.4fr_1fr]">
              <ZoomContainer once className="mx-auto">
                <div className="flex h-56 w-56 items-center justify-center rounded-full border-4 border-primary-300/60 bg-primary-600">
                  <BrainIcon
                    className="h-24 w-24 text-primary-200"
                    weight="regular"
                  />
                </div>
              </ZoomContainer>

              <RevealContainer once className="space-y-5">
                {psychologistLandingMock.method.paragraphs.map((text) => (
                  <Paragraph
                    key={text}
                    content={text}
                    className="!text-base !leading-relaxed !text-white/95 md:!text-xl"
                  />
                ))}
                <Button
                  animatedBorder
                  label={psychologistLandingMock.method.ctaLabel}
                  onClick={handleWhatsappClick}
                  className="mt-7 !rounded-xl !bg-white !px-8 !py-3 !text-sm !font-semibold !uppercase tracking-[0.08em] !text-primary-700"
                />
              </RevealContainer>
            </div>
          </div>
        </Section>

        <Section
          size="full"
          sectionClassName="!px-0 !py-0 bg-white border-b border-primary-300/60"

        >
          <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12 md:py-20">
            <FadeContainer once className="text-center">
              <h2 className="text-4xl font-semibold text-primary-700 md:text-5xl">
                <UpFadeText
                  texts={[psychologistLandingMock.support.title]}
                  auto={false}
                  loop={false}
                  animatePresenceInitial
                  staggerDuration={0.04}
                  splitBy="characters"
                  contentClassName="w-full justify-center text-center"
                  elementLevelClassName="will-change-transform"
                />
              </h2>
            </FadeContainer>

            <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {psychologistLandingMock.support.items.map((item, index) => (
                <ZoomContainer
                  key={item.title}
                  once
                  delay={index}
                  className="h-full rounded-2xl bg-primary-50 p-6 text-center shadow-sm"
                >
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-md">
                    {supportIcons[item.icon]}
                  </div>
                  <Subtitle
                    content={item.title}
                    element="h3"
                    className="mt-5 !text-xl !font-semibold !text-primary-700"
                  />
                  <Paragraph
                    content={item.description}
                    className="mt-3 !text-sm !text-foreground/80 md:!text-base"
                  />
                </ZoomContainer>
              ))}
            </div>

            <RevealContainer once className="mt-12 flex justify-center">
              <Button
                animatedBorder
                label={psychologistLandingMock.support.ctaLabel}
                onClick={handleWhatsappClick}
                className="!rounded-xl !bg-primary-600 !px-8 !py-3 !text-sm !font-semibold !uppercase tracking-[0.08em] !text-white"
              />
            </RevealContainer>
          </div>
        </Section>

        <Section
          size="full"
          sectionClassName="!px-0 !py-0 bg-background border-b border-primary-300/60"
        >
          <div
            id="sobre"
            className="mx-auto grid w-full max-w-7xl md:grid-cols-[1.05fr_0.95fr]"
          >
            <RevealContainer
              once
              className="flex justify-center px-6 py-12 md:px-10 lg:px-14"
            >
              <div className="max-w-xl">
                <h2 className="text-4xl font-semibold text-primary-700 md:text-5xl">
                  <UpFadeText
                    texts={[psychologistLandingMock.about.title]}
                    auto={false}
                    loop={false}
                    animatePresenceInitial
                    staggerDuration={0.04}
                    splitBy="characters"
                    elementLevelClassName="will-change-transform"
                  />
                </h2>
                <div className="mt-6 space-y-4">
                  {psychologistLandingMock.about.paragraphs.map((text) => (
                    <Paragraph
                      key={text}
                      content={text}
                      className="!text-base !leading-relaxed !text-foreground/90 md:!text-xl"
                    />
                  ))}
                </div>
                <Subtitle
                  content={psychologistLandingMock.about.emphasis}
                  element="h3"
                  className="mt-7 !text-xl !font-semibold !text-primary-700 md:!text-2xl max-w-sm"
                />
                <Button
                  animatedBorder
                  label={psychologistLandingMock.about.ctaLabel}
                  onClick={handleWhatsappClick}
                  className="mt-7 !rounded-xl !bg-primary-600 !px-8 !py-3 !text-sm !font-semibold !uppercase tracking-[0.08em] !text-white"
                />
              </div>
            </RevealContainer>

            <FadeContainer
              once
              className="relative min-h-[340px] md:min-h-[620px]"
            >
              <Image
                src={psychologistLandingMock.about.imageUrl}
                alt="Camila Almeida, terapeuta TRG"
                fill
                className="object-contain object-center pb-8 md:pb-0 "
              />
            </FadeContainer>
          </div>
        </Section>

        <Section
          size="full"
          sectionClassName="!px-0 !py-0 bg-primary-300 border-b border-primary-300/60"
                    liveGradient
          scrollGradientColors={{
            from: "#fceed4",
            via: "#f8ddb9",
            to: "#f0c590",
            fromScrolled: "#e8b676",
            viaScrolled: "#f5f3f1",
            toScrolled: "#e5d4c3",
            angle: "135deg",
          }}
        >
          <div
            id="duvidas"
            className="relative mx-auto w-full max-w-7xl overflow-hidden px-6 py-16 md:px-12 md:py-20"
          >
            <FadeContainer once className="relative z-10 text-center">
              <h2 className="text-4xl font-semibold text-primary-700 md:text-5xl">
                <UpFadeText
                  texts={[psychologistLandingMock.faq.title]}
                  auto={false}
                  loop={false}
                  animatePresenceInitial
                  staggerDuration={0.04}
                  splitBy="characters"
                  contentClassName="w-full justify-center text-center"
                  elementLevelClassName="will-change-transform"
                />
              </h2>
            </FadeContainer>

            <div className="relative z-10 mx-auto mt-12 flex max-w-5xl flex-col gap-10 md:flex-row">
              <RevealContainer once delay={1} className="h-full">
                <Accordeon
                  questions={psychologistLandingMock.faq.items}
                  allowMultiple
                  defaultOpen={[0]}
                  maxWidthClassName="max-w-full"
                  className="h-full bg-white"
                  itemClassName="text-primary-800"
                />
              </RevealContainer>
            </div>
          </div>
        </Section>

        <Section
          size="full"
          sectionClassName="!px-0 !py-0 bg-primary-50 border-b border-primary-300/60"
        >
          <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12 md:py-20">
            <FadeContainer once className="text-center">
              <h2 className="text-4xl font-semibold text-primary-700 md:text-5xl">
                <UpFadeText
                  texts={["Depoimentos"]}
                  auto={false}
                  loop={false}
                  animatePresenceInitial
                  staggerDuration={0.04}
                  splitBy="characters"
                  contentClassName="w-full justify-center text-center"
                  elementLevelClassName="will-change-transform"
                />
              </h2>
            </FadeContainer>

            <FadeContainer once delay={1} className="mx-auto mt-5 max-w-3xl">
              <Paragraph
                content="Histórias de quem encontrou mais clareza, leveza emocional e segurança através do processo terapêutico com a TRG."
                className="!text-base !leading-relaxed !text-foreground/80 md:!text-xl text-center"
              />
            </FadeContainer>

            <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {testimonials.map((item, index) => (
                <ZoomContainer key={item.avatarUrl} once delay={index}>
                  <TestimonialCard
                    avatarUrl={item.avatarUrl}
                    userName={item.userName}
                    userRole={item.userRole}
                    rating={item.rating}
                    testimonial={item.testimonial}
                  />
                </ZoomContainer>
              ))}
            </div>
          </div>
        </Section>

        <Section
          size="full"
          sectionClassName="!px-0 !py-0 bg-gradient-to-br from-primary-100 to-primary-200 via-primary-100 border-b border-primary-300/60 bg-white"
    
        >
          <div id="contato" className="flex flex-col items-center mx-auto">
            <FadeContainer
              once
              className="flex items-center px-6 py-12 md:px-10 lg:px-14"
            >
              <div className="max-w-5xl">
                <h2 className="mb-8 text-2xl font-semibold leading-tight text-primary-700 md:text-4xl">
                  <UpFadeText
                    texts={[psychologistLandingMock.finalCta.title]}
                    auto={false}
                    loop={false}
                    animatePresenceInitial
                    staggerDuration={0.04}
                    splitBy="characters"
                    contentClassName="w-full justify-center text-center"
                    elementLevelClassName="will-change-transform"
                  />
                </h2>
                <FadeText
                  items={[
                    "A TRG é uma abordagem terapêutica que ajuda a pessoa a reprocessar memórias dolorosas e emoções negativas armazenadas no cérebro.",
                    "Descubra uma nova forma de viver com mais leveza, segurança e equilíbrio emocional.",
                    "Ajudo pessoas a superar traumas emocionais, ansiedade, bloqueios e dores do passado através da TRG.",
                  ]}
                  fadeMs={2000}
                  intervalMs={8000}
                  className="!text-lg !leading-relaxed !text-foreground/90 md:!text-2xl text-center font-['Delius'] mb-0"
                />
                <Button
                  animatedBorder
                  label={psychologistLandingMock.finalCta.buttonLabel}
                  onClick={handleWhatsappClick}
                  className="mt-8 !rounded-xl !bg-primary-600 !px-8 !py-3 !text-sm !font-semibold !uppercase tracking-[0.08em] !text-white mx-auto"
                />
              </div>
            </FadeContainer>
          </div>
        </Section>
      </main>

      <Footer.Root className="!border-none !bg-primary-50 !text-gray-900">
        <Footer.Top columns={2} className="!py-10 !text-gray-900 md:!py-12">
          <Footer.Column className="!items-start">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-primary-300/30">
                <Image
                  src="/trg_logo.png"
                  alt="TRG Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 sm:w-12 sm:h-12 rounded-full"
                />
              </div>
              <div className="space-y-2">
                <p className="text-xl font-semibold text-gray-800">
                  {psychologistLandingMock.clinicName}
                </p>
                <Paragraph
                  content={psychologistLandingMock.professionalRole}
                  className="!text-sm !text-gray-800/80 md:!text-base"
                />
              </div>
            </div>
          </Footer.Column>

          <Footer.Column className="!items-start">
            <div className="space-y-2">
              <Paragraph
                content={psychologistLandingMock.footer.registration}
                className="!text-sm !text-gray-800/90 md:!text-base"
              />
              <Paragraph
                content={psychologistLandingMock.footer.legalNote}
                className="!text-sm !text-gray-800/75 md:!text-base"
              />
              <a
                href={emailHref}
                className="inline-flex text-sm text-gray-800/75 transition hover:text-gray-900 md:text-base"
              >
                E-mail: {psychologistLandingMock.email}
              </a>
            </div>
              <a
                href={psychologistLandingMock.reviewUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-fit items-center justify-center rounded-xl bg-primary-600 px-4 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:opacity-90"
              >
                Avaliar no Google
              </a>
          </Footer.Column>
        </Footer.Top>

        <Footer.SocialRow className="!bg-primary-50 !text-gray-900">
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={psychologistLandingMock.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-900/90 hover:text-gray-900"
              >
                <InstagramLogoIcon className="h-5 w-5" weight="regular" />
                Instagram
              </a>
              <a
                href={psychologistLandingMock.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm !text-gray-700 hover:text-gray-900"
              >
                <WhatsappLogoIcon className="h-5 w-5" weight="regular" />
                {psychologistLandingMock.phone}
              </a>
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 text-sm !text-gray-700 hover:text-gray-900"
              >
                Ligar agora
              </a>
            </div>
            <div className="inline-flex items-center gap-2 text-sm !text-gray-700">
              <MapPinIcon className="h-5 w-5" weight="regular" />
              {psychologistLandingMock.address}
            </div>
          </div>
        </Footer.SocialRow>

        <Footer.Bottom bordered className="!text-gray-900">
          <div className="flex w-full flex-col items-center justify-between gap-2 sm:flex-row">
            <span className="flex  items-center justify-center gap-3">
              {new Date().getFullYear()} - Desenvolvido por{" "}
              <a
                href="https://www.plssistemas.com.br"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/images/logo_pls.svg"
                  alt="PLS Logo"
                  width={96}
                  height={32}
                  className="w-auto h-6 sm:h-8 rounded-full"
                />
              </a>
            </span>
        
          </div>
        </Footer.Bottom>
      </Footer.Root>

      <a
        href={psychologistLandingMock.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar no WhatsApp"
        className="fixed bottom-6 right-6 z-40 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl transition hover:scale-105"
      >
        <WhatsappLogoIcon className="h-9 w-9" weight="thin" />
      </a>
    </div>
  );
}
