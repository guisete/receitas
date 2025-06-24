import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leticia Receitas - Transforme seu Corpo e sua Vida",
  description: "A receita definitiva para o emagrecimento saudável e prazeroso.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn("bg-background font-body text-foreground antialiased")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
