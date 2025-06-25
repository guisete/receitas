import { PlayCircle } from "lucide-react";

export function VslSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-extrabold sm:text-4xl font-headline">
                Assista ao vídeo que preparei para você
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Descubra como você também pode transformar seu corpo e sua vida.
            </p>
        </div>
        <div className="relative w-full max-w-sm mx-auto rounded-xl overflow-hidden shadow-2xl aspect-[9/16] bg-muted border border-border">
          {/* 
            TODO: Substitua o div abaixo pelo seu código de embed de vídeo (YouTube, Vimeo, etc.)
            Exemplo para YouTube:
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=YOUR_VIDEO_ID&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0"
              title="VSL"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          */}
          <div className="w-full h-full flex items-center justify-center cursor-pointer group">
            <div className="text-center text-muted-foreground p-4">
              <PlayCircle className="mx-auto h-16 w-16 opacity-50 transition-all group-hover:opacity-75 group-hover:scale-110" />
              <p className="mt-2 font-semibold">Seu vídeo 9:16 aqui</p>
              <p className="text-xs mt-1">Clique para assistir</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
