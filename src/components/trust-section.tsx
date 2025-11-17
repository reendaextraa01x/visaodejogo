
import { Users, Award } from 'lucide-react';
import type { SVGProps } from 'react';

const SlothFaceIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
        className="fill-primary/20"
      />
      <path
        d="M12 20C8.69 20 6 17.31 6 14H18C18 17.31 15.31 20 12 20Z"
        className="fill-primary/40"
      />
      <path
        d="M8.5 9.5H15.5C16.33 9.5 17 10.17 17 11V12C17 12.83 16.33 13.5 15.5 13.5H8.5C7.67 13.5 7 12.83 7 12V11C7 10.17 7.67 9.5 8.5 9.5Z"
        className="fill-primary"
      />
      <path d="M11 16C11 16.55 11.45 17 12 17C12.55 17 13 16.55 13 16H11Z" className="fill-primary" />
    </svg>
  );

const trustData = [
  { icon: Users, text: '+ de 87 mil seguidores' },
  { icon: Award, text: 'Acima de 78% de acertos' },
  { icon: SlothFaceIcon, text: 'A única preguiça vidente do Brasil' },
];

const TrustItem = ({ icon: Icon, text }: { icon: React.ElementType; text: string }) => (
  <div className="flex flex-col items-center gap-3 text-center transition-transform duration-300 hover:scale-110">
    <Icon className="h-12 w-12 text-primary drop-shadow-[0_4px_10px_hsl(var(--primary)_/_0.3)]" />
    <p className="text-foreground text-lg font-semibold">{text}</p>
  </div>
);

export const TrustSection = () => (
  <section className="py-16 relative">
    <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center,rgba(var(--primary),0.1),transparent_50%) [mask-image:linear-gradient(180deg,transparent,black,transparent)]"></div>
    <div className="absolute inset-x-0 top-0 -bottom-10 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 800 200" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-10 100 C 150 -20, 250 220, 400 100 S 650 220, 810 100" stroke="#854d0e" stroke-width="3" />
            <path d="M-10 120 C 150 0, 250 240, 400 120 S 650 240, 810 120" stroke="#854d0e" stroke-width="2" />
        </svg>
    </div>
    <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center justify-items-center gap-12 md:grid-cols-3">
      {trustData.map((item, index) => (
        <TrustItem key={index} icon={item.icon} text={item.text} />
      ))}
    </div>
  </section>
);
