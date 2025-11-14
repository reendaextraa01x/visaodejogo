'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Gift, Sparkles } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { SVGProps } from 'react';

// Tone.js for audio
import * as Tone from 'tone';

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
  "Prêmio: R$500!",
  'Você ganhou um iPhone 15!',
  'Bônus de R$1000 em Apostas!',
  'Uma Viagem para a Final!',
  'Prêmio Máximo Acumulado!',
];

const PrizeRevealCard = ({ prediction }: { prediction: string }) => (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/80 via-primary to-yellow-300 rounded-2xl shadow-2xl p-4 flex flex-col justify-center items-center text-center border-2 border-amber-300">
        <Sparkles className="w-16 h-16 text-black/80 animate-pulse-strong" />
        <p className="font-headline text-4xl lg:text-5xl text-black drop-shadow-sm mt-4">{prediction}</p>
    </div>
);

// Gold particle component for the animation
const GoldParticle = ({ x, y }: { x: number, y: number }) => {
    const style = {
      left: `${x}px`,
      top: `${y}px`,
      width: `${Math.random() * 5 + 2}px`,
      height: `${Math.random() * 5 + 2}px`,
      animationDuration: `${Math.random() * 1 + 0.5}s`,
    };
    return <div className="gold-particle" style={style}></div>;
};

export const VisionCard = () => {
    const [prediction, setPrediction] = useState('');
    const [isRevealed, setIsRevealed] = useState(false);
    const [scratchProgress, setScratchProgress] = useState(0);
    const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const isDrawing = useRef(false);
    const revealThreshold = 80; // 80% scratched to auto-reveal

    // --- Audio Refs ---
    const scratchPlayer = useRef<Tone.Player | null>(null);
    const winPlayer = useRef<Tone.Player | null>(null);
    const audioInitialized = useRef(false);

    const goldTextureUrl = PlaceHolderImages.find(p => p.id === 'gold-scratch')?.imageUrl || '';

    // --- Audio Initialization ---
    const initAudio = async () => {
        if (audioInitialized.current || !window) return;
        try {
            await Tone.start();
            scratchPlayer.current = new Tone.Player({
                url: "https://cdn.pixabay.com/audio/2022/03/15/audio_17316a70a8.mp3",
                loop: false,
            }).toDestination();
            winPlayer.current = new Tone.Player({
                url: "https://cdn.pixabay.com/audio/2022/11/22/audio_758525e989.mp3",
                loop: false,
            }).toDestination();
             await Tone.loaded();
            audioInitialized.current = true;
            console.log("Audio initialized");
        } catch (error) {
            console.error("Failed to initialize audio:", error);
        }
    };
    
    // --- Canvas Setup ---
    useEffect(() => {
        setPrediction(predictions[Math.floor(Math.random() * predictions.length)]);
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
    
        const image = new Image();
        image.crossOrigin = "anonymous";
        image.src = goldTextureUrl;
        image.onload = () => {
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = 'destination-out';
        };
      }, [goldTextureUrl]);

    // --- Scratching Logic ---
    const getCoords = (e: React.MouseEvent | React.TouchEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) return { x: 0, y: 0 };
        const rect = canvas.getBoundingClientRect();
        if ('touches' in e.nativeEvent) {
            return { x: e.nativeEvent.touches[0].clientX - rect.left, y: e.nativeEvent.touches[0].clientY - rect.top };
        }
        return { x: e.nativeEvent.clientX - rect.left, y: e.nativeEvent.clientY - rect.top };
    }

    const startScratching = (e: React.MouseEvent | React.TouchEvent) => {
        if (isRevealed) return;
        initAudio(); // Initialize audio on first user interaction
        isDrawing.current = true;
        scratchAt(e);
    };

    const stopScratching = () => {
        isDrawing.current = false;
        scratchPlayer.current?.stop();
    };

    const scratchAt = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDrawing.current || isRevealed) return;
        
        if (scratchPlayer.current?.state !== 'started') {
            scratchPlayer.current?.start();
        }

        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!ctx || !canvas) return;

        const { x, y } = getCoords(e);
        
        ctx.beginPath();
        ctx.arc(x, y, 30, 0, 2 * Math.PI, false);
        ctx.fill();

        // Create particles
        const newParticle = { id: Date.now() + Math.random(), x, y };
        setParticles(prev => [...prev.slice(-20), newParticle]);
        setTimeout(() => setParticles(prev => prev.filter(p => p.id !== newParticle.id)), 1000);

        updateScratchProgress();
    };

    const updateScratchProgress = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
      
        const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const totalPixels = pixels.width * pixels.height;
        let transparentPixels = 0;
      
        // Iterate over the pixels (alpha channel is at every 4th position)
        for (let i = 3; i < pixels.data.length; i += 4) {
          if (pixels.data[i] === 0) {
            transparentPixels++;
          }
        }
      
        const progress = (transparentPixels / totalPixels) * 100;
        setScratchProgress(progress);
      
        if (progress >= revealThreshold && !isRevealed) {
          revealAll();
        }
    }, [isRevealed]);

    const revealAll = () => {
        setIsRevealed(true);
        winPlayer.current?.start();
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (ctx) {
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
    };

    return (
        <div className="flex flex-col items-center gap-4 w-full max-w-sm md:max-w-md">
            <div 
                className="w-[300px] h-[420px] relative cursor-pointer"
            >
                {/* The prize that is underneath */}
                <PrizeRevealCard prediction={prediction} />

                {/* The scratchable canvas on top */}
                <canvas
                    ref={canvasRef}
                    width="300"
                    height="420"
                    className={cn(
                        "absolute top-0 left-0 rounded-2xl transition-opacity duration-1000",
                        isRevealed ? "opacity-0" : "opacity-100"
                    )}
                    onMouseDown={startScratching}
                    onMouseMove={scratchAt}
                    onMouseUp={stopScratching}
                    onMouseLeave={stopScratching}
                    onTouchStart={startScratching}
                    onTouchMove={scratchAt}
                    onTouchEnd={stopScratching}
                />
                 {/* Falling particles container */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                    {particles.map(p => <GoldParticle key={p.id} x={p.x} y={p.y} />)}
                </div>
            </div>

            {/* Progress Bar and CTA */}
            <div className={cn("w-full max-w-sm transition-opacity duration-500", isRevealed ? 'opacity-0' : 'opacity-100')}>
                <p className="text-center text-muted-foreground text-sm mb-2">Raspe para revelar seu prêmio!</p>
                <Progress value={scratchProgress} className="w-full h-3 bg-card" />
            </div>

            {isRevealed && (
                <div className="w-full max-w-sm animate-fade-in text-center bg-card/80 p-6 rounded-lg shadow-lg border-primary/20 mt-4">
                    <Gift className="h-12 w-12 text-primary mx-auto mb-4 animate-ping-slow" />
                    <h3 className="font-headline text-2xl text-foreground mb-2">Você ganhou um prêmio!</h3>
                    <p className="text-muted-foreground mb-4">Clique no botão abaixo para resgatar sua recompensa agora mesmo.</p>
                    <Link href="https://example.com/page2" target="_blank" rel="noopener noreferrer">
                        <Button
                            size="lg"
                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg h-14 rounded-full shadow-lg shadow-primary/30 focus:shadow-primary/40 focus:ring-2 focus:ring-offset-2 focus:ring-primary animate-pulse-strong"
                        >
                            <Sparkles className="mr-2 h-5 w-5" />
                            RESGATAR MEU PRÊMIO
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    );
};
