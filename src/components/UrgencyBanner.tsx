"use client";

import { useState, useEffect } from "react";
import { AlertTriangle, X } from "lucide-react";

export function UrgencyBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const wasClosed = sessionStorage.getItem("urgencyBannerClosed");
    if (!wasClosed) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("urgencyBannerClosed", "true");
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-primary text-primary-foreground text-center p-3 relative font-bold text-sm">
      <div className="container mx-auto flex items-center justify-center gap-2 pr-8 sm:pr-0">
        <AlertTriangle className="h-5 w-5 flex-shrink-0" />
        <span>
          OFERTA ESPECIAL: Desconto de 70% termina hoje!{" "}
          <a
            href="#oferta"
            className="underline hover:text-primary-foreground/80"
          >
            Aproveite agora!
          </a>
        </span>
      </div>
      <button
        onClick={handleClose}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-black/10 transition-colors"
        aria-label="Fechar aviso"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}
