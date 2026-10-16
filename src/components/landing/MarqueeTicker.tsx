"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const MARQUEE_ITEMS = [
  "FASTAPI 0.115+",
  "NEXT.JS 16",
  "REACT 19",
  "ANTHROPIC CLAUDE 3.5",
  "OPENAI GPT-4O",
  "GOOGLE GEMINI 2.0",
  "STRIPE SUBSCRIPTIONS",
  "LEMON SQUEEZY",
  "POSTGRESQL 16",
  "REDIS 7 & ARQ",
  "AWS COGNITO",
  "GDPR COMPLIANCE",
  "183 AUTOMATED TESTS (100% GREEN)",
];

export function MarqueeTicker() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 25,
        ease: "none",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full bg-primary text-primary-foreground py-3.5 overflow-hidden border-y border-border font-mono text-xs font-extrabold uppercase tracking-widest select-none shadow-sm">
      <div
        ref={marqueeRef}
        className="flex gap-10 whitespace-nowrap will-change-transform"
      >
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
          <span key={idx} className="flex items-center gap-10">
            <span>{item}</span>
            <span className="opacity-50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
