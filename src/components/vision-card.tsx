
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Sparkles, BarChart, BrainCircuit, Eye, Dribbble, Shield, Ticket } from 'lucide-react';
import type { SVGProps } from 'react';

const SlothWithBallIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14 30C8.47715 30 4 25.5228 4 20C4 14.4772 8.47715 10 14 10C19.5228 10 24 14.4772 24 20C24 25.5228 19.5228 30 14 30Z"
        className="fill-current text-amber-200"
      />
      <path
        d="M7 16H21C21.8284 16 22.5 16.6716 22.5 17.5V19.5C22.5 20.3284 21.8284 21 21 21H7C6.17157 21 5.5 20.3284 5.5 19.5V17.5C5.5 16.6716 6.17157 16 7 16Z"
        fill="black"
      />
      <path d="M12.5 24C12.5 24.5523 13.1716 25 14 25C14.8284 25 15.5 24.5523 15.5 24H12.5Z" fill="black" />
      <g>
        <circle cx="22" cy="8" r="6" fill="white" />
        <path fill="black" d="M19.1716 5.17157L22 2L24.8284 5.17157L22 8L19.1716 5.17157Z" />
        <path fill="black" d="M16 8L19.1716 10.8284L22 8L19.1716 5.17157L16 8Z" />
        <path fill="black" d="M22 14L24.8284 10.8284L22 8L19.1716 10.8284L22 14Z" />
        <path fill="black" d="M28 8L24.8284 5.17157L22 8L24.8284 10.8284L28 8Z" />
      </g>
    </svg>
);


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
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setPrediction("Prêmio: R$100!");
        }
    }, []);

    const handleFlip = () => {
        if (isFlipped) return;
        setIsFlipped(true);
        setTimeout(() => setIsRevealed(true), 600);
    };

    return (
        <div className="flex flex-col items-center gap-6 w-full max-w-sm md:max-w-md">
            <div 
                className="w-[320px] h-[450px] perspective-1000 cursor-pointer group"
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
                         <Ticket className="w-40 h-40 text-primary opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300" />
                         <h3 className="font-headline text-3xl text-foreground drop-shadow-lg mt-4 z-10">Toque para Revelar</h3>
                         <p className="text-muted-foreground z-10">Sua raspadinha da sorte aguarda...</p>
                    </div>

                    {/* Card Back */}
                    <div className="absolute w-full h-full backface-hidden rotate-y-180 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-card to-background border-2 border-primary shadow-2xl flex flex-col justify-between p-6">
                        <div className="text-center">
                            <SlothWithBallIcon className="w-20 h-20 mx-auto text-primary" />
                            <h3 className="font-headline text-2xl text-primary mt-2">PREGUIÇA VIDENTE</h3>
                            <p className="font-bold text-foreground">VISÃO DE JOGO</p>
                        </div>
                        
                        <div className="space-y-3">
                            <Stat icon={BarChart} label="RITMO" value={1} />
                            <Stat icon={Dribbble} label="Drible" value={12} />
                            <Stat icon={Shield} label="Defesa" value={30} />
                            <Stat icon={BrainCircuit} label="Passe" value={85} />
                            <Stat icon={Eye} label="VISÃO" value={99} />
                        </div>

                        <div className="text-center bg-black/30 p-2 rounded-lg border-t-2 border-primary/50">
                            <p className="text-muted-foreground text-xs">PREVISÃO</p>
                            <p className="font-bold text-lg text-foreground">{prediction}</p>
                        </div>
                    </div>
                </div>
            </div>

            {isRevealed && (
                <div className="w-full max-w-sm animate-fade-in text-center bg-card/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-primary/20">
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
