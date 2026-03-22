import type { Metadata } from "next";
import { psychologistLandingMock } from "@/mocks/psychologistLanding";
import { Delius, Lexend } from "next/font/google";
//@ts-ignore
import "../styles/globals.css";

const siteUrl = psychologistLandingMock.siteUrl;
const siteTitle = psychologistLandingMock.seo.title;
const siteDescription = psychologistLandingMock.seo.description;

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const delius = Delius({
  variable: "--font-delius",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: "Camila Almeida - Terapeuta TRG",
  keywords: psychologistLandingMock.seo.keywords,
  authors: [{ name: psychologistLandingMock.professionalName }],
  creator: psychologistLandingMock.professionalName,
  publisher: psychologistLandingMock.professionalName,
  category: "Saúde emocional",
  classification: "Terapia TRG e atendimento emocional",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: psychologistLandingMock.pageName,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 2725,
        height: 920,
        alt: "Camila Almeida - Terapeuta TRG",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/og-image.png`],
  },
  other: {
    "geo.region": `BR-${psychologistLandingMock.location.stateCode}`,
    "geo.placename": psychologistLandingMock.location.serviceAreaLabel,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${lexend.variable} ${delius.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
