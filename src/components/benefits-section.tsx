import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Star, Gem } from "lucide-react";

const benefits = [
  {
    icon: Star,
    title: "Prêmios Instantâneos",
    description: "Raspe e descubra na hora o que você ganhou. Sem espera, sem complicação.",
  },
  {
    icon: Gem,
    title: "Acesso Exclusivo",
    description: "Nossas raspadinhas são calibradas pela preguiça para dar os melhores resultados.",
  },
  {
    icon: ShieldCheck,
    title: "Seguro e Divertido",
    description: "Uma forma animada de testar sua sorte no futebol, com a garantia da nossa vidente.",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-12 md:py-20">
      <h2 className="font-headline text-4xl md:text-5xl text-foreground mb-2">Por que nossa raspadinha é melhor?</h2>
      <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
        Mais chances, mais prêmios, mais diversão. Simples assim.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <Card key={index} className="bg-card text-center border-border shadow-lg transition-all duration-300 hover:border-primary hover:shadow-primary/20 hover:-translate-y-2">
            <CardContent className="p-8">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-full border border-primary/20">
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
