"use client";

import Breadcrumb from "@/components/navigation/BreadCrumb";
import Footer from "@/components/elements/Footer";
import LandingHeader from "@/components/elements/LandingHeader";
import Paragraph from "@/components/typography/Paragraph";
import { psychologistLandingMock } from "@/mocks/psychologistLanding";
import { type BlogPost, excerpt, formatBlogDate } from "@/api/blog";
import {
  CalendarIcon,
  InstagramLogoIcon,
  MapPinIcon,
  WhatsappLogoIcon,
  ArrowLeftIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface BlogPostDetailsProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPostDetails({ post, relatedPosts }: BlogPostDetailsProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const emailHref = `mailto:${psychologistLandingMock.email}`;

  return (
    <div className="overflow-x-hidden bg-white text-[#0F0E1A]">
      <LandingHeader.Root
        size="md"
        bordered
        sticky
        className="!bg-white/95 backdrop-blur-xl !border-[#0F0E1A]/[0.07] fixed!"
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
                className="!bg-gradient-to-r !from-primary-500 !to-primary-800 !text-white !rounded-xl w-full justify-center"
                onClick={() =>
                  window.open(
                    psychologistLandingMock.whatsappUrl,
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
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
            className="!bg-gradient-to-r !from-primary-500 !to-primary-800 !text-white !rounded-xl hidden md:flex"
            label={psychologistLandingMock.hero.ctaLabel}
            onClick={() =>
              window.open(
                psychologistLandingMock.whatsappUrl,
                "_blank",
                "noopener,noreferrer",
              )
            }
          />
        </LandingHeader.Right>
      </LandingHeader.Root>

      <main className="pt-20">
        {/* ── Post hero ── */}
        <section className="relative overflow-hidden border-b border-[#0F0E1A]/[0.07] bg-[#F8F7FF]">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary-100/60 blur-[120px]" />
            <div className="absolute right-[-4rem] bottom-0 h-64 w-64 rounded-full bg-primary-100/40 blur-3xl" />
          </div>

          <div className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-8">
            <Breadcrumb
              currentPath={`/blog/${post.id}`}
              rootLabel="Início"
              labelMap={{ blog: "Blog", [post.id ?? ""]: post.title }}
              separator="•"
              className="[&_a]:text-primary-600 [&_a:hover]:text-primary-700 [&_span]:text-[#0F0E1A]"
            />

            <h1 className="mt-6 max-w-4xl text-3xl font-bold tracking-tight text-[#0F0E1A] sm:text-4xl lg:text-5xl leading-tight">
              {post.title}
            </h1>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#0F0E1A]/[0.07] bg-white px-3 py-2 text-sm text-[#0F0E1A]/65">
              <CalendarIcon size={14} weight="bold" />
              {formatBlogDate(post.createdAt)}
            </div>
          </div>
        </section>

        {/* ── Content + Sidebar ── */}
        <div className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-8 lg:grid lg:grid-cols-[minmax(0,1.5fr)_300px] lg:gap-12">
          {/* Article */}
          <div className="min-w-0">
            <div className="relative overflow-hidden rounded-2xl border border-[#0F0E1A]/[0.08]">
              <Image
                src={post.backgroundUrl}
                alt={post.title}
                width={1200}
                height={630}
                priority
                className="h-auto w-full object-cover"
              />
            </div>

            <article
              className="mt-10 rounded-2xl border border-[#0F0E1A]/[0.08] bg-white p-6 shadow-sm sm:p-10
                [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-[#0F0E1A] sm:[&_h2]:text-3xl
                [&_h2:first-child]:mt-0
                [&_p]:mt-4 [&_p]:text-base [&_p]:leading-8 [&_p]:text-[#0F0E1A]/70
                [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5
                [&_li]:text-sm [&_li]:leading-7 [&_li]:text-[#0F0E1A]/65 sm:[&_li]:text-base
                [&_blockquote]:mt-6 [&_blockquote]:border-l-4 [&_blockquote]:border-primary-500 [&_blockquote]:pl-5 [&_blockquote]:text-lg [&_blockquote]:leading-8 [&_blockquote]:text-[#0F0E1A]/75
                [&_strong]:font-semibold [&_strong]:text-[#0F0E1A]"
              dangerouslySetInnerHTML={{ __html: post.htmlContent }}
            />

            <Link
              href="/blog"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition hover:text-primary-700"
            >
              <ArrowLeftIcon size={16} weight="bold" />
              Voltar para o Blog
            </Link>
          </div>

          {/* Sidebar */}
          <aside className="mt-12 space-y-6 lg:mt-0 lg:sticky lg:top-28 lg:h-fit">
            {/* Related posts */}
            {relatedPosts.length > 0 && (
              <div className="rounded-2xl border border-[#0F0E1A]/[0.08] bg-white p-6 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F0E1A]/40">
                  Relacionados
                </span>
                <h2 className="mt-2 text-lg font-semibold text-[#0F0E1A]">
                  Continue lendo
                </h2>
                <div className="mt-5 divide-y divide-[#0F0E1A]/[0.07]">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.id ?? related.title}
                      href={`/blog/${related.id ?? ""}`}
                      className="group flex gap-3 py-4 first:pt-0 last:pb-0 cursor-pointer"
                    >
                      <div className="relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-[#F8F7FF]">
                        <Image
                          src={related.backgroundUrl}
                          alt={related.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium leading-snug text-[#0F0E1A]/90 group-hover:text-primary-600 transition-colors line-clamp-2">
                          {related.title}
                        </p>
                        <p className="mt-1 text-xs text-[#0F0E1A]/45">
                          {formatBlogDate(related.createdAt)}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* WhatsApp CTA */}
            <div className="rounded-2xl border border-primary-100 bg-primary-50 p-6">
              <p className="text-sm font-semibold text-[#0F0E1A]">
                Quer começar sua jornada de transformação?
              </p>
              <Paragraph
                content="Entre em contato e agende uma sessão de TRG com a Camila Almeida."
                className="mt-2 !text-xs !leading-relaxed !text-[#0F0E1A]/65"
              />
              <a
                href={psychologistLandingMock.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-primary-800 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 cursor-pointer"
              >
                <WhatsappLogoIcon className="h-4 w-4" weight="regular" />
                Agendar sessão
              </a>
            </div>
          </aside>
        </div>
      </main>

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
                <p className="text-sm text-[#0F0E1A]/50">
                  {psychologistLandingMock.professionalRole}
                </p>
              </div>
            </div>
          </Footer.Column>
          <Footer.Column className="!items-start">
            <div className="space-y-2">
              <p className="text-sm text-[#0F0E1A]/55">
                {psychologistLandingMock.footer.registration}
              </p>
              <p className="text-sm text-[#0F0E1A]/40">
                {psychologistLandingMock.footer.legalNote}
              </p>
              <a href={emailHref}
                className="inline-flex text-sm text-[#0F0E1A]/45 transition hover:text-[#0F0E1A]/80">
                E-mail: {psychologistLandingMock.email}
              </a>
            </div>
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
          <span className="flex text-xs items-center justify-center gap-3 text-[#0F0E1A]/30">
            {new Date().getFullYear()} - Desenvolvido por{" "}
            <a href="https://www.plssistemas.com.br" target="_blank" rel="noreferrer">
              <Image src="/images/logo_pls.svg" alt="PLS Logo" width={80} height={28}
                className="w-auto h-5 sm:h-6 opacity-50 hover:opacity-80 transition-opacity" />
            </a>
          </span>
        </Footer.Bottom>
      </Footer.Root>

      <a
        href={psychologistLandingMock.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar no WhatsApp"
        className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg cursor-pointer transition-all duration-200 hover:bg-[#1EB857] hover:shadow-xl"
      >
        <WhatsappLogoIcon className="h-7 w-7" weight="regular" />
      </a>
    </div>
  );
}
