
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Sparkles, BarChart, BrainCircuit, Eye, Dribbble, Shield } from 'lucide-react';
import Image from 'next/image';
import { useCardRevealStore } from '@/store/card-reveal-store';


const Stat = ({ icon: Icon, label, value }: { icon: React.ElementType, label: string, value: string | number }) => (
    <div className="flex items-center gap-2">
        <Icon className="w-4 h-4 text-primary" />
        <span className="font-bold text-lg">{value}</span>
        <span className="text-sm text-muted-foreground">{label}</span>
    </div>
);


export const VisionCard = () => {
    const [prediction, setPrediction] = useState('');
    const [isFlipped, setIsFlipped] = useState(false);
    
    const { isRevealed, setRevealed } = useCardRevealStore();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setPrediction("Prêmio: R$100!");
        }
    }, []);

    const handleFlip = () => {
        if (isFlipped) return;
        setIsFlipped(true);
        setTimeout(() => setRevealed(true), 600);
    };

    return (
        <div className="flex flex-col items-center gap-6 w-full max-w-xs sm:max-w-sm md:max-w-md animate-fade-in-up">
            <div className="relative group/card">
                 <div
                    className={cn(
                        "absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-lg opacity-75 group-hover/card:opacity-100 transition-opacity",
                         isFlipped ? "animate-none opacity-50" : ""
                    )}
                />
                <div 
                    className="relative w-[80vw] h-[112vw] max-w-[320px] max-h-[450px] sm:w-[320px] sm:h-[450px] md:w-[360px] md:h-[500px] perspective-1000 cursor-pointer group"
                    onClick={handleFlip}
                >
                    <div
                        className={cn(
                            "relative w-full h-full preserve-3d transition-transform duration-1000",
                            isFlipped ? 'rotate-y-180' : ''
                        )}
                    >
                        {/* Card Front */}
                        <div className="absolute w-full h-full backface-hidden overflow-hidden rounded-2xl bg-gradient-to-br from-card to-background border-2 border-primary/20 shadow-2xl flex flex-col items-center justify-center p-8">
                             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                             <svg className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 text-primary opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500 animate-blink" viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <radialGradient id="irisGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                    <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity:1}} />
                                    <stop offset="70%" style={{stopColor: 'hsl(var(--primary))', stopOpacity:0.9}} />
                                    <stop offset="100%" style={{stopColor: 'hsl(var(--card))', stopOpacity:1}} />
                                    </radialGradient>
                                </defs>
                                <path d="M2 35C2 35 22 2 50 2C78 2 98 35 98 35C98 35 78 68 50 68C22 68 2 35 2 35Z" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round"/>
                                <circle cx="50" cy="35" r="22" fill="url(#irisGradient)" />
                                <circle cx="50" cy="35" r="10" fill="black"/>
                                <circle cx="55" cy="30" r="3" fill="white" fillOpacity="0.7"/>
                            </svg>
                             <h3 className="font-headline text-2xl sm:text-3xl text-foreground drop-shadow-lg mt-4">Toque para Revelar</h3>
                             <p className="text-muted-foreground text-sm sm:text-base">Sua raspadinha da sorte aguarda...</p>
                        </div>

                        {/* Card Back */}
                        <div className="absolute w-full h-full backface-hidden rotate-y-180 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-card to-background border-2 border-primary shadow-2xl flex flex-col justify-between p-4">
                            <div className={cn("absolute top-0 left-[-100%] w-full h-full bg-shine-gradient transition-opacity", isRevealed ? "animate-shine opacity-100" : "opacity-0")}></div>
                            <div className="relative z-10 text-center">
                                <Image src="https://i.imgur.com/4PoDYHJ.png" alt="Sloth with a crystal ball" width={64} height={64} className="w-12 h-12 mx-auto" />
                                <h3 className="font-headline text-xl text-primary mt-1">PREGUIÇA VIDENTE</h3>
                                <p className="font-bold text-foreground text-lg">VISÃO DE JOGO</p>
                            </div>
                            
                            <div className="relative z-10 space-y-2 p-2">
                                <Stat icon={BarChart} label="RITMO" value={82} />
                                <Stat icon={Dribbble} label="Drible" value={88} />
                                <Stat icon={Shield} label="Defesa" value={81} />
                                <Stat icon={BrainCircuit} label="Passe" value={92} />
                                <Stat icon={Eye} label="VISÃO" value={99} />
                            </div>

                            <div className="relative z-10 text-center bg-black/30 p-2 rounded-lg border-t-2 border-primary/50">
                                <p className="text-muted-foreground text-xs">PREVISÃO</p>
                                <p className="font-bold text-2xl text-foreground">{prediction}</p>
                                <p className="text-xs text-primary/80 font-semibold">sorte de 89% aplicada</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isRevealed && (
                <div className="hidden md:block w-full max-w-sm animate-fade-in-up text-center bg-card/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-primary/20">
                    <h3 className="font-headline text-2xl text-foreground mb-2">A Sorte foi Lançada!</h3>
                    <p className="text-muted-foreground mb-4">Sua raspadinha premiada está pronta. Resgate agora e veja se você ganhou!</p>
                    <Link href="https://example.com/page2" target="_blank" rel="noopener noreferrer">
                        <Button
                            size="lg"
                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg h-14 rounded-full shadow-lg shadow-primary/30 focus:shadow-primary/40 focus:ring-2 focus:ring-offset-2 focus:ring-primary animate-pulse-strong"
                        >
                            <Sparkles className="mr-2 h-5 w-5" />
                            RESGATAR PRÊMIO AGORA
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    );
};
