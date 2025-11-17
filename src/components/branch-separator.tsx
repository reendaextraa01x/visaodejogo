
import { cn } from '@/lib/utils';

export const BranchSeparator = ({ className }: { className?: string }) => (
  <div className={cn("flex justify-center my-12 md:my-20", className)}>
    <svg width="250" height="50" viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 29C22.5 18 63.5 1 97.5 25.5C131.5 50 168.5 45 202.5 25.5C236.5 6 277.5 18 298 29" stroke="#854d0e" strokeWidth="4" strokeLinecap="round"/>
      <path d="M60 20L70 10" stroke="#854d0e" strokeWidth="3" strokeLinecap="round"/>
      <path d="M120 40L110 50" stroke="#854d0e" strokeWidth="3" strokeLinecap="round"/>
       <path d="M150 48L160 38" stroke="#854d0e" strokeWidth="3" strokeLinecap="round"/>
      <path d="M220 15L230 5" stroke="#854d0e" strokeWidth="3" strokeLinecap="round"/>
       <path d="M260 20L250 12" stroke="#854d0e" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  </div>
);
