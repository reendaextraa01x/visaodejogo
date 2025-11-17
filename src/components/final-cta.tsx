
'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "./logo";
import { Sparkles } from "lucide-react";
import React, { useState, useEffect } from 'react';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        minutes: 10,
        seconds: 0,
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            if (typeof window !== 'undefined') {
                setTimeLeft(prevTime => {
                    if (prevTime.minutes === 0 && prevTime.seconds === 0) {
                        return { minutes: 0, seconds: 0 };
                    }

                    if (prevTime.seconds === 0) {
                        return { minutes: prevTime.minutes - 1, seconds: 59 };
                    }

                    return { ...prevTime, seconds: prevTime.seconds - 1 };
                });
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    return (
        <div className="bg-destructive/80 text-white font-bold py-2 px-6 rounded-full mb-6 text-lg animate-pulse">
            OFERTA TERMINA EM: {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
        </div>
    );
};


export const FinalCta = () => {
    return (
        <section className="hidden md:block py-20">
            <div className="bg-card/50 border border-border/50 backdrop-blur-sm rounded-xl p-12 flex flex-col items-center shadow-2xl relative overflow-hidden">
                <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary/20 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
                
                <Countdown />
                
                <Logo />
                <h2 className="font-headline text-4xl md:text-5xl text-foreground mt-6 mb-2">Sua Última Chance de Mudar o Jogo. Vai Arriscar ou Vai Lucrar?</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                    A preguiça já fez a parte dela. Agora a decisão é sua. Sua próxima raspadinha pode ser a premiada.
                </p>
                <Link href="https://example.com/page2" target="_blank" rel="noopener noreferrer">
                    <Button
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-xl h-16 rounded-full shadow-lg shadow-primary/30 transition-transform hover:scale-105 focus:shadow-primary/40 focus:ring-2 focus:ring-offset-2 focus:ring-primary px-10"
                    >
                        <Sparkles className="mr-3 h-6 w-6" />
                        RESGATAR PRÊMIO AGORA
                    </Button>
                </Link>
            </div>
        </section>
    )
}
