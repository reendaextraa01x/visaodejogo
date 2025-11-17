import { Logo } from '@/components/logo';

export const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-white/10 shadow-xl">
    <div className="container mx-auto flex flex-col items-center justify-center p-4 text-center text-primary-foreground relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-16 bg-primary/20 rounded-full filter blur-3xl"></div>
      <div className="relative z-10">
        <Logo />
        <p className="font-body text-sm mt-1 text-foreground/80">
          Previsões preguiçosas. Acertos certeiros.
        </p>
      </div>
    </div>
  </header>
);
