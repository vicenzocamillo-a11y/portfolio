"use client";
import React from 'react';

type Props = {
  size?: number; 
  withGlow?: boolean; 
  animate?: boolean; 
};

/**
 * Fully vector logo based on `Sem‑título.svg`.
 * The shape is filled with a gradient that matches the site palette.
 * `size` defines the width; height is calculated to keep the original aspect ratio.
 */
export default function Logo({ size = 80, withGlow = true, animate = false }: Props) {
  const aspect = 253 / 222; 
  const height = Math.round(size * aspect);

  

  const gradient = (
    <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="var(--primary)" />
      <stop offset="100%" stopColor="var(--accent)" />
    </linearGradient>
  );

  const glowFilter = (
    <filter id="logoGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  );

  const pathData = "m1429 366 c98 -195 159 -306 177 -320 25 -19 39 -21 190 -21 l164 0 0 -220 0 -221 -269 3 c-253 3 -270 4 -291 23 -33 30 -320 608 -320 645 0 27 182 410 195 410 3 0 72 -134 154 -299z m-519 -206 c24 -13 56 -68 181 -317 93 -186 151 -313 152 -332 0 -20 -35 -102 -94 -223 -52 -105 -96 -192 -99 -192 -3 -1 -73 134 -155 300 -86 173 -160 309 -174 320 -21 17 -42 19 -187 19 l-164 0 0 220 0 220 255 0 c209 0 261 -3 285 -15z";

  const Wrapper = withGlow ? 'g' : React.Fragment;
  const wrapperProps = withGlow ? { filter: 'url(#logoGlow)' } : {};

  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 222 253"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      {withGlow && glowFilter}
      <defs>{gradient}</defs>
      <g
        transform="translate(-5.5, 114.5) scale(0.100000,-0.100000)"
        fill="url(#logoGrad)"
        stroke="none"
      >
        <path d={pathData} />
      </g>
      {animate && (
        <animateTransform
          attributeName="transform"
          type="scale"
          values="1;1.05;1"
          dur="2s"
          repeatCount="indefinite"
        />
      )}
    </svg>
  );
}
