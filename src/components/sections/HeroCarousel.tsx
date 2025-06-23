"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const images = [
  { src: "https://placehold.co/600x400.png", alt: "Prato de comida saudável e colorida", hint: "healthy food" },
  { src: "https://placehold.co/600x400.png", alt: "Mulher feliz comendo uma salada saudável", hint: "woman salad" },
  { src: "https://placehold.co/600x400.png", alt: "Ingredientes frescos para receita", hint: "fresh ingredients" },
]

export function HeroCarousel() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    
    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto mt-8"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "start",
              loop: true,
            }}
        >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden rounded-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={400}
                      data-ai-hint={image.hint}
                      className="w-full h-full object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 sm:-left-12 opacity-50 hover:opacity-100 transition-opacity" />
        <CarouselNext className="right-2 sm:-right-12 opacity-50 hover:opacity-100 transition-opacity" />
      </Carousel>
    )
}
