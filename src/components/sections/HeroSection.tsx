import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative bg-white pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-50"></div>
      <div className="container mx-auto px-4">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:flex-col lg:justify-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl font-headline">
              <span className="text-primary">Cansada de Dietas</span> que Não Funcionam?
            </h1>
            <p className="mt-4 text-lg text-muted-foreground sm:mt-5 sm:text-xl">
              Descubra o segredo para emagrecer comendo o que você gosta. Nossa receita exclusiva já ajudou milhares de mulheres a transformar o corpo e a vida. Seja a próxima!
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:mx-0 lg:text-left">
              <Button asChild size="lg" className="w-full sm:w-auto font-extrabold text-lg py-8 px-10 shadow-xl transform hover:scale-105 transition-transform duration-300">
                <a href="#oferta">
                  QUERO MINHA TRANSFORMAÇÃO
                  <ArrowRight className="ml-3 h-6 w-6" />
                </a>
              </Button>
              <div className="mt-4 flex items-center justify-center lg:justify-start">
                <div className="flex items-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="ml-2 text-sm text-muted-foreground">
                  + de 5,000 clientes satisfeitas
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
             <div className="relative mx-auto w-full rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src="https://placehold.co/600x600.png"
                  alt="Prato de comida saudável e apetitosa"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  data-ai-hint="healthy salad"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
