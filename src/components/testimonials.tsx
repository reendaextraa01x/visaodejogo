import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Júnior F.",
        avatar: "JF",
        text: "A preguiça me deu o prêmio do fim de semana! Achei que era só um jogo, mas o palpite valeu ouro.",
    },
    {
        name: "Carla S.",
        avatar: "CS",
        text: "Nunca mais duvido da Visão de Jogo. Raspei e ganhei! Foi mais fácil do que eu imaginava.",
    },
    {
        name: "Marcos P.",
        avatar: "MP",
        text: "Finalmente um jeito divertido de ganhar com futebol. A raspadinha é genial e os prêmios são de verdade!",
    },
]

export const Testimonials = () => {
    return (
        <section className="py-12 md:py-20 animate-fade-in-up animation-delay-600">
            <h2 className="font-headline text-4xl md:text-5xl text-foreground mb-2">Quem Já Raspou, <span className="text-primary drop-shadow-[0_0_8px_hsl(var(--primary))]">Lucrou</span>. E Eles Contam Como Foi.</h2>
            <p className="text-lg text-muted-foreground mb-16">
                A sorte favorece os que acreditam. Veja o que nossos ganhadores estão dizendo.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <Card key={index} className="bg-transparent border-none shadow-none group overflow-hidden">
                        <CardContent className="p-6 flex flex-col items-center text-center relative bg-card/30 rounded-lg border border-border/20 backdrop-blur-sm shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:border-primary/40">
                             <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                             <div className="absolute top-0 left-[-100%] w-full h-full bg-shine-gradient opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-opacity"></div>
                            <Avatar className="relative z-10 w-20 h-20 border-4 border-primary/50 mb-4 transition-transform duration-300 group-hover:scale-110">
                                <AvatarFallback className="text-2xl bg-card">{testimonial.avatar}</AvatarFallback>
                            </Avatar>
                            <div className="relative z-10 flex mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                                ))}
                            </div>
                            <p className="relative z-10 text-foreground italic mb-4">"{testimonial.text}"</p>
                            <span className="relative z-10 font-bold text-sm text-muted-foreground tracking-wider uppercase">{testimonial.name}</span>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
