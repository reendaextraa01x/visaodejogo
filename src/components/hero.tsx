
import { VisionCard } from '@/components/vision-card';

export const Hero = () => (
  <section className="py-12 flex flex-col items-center">
    <h2 className="font-headline text-5xl md:text-7xl text-foreground mb-4 max-w-3xl">
      A Preguiça Vidente Já Decidiu o Resultado. Você só precisa Raspar para Descobrir.
    </h2>
    <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
      Esqueça a sorte. Nossas raspadinhas são baseadas em pura vidência futebolística. O prêmio já está lá, só esperando por você.
    </p>
    <VisionCard />
  </section>
);
