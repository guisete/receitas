export function VslSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl font-headline">
            Preparei uma receita fácil pra você
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            e no meu pacote de receitas tem muito mais hein! não perde tempo
          </p>
        </div>
        <div className="relative w-full max-w-sm mx-auto rounded-xl overflow-hidden shadow-2xl aspect-[9/16] bg-muted border border-border">
          <iframe
            src="https://player.vimeo.com/video/1096389456?h=2ffffc8cde&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0&background=1"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Apresentação das Receitas"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
