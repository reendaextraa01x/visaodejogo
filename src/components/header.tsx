import { Logo } from '@/components/logo';

export const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-white/10">
    <div className="container mx-auto flex flex-col items-center justify-center p-4 text-center text-primary-foreground">
      <Logo />
      <p className="font-body text-sm mt-1 text-foreground/80">
        Previsões preguiçosas. Acertos certeiros.
      </p>
    </div>
  </header>
);
