import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Trophy, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: BarChart,
    title: "Análise Completa",
    description: "Receba estatísticas detalhadas e a análise profunda da nossa preguiça especialista.",
  },
  {
    icon: Trophy,
    title: "Palpites Exclusivos",
    description: "Tenha acesso aos palpites e previsões que não são postados em nenhum outro lugar.",
  },
  {
    icon: ShieldCheck,
    title: "Conteúdo Confiável",
    description: "Nossas visões são geradas com um método (quase) científico de pura intuição preguiçosa.",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-12 md:py-20">
      <h2 className="font-headline text-4xl md:text-5xl text-foreground mb-2">O que você ganha?</h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        Ao acessar a Visão Exclusiva, você destrava um universo de informações privilegiadas.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {benefits.map((benefit, index) => (
          <Card key={index} className="bg-card text-center border-border shadow-lg transition-all hover:border-primary hover:shadow-primary/20 hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
