import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    name: "Maria S.",
    image: "https://placehold.co/100x100.png",
    aiHint: "woman smiling",
    title: "Nunca me senti tão bem!",
    quote:
      "Eu não acreditava que poderia emagrecer comendo bem, mas o SlimForm mudou tudo! Perdi 8kg em um mês e nunca me senti tão bem. As receitas são incríveis!",
    proofImage: "https://placehold.co/400x225.png",
    proofImageAiHint: "before after photo",
  },
  {
    name: "Juliana P.",
    image: "https://placehold.co/100x100.png",
    aiHint: "woman portrait",
    title: "Simplesmente funciona",
    quote:
      "Estava cansada de dietas que não davam resultado. O SlimForm é diferente. É prático, as comidas são deliciosas e os resultados apareceram rápido. Recomendo demais!",
    proofImage: "https://placehold.co/400x225.png",
    proofImageAiHint: "healthy meal plan",
  },
  {
    name: "Carla F.",
    image: "https://placehold.co/100x100.png",
    aiHint: "happy woman",
    title: "A melhor decisão que tomei",
    quote:
      "Com a rotina corrida, eu precisava de algo fácil de seguir. O SlimForm se encaixou perfeitamente. Perdi a barriga que tanto me incomodava e ganhei muita disposição.",
    proofImage: "https://placehold.co/400x225.png",
    proofImageAiHint: "fitness progress chart",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl font-headline text-accent-foreground">
            Milhares de Mulheres Já Transformaram Suas Vidas
          </h2>
          <p className="mt-4 text-lg text-accent-foreground/80">
            Veja o que algumas de nossas clientes estão dizendo sobre a experiência com o SlimForm.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="text-lg font-bold font-headline">{testimonial.name}</p>
                    <p className="text-sm text-primary font-semibold">{testimonial.title}</p>
                  </div>
                </div>
                <blockquote className="text-base text-muted-foreground italic border-l-4 border-primary pl-4 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-4">
                   <Image
                      src={testimonial.proofImage}
                      alt={`Prova social do depoimento de ${testimonial.name}`}
                      width={400}
                      height={225}
                      className="rounded-lg shadow-md w-full h-auto object-cover"
                      data-ai-hint={testimonial.proofImageAiHint}
                    />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
