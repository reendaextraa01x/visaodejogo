import { Card } from "@/components/ui/card";
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
    <section className="py-12 md:py-20 animate-fade-in-up animation-delay-400">
      <h2 className="font-headline text-4xl md:text-5xl text-foreground mb-2">Por que nossa raspadinha é melhor?</h2>
      <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
        Mais chances, mais prêmios, mais diversão. Simples assim.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <Card 
            key={index} 
            className="bg-card/50 text-left border-border/50 backdrop-blur-sm shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 group p-px overflow-hidden"
          >
            <div className="p-8 rounded-[7px] h-full transition-transform duration-500 hover:-translate-y-2 relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="mb-6 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20 group-hover:border-primary transition-colors">
                    <benefit.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 relative z-10">{benefit.title}</h3>
              <p className="text-muted-foreground relative z-10">{benefit.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
