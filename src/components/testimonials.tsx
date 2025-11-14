import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
    {
        name: "Júnior F.",
        avatar: "JF",
        text: "A preguiça me salvou na aposta do fim de semana! Achei que era brincadeira, mas o bicho é um gênio.",
    },
    {
        name: "Carla S.",
        avatar: "CS",
        text: "Nunca mais duvido da Visão de Jogo. A análise que recebi foi mais completa que a de muito comentarista por aí.",
    },
    {
        name: "Marcos P.",
        avatar: "MP",
        text: "Finalmente um jeito divertido de acompanhar futebol. A raspadinha é genial e os palpites são certeiros!",
    },
]

export const Testimonials = () => {
    return (
        <section className="py-12 md:py-20">
            <h2 className="font-headline text-4xl md:text-5xl text-foreground mb-2">Quem confia, se dá bem</h2>
            <p className="text-lg text-muted-foreground mb-8">
                Veja o que nossos seguidores estão dizendo.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                    <Card key={index} className="bg-card border-border text-left">
                        <CardContent className="p-6">
                            <p className="text-foreground mb-4">"{testimonial.text}"</p>
                            <div className="flex items-center gap-3">
                                <Avatar>
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
