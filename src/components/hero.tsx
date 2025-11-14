import { ScratchCard } from '@/components/scratch-card';

export const Hero = () => (
  <section className="py-12 flex flex-col items-center">
    <h2 className="font-headline text-4xl md:text-5xl text-foreground mb-6">
      Raspe a preguiça e descubra o que ela viu no jogo!
    </h2>
    <ScratchCard />
  </section>
);
