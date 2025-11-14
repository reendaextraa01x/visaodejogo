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
        <section className="py-12 md:py-20">
            <h2 className="font-headline text-4xl md:text-5xl text-foreground mb-2">Quem já raspou, lucrou!</h2>
            <p className="text-lg text-muted-foreground mb-12">
                Veja o que nossos ganhadores estão dizendo.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                    <Card key={index} className="bg-transparent border-0 shadow-none text-center">
                        <CardContent className="p-6 flex flex-col items-center">
                             <Avatar className="w-20 h-20 border-4 border-primary/50 mb-4">
                                <AvatarFallback className="text-2xl bg-card">{testimonial.avatar}</AvatarFallback>
                            </Avatar>
                            <div className="flex mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                                ))}
                            </div>
                            <p className="text-foreground italic mb-4">"{testimonial.text}"</p>
                            <span className="font-bold text-sm text-muted-foreground tracking-wider uppercase">{testimonial.name}</span>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
