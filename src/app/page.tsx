
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { HowItWorks } from '@/components/how-it-works';
import { TrustSection } from '@/components/trust-section';
import { MobileCta } from '@/components/mobile-cta';
import { BenefitsSection } from '@/components/benefits-section';
import { Testimonials } from '@/components/testimonials';
import { FinalCta } from '@/components/final-cta';
import { BranchSeparator } from '@/components/branch-separator';
import { Leaf } from '@/components/leaf';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-background min-h-screen w-full overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background via-background to-black/50 z-0"></div>
      
      {/* Background glow elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full filter blur-[150px] opacity-50 animate-move-slow"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/10 rounded-full filter blur-[150px] opacity-50 animate-move-slow animation-delay-2000"></div>
       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/5 rounded-full filter blur-[100px] opacity-30 animate-move-slow animation-delay-4000"></div>

       {/* Leaves */}
        <Leaf className="absolute top-[10%] left-[30%] w-16 h-16 opacity-30 animate-float" style={{ animationDuration: '12s', animationDelay: '0s' }} />
        <Leaf className="absolute top-[25%] left-[65%] w-12 h-12 opacity-30 animate-float-reverse" style={{ animationDuration: '15s', animationDelay: '1s' }} />
        <Leaf className="absolute top-[40%] left-[40%] w-20 h-20 opacity-20 animate-float" style={{ animationDuration: '10s', animationDelay: '0.5s' }}/>
        <Leaf className="absolute top-[60%] left-[70%] w-16 h-16 opacity-30 animate-float-reverse" style={{ animationDuration: '14s', animationDelay: '2s' }} />
        <Leaf className="absolute top-[75%] left-[35%] w-12 h-12 opacity-20 animate-float" style={{ animationDuration: '16s', animationDelay: '1.5s' }} />
        <Leaf className="absolute top-[90%] left-[60%] w-14 h-14 opacity-30 animate-float-reverse" style={{ animationDuration: '11s', animationDelay: '0.2s' }} />
      
      <Header />
      <main className="relative z-10 container mx-auto max-w-4xl px-4 pt-28 pb-12 md:pb-36 text-center">
        <Hero />
        <TrustSection />
        <BranchSeparator />
        <HowItWorks />
        <BranchSeparator />
        <BenefitsSection />
        <BranchSeparator />
        <Testimonials />
        <FinalCta />
      </main>
      <MobileCta />
    </div>
  );
}
