import type { SVGProps } from 'react';

const SlothWithBallIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M14 30C8.47715 30 4 25.5228 4 20C4 14.4772 8.47715 10 14 10C19.5228 10 24 14.4772 24 20C24 25.5228 19.5228 30 14 30Z"
      fill="#D2B48C"
    />
    <path
      d="M7 16H21C21.8284 16 22.5 16.6716 22.5 17.5V19.5C22.5 20.3284 21.8284 21 21 21H7C6.17157 21 5.5 20.3284 5.5 19.5V17.5C5.5 16.6716 6.17157 16 7 16Z"
      fill="black"
    />
    <path d="M12.5 24C12.5 24.5523 13.1716 25 14 25C14.8284 25 15.5 24.5523 15.5 24H12.5Z" fill="black" />
    <g>
      <circle cx="22" cy="8" r="6" fill="white" />
      <path
        fill="black"
        d="M19.1716 5.17157L22 2L24.8284 5.17157L22 8L19.1716 5.17157Z"
      />
      <path
        fill="black"
        d="M16 8L19.1716 10.8284L22 8L19.1716 5.17157L16 8Z"
      />
      <path
        fill="black"
        d="M22 14L24.8284 10.8284L22 8L19.1716 10.8284L22 14Z"
      />
      <path
        fill="black"
        d="M28 8L24.8284 5.17157L22 8L24.8284 10.8284L28 8Z"
      />
    </g>
  </svg>
);

export const Logo = () => (
  <div className="flex items-center justify-center gap-2">
    <SlothWithBallIcon className="h-10 w-10" />
    <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-wider text-white">
      VISÃO DE JOGO
    </h1>
  </div>
);
