import { BadgeCheck } from "lucide-react";
import Image from "next/image";

const journals = [
  "Journal of Nutritional Biochemistry",
  "The American Journal of Clinical Nutrition",
  "International Journal of Obesity",
  "Annals of Nutrition and Metabolism",
];

export function ProofSection() {
  return (
    <section id="proof" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl font-headline">
            Comprovação Científica
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nossa metodologia é baseada em estudos e princípios nutricionais sólidos, publicados nos mais renomados jornais de nutrição do mundo.
          </p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {journals.map((journal) => (
              <div key={journal} className="flex items-center">
                <BadgeCheck className="h-7 w-7 text-primary" />
                <p className="ml-4 text-lg font-medium text-foreground">{journal}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <Image
            src="https://placehold.co/730x1368.png"
            alt="Prova social de resultado"
            width={730}
            height={1368}
            className="rounded-xl shadow-2xl max-w-full h-auto"
            data-ai-hint="testimonial screenshot"
          />
        </div>
      </div>
    </section>
  );
}
