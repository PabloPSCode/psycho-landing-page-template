"use client";

import FadeContainer from "@/components/animations-and-loading/FadeContainer";
import LightRays from "@/components/animations-and-loading/LightRays";
import RevealContainer from "@/components/animations-and-loading/RevealContainer";
import SplitText from "@/components/animations-and-loading/SplittedText";
import ZoomContainer from "@/components/animations-and-loading/ZoomContainer";
import Button from "@/components/buttons/Button";
import TestimonialCard from "@/components/cards/TestimonialCard";
import TiltedCard from "@/components/cards/TiltedCard";
import Footer from "@/components/elements/Footer";
import LandingHeader from "@/components/elements/LandingHeader";
import { Section } from "@/components/elements/Section";
import VideoSection from "@/components/elements/VideoSection";
import { Accordeon } from "@/components/miscellaneous/Accordeon";
import Paragraph from "@/components/typography/Paragraph";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
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
const anchorScrollMarginClassName = "scroll-mt-32 md:scroll-mt-28";
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

  const startWhatsAppChat = () => {
    window.open(
      psychologistLandingMock.whatsappUrl,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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
        className="!bg-background/95 backdrop-blur fixed!"
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
          <LandingHeader.Nav className="justify-center">
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
                className="!rounded-sm w-full justify-center"
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
            className="!rounded-sm hidden md:flex"
            label={psychologistLandingMock.hero.ctaLabel}
            onClick={handleWhatsappClick}
          />
        </LandingHeader.Right>
      </LandingHeader.Root>

      <main className="flex flex-col">
        <section className="relative overflow-hidden ">
          <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-black/80 via-black/60 to-black/20 flex flex-col items-center justify-center" />
          <VideoSection
            size="full"
            videoUrl="/videos/therapist.mp4"
            showPlayPauseButton={false}
            showOverlay
            containerClassName="!min-h-[82vh] bg-transparent"
          />
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center h-full">
            <div className="mx-auto my-auto min-h-[95vh] flex w-full max-w-7xl items-center justify-center2 px-6 pb-16 lg:px-8">
              <RevealContainer
                once
                className="pointer-events-auto m-auto space-y-8 max-w-2xl text-center"
              >
                <RevealContainer once className="mt-12">
                  <Title
                    content={psychologistLandingMock.hero.title}
                    className="!text-5xl !font-semibold !leading-[0.95] !text-white !md:text-7xl !lg:text-8xl !text-center"
                  />
                </RevealContainer>
                <FadeContainer once>
                  <Subtitle
                    content={psychologistLandingMock.hero.eyebrow}
                    className="!text-xs !font-medium !uppercase !tracking-[0.35em] md:!text-sm mt-8 !text-center text-white"
                  />
                </FadeContainer>

                <FadeContainer
                  once
                  className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                >
                  <Button
                    type="button"
                    label="AGENDAR SESSÃO"
                    onClick={() => startWhatsAppChat()}
                    className="!rounded-md !bg-primary-500 !px-8 !py-4 !text-black !shadow-none font-bold mt-8"
                  />
                </FadeContainer>
              </RevealContainer>
            </div>
          </div>
        </section>

        <Section
          size="full"
          sectionClassName="!px-0 !py-0 bg-background border-b border-primary-300/60"
        >
          <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center overflow-hidden">
            <RevealContainer
              once
              className="relative z-10 flex justify-center px-6 py-16 md:px-10 md:py-20 lg:px-14"
            >
              <div className="max-w-3xl flex flex-col items-center">
                <h2 className="text-2xl font-semibold leading-tight text-primary-700 md:text-4xl text-center">
                  {psychologistLandingMock.transformation.title}
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
          sectionClassName="!px-0 !py-0 bg-gradient-to-br from-[#fceed4] via-[#f8ddb9] to-[#f0c590]  border-b border-primary-300/60"
        >
          <div
            id="metodo"
            className={`${anchorScrollMarginClassName} relative mx-auto w-full max-w-7xl overflow-hidden px-6 py-20 md:px-12 md:py-24`}
          >
            <FadeContainer
              once
              className="relative z-10 mx-auto max-w-7xl text-center"
            >
              <SplitText
                text={psychologistLandingMock.method.title}
                tag="h2"
                splitType="words"
                delay={80}
                className="w-full text-2xl font-semibold leading-tight text-primary-700 md:text-5xl"
              />
              <Subtitle
                content={psychologistLandingMock.method.subtitle}
                element="h3"
                className="mt-6 !text-xl !font-semibold !uppercase !tracking-wide !text-primary-600 md:!text-2xl"
              />
            </FadeContainer>

            <div className="relative z-10 mt-12 flex flex-col items-center gap-10 md:grid-cols-[0.4fr_1fr]">
              <ZoomContainer once className="mx-auto">
                <div className="relative">
                  <div className="relative flex h-56 w-56 items-center justify-center rounded-full border-4 border-primary-300/60 bg-primary-600">
                    <BrainIcon
                      className="h-24 w-24 text-primary-200 animate-pulse"
                      weight="regular"
                    />
                  </div>
                </div>
              </ZoomContainer>

              <RevealContainer
                once
                className="space-y-5 flex flex-col items-center"
              >
                <Paragraph
                  content="A TRG é uma abordagem terapêutica que ajuda a pessoa a reprocessar memórias dolorosas e emoções negativas armazenadas no cérebro."
                  className="!text-base !leading-relaxed !text-primary-900 md:!text-xl text-center max-w-4xl mb-4"
                />
                <Paragraph
                  content=" Durante as sessões, trabalhamos para que o cérebro reorganize essas experiências, reduzindo o sofrimento emocional e trazendo mais paz e equilíbrio."
                  className="!text-base !leading-relaxed !text-primary-900 md:!text-xl text-center max-w-4xl"
                />
                <Button
                  animatedBorder
                  label={psychologistLandingMock.method.ctaLabel}
                  onClick={handleWhatsappClick}
                  className="mt-7 !rounded-sm !bg-white !px-8 !py-3 !text-sm !font-semibold !uppercase tracking-[0.08em] !text-primary-700 m-auto"
                />
              </RevealContainer>
            </div>
          </div>
        </Section>

        <Section
          size="full"
          sectionClassName="!px-0 !py-0 bg-white border-b border-primary-300/60"
        >
          <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-12 md:py-24">
            <FadeContainer once className="text-center">
              <SplitText
                text={psychologistLandingMock.support.title}
                tag="h2"
                splitType="words"
                delay={80}
                className="w-full text-4xl font-semibold text-primary-700 md:text-5xl pb-1"
              />
            </FadeContainer>

            <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {psychologistLandingMock.support.items.map((item, index) => (
                <RevealContainer
                  key={item.title}
                  once
                  delay={index * 2}
                  fromLeft={index === 0 || index === 4}
                  fromRight={index === 3 || index === 7}
                  className="h-full"
                >
                  <div className="h-full rounded-2xl bg-primary-50 p-6 text-center shadow-sm">
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
                  </div>
                </RevealContainer>
              ))}
            </div>
          </div>
        </Section>

        <Section
          size="full"
          sectionClassName="!px-0 !py-0 bg-background border-b border-primary-300/60"
        >
          <div
            id="sobre"
            className={`${anchorScrollMarginClassName} mx-auto grid w-full max-w-7xl md:grid-cols-[1.05fr_0.95fr]`}
          >
            <RevealContainer
              once
              className="flex flex-col sm:flex-row items-center justify-center px-6 py-16 md:px-10 md:py-20 lg:px-14"
            >
              <div className="max-w-xl mx-auto mr-4">
                <SplitText
                  text={psychologistLandingMock.about.title}
                  tag="h2"
                  splitType="words"
                  delay={80}
                  className="w-full text-2xl font-semibold text-primary-700 md:text-3xl text-center mx-auto"
                  textAlign="center"
                />
                <div className="mt-6 scale-105 sm:scale-115">
                  <TiltedCard
                    imageSrc="/images/certificate.png"
                    altText="Certificado TRG - Camila Almeida"
                    captionText="Certificado TRG"
                    containerHeight="300px"
                    imageHeight="264px"
                    imageWidth="372px"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                  />
                </div>
                <Subtitle
                  content="Profissional certificado TRG"
                  element="h3"
                  className="mt-7 !text-xl !font-semibold !text-primary-700 md:!text-2xl max-w-sm mx-auto text-center"
                />
                <Button
                  animatedBorder
                  label={psychologistLandingMock.about.ctaLabel}
                  onClick={handleWhatsappClick}
                  className="mt-7 !rounded-sm !bg-primary-600 !px-8 !py-3 !text-sm !font-semibold !uppercase tracking-[0.08em] !text-white mx-auto"
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
          sectionClassName="!px-0 !py-0 bg-gradient-to-br from-[#fceed4] via-[#f8ddb9] to-[#f0c590] border-b border-primary-300/60"
        >
          <div
            id="duvidas"
            className={`${anchorScrollMarginClassName} relative mx-auto w-full max-w-7xl overflow-hidden px-6 py-20 md:px-12 md:py-24`}
          >
            <FadeContainer once className="relative z-10 text-center">
              <SplitText
                text={psychologistLandingMock.faq.title}
                tag="h2"
                splitType="chars"
                delay={40}
                className="w-full text-4xl font-semibold text-primary-700 md:text-5xl"
              />
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
          <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-12 md:py-24">
            <FadeContainer once className="text-center">
              <SplitText
                text="Depoimentos"
                tag="h2"
                splitType="chars"
                delay={40}
                className="w-full text-4xl font-semibold text-primary-700 md:text-5xl"
              />
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

        <Section size="full" sectionClassName="!px-0 !py-0 bg-primary-100">
          <div
            id="contato"
            className={`${anchorScrollMarginClassName} relative overflow-hidden flex flex-col items-center mx-auto w-full`}
          >
            <div className="absolute inset-0 pointer-events-none">
              <LightRays
                raysOrigin="top-center"
                raysColor="#ffb253"
                raysSpeed={0.75}
                lightSpread={3.2}
                rayLength={8}
                fadeDistance={3.0}
                followMouse={false}
              />
            </div>
            <FadeContainer
              once
              className="relative z-10 flex items-center px-6 py-16 md:px-10 md:py-20 lg:px-14"
            >
              <div className="max-w-5xl">
                <Subtitle
                  content="Descubra uma nova forma de viver com mais leveza, segurança e equilíbrio emocional."
                  className="!text-lg !leading-relaxed !text-white/90 md:!text-2xl text-center font-['Poppins'] mb-0 max-w-3xl"
                />
                <div className="relative mt-8 mx-auto w-fit">
                  <Button
                    animatedBorder
                    label={psychologistLandingMock.finalCta.buttonLabel}
                    onClick={handleWhatsappClick}
                    className="relative z-10 !rounded-sm !bg-primary-600 !px-8 !py-3 !text-sm !font-semibold !uppercase tracking-[0.08em] !text-white"
                  />
                </div>
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
              className="mt-4 inline-flex w-fit items-center justify-center rounded-sm text-primary-600 text-xs font-semibold uppercase tracking-[0.08em] transition hover:opacity-90 font-secondary"
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
            <span className="flex text-xs items-center justify-center gap-3">
              {new Date().getFullYear()} - Orgulhosamente desenvolvido por{" "}
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
