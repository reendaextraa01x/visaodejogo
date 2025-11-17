
import { VisionCard } from '@/components/vision-card';

export const Hero = () => (
  <section className="py-12 flex flex-col items-center">
    <h2 className="font-headline text-5xl md:text-7xl text-foreground mb-4 max-w-3xl">
      A <span className="text-primary">Preguiça Vidente</span> Já Decidiu o Resultado. Você só precisa <span className="text-primary drop-shadow-[0_0_8px_hsl(var(--primary))]">Raspar para Descobrir</span>.
    </h2>
    <p className="text-xl text-muted-foreground mb-12 max-w-3xl bg-black/30 backdrop-blur-sm rounded-lg p-4 shadow-2xl shadow-primary/20">
      Esqueça a sorte. Nossas raspadinhas são baseadas em pura vidência futebolística. O prêmio já está lá, só esperando por você.
    </p>
    <VisionCard />
  </section>
);
