import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "./logo";
import { Sparkles } from "lucide-react";

export const FinalCta = () => {
    return (
        <section className="hidden md:block py-20">
            <div className="bg-card border border-border rounded-xl p-12 flex flex-col items-center shadow-2xl relative overflow-hidden">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full filter blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full filter blur-3xl"></div>
                <Logo />
                <h2 className="font-headline text-4xl md:text-5xl text-foreground mt-6 mb-2">Pronto para receber a visão?</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                    Não dependa da sorte. Confie na preguiça. Clique e veja o futuro do jogo.
                </p>
                <Link href="https://example.com/page2" target="_blank" rel="noopener noreferrer">
                    <Button
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-xl h-16 rounded-full shadow-lg shadow-primary/30 transition-transform hover:scale-105 focus:shadow-primary/40 focus:ring-2 focus:ring-offset-2 focus:ring-primary px-10"
                    >
                        <Sparkles className="mr-3 h-6 w-6" />
                        QUERO MINHA VISÃO EXCLUSIVA AGORA
                    </Button>
                </Link>
            </div>
        </section>
    )
}
