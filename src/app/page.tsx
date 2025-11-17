
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { HowItWorks } from '@/components/how-it-works';
import { TrustSection } from '@/components/trust-section';
import { MobileCta } from '@/components/mobile-cta';
import { BenefitsSection } from '@/components/benefits-section';
import { Testimonials } from '@/components/testimonials';
import { FinalCta } from '@/components/final-cta';
import { BranchSeparator } from '@/components/branch-separator';

export default function Home() {
  return (
    <div className="bg-background min-h-screen w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background via-background to-black/50 z-0"></div>
      
      {/* Background glow elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full filter blur-[150px] opacity-50 animate-move-slow"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/10 rounded-full filter blur-[150px] opacity-50 animate-move-slow animation-delay-2000"></div>
       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/5 rounded-full filter blur-[100px] opacity-30 animate-move-slow animation-delay-4000"></div>

       {/* Vertical Branch SVG */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 flex justify-center items-start pt-20">
          <svg width="150" height="800" viewBox="0 0 150 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto md:h-[1200px]">
            <path d="M125.5 0V150C125.5 200 75.5 220 75.5 270V800" stroke="#854d0e" strokeWidth="6"/>
            <path d="M125.5 80C100.5 90 80.5 130 85.5 150" stroke="#854d0e" strokeWidth="4"/>
            <path d="M75.5 300C95.5 310 115.5 340 105.5 360" stroke="#854d0e" strokeWidth="4"/>
            <path d="M75.5 450C65.5 460 45.5 490 55.5 510" stroke="#854d0e" strokeWidth="4"/>
             <path d="M75.5 650C95.5 660 115.5 690 105.5 710" stroke="#854d0e" strokeWidth="4"/>
          </svg>
        </div>
      
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
