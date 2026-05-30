"use client";

import FadeContainer from "@/components/animations-and-loading/FadeContainer";
import RevealContainer from "@/components/animations-and-loading/RevealContainer";
import SplitText from "@/components/animations-and-loading/SplittedText";
import ZoomContainer from "@/components/animations-and-loading/ZoomContainer";
import TestimonialCard from "@/components/cards/TestimonialCard";
import Footer from "@/components/elements/Footer";
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
import Link from "next/link";
import { useEffect, useState } from "react";

const supportIcons: Record<SupportIconName, React.ReactNode> = {
  mente:     <BrainIcon     className="h-11 w-11 text-primary-600" weight="regular" />,
  ansiedade: <HeartbeatIcon className="h-11 w-11 text-primary-600" weight="regular" />,
  familia:   <UsersThreeIcon className="h-11 w-11 text-primary-600" weight="regular" />,
  proposito: <TargetIcon    className="h-11 w-11 text-primary-600" weight="regular" />,
};

const testimonials = [
  {
    avatarUrl: "/images/testimonial_1.png",
    userName: "",
    userRole: "Depoimento real",
    rating: 5,
    testimonial:
      "Comecei a terapia com receio, sem saber exatamente o que esperar, mas logo nas primeiras sessões percebi mudanças importantes. Aos poucos, as peças da minha história começaram a se encaixar e aquilo que antes parecia confuso passou a fazer sentido. Eu vivia um período de ansiedade intensa, mas aprendi a compreender melhor minhas emoções e a lidar com elas. Hoje me sinto mais calma, forte e consciente de mim mesma. Foi uma das decisões mais transformadoras que já tomei na vida.",
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
      "Antes de conhecer a TRG, eu vivia com confusão, ansiedade constante e um cansaço emocional difícil de explicar. Situações simples me sobrecarregavam e meu corpo reagia com dores frequentes e sensação de alerta. Ao iniciar a terapia, comecei a perceber mudanças profundas na forma de lidar com minhas emoções. O peso que eu carregava foi diminuindo, trazendo mais calma e clareza. Hoje me sinto mais leve, segura e grata por essa transformação.",
  },
];

