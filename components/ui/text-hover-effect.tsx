"use client";
import React from "react";

export const TextHoverEffect = ({
  text = "Spark Service",
  duration,
}: {
  text?: string;
  duration?: number;
  automatic?: boolean;
}) => {
  return (
    <div className="relative h-full w-full overflow-hidden flex items-center justify-center">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 300 100"
        xmlns="http://www.w3.org/2000/svg"
        className="select-none"
        aria-hidden="true"
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
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="20%" stopColor="#dc2626" />
            <stop offset="40%" stopColor="#2563eb" />
            <stop offset="60%" stopColor="#0891b2" />
            <stop offset="80%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#db2777" />
          </linearGradient>
        </defs>

        {/* Base neutral outline for readability */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.8"
          className="fill-transparent stroke-neutral-500 font-[helvetica] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold dark:stroke-neutral-400"
          style={{ opacity: 0.85 }}
        >
          {text}
        </text>

        {/* Static gradient outline (no hover/mask/animation) */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          stroke="url(#textGradient)"
          strokeWidth="1"
          className="fill-transparent font-[helvetica] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"
          style={{ filter: "drop-shadow(0 0 3px rgba(0,0,0,0.06))" }}
        >
          {text}
        </text>
      </svg>
    </div>
  );
};
