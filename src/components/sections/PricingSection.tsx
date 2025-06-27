"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Timer } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const includedFeatures = [
  { text: "15 Receitas para Queima Rápida de Gordura", highlight: true },
  { text: "Guia de Planejamento Semanal", highlight: false },
  { text: "Bônus: Lista de Compras Inteligente", highlight: false },
  { text: "Bônus: Guia Profissional de Sucos Detox", highlight: true },
  { text: "Acesso Vitalício e Atualizações Gratuitas", highlight: false },
  { text: "Garantia 30 de dias", highlight: false },
];

export function PricingSection() {
  const [isClient, setIsClient] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 30,
    seconds: 0,
  });

  useEffect(() => {
    setIsClient(true);
    
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const totalSeconds =
          prevTime.hours * 3600 +
          prevTime.minutes * 60 +
          prevTime.seconds -
          1;
        if (totalSeconds < 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, "0");

  const handleInitiateCheckout = () => {
    if (typeof window['fbq'] === 'function') {
      window['fbq']('track', 'InitiateCheckout');
    }
  };

  return (
    <section id="oferta" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-accent rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="text-center lg:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 justify-center lg:justify-start">
                <h2 className="text-3xl font-extrabold sm:text-4xl font-headline text-accent-foreground">
                  Sua <span className="text-primary">Transformação</span> Começa
                  Agora!
                </h2>
                <Badge variant="destructive" className="text-base font-bold py-1 px-3 self-center sm:self-auto -rotate-3">
                  70% OFF HOJE
                </Badge>
              </div>
              <p className="mt-4 text-lg text-accent-foreground/80">
                Acesso imediato a tudo que você precisa para conquistar o corpo
                dos seus sonhos de uma vez por todas.
              </p>

              <div className="mt-8 bg-primary/10 border-2 border-dashed border-primary/50 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center gap-2 text-primary">
                  <Timer className="h-6 w-6" />
                  <p className="font-bold text-lg">Oferta termina em:</p>
                </div>
                <div className="text-4xl font-extrabold text-primary font-headline tracking-tighter mt-2">
                  <span>{formatTime(timeLeft.hours)}</span>:
                  <span>{formatTime(timeLeft.minutes)}</span>:
                  <span>{formatTime(timeLeft.seconds)}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center lg:items-start">
                <p className="text-accent-foreground/70 text-lg">
                  De <span className="line-through">R$33,30</span> por apenas:
                </p>
                <p className="font-headline text-5xl sm:text-6xl font-extrabold text-primary">
                  R$9,99
                </p>
                <p className="text-accent-foreground/70 mt-1">
                 
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0 bg-card rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold font-headline text-center">
                O que você vai receber:
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {includedFeatures.map((feature) => (
                  <li key={feature.text} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check
                        className="h-6 w-6 text-green-500"
                        aria-hidden="true"
                      />
                    </div>
                    <p
                      className={cn(
                        "ml-3 text-base text-muted-foreground",
                        feature.highlight && "font-bold text-card-foreground"
                      )}
                    >
                      {feature.text}
                    </p>
                  </li>
                ))}
              </ul>
              {isClient && (
                <>
                  <Button
                    asChild
                    size="lg"
                    className="w-full mt-8 font-extrabold text-lg py-7 h-auto whitespace-normal"
                  >
                    <a
                      href="https://go.disruptybr.shop/mi8wzkocpw"
                      onClick={handleInitiateCheckout}
                    >
                      SIM, QUERO ACESSO IMEDIATO!
                      <ArrowRight className="ml-2 h-6 w-6" />
                    </a>
                  </Button>
                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    Compra segura. Garantia de 30 dias.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
