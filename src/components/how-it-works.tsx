import { Card, CardContent } from "@/components/ui/card";
import { Eye, BrainCircuit, Sparkles } from "lucide-react";

const steps = [
  {
    icon: BrainCircuit,
    title: "1. Concentração",
    description: "Nossa preguiça entra em estado de meditação profunda, focada no universo futebolístico.",
  },
  {
    icon: Eye,
    title: "2. A Visão",
    description: "Em um flash de genialidade, ela visualiza os momentos cruciais da partida.",
  },
  {
    icon: Sparkles,
    title: "3. A Raspadinha",
    description: "A visão é selada em uma raspadinha dourada, aguardando para ser revelada por você.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-12 md:py-20 text-center">
      <h2 className="font-headline text-4xl md:text-5xl text-foreground mb-2">Como a magia acontece?</h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        Nosso processo é lento, metódico e (quase) infalível.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
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
