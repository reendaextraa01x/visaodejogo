'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Progress } from '@/components/ui/progress';
import { Gift } from 'lucide-react';

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

const createParticle = (x: number, y: number, container: HTMLElement) => {
  const particle = document.createElement('div');
  particle.className = 'absolute rounded-full bg-yellow-400/80';
  const size = Math.random() * 4 + 1;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  particle.style.pointerEvents = 'none';
  particle.style.opacity = `${Math.random() * 0.7 + 0.3}`;

  container.appendChild(particle);

  const angle = Math.random() * Math.PI * 2;
  const velocity = Math.random() * 2 + 1;
  const gravity = 0.1;
  let vx = Math.cos(angle) * velocity;
  let vy = Math.sin(angle) * velocity;

  const animation = () => {
    vx *= 0.98;
    vy += gravity;
    particle.style.left = `${parseFloat(particle.style.left) + vx}px`;
    particle.style.top = `${parseFloat(particle.style.top) + vy}px`;
    particle.style.opacity = `${parseFloat(particle.style.opacity) - 0.015}`;

    if (parseFloat(particle.style.opacity) > 0) {
      requestAnimationFrame(animation);
    } else {
      particle.remove();
    }
  };

  requestAnimationFrame(animation);
};

export const ScratchCard = () => {
  const [prediction, setPrediction] = useState('');
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratchProgress, setScratchProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDrawing = useRef(false);

  useEffect(() => {
    setPrediction(predictions[Math.floor(Math.random() * predictions.length)]);
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

  const handleInteractionStart = (e: React.MouseEvent | React.TouchEvent) => {
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
    const container = containerRef.current;
    const ctx = canvas?.getContext('2d', { willReadFrequently: true });
    if (!ctx || !container) return;

    e.preventDefault();

    const { x, y } = getCoords(e);
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2, true);
    ctx.fill();

    checkReveal();

    for (let i = 0; i < 3; i++) {
        createParticle(x, y, container);
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

    const percentage = Math.min(100, (transparentPixels / (canvas.width * canvas.height)) * 100);
    setScratchProgress(percentage);
    
    if (percentage > 80) {
      setIsRevealed(true);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div
        ref={containerRef}
        className="relative w-full max-w-[300px] aspect-square rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-yellow-300 via-yellow-500 to-amber-600"
        style={{
          backgroundImage: 'radial-gradient(circle at 70% 30%, #fff8, transparent 40%), radial-gradient(circle at 30% 70%, #f0e68c88, transparent 40%), linear-gradient(to bottom right, #fde047, #eab308)',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-black font-headline text-3xl p-4">
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
      
      {!isRevealed && (
        <div className="w-full max-w-xs px-4">
          <Progress value={scratchProgress} className="w-full h-2 [&>div]:bg-amber-400" />
        </div>
      )}

      {isRevealed && (
        <div className="w-full max-w-sm animate-fade-in text-center bg-card/80 p-6 rounded-lg shadow-lg border border-primary/20">
          <Gift className="h-12 w-12 text-accent mx-auto mb-4 animate-pulse" />
          <h3 className="font-headline text-2xl text-foreground mb-2">Prêmio Exclusivo!</h3>
          <p className="text-muted-foreground mb-4">Você ganhou acesso à nossa análise completa!</p>
          <Link href="https://example.com/page2" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg h-14 rounded-full shadow-lg shadow-accent/30 focus:shadow-accent/40 focus:ring-2 focus:ring-offset-2 focus:ring-accent"
            >
              ACESSAR ANÁLISE COMPLETA
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};
