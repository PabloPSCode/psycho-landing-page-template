"use client";

import FadeContainer from "@/components/animations-and-loading/FadeContainer";
import RevealContainer from "@/components/animations-and-loading/RevealContainer";
import ZoomContainer from "@/components/animations-and-loading/ZoomContainer";
import Button from "@/components/buttons/Button";
import Footer from "@/components/elements/Footer";
import { HeroSection } from "@/components/elements/HeroSection";
import LandingHeader from "@/components/elements/LandingHeader";
import { Section } from "@/components/elements/Section";
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

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const faqMidPoint = Math.ceil(psychologistLandingMock.faq.items.length / 2);
  const faqColumnA = psychologistLandingMock.faq.items.slice(0, faqMidPoint);

  const handleWhatsappClick = () => {
    window.open(
      psychologistLandingMock.whatsappUrl,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="overflow-x-hidden bg-background text-foreground">
      <LandingHeader.Root
        size="md"
        bordered
        sticky
        className="relative !bg-background/95 backdrop-blur"
      >
        <LandingHeader.Left className="gap-3">
          <Image
            src="/mind_logo.png"
            alt="Mind Logo"
            width={40}
            height={40}
            className="w-12 h-12 sm:w-16 sm:h-16"
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
        <HeroSection size="full" sectionClassName="!px-0 !py-0 bg-background">
          <div
            id="inicio"
            className="relative isolate w-full min-h-[calc(100vh-4.5rem)] border-b border-primary-300/60"
          >
            <Image
              src={psychologistLandingMock.hero.imageUrl}
              alt="Psicóloga em atendimento terapêutico"
              fill
              priority
              className="object-cover object-[68%_center] md:object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary-950/25 via-transparent to-primary-950/35" />

            <div className="relative mx-auto flex min-h-[calc(100vh-4.5rem)] w-full max-w-7xl items-center px-6 py-14 md:px-10 lg:px-14">
              <div className="max-w-4xl">
                <FadeContainer once>
                  <Subtitle
                    content={psychologistLandingMock.hero.eyebrow}
                    className="!text-sm !font-medium !uppercase !tracking-[0.35em] !text-white/90 md:!text-base"
                  />
                </FadeContainer>

                <RevealContainer once className="mt-5">
                  <Title
                    content={psychologistLandingMock.hero.title}
                    className="!text-5xl !font-semibold !leading-[0.95] !text-white md:!text-7xl lg:!text-8xl"
                  />
                </RevealContainer>

                <FadeContainer once delay={1} className="mt-7 max-w-3xl">
                  <Paragraph
                    content={psychologistLandingMock.hero.description}
                    className="!text-lg !leading-relaxed !text-white/90 md:!text-2xl"
                  />
                </FadeContainer>

                <ZoomContainer once delay={2} className="mt-9">
                  <Button
                    label={psychologistLandingMock.hero.ctaLabel}
                    onClick={handleWhatsappClick}
                    className="!rounded-none !bg-secondary-300 !px-8 !py-3 !text-sm !font-semibold !uppercase tracking-[0.2em] !text-primary-900"
                  />
                </ZoomContainer>
              </div>
            </div>
          </div>
        </HeroSection>

        <Section
          size="full"
          sectionClassName="!px-0 !py-0 bg-background border-b border-primary-300/60"
        >
          <div className="mx-auto w-full max-w-5xl flex flex-col items-center">
  

            <RevealContainer
              once
              className="flex justify-center px-6 py-12 md:px-10 lg:px-14"
            >
              <div className="max-w-xl">
                <Title
                  content={psychologistLandingMock.transformation.title}
                  className="!text-2xl !font-semibold !leading-tight !text-primary-700 md:!text-4xl text-center"
                />
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
          sectionClassName="!px-0 !py-0 bg-primary-700 border-b border-primary-300/60"
        >
          <div
            id="metodo"
            className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12 md:py-20"
          >
            <FadeContainer once className="mx-auto max-w-5xl text-center">
              <Title
                content={psychologistLandingMock.method.title}
                className="!text-2xl !font-semibold !leading-tight !text-white md:!text-4xl"
              />
              <Subtitle
                content={psychologistLandingMock.method.subtitle}
                className="mt-6 !text-xl !font-semibold !uppercase !tracking-wide !text-secondary-300 md:!text-2xl"
              />
            </FadeContainer>

            <div className="mt-12 grid items-center gap-10 md:grid-cols-[0.4fr_1fr]">
              <ZoomContainer once className="mx-auto">
                <div className="flex h-56 w-56 items-center justify-center rounded-full border-4 border-secondary-300/60 bg-primary-600">
                  <BrainIcon
                    className="h-24 w-24 text-secondary-200"
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
          sectionClassName="!px-0 !py-0 bg-secondary-300 border-b border-primary-300/60"
        >
          <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12 md:py-20">
            <FadeContainer once className="text-center">
              <Title
                content={psychologistLandingMock.support.title}
                className="!text-4xl !font-semibold !text-primary-700 md:!text-5xl"
              />
            </FadeContainer>

            <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {psychologistLandingMock.support.items.map((item, index) => (
                <ZoomContainer
                  key={item.title}
                  once
                  delay={index}
                  className="h-full rounded-2xl bg-white/70 p-6 text-center shadow-sm"
                >
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-md">
                    {supportIcons[item.icon]}
                  </div>
                  <Subtitle
                    content={item.title}
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
                <Title
                  content={psychologistLandingMock.about.title}
                  className="!text-4xl !font-semibold !text-primary-700 md:!text-5xl"
                />
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
                  className="mt-7 !text-xl !font-semibold !text-primary-700 md:!text-2xl"
                />
                <Button
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
                src={psychologistLandingMock.transformation.imageUrl}
                alt="Psicóloga em ambiente de consultório"
                fill
                className="object-cover object-center"
              />
            </FadeContainer>
          </div>
        </Section>

        <Section
          size="full"
          sectionClassName="!px-0 !py-0 bg-secondary-300 border-b border-primary-300/60"
        >
          <div
            id="duvidas"
            className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12 md:py-20"
          >
            <FadeContainer once className="text-center">
              <Title
                content={psychologistLandingMock.faq.title}
                className="!text-4xl !font-semibold !text-primary-700 md:!text-5xl"
              />
            </FadeContainer>

            <div className="mt-12 flex flex-col max-w-5xl gap-10 mx-auto md:flex-row">
              {[faqColumnA].map((column, columnIndex) => (
                <RevealContainer
                  key={`faq-column-${columnIndex}`}
                  once
                  delay={columnIndex}
                  className="h-full"
                >
                  <Accordeon
                    questions={column}
                    allowMultiple
                    defaultOpen={[0]}
                    maxWidthClassName="max-w-full"
                    className="h-full !border-primary-200/70 !bg-secondary-100/55"
                    itemClassName="text-primary-800"
                  />
                </RevealContainer>
              ))}
            </div>
          </div>
        </Section>

        <Section
          size="full"
          sectionClassName="!px-0 !py-0 bg-background border-b border-primary-300/60"
        >
          <div id="contato" className="flex flex-col items-center mx-auto">
            <FadeContainer
              once
              className="flex items-center px-6 py-12 md:px-10 lg:px-14"
            >
              <div className="max-w-5xl">
                <Title
                  content={psychologistLandingMock.finalCta.title}
                  className="!text-2xl !font-semibold !leading-tight !text-primary-700 md:!text-4xl mb-8 text-center"
                />
                <Paragraph
                  content={psychologistLandingMock.finalCta.description}
                  className="!text-lg !leading-relaxed !text-foreground/90 md:!text-2xl text-center"
                />
                <Button
                  label={psychologistLandingMock.finalCta.buttonLabel}
                  onClick={handleWhatsappClick}
                  className="mt-8 !rounded-xl !bg-primary-600 !px-8 !py-3 !text-sm !font-semibold !uppercase tracking-[0.08em] !text-white mx-auto"
                />
              </div>
            </FadeContainer>
          </div>
        </Section>
      </main>

      <Footer.Root className="!border-none !bg-primary-700 !text-white">
        <Footer.Top
          columns={2}
          className="!py-10 !text-white md:!py-12"
          bordered
        >
          <Footer.Column className="!items-start">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-secondary-300/30">
                <BrainIcon
                  className="h-7 w-7 text-secondary-200"
                  weight="regular"
                />
              </div>
              <div className="space-y-2">
                <Subtitle
                  content={psychologistLandingMock.clinicName}
                  className="!text-xl !font-semibold !text-white"
                />
                <Paragraph
                  content={psychologistLandingMock.professionalRole}
                  className="!text-sm !text-white/80 md:!text-base"
                />
              </div>
            </div>
          </Footer.Column>

          <Footer.Column className="!items-start">
            <div className="space-y-2">
              <Paragraph
                content={psychologistLandingMock.footer.registration}
                className="!text-sm !text-white/90 md:!text-base"
              />
              <Paragraph
                content={psychologistLandingMock.footer.legalNote}
                className="!text-sm !text-white/75 md:!text-base"
              />
              <Paragraph
                content={`E-mail: ${psychologistLandingMock.email}`}
                className="!text-sm !text-white/75 md:!text-base"
              />
            </div>
          </Footer.Column>
        </Footer.Top>

        <Footer.SocialRow bordered className="!bg-primary-700 !text-white">
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={psychologistLandingMock.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white"
              >
                <InstagramLogoIcon className="h-5 w-5" weight="regular" />
                Instagram
              </a>
              <a
                href={psychologistLandingMock.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white"
              >
                <WhatsappLogoIcon className="h-5 w-5" weight="regular" />
                {psychologistLandingMock.phone}
              </a>
            </div>
            <div className="inline-flex items-center gap-2 text-sm text-white/90">
              <MapPinIcon className="h-5 w-5" weight="regular" />
              {psychologistLandingMock.address}
            </div>
          </div>
        </Footer.SocialRow>

        <Footer.Bottom bordered className="!text-white">
          <div className="flex w-full flex-col items-center justify-between gap-2 sm:flex-row">
            <Paragraph
              content={psychologistLandingMock.footer.copyright}
              className="!text-sm !text-white/80"
            />
            <Paragraph
              content={psychologistLandingMock.pageName}
              className="!text-sm !text-white/80"
            />
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
