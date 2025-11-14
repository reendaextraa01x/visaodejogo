import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Add these new utility classes for 3D transforms
export const transformStyle3d = {
  transformStyle: 'preserve-3d',
};

export const backfaceHidden = {
  backfaceVisibility: 'hidden',
};

export const rotateY180 = {
  transform: 'rotateY(180deg)',
};

export const perspective1000 = {
    perspective: '1000px',
};
