import { BrainCircuit, Ticket, Gift } from "lucide-react";

const steps = [
  {
    icon: BrainCircuit,
    title: "1. A Preguiça Concentra",
    description: "Nossa preguiça canaliza sua energia mística para prever os resultados mais quentes.",
  },
  {
    icon: Ticket,
    title: "2. O Prêmio é Selado",
    description: "A previsão vira um prêmio escondido em uma raspadinha dourada, esperando por você.",
  },
  {
    icon: Gift,
    title: "3. Raspe e Ganhe",
    description: "Você revela a previsão premiada. É simples, rápido e pode encher seu bolso!",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-12 md:py-20 text-center">
      <h2 className="font-headline text-4xl md:text-5xl text-foreground mb-2">Sua Sorte em 3 Passos Simples</h2>
      <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
        Nosso processo é simples, rápido e feito para você lucrar.
      </p>
      <div className="relative flex flex-col items-start gap-12 md:gap-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-12 h-full w-0.5 bg-border/40" />
        {steps.map((step, index) => (
          <div key={index} className="relative w-full flex flex-col items-center md:flex-row md:items-center gap-6 group">
            <div className="md:w-24 flex-shrink-0 flex justify-center">
              <div className="relative p-5 bg-card rounded-full border-2 border-primary/20 z-10 group-hover:border-primary transition-colors duration-300">
                  <div className="absolute -inset-2 bg-primary/10 rounded-full animate-ping-slow opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <step.icon className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold font-headline tracking-wider text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground max-w-md">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
