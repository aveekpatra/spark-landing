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
        viewBox="0 0 400 120"
        xmlns="http://www.w3.org/2000/svg"
        className="select-none max-w-full max-h-full"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
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

        {/* Mobile version - show only "Spark" */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.8"
          className="fill-transparent stroke-neutral-500 font-[helvetica] text-lg sm:hidden font-bold dark:stroke-neutral-400"
          style={{ opacity: 0.85 }}
        >
          Spark
        </text>

        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          stroke="url(#textGradient)"
          strokeWidth="1"
          className="fill-transparent font-[helvetica] text-lg sm:hidden font-bold"
          style={{ filter: "drop-shadow(0 0 3px rgba(0,0,0,0.06))" }}
        >
          Spark
        </text>

        {/* Desktop version - show full "Spark Service" */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.8"
          className="fill-transparent stroke-neutral-500 font-[helvetica] hidden sm:block text-lg md:text-4xl lg:text-5xl xl:text-6xl font-bold dark:stroke-neutral-400"
          style={{ opacity: 0.85 }}
        >
          {text}
        </text>

        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          stroke="url(#textGradient)"
          strokeWidth="1"
          className="fill-transparent font-[helvetica] hidden sm:block text-lg md:text-4xl lg:text-5xl xl:text-6xl font-bold"
          style={{ filter: "drop-shadow(0 0 3px rgba(0,0,0,0.06))" }}
        >
          {text}
        </text>
      </svg>
    </div>
  );
};
