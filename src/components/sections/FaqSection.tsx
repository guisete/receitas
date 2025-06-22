import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como receberei o produto?",
    answer:
      "O acesso ao nosso livro de receitas digital é imediato após a confirmação do pagamento. Você receberá um e-mail com um link para download para poder começar sua transformação o mais rápido possível.",
  },
  {
    question: "Preciso de equipamentos de cozinha especiais?",
    answer:
      "Não! Todas as nossas receitas foram desenvolvidas para serem preparadas com utensílios de cozinha básicos que a maioria das pessoas já tem em casa. O foco é na simplicidade e praticidade.",
  },
  {
    question: "E se eu não gostar das receitas?",
    answer:
      "Estamos tão confiantes de que você vai amar as receitas que oferecemos uma garantia de satisfação de 7 dias. Se por qualquer motivo você não estiver satisfeita, basta nos enviar um e-mail e devolveremos 100% do seu dinheiro, sem perguntas.",
  },
  {
    question: "Os resultados são garantidos?",
    answer:
      "Os resultados variam de pessoa para pessoa, dependendo do seu metabolismo, nível de atividade física e adesão ao plano. No entanto, o método foi criado com base em princípios nutricionais sólidos para maximizar suas chances de sucesso.",
  },
  {
    question: "É um pagamento único?",
    answer:
      "Sim! O valor é pago apenas uma vez e você terá acesso vitalício ao livro de receitas e a todas as futuras atualizações, sem taxas ou mensalidades adicionais."
  }
];

export function FaqSection() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl font-headline text-accent-foreground">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-lg text-accent-foreground/80">
            Ainda tem dúvidas? Aqui estão as respostas para as perguntas mais comuns.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border-b rounded-lg mb-2 shadow-sm">
                <AccordionTrigger className="px-6 text-left font-bold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
