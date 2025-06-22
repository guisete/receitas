"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

export function LandingHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "w-full transition-all duration-300",
        isScrolled ? "bg-white/80 shadow-md backdrop-blur-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Logo />
        <Button asChild className="font-bold shadow-lg transform hover:scale-105 transition-transform">
          <a href="#oferta">
            EU QUERO EMAGRECER
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </header>
  );
}
