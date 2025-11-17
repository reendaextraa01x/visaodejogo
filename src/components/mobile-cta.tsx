'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useCardRevealStore } from '@/store/card-reveal-store';
import { useEffect, useState } from 'react';

export const MobileCta = () => {
  const { isRevealed } = useCardRevealStore();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Apenas renderiza no cliente para evitar erros de hidratação
    setShouldRender(true);
  }, []);

  if (!shouldRender || !isRevealed) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background/90 to-transparent z-40 md:hidden animate-fade-in-up">
      <Link href="https://example.com/page2" target="_blank" rel="noopener noreferrer" className="w-full">
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg h-14 rounded-full shadow-lg shadow-primary/30 focus:shadow-primary/40 focus:ring-2 focus:ring-offset-2 focus:ring-primary animate-pulse-strong">
          RASPAR E GANHAR AGORA
        </Button>
      </Link>
    </div>
  );
};
