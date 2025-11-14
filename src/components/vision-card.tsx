'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Gift, Sparkles, Star } from 'lucide-react';
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

const PlayerCardFront = () => (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-800 to-black rounded-2xl shadow-2xl p-4 flex flex-col justify-center items-center backface-hidden border-2 border-primary/20">
        <div className="absolute inset-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgSCAwIFYgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iaHNsYSgyMjgsIDksIDE1LCgwLjIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <SlothWithBallIcon className="w-24 h-24 text-primary drop-shadow-[0_5px_15px_rgba(234,179,8,0.4)] opacity-50" />
        <p className="font-headline text-2xl text-white mt-4">CLIQUE PARA REVELAR</p>
    </div>
);

const PlayerCardBack = ({ prediction }: { prediction: string }) => (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/80 via-primary to-yellow-300 rounded-2xl shadow-2xl p-4 flex flex-col justify-between backface-hidden rotate-y-180 border-2 border-amber-300">
        <div className="flex justify-between items-start">
            <div className="text-left">
                <p className="font-headline text-3xl text-black">99</p>
                <p className="font-body text-xs font-bold text-black/80 -mt-1">VIS</p>
            </div>
            <div className="flex flex-col items-center">
                <SlothWithBallIcon className="w-16 h-16 text-black/80" />
                <p className="font-headline text-lg text-black -mt-2">O VIDENTE</p>
            </div>
            <div className="text-right">
                <p className="font-headline text-3xl text-black">BR</p>
                <p className="font-body text-xs font-bold text-black/80 -mt-1">PAÍS</p>
            </div>
        </div>

        <div className="text-center my-4">
            <p className="font-headline text-4xl text-black drop-shadow-sm">{prediction}</p>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center text-black">
            <div><p className="font-headline text-2xl">1</p><p className="text-xs font-bold -mt-1">RIT</p></div>
            <div><p className="font-headline text-2xl">85</p><p className="text-xs font-bold -mt-1">DRB</p></div>
            <div><p className="font-headline text-2xl">20</p><p className="text-xs font-bold -mt-1">DEF</p></div>
            <div><p className="font-headline text-2xl">99</p><p className="text-xs font-bold -mt-1">PAS</p></div>
            <div><p className="font-headline text-2xl">70</p><p className="text-xs font-bold -mt-1">FIN</p></div>
            <div><p className="font-headline text-2xl">95</p><p className="text-xs font-bold -mt-1">FÍS</p></div>
        </div>
    </div>
);


export const VisionCard = () => {
  const [prediction, setPrediction] = useState('');
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    setPrediction(predictions[Math.floor(Math.random() * predictions.length)]);
  }, []);

  const handleReveal = () => {
    if (isRevealed) return;
    setIsRevealed(true);
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md">
        <div 
            className="w-[300px] h-[420px] perspective-1000 group"
            onClick={handleReveal}
        >
            <div 
                className={cn(
                    "relative w-full h-full transform-style-3d transition-transform duration-700 cursor-pointer",
                    isRevealed ? 'rotate-y-180' : ''
                )}
            >
                <PlayerCardFront />
                <PlayerCardBack prediction={prediction} />
            </div>
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