const siteUrl = psychologistLandingMock.siteUrl;
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
      telephone: psychologistLandingMock.phoneE164,
      email: psychologistLandingMock.email,
      sameAs: [psychologistLandingMock.instagramUrl],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: psychologistLandingMock.faq.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const el = document.getElementById(hash.replace("#", ""));
    if (!el) return;
    setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 200);
  }, []);

  const handleWhatsappClick = () => {
    window.open(psychologistLandingMock.whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="overflow-x-hidden bg-white text-[#0F0E1A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── Header ── */}
      <LandingHeader.Root size="md" bordered sticky className="fixed!">
        <LandingHeader.Left className="gap-3">
          <Link href="/" aria-label="Ir para o início">
            <Image src="/trg_logo.png" alt="TRG Logo" width={32} height={32}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full ml-8" />
          </Link>
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
          <LandingHeader.MobileMenuToggle open={showMobileMenu} onToggle={setShowMobileMenu as never} />
          <LandingHeader.MobileMenuPanel
            open={showMobileMenu}
            cta={
              <LandingHeader.CTA
                label={psychologistLandingMock.hero.ctaLabel}
                className="!rounded-xl w-full justify-center"
                onClick={handleWhatsappClick}
              />
            }
          >
            {psychologistLandingMock.headerLinks.map((item) => (
              <LandingHeader.Nav.Item key={`mobile-${item.href}`} href={item.href}
                onClick={() => setShowMobileMenu(false)}>
                {item.label}
              </LandingHeader.Nav.Item>
            ))}
          </LandingHeader.MobileMenuPanel>
          <LandingHeader.CTA className="hidden md:flex" label={psychologistLandingMock.hero.ctaLabel}
            onClick={handleWhatsappClick} />
        </LandingHeader.Right>
      </LandingHeader.Root>

      <main className="flex flex-col">

        {/* ── Hero — full-bleed background, centered content ── */}
        <section id="inicio" className="relative overflow-hidden min-h-screen">
          {/* Background image */}
          <Image
            src="/images/psychologist/hero-trg.png"
            alt="Camila Almeida, Terapeuta TRG"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Mask 1 — base darkening */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Mask 2 — radial vignette: edges darker, centre brighter */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_52%,transparent_0%,rgba(0,0,0,0.62)_100%)]" />
          {/* Mask 3 — top shadow, depth under the header */}
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/65 to-transparent" />
          {/* Mask 4 — bottom anchor shadow */}
          <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black/70 to-transparent" />

          <div className="relative z-10 flex min-h-screen items-center justify-center pt-20 pb-16">
            <div className="relative mx-auto w-full max-w-3xl px-6 text-center">
              {/* Content halo — soft dark ellipse specifically behind the text block */}
              <div className="pointer-events-none absolute inset-x-[-10%] top-1/2 -translate-y-1/2 h-[130%] rounded-[50%] bg-black/30 blur-3xl -z-10" />

              <RevealContainer once className="space-y-7">
                <FadeContainer once>
                  <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-300 drop-shadow">
                    {psychologistLandingMock.hero.eyebrow}
                  </span>
                </FadeContainer>
                <RevealContainer once>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white drop-shadow-lg">
                    {psychologistLandingMock.hero.title}
                  </h1>
                </RevealContainer>
                <FadeContainer once>
                  <p className="text-base sm:text-lg text-white/80 leading-relaxed mx-auto max-w-xl drop-shadow my-4">
                    {psychologistLandingMock.hero.description}
                  </p>
                </FadeContainer>
                <FadeContainer once className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={handleWhatsappClick}
                    className="inline-flex items-center justify-center rounded-xl bg-primary-400 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-90 cursor-pointer"
                  >
                    Agendar Sessão
                  </button>
                  <Link
                    href="/sobre"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white/90 transition-all duration-200 hover:border-white hover:text-white"
                  >
                    Saiba mais
                  </Link>
                </FadeContainer>
              </RevealContainer>
            </div>
          </div>
        </section>

        {/* ── Transformação ── */}
        <Section size="full" sectionClassName="!px-0 !py-0 bg-[#F8F7FF] border-b border-[#0F0E1A]/[0.07]">
          <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center overflow-hidden">
            <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary-100/60 blur-[80px]" />
            <RevealContainer once className="relative z-10 flex justify-center px-6 py-20 md:px-10 md:py-24 lg:px-14">
              <div className="max-w-3xl flex flex-col items-center text-center">
                <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-4xl text-[#0F0E1A]">
                  {psychologistLandingMock.transformation.title}
                </h2>
                <div className="mt-6 space-y-3">
                  {psychologistLandingMock.transformation.paragraphs.map((text) => (
                    <Paragraph key={text} content={text}
                      className="!text-base !leading-relaxed !text-[#0F0E1A]/60 md:!text-xl text-center" />
                  ))}
                </div>
                <Link
                  href="/sobre"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-primary-600 transition-colors hover:text-primary-700"
                >
                  Conheça o método →
                </Link>
              </div>
            </RevealContainer>
          </div>
        </Section>

        {/* ── O que a TRG ajuda ── */}
        <Section size="full" sectionClassName="!px-0 !py-0 bg-white border-b border-[#0F0E1A]/[0.07]">
          <div className="relative mx-auto w-full max-w-7xl px-6 py-20 md:px-12 md:py-24 overflow-hidden">
            <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-primary-100/50 blur-[100px]" />

            <FadeContainer once className="relative z-10 text-center">
              <SplitText
                text={psychologistLandingMock.support.title}
                tag="h2"
                splitType="words"
                delay={80}
                className="w-full text-3xl font-bold tracking-tight text-[#0F0E1A] md:text-5xl pb-1"
              />
            </FadeContainer>

            <div className="relative z-10 mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {psychologistLandingMock.support.items.map((item, index) => (
                <RevealContainer
                  key={item.title}
                  once
                  delay={index * 2}
                  fromLeft={index === 0 || index === 4}
                  fromRight={index === 3 || index === 7}
                  className="h-full"
                >
                  <div className="h-full rounded-xl bg-white border border-[#0F0E1A]/[0.08] shadow-sm p-6 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-50 border border-primary-100">
                      {supportIcons[item.icon]}
                    </div>
                    <Subtitle content={item.title} element="h3"
                      className="mt-5 !text-base !font-semibold !text-[#0F0E1A]" />
                    <Paragraph content={item.description}
                      className="mt-2 !text-sm !leading-relaxed !text-[#0F0E1A]/55" />
                  </div>
                </RevealContainer>
              ))}
            </div>
          </div>
        </Section>

        {/* ── Depoimentos ── */}
        <Section size="full" sectionClassName="!px-0 !py-0 bg-[#F4F3FC] border-b border-[#0F0E1A]/[0.07]">
          <div className="relative mx-auto w-full max-w-7xl px-6 py-20 md:px-12 md:py-24 overflow-hidden">
            <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 translate-x-1/4 translate-y-1/4 rounded-full bg-primary-100/40 blur-[80px]" />

            <FadeContainer once className="relative z-10 text-center">
              <SplitText
                text="Depoimentos"
                tag="h2"
                splitType="chars"
                delay={40}
                className="w-full text-3xl font-bold tracking-tight text-[#0F0E1A] md:text-5xl"
              />
            </FadeContainer>

            <FadeContainer once delay={1} className="relative z-10 mx-auto mt-5 max-w-2xl">
              <Paragraph
                content="Histórias de quem encontrou mais clareza, leveza emocional e segurança através do processo terapêutico com a TRG."
                className="!text-base !leading-relaxed !text-[#0F0E1A]/55 md:!text-lg text-center"
              />
            </FadeContainer>

            <div className="relative z-10 mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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

        {/* ── Dúvidas Frequentes ── */}
        <Section size="full" sectionClassName="!px-0 !py-0 bg-[#F8F7FF] border-b border-[#0F0E1A]/[0.07]">
          <div
            id="duvidas"
            className={`${anchorScrollMarginClassName} relative mx-auto w-full max-w-7xl overflow-hidden px-6 py-20 md:px-12 md:py-24`}
          >
            <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-80 w-80 -translate-x-1/3 rounded-full bg-primary-100/50 blur-[80px]" />

            <FadeContainer once className="relative z-10 text-center">
              <SplitText
                text={psychologistLandingMock.faq.title}
                tag="h2"
                splitType="chars"
                delay={40}
                className="w-full text-3xl font-bold tracking-tight text-[#0F0E1A] md:text-5xl"
              />
            </FadeContainer>

            <div className="relative z-10 mx-auto mt-12 max-w-4xl">
              <RevealContainer once delay={1}>
                <Accordeon
                  questions={psychologistLandingMock.faq.items}
                  allowMultiple
                  defaultOpen={[0]}
                  maxWidthClassName="max-w-full"
                  className="bg-white border-[#0F0E1A]/[0.10]"
                  itemClassName="text-[#0F0E1A]"
                />
              </RevealContainer>
            </div>
          </div>
        </Section>

        {/* ── CTA final — dark gradient for contrast ── */}
        <Section size="full" sectionClassName="!px-0 !py-0 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-950">
          <div
            id="contato"
            className={`${anchorScrollMarginClassName} relative overflow-hidden flex flex-col items-center mx-auto w-full`}
          >
            {/* Subtle inner glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-white/10 blur-[140px]" />
            </div>

            <FadeContainer once className="relative z-10 flex items-center px-6 py-24 md:px-10 md:py-32 lg:px-14">
              <div className="max-w-3xl flex flex-col items-center text-center">
                <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl text-white">
                  Descubra uma nova forma de viver com mais leveza e equilíbrio emocional.
                </h2>
                <p className="mt-5 text-base text-white/65 max-w-xl leading-relaxed">
                  Dê o primeiro passo em direção à transformação que você merece.
                </p>
                <div className="mt-10">
                  <button
                    type="button"
                    onClick={handleWhatsappClick}
                    className="inline-flex items-center justify-center rounded-xl bg-white px-12 py-4 text-sm font-bold uppercase tracking-widest text-primary-700 transition-opacity hover:opacity-90 cursor-pointer shadow-lg"
                  >
                    {psychologistLandingMock.finalCta.buttonLabel}
                  </button>
                </div>
              </div>
            </FadeContainer>
          </div>
        </Section>
      </main>

      {/* ── Footer ── */}
      <Footer.Root className="!border-none !bg-[#F2F1FC] !text-[#0F0E1A]/60">
        <Footer.Top columns={2} className="!py-10 !text-[#0F0E1A]/60 md:!py-12">
          <Footer.Column className="!items-start">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full bg-primary-50 border border-primary-100">
                <Image src="/trg_logo.png" alt="TRG Logo" width={28} height={28}
                  className="w-7 h-7 rounded-full" />
              </div>
              <div className="space-y-1">
                <p className="text-base font-semibold text-[#0F0E1A]">
                  {psychologistLandingMock.clinicName}
                </p>
                <Paragraph content={psychologistLandingMock.professionalRole}
                  className="!text-sm !text-[#0F0E1A]/50" />
              </div>
            </div>
          </Footer.Column>

          <Footer.Column className="!items-start">
            <div className="space-y-2">
              <Paragraph content={psychologistLandingMock.footer.registration}
                className="!text-sm !text-[#0F0E1A]/55" />
              <Paragraph content={psychologistLandingMock.footer.legalNote}
                className="!text-sm !text-[#0F0E1A]/40" />
              <a href={emailHref}
                className="inline-flex text-sm text-[#0F0E1A]/45 transition hover:text-[#0F0E1A]/80">
                E-mail: {psychologistLandingMock.email}
              </a>
            </div>
            <a href={psychologistLandingMock.reviewUrl} target="_blank" rel="noreferrer"
              className="mt-4 inline-flex w-fit text-primary-600 text-xs font-semibold uppercase tracking-[0.08em] transition hover:text-primary-700">
              Avaliar no Google
            </a>
          </Footer.Column>
        </Footer.Top>

        <Footer.SocialRow className="!bg-[#F2F1FC] !text-[#0F0E1A]/50">
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-5">
              <a href={psychologistLandingMock.instagramUrl} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#0F0E1A]/50 hover:text-[#0F0E1A] transition-colors">
                <InstagramLogoIcon className="h-4 w-4" weight="regular" />
                Instagram
              </a>
              <a href={psychologistLandingMock.whatsappUrl} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#0F0E1A]/50 hover:text-[#0F0E1A] transition-colors">
                <WhatsappLogoIcon className="h-4 w-4" weight="regular" />
                {psychologistLandingMock.phone}
              </a>
            </div>
            <div className="inline-flex items-center gap-2 text-sm text-[#0F0E1A]/40">
              <MapPinIcon className="h-4 w-4" weight="regular" />
              {psychologistLandingMock.address}
            </div>
          </div>
        </Footer.SocialRow>

        <Footer.Bottom bordered className="!border-[#0F0E1A]/[0.07] !text-[#0F0E1A]/30">
          <div className="flex w-full flex-col items-center justify-between gap-2 sm:flex-row">
            <span className="flex text-xs items-center justify-center gap-3 text-[#0F0E1A]/30">
              {new Date().getFullYear()} - Desenvolvido por{" "}
              <a href="https://www.plssistemas.com.br" target="_blank" rel="noreferrer">
                <Image src="/images/logo_pls.svg" alt="PLS Logo" width={80} height={28}
                  className="w-auto h-5 sm:h-6 opacity-50 hover:opacity-80 transition-opacity" />
              </a>
            </span>
          </div>
        </Footer.Bottom>
      </Footer.Root>

      {/* ── WhatsApp FAB ── */}
      <a
        href={psychologistLandingMock.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar no WhatsApp"
        className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg cursor-pointer transition-all duration-200 hover:bg-[#1EB857] hover:shadow-xl"
      >
        <WhatsappLogoIcon className="h-7 w-7" weight="thin" />
      </a>
    </div>
  );
}
