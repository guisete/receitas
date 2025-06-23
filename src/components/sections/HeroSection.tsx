import { Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-white pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl font-headline">
            <span className="text-primary">Cansada de Dietas</span> que Não
            Funcionam?
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:mt-5 sm:text-xl">
          Cansada de dietas que não dão certo? Eu já estive no seu lugar, até encontrar uma forma deliciosa de emagrecer de verdade! Vou te ensinar a perder peso rápido, sem sofrimento, com receitas incríveis que vão te fazer sentir prazer no processo. Eu sei que pode ser frustrante, mas a transformação está bem mais perto do que você imagina. Vamos juntas conquistar o corpo dos seus sonhos de forma leve e gostosa!
          </p>
          <div className="mt-8 flex items-center justify-center">
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
    </section>
  );
}
