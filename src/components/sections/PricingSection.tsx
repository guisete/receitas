import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";

const includedFeatures = [
  "Livro de Receitas SlimForm (PDF)",
  "Guia de Planejamento Semanal",
  "Bônus: Lista de Compras Inteligente",
  "Bônus: Guia de Sucos Detox",
  "Acesso Vitalício e Atualizações Gratuitas",
];

export function PricingSection() {
  return (
    <section id="oferta" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-accent rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-extrabold sm:text-4xl font-headline text-accent-foreground">
                Sua <span className="text-primary">Transformação</span> Começa Agora!
              </h2>
              <p className="mt-4 text-lg text-accent-foreground/80">
                Acesso imediato a tudo que você precisa para conquistar o corpo dos seus sonhos de uma vez por todas.
              </p>
              <div className="mt-8 flex flex-col items-center lg:items-start">
                  <p className="text-accent-foreground/70 text-lg">De <span className="line-through">R$97,00</span> por apenas:</p>
                  <p className="font-headline text-5xl sm:text-6xl font-extrabold text-primary">
                    12x R$2,90
                  </p>
                  <p className="text-accent-foreground/70 mt-1">ou R$29,90 à vista</p>
              </div>
            </div>
            
            <div className="mt-10 lg:mt-0 bg-card rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold font-headline text-center">O que você vai receber:</h3>
              <ul role="list" className="mt-6 space-y-4">
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-green-500" aria-hidden="true" />
                    </div>
                    <p className="ml-3 text-base text-muted-foreground">{feature}</p>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="w-full mt-8 font-extrabold text-lg py-7">
                <a href="#">
                  SIM, QUERO ACESSO IMEDIATO!
                  <ArrowRight className="ml-2 h-6 w-6" />
                </a>
              </Button>
               <p className="text-xs text-muted-foreground mt-4 text-center">Compra segura. Garantia de 7 dias.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
