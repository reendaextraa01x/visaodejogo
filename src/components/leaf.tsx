import { cn } from "@/lib/utils";
import type { SVGProps } from 'react';

export const Leaf = (props: SVGProps<SVGSVGElement>) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100"
        {...props}
        className={cn("text-green-600/50", props.className)}
    >
        <defs>
            <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#4ade80', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#22c55e', stopOpacity: 1 }} />
            </linearGradient>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.2" />
            </filter>
        </defs>
        <path 
            d="M 50,0 C 20,20 20,80 50,100 C 80,80 80,20 50,0 Z"
            transform="rotate(45 50 50)"
            fill="url(#leafGradient)"
            filter="url(#shadow)"
        />
        <path
            d="M 50,0 Q 55,50 50,100"
            transform="rotate(45 50 50)"
            stroke="#166534"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
        />
        <path
            d="M 50,20 L 65,35 M 50,40 L 70,55 M 50,60 L 65,75"
            transform="rotate(45 50 50)"
            stroke="#166534"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
        />
    </svg>
);
