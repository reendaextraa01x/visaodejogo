
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

export default function Home() {
  return (
    <div className="bg-background min-h-screen w-full overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background via-background to-black/50 z-0"></div>
      
      {/* Background glow elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full filter blur-[150px] opacity-50 animate-move-slow"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/10 rounded-full filter blur-[150px] opacity-50 animate-move-slow animation-delay-2000"></div>
       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/5 rounded-full filter blur-[100px] opacity-30 animate-move-slow animation-delay-4000"></div>

       {/* Vertical Branch SVG and Leaves */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-30 flex justify-center items-start">
          <svg width="200" height="100%" viewBox="0 0 200 3000" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full">
            <path d="M100 0V3000" stroke="#78350f" strokeWidth="8"/>
            <path d="M170 200C130 220 100 280 110 310" stroke="#78350f" strokeWidth="6"/>
            <path d="M100 450C130 470 160 520 140 550" stroke="#78350f" strokeWidth="5"/>
            <path d="M100 700C80 720 50 770 70 800" stroke="#78350f" strokeWidth="6"/>
            <path d="M100 1000C130 1020 160 1070 140 1100" stroke="#78350f" strokeWidth="5"/>
            <path d="M30 1350C60 1370 90 1420 70 1450" stroke="#78350f" strokeWidth="6"/>
            <path d="M160 1700C130 1720 100 1770 110 1800" stroke="#78350f" strokeWidth="5"/>
            <path d="M100 2000C80 2020 50 2070 70 2100" stroke="#78350f" strokeWidth="6"/>
            <path d="M100 2350C130 2370 160 2420 140 2450" stroke="#78350f" strokeWidth="5"/>
            <path d="M100 2700C80 2720 50 2770 70 2800" stroke="#78350f" strokeWidth="6"/>
          </svg>
        </div>
        <Leaf className="absolute top-[10%] left-[30%] w-16 h-16 opacity-10 animate-float" style={{ animationDelay: '0s' }} />
        <Leaf className="absolute top-[25%] left-[65%] w-12 h-12 opacity-10 animate-float" style={{ animationDelay: '1s' }} />
        <Leaf className="absolute top-[40%] left-[40%] w-20 h-20 opacity-10 animate-float-reverse" style={{ animationDelay: '0.5s' }}/>
        <Leaf className="absolute top-[60%] left-[70%] w-16 h-16 opacity-10 animate-float" style={{ animationDelay: '2s' }} />
        <Leaf className="absolute top-[75%] left-[35%] w-12 h-12 opacity-5 animate-float-reverse" style={{ animationDelay: '1.5s' }} />
        <Leaf className="absolute top-[90%] left-[60%] w-14 h-14 opacity-10 animate-float" style={{ animationDelay: '0.2s' }} />
      
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
