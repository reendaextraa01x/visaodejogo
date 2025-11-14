import { VisionCard } from '@/components/vision-card';

export const Hero = () => (
  <section className="py-12 flex flex-col items-center">
    <h2 className="font-headline text-5xl md:text-7xl text-foreground mb-4 max-w-3xl">
      A sorte está lançada na raspadinha. Você está pronto para ganhar?
    </h2>
    <p className="text-xl text-muted-foreground mb-12">
      Ganhos fáceis e prêmios instantâneos com a única vidente do futebol.
    </p>
    <VisionCard />
  </section>
);
