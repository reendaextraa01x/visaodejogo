import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PlayCircle } from 'lucide-react';
import Link from 'next/link';

const tiktokVideos = [
  { id: 'tiktok-1', title: 'Preguiça previu o gol do século!', url: 'https://tiktok.com' },
  { id: 'tiktok-2', title: 'Raspadinha do dia', url: 'https://tiktok.com' },
  { id: 'tiktok-3', title: 'O que ela viu no clássico?', url: 'https://tiktok.com' },
  { id: 'tiktok-4', title: 'Acerto MILIONÁRIO!', url: 'https://tiktok.com' },
];

export const TiktokSection = () => {
  const videoPlaceholders = PlaceHolderImages.filter((p) => tiktokVideos.some((v) => v.id === p.id));

  return (
    <section className="py-12 md:py-20">
      <h2 className="font-headline text-4xl md:text-5xl text-foreground mb-2">Nossas Visões no TikTok</h2>
      <p className="text-lg text-muted-foreground mb-8">Veja as previsões que viralizaram.</p>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {tiktokVideos.map((video, index) => {
            const placeholder = videoPlaceholders.find((p) => p.id === video.id);
            return (
              <CarouselItem key={index} className="pl-4 basis-2/3 sm:basis-1/2 md:basis-1/3">
                <Link href={video.url} target="_blank" rel="noopener noreferrer">
                  <Card className="overflow-hidden group border-border shadow-md transition-all hover:border-primary hover:shadow-primary/20">
                    <CardContent className="p-0 relative aspect-[9/16]">
                      {placeholder && (
                        <Image
                          src={placeholder.imageUrl}
                          alt={video.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                          data-ai-hint={placeholder.imageHint}
                        />
                      )}
                      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-3 transition-colors group-hover:bg-black/20">
                        <PlayCircle className="h-12 w-12 text-white/70 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <p className="font-body text-white text-sm font-semibold">{video.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </section>
  );
};
