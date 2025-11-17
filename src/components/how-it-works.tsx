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
    <section className="py-12 md:py-20 text-center animate-fade-in-up">
      <h2 className="font-headline text-4xl md:text-5xl text-foreground mb-2">O Ritual da Premiação em 3 Etapas</h2>
      <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
        Veja como a magia acontece, desde a previsão da nossa preguiça até o prêmio na sua mão.
      </p>
      <div className="relative flex flex-col items-center gap-12 md:gap-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-1/2 h-full w-0.5 bg-border/20">
            <div className="h-full w-full bg-primary/80 animate-progress-bar origin-top" style={{animation: 'progress-bar 5s linear forwards'}}></div>
        </div>
        {steps.map((step, index) => (
          <div key={index} className="relative w-full flex flex-col items-center group animate-fade-in-up" style={{ animationDelay: `${index * 200}ms`}}>
            <div className="relative p-5 bg-card/80 backdrop-blur-sm rounded-full border-2 border-primary/20 z-10 group-hover:border-primary transition-all duration-300 shadow-lg group-hover:shadow-primary/20">
                <div className="absolute -inset-2 bg-primary/10 rounded-full animate-ping-slow opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <step.icon className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
            </div>
            <div className="text-center mt-6">
              <h3 className="text-xl font-bold font-headline tracking-wider text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground max-w-md mx-auto">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
