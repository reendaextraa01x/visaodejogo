import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { HowItWorks } from '@/components/how-it-works';
import { TrustSection } from '@/components/trust-section';
import { MobileCta } from '@/components/mobile-cta';
import { BenefitsSection } from '@/components/benefits-section';
import { Testimonials } from '@/components/testimonials';
import { FinalCta } from '@/components/final-cta';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="bg-background min-h-screen w-full">
      <Header />
      <main className="container mx-auto max-w-4xl px-4 pt-28 pb-36 text-center">
        <Hero />
        <TrustSection />
        <Separator className="my-12 md:my-20 bg-gradient-to-r from-transparent via-border to-transparent h-[1px]" />
        <HowItWorks />
        <Separator className="my-12 md:my-20 bg-gradient-to-r from-transparent via-border to-transparent h-[1px]" />
        <BenefitsSection />
        <Separator className="my-12 md:my-20 bg-gradient-to-r from-transparent via-border to-transparent h-[1px]" />
        <Testimonials />
        <FinalCta />
      </main>
      <MobileCta />
    </div>
  );
}
