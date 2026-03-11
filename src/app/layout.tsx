import type { Metadata } from "next";
import { Delius, Lexend } from "next/font/google";
//@ts-ignore
import "../styles/globals.css";

const siteUrl = "https://www.camilaterapeutatrg.com.br";
const siteTitle = "Camila Almeida | Terapeuta TRG";
const siteDescription =
  "Ajudo pessoas a superar traumas emocionais, ansiedade, bloqueios e dores do passado através da Terapia de Reprocessamento Generativo, com atendimento online.";

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
  keywords: [
    "Camila Almeida",
    "Terapeuta TRG",
    "Terapia de Reprocessamento Generativo",
    "TRG",
    "terapia online",
    "ansiedade",
    "traumas emocionais",
    "bloqueios emocionais",
    "equilibrio emocional",
  ],
  authors: [{ name: "Camila Almeida" }],
  creator: "Camila Almeida",
  publisher: "Camila Almeida",
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
    siteName: "Camila Almeida - Terapeuta TRG",
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
