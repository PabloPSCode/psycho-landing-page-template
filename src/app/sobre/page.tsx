"use client";

import FadeContainer from "@/components/animations-and-loading/FadeContainer";
import RevealContainer from "@/components/animations-and-loading/RevealContainer";
import SplitText from "@/components/animations-and-loading/SplittedText";
import ZoomContainer from "@/components/animations-and-loading/ZoomContainer";
import VideoSection from "@/components/elements/VideoSection";
import Button from "@/components/buttons/Button";
import TiltedCard from "@/components/cards/TiltedCard";
import Footer from "@/components/elements/Footer";
import LandingHeader from "@/components/elements/LandingHeader";
import { Section } from "@/components/elements/Section";
import Paragraph from "@/components/typography/Paragraph";
import Subtitle from "@/components/typography/Subtitle";
import { psychologistLandingMock } from "@/mocks/psychologistLanding";
import {
  BrainIcon,
  InstagramLogoIcon,
  MapPinIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const emailHref = `mailto:${psychologistLandingMock.email}`;

export default function SobrePage() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleWhatsappClick = () => {
    window.open(
      psychologistLandingMock.whatsappUrl,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="overflow-x-hidden bg-white text-[#0F0E1A]">
      <LandingHeader.Root
        size="md"
        bordered
        sticky
        className="!bg-white/95 backdrop-blur-xl !border-[#0F0E1A]/[0.07] fixed!"
      >
        <LandingHeader.Left className="gap-3">
          <Link href="/" aria-label="Ir para o início">
            <Image
              src="/trg_logo.png"
              alt="TRG Logo"
              width={32}
              height={32}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full ml-8"
            />
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
          <LandingHeader.MobileMenuToggle
            open={showMobileMenu}
            onToggle={setShowMobileMenu as never}
          />
          <LandingHeader.MobileMenuPanel
            open={showMobileMenu}
            cta={
              <LandingHeader.CTA
                label={psychologistLandingMock.hero.ctaLabel}
                className="!bg-gradient-to-r !from-primary-500 !to-primary-800 !text-white !rounded-xl w-full justify-center"
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
            className="!bg-primary-400 !text-white !rounded-xl hidden md:flex"
            label={psychologistLandingMock.hero.ctaLabel}
            onClick={handleWhatsappClick}
          />
        </LandingHeader.Right>
      </LandingHeader.Root>

      <main className="flex flex-col">
        {/* ── Vídeo hero ── */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-black/70 via-black/60 to-black/40" />
          {/* Violet ambient orb */}
          <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary-600/15 blur-[120px]" />
          </div>
          <VideoSection
            size="full"
            videoUrl="/videos/therapist.mp4"
            showPlayPauseButton={false}
            showOverlay
            containerClassName="!min-h-[88vh] bg-transparent"
          />
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center h-full">
            <div className="mx-auto my-auto min-h-[95vh] flex w-full max-w-7xl items-center justify-center px-6 pb-16 lg:px-8">
              <RevealContainer
                once
                className="pointer-events-auto m-auto space-y-6 max-w-4xl text-center"
              >
                <FadeContainer once className="mt-12">
                  <Subtitle
                    content={psychologistLandingMock.hero.eyebrow}
                    className="!text-xs !font-semibold !uppercase !tracking-[0.4em] !text-primary-400 !text-center"
                  />
                </FadeContainer>
                <RevealContainer once>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white text-center">
                    {psychologistLandingMock.hero.title}
                  </h1>
                </RevealContainer>
                <FadeContainer
                  once
                  className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center pt-2"
                >
                  <Button
                    type="button"
                    label="AGENDAR SESSÃO"
                    onClick={handleWhatsappClick}
                    className="!bg-primary-400 !text-white !font-bold !rounded-xl !px-8 !py-4 !text-sm !uppercase !tracking-widest !shadow-none transition-opacity hover:!opacity-90"
                  />
                </FadeContainer>
              </RevealContainer>
            </div>
          </div>
        </section>

        {/* ── Método TRG ── */}
        <Section
          size="full"
          sectionClassName="!px-0 !py-0 bg-[#F8F7FF] border-b border-[#0F0E1A]/[0.07]"
        >
          <div
            id="metodo"
            className="relative mx-auto w-full max-w-7xl overflow-hidden px-6 py-20 md:px-12 md:py-24"
          >
            {/* Ambient glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary-100/60 blur-[120px]" />
            </div>

            <FadeContainer
              once
              className="relative z-10 mx-auto max-w-7xl text-center"
            >
              <SplitText
                text={psychologistLandingMock.method.title}
                tag="h2"
                splitType="words"
                delay={80}
                className="w-full text-2xl font-bold leading-tight tracking-tight text-[#0F0E1A] md:text-5xl"
              />
              <Subtitle
                content={psychologistLandingMock.method.subtitle}
                element="h3"
                className="mt-6 !text-xl !font-semibold !uppercase !tracking-wide !text-primary-600 md:!text-2xl"
              />
            </FadeContainer>

            <div className="relative z-10 mt-12 flex flex-col items-center gap-10">
              <ZoomContainer once className="mx-auto">
                <div className="relative flex h-52 w-52 items-center justify-center rounded-full bg-primary-50 border border-primary-100 shadow-lg">
                  <div className="absolute inset-4 rounded-full border border-primary-100" />
                  <BrainIcon
                    className="h-20 w-20 text-primary-600"
                    weight="regular"
                  />
                </div>
              </ZoomContainer>

              <RevealContainer
                once
                className="space-y-5 flex flex-col items-center"
              >
                <Paragraph
                  content="A TRG é uma abordagem terapêutica que ajuda a pessoa a reprocessar memórias dolorosas e emoções negativas armazenadas no cérebro."
                  className="!text-base !leading-[1.8] !text-[#0F0E1A]/65 md:!text-lg text-center max-w-3xl"
                />
                <Paragraph
                  content="Durante as sessões, trabalhamos para que o cérebro reorganize essas experiências, reduzindo o sofrimento emocional e trazendo mais paz e equilíbrio."
                  className="!text-base !leading-[1.8] !text-[#0F0E1A]/65 md:!text-lg text-center max-w-3xl"
                />
                <Button
                  label={psychologistLandingMock.method.ctaLabel}
                  onClick={handleWhatsappClick}
                  className="mt-6 !bg-gradient-to-r !from-primary-500 !to-primary-800 !text-white !font-bold !rounded-xl !px-8 !py-4 !text-sm !uppercase !tracking-widest m-auto transition-opacity hover:!opacity-90"
                />
              </RevealContainer>
            </div>
          </div>
        </Section>

        {/* ── Sobre a Camila ── */}
        <Section
          size="full"
          sectionClassName="!px-0 !py-0 bg-white border-b border-[#0F0E1A]/[0.07]"
        >
          <div
            id="sobre"
            className="mx-auto grid w-full max-w-7xl md:grid-cols-[1.05fr_0.95fr]"
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
                  className="w-full text-2xl font-bold tracking-tight text-[#0F0E1A] md:text-3xl text-center mx-auto"
                  textAlign="center"
                />

                <div className="mt-6 space-y-4">
                  {psychologistLandingMock.about.paragraphs.map((text) => (
                    <Paragraph
                      key={text}
                      content={text}
                      className="!text-base !leading-[1.8] !text-[#0F0E1A]/65 text-center"
                    />
                  ))}
                </div>

                <div className="mt-8 scale-105 sm:scale-115">
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
                  className="mt-7 !text-xl !font-semibold !text-[#0F0E1A] md:!text-2xl max-w-sm mx-auto text-center"
                />
                <Button
                  label={psychologistLandingMock.about.ctaLabel}
                  onClick={handleWhatsappClick}
                  className="mt-7 !bg-gradient-to-r !from-primary-500 !to-primary-800 !text-white !font-bold !rounded-xl !px-8 !py-4 !text-sm !uppercase !tracking-widest mx-auto transition-opacity hover:!opacity-90"
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
                className="object-contain object-center pb-8 md:pb-0"
              />
            </FadeContainer>
          </div>
        </Section>
      </main>

      <Footer.Root className="!border-none !bg-[#F2F1FC] !text-[#0F0E1A]/60 !border-[#0F0E1A]/[0.07]">
        <Footer.Top columns={2} className="!py-10 !text-[#0F0E1A]/60 md:!py-12">
          <Footer.Column className="!items-start">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 border border-primary-100">
                <Image
                  src="/trg_logo.png"
                  alt="TRG Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 sm:w-12 sm:h-12 rounded-full"
                />
              </div>
              <div className="space-y-2">
                <p className="text-xl font-semibold text-[#0F0E1A]">
                  {psychologistLandingMock.clinicName}
                </p>
                <Paragraph
                  content={psychologistLandingMock.professionalRole}
                  className="!text-sm !text-[#0F0E1A]/50 md:!text-base"
                />
              </div>
            </div>
          </Footer.Column>

          <Footer.Column className="!items-start">
            <div className="space-y-2">
              <Paragraph
                content={psychologistLandingMock.footer.registration}
                className="!text-sm !text-[#0F0E1A]/50 md:!text-base"
              />
              <Paragraph
                content={psychologistLandingMock.footer.legalNote}
                className="!text-sm !text-[#0F0E1A]/40 md:!text-base"
              />
              <a
                href={emailHref}
                className="inline-flex text-sm text-[#0F0E1A]/50 transition hover:text-[#0F0E1A] md:text-base"
              >
                E-mail: {psychologistLandingMock.email}
              </a>
            </div>
          </Footer.Column>
        </Footer.Top>

        <Footer.SocialRow className="!bg-[#F2F1FC] !text-[#0F0E1A]/50">
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={psychologistLandingMock.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#0F0E1A]/50 hover:text-[#0F0E1A]"
              >
                <InstagramLogoIcon className="h-5 w-5" weight="regular" />
                Instagram
              </a>
              <a
                href={psychologistLandingMock.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#0F0E1A]/50 hover:text-[#0F0E1A]"
              >
                <WhatsappLogoIcon className="h-5 w-5" weight="regular" />
                {psychologistLandingMock.phone}
              </a>
            </div>
            <div className="inline-flex items-center gap-2 text-sm text-[#0F0E1A]/40">
              <MapPinIcon className="h-5 w-5" weight="regular" />
              {psychologistLandingMock.address}
            </div>
          </div>
        </Footer.SocialRow>

        <Footer.Bottom bordered className="!border-[#0F0E1A]/[0.07] !text-[#0F0E1A]/30">
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
                  className="w-auto h-6 sm:h-8 rounded-full opacity-60 hover:opacity-90"
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
        className="fixed bottom-6 right-6 z-40 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl cursor-pointer transition-all duration-200 hover:bg-[#1EB857] hover:shadow-2xl"
      >
        <WhatsappLogoIcon className="h-8 w-8" weight="regular" />
      </a>
    </div>
  );
}
