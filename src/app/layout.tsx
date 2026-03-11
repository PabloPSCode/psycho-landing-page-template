import type { Metadata } from "next";
import { Lexend, Montserrat, Delius } from "next/font/google";
//@ts-ignore
import "../styles/globals.css";

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
  title: "Camila Almeida - Terapeuta TRG",
  description:
    "Ajudo pessoas a superar traumas emocionais, ansiedade, bloqueios e dores do passado através da Terapia de Reprocessamento Generativo.",
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
