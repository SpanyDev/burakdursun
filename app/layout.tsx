import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Burak Dursun | Full Stack Developer",
  description:
    "Modern web teknolojileri ile kullanıcı deneyimini ön planda tutan, performans odaklı uygulamalar geliştiren Full Stack Developer.",
  keywords: [
    "Burak Dursun",
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Burak Dursun" }],
  openGraph: {
    title: "Burak Dursun | Full Stack Developer",
    description:
      "Modern web teknolojileri ile kullanıcı deneyimini ön planda tutan, performans odaklı uygulamalar geliştiren Full Stack Developer.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#0a0a0a] text-white noise-overlay">
        {children}
      </body>
    </html>
  );
}
