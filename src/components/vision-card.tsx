'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Gift, Sparkles } from 'lucide-react';
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


const predictions = [
  "Gol aos 90'!",
  'Virada histórica!',
  'Empate com emoção!',
  'Craque inspirado!',
  'Zebra à vista!',
];

export const VisionCard = () => {
  const [prediction, setPrediction] = useState('');
  const [isRevealed, setIsRevealed] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);

  useEffect(() => {
    setPrediction(predictions[Math.floor(Math.random() * predictions.length)]);
  }, []);

  const handleReveal = () => {
    if (isRevealing || isRevealed) return;
    setIsRevealing(true);
    setTimeout(() => {
      setIsRevealed(true);
      setIsRevealing(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md">
      <div
        className="relative w-[300px] h-[300px] cursor-pointer group"
        onClick={handleReveal}
      >
        <SlothWithBallIcon
            className={cn(
                "absolute inset-0 w-full h-full text-primary transition-all duration-500",
                isRevealing && "animate-pulse-strong"
            )}
        />
        <div 
            className={cn(
                "absolute inset-0 flex items-center justify-center transition-opacity duration-1000",
                isRevealed ? 'opacity-100' : 'opacity-0'
            )}
        >
            <div className='absolute inset-0 rounded-full bg-primary/20 animate-ping-slow'></div>
            <div className='absolute inset-0 rounded-full bg-primary/10 animate-ping-slow delay-500'></div>
            <p className="font-headline text-4xl text-white z-10 drop-shadow-lg">{prediction}</p>
        </div>

        {!isRevealed && !isRevealing && (
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-headline text-2xl text-white bg-black/50 px-4 py-2 rounded-lg">REVELAR A VISÃO</p>
             </div>
        )}
      </div>

      {isRevealed && (
        <div className="w-full max-w-sm animate-fade-in text-center bg-card/80 p-6 rounded-lg shadow-lg border-primary/20 mt-4">
          <Gift className="h-12 w-12 text-primary mx-auto mb-4 animate-pulse" />
          <h3 className="font-headline text-2xl text-foreground mb-2">Prêmio Exclusivo!</h3>
          <p className="text-muted-foreground mb-4">Você ganhou acesso à nossa análise completa!</p>
          <Link href="https://example.com/page2" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg h-14 rounded-full shadow-lg shadow-primary/30 focus:shadow-primary/40 focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              ACESSAR ANÁLISE COMPLETA
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};
