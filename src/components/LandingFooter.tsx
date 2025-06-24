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
          &copy; {new Date().getFullYear()} Ana Receitas. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
