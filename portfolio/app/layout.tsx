import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://m-muneeb-iqbal.github.io"),
  title: "Muhammad Muneeb Iqbal | Full-Stack Developer",
  description:
    "Portfolio of Muhammad Muneeb Iqbal, Full-Stack Developer specializing in MERN stack, Flutter, Node.js, and modern web application development.",
  keywords: [
    "Muhammad Muneeb Iqbal",
    "Full-Stack Developer",
    "MERN Stack",
    "React",
    "Node.js",
    "Flutter",
    "TypeScript",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Muneeb Iqbal" }],
  creator: "Muhammad Muneeb Iqbal",
  openGraph: {
    title: "Muhammad Muneeb Iqbal | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in MERN stack, Flutter, Node.js, and modern scalable web applications.",
    url: "https://m-muneeb-iqbal.github.io",
    siteName: "Muhammad Muneeb Iqbal Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 800,
        alt: "Muhammad Muneeb Iqbal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/15 selection:text-primary">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={200}>
            {children}
            <Toaster position="bottom-right" closeButton />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}