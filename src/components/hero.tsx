import { VisionCard } from '@/components/vision-card';

export const Hero = () => (
  <section className="py-12 flex flex-col items-center">
    <h2 className="font-headline text-5xl md:text-7xl text-foreground mb-4 max-w-3xl">
      A preguiça previu o futuro do jogo. Você tem coragem de ver?
    </h2>
    <p className="text-xl text-muted-foreground mb-12">
      A única vidente do futebol que acerta no seu próprio ritmo.
    </p>
    <VisionCard />
  </section>
);
