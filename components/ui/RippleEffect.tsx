"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const RippleEffect: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  const [ripples, setRipples] = useState<
    { x: number; y: number; size: number; id: number }[]
  >([]);

  const addRipple = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.2; // Increase size for visibility
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const id = performance.now();

    setRipples((prev) => [...prev, { x, y, size, id }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 800);
  };

  return (
    <div
      className={cn("relative overflow-hidden h-full w-full", className)}
      onMouseDown={addRipple}
    >
      {children}
      <div className="absolute inset-0 pointer-events-none">
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute rounded-full"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
              mixBlendMode: "multiply",
              border: "#285E27 solid 2px",
              backgroundColor: "hsl(85, 100%, 80%)",
              transform: "scale(0)",
              opacity: 1,
              animation: "ripple 10000ms ease-out  forwards",
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: scale(0.2);
            opacity: 0.8;
          }
          100% {
            transform: scale(5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
