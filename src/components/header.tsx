import { Logo } from '@/components/logo';

export const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-sm shadow-lg">
    <div className="container mx-auto flex flex-col items-center justify-center p-4 text-center text-primary-foreground">
      <Logo />
      <p className="font-body text-sm mt-1">
        Previsões preguiçosas. Acertos certeiros.
      </p>
    </div>
  </header>
);
