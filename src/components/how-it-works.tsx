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
      <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
        Nosso processo é simples, rápido e feito para você lucrar.
      </p>
      <div className="relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border/40 hidden md:block" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center p-6 rounded-lg transition-all duration-300">
              <div className="relative mb-6">
                <div className="absolute -inset-2 bg-primary/10 rounded-full animate-ping-slow opacity-50"></div>
                 <div className="relative p-5 bg-card rounded-full border-2 border-primary/20">
                    <step.icon className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-headline tracking-wider text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
