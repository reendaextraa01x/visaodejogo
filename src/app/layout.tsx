import type {Metadata} from 'next';
import { Bebas_Neue, Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-bebas-neue',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Visão de Jogo | Raspadinha Premiada de Futebol',
  description: 'Raspe, ganhe e fature com as previsões certeiras da nossa preguiça vidente!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn('font-body antialiased select-none', inter.variable, bebasNeue.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
