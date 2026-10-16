"use client";

import React from "react";
import { useTranslation } from "@/core/i18n/context";
import { PricingCards } from "./PricingCards";
import { RefundPolicyNotice } from "./RefundPolicyNotice";
import { ComparisonMatrix } from "./ComparisonMatrix";

interface PricingSectionProps {
  freeRepoUrl: string;
  checkoutUrl: string;
  founderEmail?: string;
  onCheckout: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function PricingSection({
  freeRepoUrl,
  checkoutUrl,
  founderEmail,
  onCheckout,
}: PricingSectionProps) {
  const { t } = useTranslation();

  return (
    <section id="pricing" className="py-24 md:py-32 bg-background border-b border-border">
      <div className="w-[90%] max-w-7xl mx-auto text-left">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
            {t.landing.pricing.badge}
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mt-3 tracking-tight text-foreground font-medium">
            {t.landing.pricing.title}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mt-4 font-normal leading-relaxed">
            {t.landing.pricing.desc}
          </p>
        </div>

        <PricingCards
          freeRepoUrl={freeRepoUrl}
          checkoutUrl={checkoutUrl}
          onCheckout={onCheckout}
        />


        <RefundPolicyNotice />

        <ComparisonMatrix
          founderEmail={founderEmail}
          checkoutUrl={checkoutUrl}
          onCheckout={onCheckout}
        />
      </div>
    </section>
  );
}
