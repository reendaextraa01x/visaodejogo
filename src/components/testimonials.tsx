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
                    <Card key={index} className="bg-card border-border text-left shadow-lg transition-all duration-300 hover:border-primary/80 hover:shadow-xl hover:-translate-y-1">
                        <CardContent className="p-6">
                            <div className="flex mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                                ))}
                            </div>
                            <p className="text-foreground mb-4">"{testimonial.text}"</p>
                            <div className="flex items-center gap-3 mt-4">
                                <Avatar className="border-2 border-primary/50">
                                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                                </Avatar>
                                <span className="font-bold text-sm">{testimonial.name}</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
