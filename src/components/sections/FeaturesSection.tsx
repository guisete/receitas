import { CheckCircle2, Zap, UtensilsCrossed } from "lucide-react";
import React from "react";

const features = [
  {
    icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
    title: "Sem Dietas Malucas",
    description: "Emagreça de forma saudável e sustentável, sem restrições severas que te deixam com fome e mau humor.",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Energia Renovada",
    description: "Sinta seu corpo mais leve e sua mente mais alerta com receitas que nutrem e te dão disposição para o dia a dia.",
  },
  {
    icon: <UtensilsCrossed className="h-8 w-8 text-primary" />,
    title: "Receitas Deliciosas",
    description: "Comer bem não precisa ser sem graça. Descubra pratos fáceis, rápidos e que dão água na boca.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl font-headline">
            Chega de sofrer para emagrecer.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Com as minhas receitas, você vai descobrir o prazer de se alimentar bem e ver os resultados no espelho.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-accent rounded-xl shadow-lg">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-headline text-accent-foreground">{feature.title}</h3>
              <p className="mt-2 text-base text-accent-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
