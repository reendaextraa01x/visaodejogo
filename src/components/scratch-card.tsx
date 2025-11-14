'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import * as Tone from 'tone';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const predictions = [
  "Gol aos 90'!",
  'Virada histórica!',
  'Empate com emoção!',
  'Craque inspirado!',
  'Zebra à vista!',
];

const scratchImageUrl =
  PlaceHolderImages.find((p) => p.id === 'gold-scratch')?.imageUrl ||
  'https://picsum.photos/seed/gold/300/300';

export const ScratchCard = () => {
  const [prediction, setPrediction] = useState('');
  const [isRevealed, setIsRevealed] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDrawing = useRef(false);

  useEffect(() => {
    setPrediction(predictions[Math.floor(Math.random() * predictions.length)]);
  }, []);

  const noiseSynth = useMemo(() => {
    if (typeof window !== 'undefined') {
      return new Tone.NoiseSynth({
        noise: { type: 'brown' },
        envelope: { attack: 0.005, decay: 0.05, sustain: 0.01 },
      }).toDestination();
    }
    return null;
  }, []);

  const setupCanvas = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const { width, height } = container.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = scratchImageUrl;
    img.onload = () => {
      ctx.fillStyle = ctx.createPattern(img, 'repeat') || '#FFD700';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'destination-out';
    };
  };

  useEffect(() => {
    setupCanvas();
    window.addEventListener('resize', setupCanvas);
    return () => window.removeEventListener('resize', setupCanvas);
  }, []);

  const getCoords = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    if ('touches' in e.nativeEvent) {
      return {
        x: e.nativeEvent.touches[0].clientX - rect.left,
        y: e.nativeEvent.touches[0].clientY - rect.top,
      };
    }
    return {
      x: (e.nativeEvent as MouseEvent).clientX - rect.left,
      y: (e.nativeEvent as MouseEvent).clientY - rect.top,
    };
  };

  const handleInteractionStart = async (e: React.MouseEvent | React.TouchEvent) => {
    if (Tone.context.state !== 'running') {
      await Tone.start();
    }
    isDrawing.current = true;
    scratch(e);
  };

  const stopScratching = () => {
    if (isDrawing.current) {
      isDrawing.current = false;
      checkReveal();
    }
  };

  const scratch = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing.current || isRevealed) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const { x, y } = getCoords(e);
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2, true);
    ctx.fill();

    if (noiseSynth && Tone.context.state === 'running') {
      noiseSynth.triggerAttackRelease('8n');
    }
  };

  const checkReveal = () => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixelData = imageData.data;
    let transparentPixels = 0;

    for (let i = 3; i < pixelData.length; i += 4) {
      if (pixelData[i] === 0) {
        transparentPixels++;
      }
    }

    const percentage = (transparentPixels / (canvas.width * canvas.height)) * 100;
    if (percentage > 70) {
      setIsRevealed(true);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div
        ref={containerRef}
        className="relative w-full max-w-[300px] aspect-square rounded-full overflow-hidden shadow-2xl bg-[#1a1a1a]"
      >
        <div className="absolute inset-0 flex items-center justify-center text-primary-foreground font-headline text-3xl p-4">
          {prediction}
        </div>
        <canvas
          ref={canvasRef}
          className={cn(
            'absolute inset-0 w-full h-full cursor-pointer transition-opacity duration-700',
            isRevealed && 'opacity-0 pointer-events-none'
          )}
          onMouseDown={handleInteractionStart}
          onTouchStart={handleInteractionStart}
          onMouseUp={stopScratching}
          onTouchEnd={stopScratching}
          onMouseMove={scratch}
          onTouchMove={scratch}
          onMouseLeave={stopScratching}
        />
      </div>
      {isRevealed && (
        <div className="w-full max-w-xs animate-fade-in">
          <Link href="https://example.com/page2" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg h-14 rounded-full shadow-lg shadow-accent/30 focus:shadow-accent/40 focus:ring-2 focus:ring-offset-2 focus:ring-accent"
            >
              QUERO A VISÃO EXCLUSIVA
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};
