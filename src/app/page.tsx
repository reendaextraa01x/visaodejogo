
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
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 flex justify-center items-start">
          <svg width="150" height="100%" viewBox="0 0 150 3000" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full">
            <path d="M75.5 0V3000" stroke="#854d0e" strokeWidth="6"/>
            <path d="M125.5 80C100.5 90 80.5 130 85.5 150" stroke="#854d0e" strokeWidth="4"/>
            <path d="M75.5 300C95.5 310 115.5 340 105.5 360" stroke="#854d0e" strokeWidth="4"/>
            <path d="M75.5 450C65.5 460 45.5 490 55.5 510" stroke="#854d0e" strokeWidth="4"/>
            <path d="M75.5 650C95.5 660 115.5 690 105.5 710" stroke="#854d0e" strokeWidth="4"/>
            <path d="M25.5 950C45.5 960 65.5 990 55.5 1010" stroke="#854d0e" strokeWidth="4"/>
            <path d="M115.5 1250C95.5 1260 75.5 1290 85.5 1310" stroke="#854d0e" strokeWidth="4"/>
            <path d="M75.5 1500C65.5 1510 45.5 1540 55.5 1560" stroke="#854d0e" strokeWidth="4"/>
             <path d="M75.5 1850C95.5 1860 115.5 1890 105.5 1910" stroke="#854d0e" strokeWidth="4"/>
             <path d="M75.5 2150C65.5 2160 45.5 2190 55.5 2210" stroke="#854d0e" strokeWidth="4"/>
             <path d="M75.5 2450C95.5 2460 115.5 2490 105.5 2510" stroke="#854d0e" strokeWidth="4"/>
             <path d="M75.5 2750C65.5 2760 45.5 2790 55.5 2810" stroke="#854d0e" strokeWidth="4"/>
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
