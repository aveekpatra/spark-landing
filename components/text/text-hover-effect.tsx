'use client';

import React from 'react';

export const TextHoverEffect = ({
  text = "Spark",
  className,
}: {
  text?: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  return (
    <div className={className}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 300 100"
        xmlns="http://www.w3.org/2000/svg"
        className="select-none"
      >
        <defs>
          <linearGradient
            id="textGradient"
            gradientUnits="userSpaceOnUse"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#eab308" />
            <stop offset="25%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="75%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.3"
          stroke="url(#textGradient)"
          className="fill-transparent font-[helvetica] text-7xl font-bold"
        >
          {text}
        </text>
      </svg>
    </div>
  );
};