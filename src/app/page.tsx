import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { TrustSection } from '@/components/trust-section';
import { TiktokSection } from '@/components/tiktok-section';
import { MobileCta } from '@/components/mobile-cta';

export default function Home() {
  return (
    <div className="bg-background min-h-screen w-full">
      <Header />
      <main className="container mx-auto max-w-lg px-4 pt-28 pb-24 text-center">
        <Hero />
        <TrustSection />
        <TiktokSection />
      </main>
      <MobileCta />
    </div>
  );
}
