"use client";

import React from "react";
import { CheckCircle2, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/core/i18n/context";

interface PricingCardsProps {
  freeRepoUrl: string;
  checkoutUrl: string;
  onCheckout: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function PricingCards({ freeRepoUrl, checkoutUrl, onCheckout }: PricingCardsProps) {
  const { t } = useTranslation();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
      <div className="p-8 sm:p-10 border border-border bg-card text-card-foreground flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground font-bold">
              {t.landing.pricing.liteTitle}
            </h3>
            <span className="text-xs font-mono px-2 py-0.5 bg-muted text-foreground border border-border font-semibold">
              {t.landing.pricing.liteBadge}
            </span>
          </div>

          <div className="text-5xl font-serif mb-6 text-foreground font-bold">
            {t.landing.pricing.litePrice}
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground mb-8 leading-relaxed font-normal">
            {t.landing.pricing.liteDesc}
          </p>

          <ul className="space-y-4 mb-8 text-sm">
            <li className="flex items-start gap-3 text-foreground">
              <CheckCircle2 className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
              <span>Next.js 16 App Router + Tailwind v4</span>
            </li>
            <li className="flex items-start gap-3 text-foreground">
              <CheckCircle2 className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
              <span>FastAPI + SQLAlchemy 2.0 Async</span>
            </li>
            <li className="flex items-start gap-3 text-foreground">
              <CheckCircle2 className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
              <span>Basic Single-User JWT Login</span>
            </li>
            <li className="flex items-start gap-3 text-muted-foreground/60 line-through">
              <span className="h-4 w-4 text-muted-foreground/40 shrink-0 text-center font-bold">✕</span>
              <span>Stripe & LemonSqueezy Subscriptions</span>
            </li>
            <li className="flex items-start gap-3 text-muted-foreground/60 line-through">
              <span className="h-4 w-4 text-muted-foreground/40 shrink-0 text-center font-bold">✕</span>
              <span>Claude, OpenAI & Gemini SSE Streaming</span>
            </li>
            <li className="flex items-start gap-3 text-muted-foreground/60 line-through">
              <span className="h-4 w-4 text-muted-foreground/40 shrink-0 text-center font-bold">✕</span>
              <span>Multi-tenant Teams & Role RBAC</span>
            </li>
          </ul>
        </div>

        <a
          href={freeRepoUrl}
          target="_blank"
          rel="noreferrer"
          className="w-full mt-4"
        >
          <Button
            variant="outline"
            className="w-full h-12 rounded-none border-border text-foreground hover:bg-muted font-mono text-xs uppercase font-bold"
          >
            <GitBranch className="h-4 w-4 mr-2" />
            {t.landing.pricing.liteCta}
          </Button>
        </a>
      </div>

      <div className="p-8 sm:p-10 border-2 border-primary bg-card text-card-foreground relative flex flex-col justify-between shadow-xl">
        <span className="absolute -top-3.5 right-6 bg-primary text-primary-foreground text-[10px] font-mono font-extrabold px-3 py-1 uppercase tracking-widest shadow-sm">
          {t.landing.pricing.proCommercial}
        </span>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-primary font-bold">
              {t.landing.pricing.proTitle}
            </h3>
            <span className="text-xs font-mono text-muted-foreground font-semibold">
              {t.landing.pricing.proBadge}
            </span>
          </div>

          <div className="text-5xl sm:text-6xl font-serif mb-6 flex items-baseline gap-3 text-foreground font-bold">
            {t.landing.pricing.proPrice}
            <span className="text-lg text-muted-foreground font-sans font-normal line-through">
              {t.landing.pricing.proOriginalPrice}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-foreground/90 mb-8 leading-relaxed font-normal">
            {t.landing.pricing.proDesc}
          </p>

          <ul className="space-y-4 mb-8 text-sm">
            <li className="flex items-start gap-3 text-primary font-semibold">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>{t.landing.pricing.everythingInLite}</span>
            </li>
            <li className="flex items-start gap-3 text-foreground font-medium">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>Stripe & LemonSqueezy Billing + Customer Portal</span>
            </li>
            <li className="flex items-start gap-3 text-foreground font-medium">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>Claude 3.5, OpenAI & Gemini SSE Streaming Engine</span>
            </li>
            <li className="flex items-start gap-3 text-foreground font-medium">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>Multi-Tenant Organizations, Teams & RBAC</span>
            </li>
            <li className="flex items-start gap-3 text-foreground font-medium">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>Tenant-Scoped API Keys & Scoped BYOK System</span>
            </li>
            <li className="flex items-start gap-3 text-foreground font-medium">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>183+ Automated Pytest Suite (100% Coverage)</span>
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <a
            href={checkoutUrl}
            onClick={onCheckout}
            className="lemonsqueezy-button block w-full"
          >
            <Button className="w-full h-14 rounded-none bg-primary text-primary-foreground hover:opacity-95 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md">
              {t.landing.pricing.proCta}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
