
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
    <div className="bg-background min-h-screen w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background via-background to-black/50 z-0"></div>
      
      {/* Background glow elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full filter blur-[150px] opacity-50 animate-move-slow"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/10 rounded-full filter blur-[150px] opacity-50 animate-move-slow animation-delay-2000"></div>
       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/5 rounded-full filter blur-[100px] opacity-30 animate-move-slow animation-delay-4000"></div>

       {/* Branch SVG */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-full max-w-4xl z-0 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 400 1200" preserveAspectRatio="xMidYMin slice" className="opacity-20 stroke-yellow-900/50">
            <path d="M 200,0 C 210,150 190,300 200,450 C 210,600 190,750 200,900 C 210,1050 190,1150 200,1200" fill="none" strokeWidth="3"/>
            <path d="M 200,100 Q 250,150 220,200" fill="none" strokeWidth="2"/>
            <path d="M 200,300 Q 150,350 180,400" fill="none" strokeWidth="2"/>
            <path d="M 200,500 Q 260,550 230,620" fill="none" strokeWidth="2"/>
            <path d="M 200,750 Q 140,800 170,880" fill="none" strokeWidth="2"/>
            <path d="M 200,1000 Q 240,1050 210,1120" fill="none" strokeWidth="2"/>
          </svg>
       </div>

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
