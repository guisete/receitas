import React from "react";
import { Logo } from "./Logo";

export function LandingFooter() {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex justify-center items-center mb-4">
          <Logo />
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} SlimForm. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-2">
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.
        </p>
      </div>
    </footer>
  );
}
