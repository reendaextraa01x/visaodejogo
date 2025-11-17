
import type { SVGProps } from 'react';
import Image from 'next/image';


export const Logo = () => (
  <div className="flex items-center justify-center gap-2">
    <Image src="https://i.imgur.com/4PoDYHJ.png" alt="Sloth with a crystal ball" width={40} height={40} className="h-10 w-10" />
    <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-wider text-primary">
      VISÃO DE JOGO
    </h1>
  </div>
);
