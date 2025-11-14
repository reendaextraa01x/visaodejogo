import { Users, TrendingUp, Award } from 'lucide-react';
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
  <div className="flex items-center gap-4">
    <Icon className="h-8 w-8 text-primary shrink-0" />
    <p className="text-foreground text-lg">{text}</p>
  </div>
);

export const TrustSection = () => (
  <section className="py-16">
    <div className="bg-card/50 border border-border rounded-xl p-8 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-border/50">
            {trustData.map((item, index) => (
                <div key={index} className="flex justify-center items-center p-4 first:pt-0 md:first:pt-4 last:pb-0 md:last:pb-4">
                    <TrustItem icon={item.icon} text={item.text} />
                </div>
            ))}
        </div>
    </div>
  </section>
);
