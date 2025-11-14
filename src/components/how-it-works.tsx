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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center p-6 rounded-lg transition-all duration-300 hover:bg-card">
            <div className="p-5 bg-primary/10 rounded-full mb-4 border-2 border-primary/20">
                <step.icon className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold font-headline tracking-wider text-foreground mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
