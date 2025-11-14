import { ScratchCard } from '@/components/scratch-card';

export const Hero = () => (
  <section className="py-12 flex flex-col items-center">
    <h2 className="font-headline text-5xl md:text-7xl text-foreground mb-4 max-w-2xl">
      Raspe a preguiça e descubra o que ela viu no jogo!
    </h2>
    <p className="text-lg text-muted-foreground mb-8">
      A única vidente do futebol que acerta no seu próprio ritmo.
    </p>
    <ScratchCard />
  </section>
);
