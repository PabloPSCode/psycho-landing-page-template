"use client";

import { type BlogPost, excerpt, stripHtml } from "@/api/blog";
import Button from "@/components/buttons/Button";
import Footer from "@/components/elements/Footer";
import LandingHeader from "@/components/elements/LandingHeader";
import SearchInput from "@/components/inputs/SearchInput";
import Paragraph from "@/components/typography/Paragraph";
import { psychologistLandingMock } from "@/mocks/psychologistLanding";
import {
  CalendarIcon,
  InstagramLogoIcon,
  MapPinIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDate(dateStr: string): string {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateStr));
}

interface BlogCardProps {
  post: BlogPost;
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.id ?? ""}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-white border border-[#0F0E1A]/[0.08] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
    >
      <div className="relative h-52 overflow-hidden bg-[#F8F7FF]">
        <Image
          src={post.backgroundUrl}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold leading-snug text-[#0F0E1A] group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
          {post.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[#0F0E1A]/65 line-clamp-3">
          {excerpt(post.htmlContent)}
        </p>

        <div className="mt-auto pt-5 flex items-center gap-4 border-t border-[#0F0E1A]/[0.07] text-xs text-[#0F0E1A]/45">
          <span className="inline-flex items-center gap-1.5">
            <CalendarIcon size={13} weight="bold" />
            {formatDate(post.createdAt)}
          </span>
        </div>
      </div>
    </Link>
  );
}

interface BlogListingPageProps {
  blogPosts: BlogPost[];
}

export default function BlogListingPage({ blogPosts }: BlogListingPageProps) {
  const [search, setSearch] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const normalizedSearch = normalize(search);
  const filteredPosts = blogPosts.filter((post) => {
    if (!normalizedSearch) return true;
    const searchable = normalize(
      [post.title, stripHtml(post.htmlContent)].join(" "),
    );
    return searchable.includes(normalizedSearch);
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    document
      .getElementById("blog-results")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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

      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden border-b border-[#0F0E1A]/[0.07] bg-white pt-10">
  

          <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-8 text-center sm:px-8 sm:py-10">
            <h1 className="mt-8 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-tight text-[#0F0E1A]">
              Conteúdos sobre saúde emocional e TRG
            </h1>

            <p className="mt-6 max-w-2xl text-center text-base font-light leading-8 text-[#0F0E1A]/60 sm:text-lg">
              Artigos sobre ansiedade, traumas, reprocessamento emocional e bem-estar,
              escritos para quem busca mais leveza e equilíbrio na vida.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 flex w-full max-w-2xl flex-col gap-3 rounded-xl bg-white border border-[#0F0E1A]/[0.10] p-3 sm:flex-row sm:items-center"
            >
              <SearchInput
                search={search}
                setSearch={setSearch}
                onCancelSearch={() => setSearch("")}
                placeholder="Pesquise por ansiedade, TRG, trauma..."
                containerClassName="flex-1"
                className="!my-0 !h-12 !rounded-xl !border-[#0F0E1A]/[0.12] !bg-white !px-3 text-[#0F0E1A] placeholder:!text-[#0F0E1A]/40"
              />
              <Button
                type="submit"
                label="Buscar"
                className="h-12 w-full !rounded-xl !bg-gradient-to-r !from-primary-500 !to-primary-800 px-6 text-sm font-semibold !text-white sm:w-auto"
              />
            </form>
          </div>
        </section>

        {/* ── Posts ── */}
        <section
          id="blog-results"
          className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 scroll-mt-24"
        >
          <div className="flex flex-col gap-3 border-b border-[#0F0E1A]/[0.07] pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#0F0E1A] sm:text-3xl">
                {normalizedSearch ? "Resultados da busca" : "Publicações"}
              </h2>
              <Paragraph
                content={
                  normalizedSearch
                    ? `${filteredPosts.length} resultado(s) para "${search.trim()}"`
                    : `${blogPosts.length} publicações disponíveis`
                }
                className="mt-2 !text-sm !text-[#0F0E1A]/65 sm:!text-base"
              />
            </div>

            {normalizedSearch ? (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="w-fit text-sm font-semibold text-primary-600 transition hover:text-primary-700 cursor-pointer"
              >
                Limpar busca
              </button>
            ) : null}
          </div>

          {filteredPosts.length ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id ?? post.title} post={post} />
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-xl border border-dashed border-[#0F0E1A]/[0.10] bg-[#F8F7FF] p-8 text-center sm:p-12">
              <h3 className="text-xl font-bold tracking-tight text-[#0F0E1A] sm:text-2xl">
                Nenhum conteúdo encontrado
              </h3>
              <Paragraph
                content="Tente uma busca mais ampla ou limpe o filtro para ver todos os posts."
                className="mx-auto mt-4 max-w-xl !text-sm leading-7 !text-[#0F0E1A]/60 sm:!text-base"
              />
              <Button
                type="button"
                label="Ver todos os posts"
                onClick={() => setSearch("")}
                className="mx-auto mt-6 !rounded-xl !bg-gradient-to-r !from-primary-500 !to-primary-800 px-6 py-3 !text-white"
              />
            </div>
          )}
        </section>
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
                <p className="text-sm text-[#0F0E1A]/50">
                  {psychologistLandingMock.professionalRole}
                </p>
              </div>
            </div>
          </Footer.Column>

          <Footer.Column className="!items-start">
            <div className="space-y-2">
              <p className="text-sm text-[#0F0E1A]/50">
                {psychologistLandingMock.footer.registration}
              </p>
              <p className="text-sm text-[#0F0E1A]/40">
                {psychologistLandingMock.footer.legalNote}
              </p>
              <a
                href={emailHref}
                className="inline-flex text-sm text-[#0F0E1A]/50 transition hover:text-[#0F0E1A]"
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
