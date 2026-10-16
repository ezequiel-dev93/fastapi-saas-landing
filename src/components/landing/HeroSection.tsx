"use client";

import React from "react";
import { Zap, GitBranch, CheckCircle2, Shield, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/core/i18n/context";

interface HeroSectionProps {
  freeRepoUrl: string;
  checkoutUrl: string;
  onCheckout: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function HeroSection({ freeRepoUrl, checkoutUrl, onCheckout }: HeroSectionProps) {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32 border-b border-border">
      <div className="absolute top-1/4 -left-20 w-[450px] h-[300px] bg-primary/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="w-[90%] max-w-7xl mx-auto relative text-left">
        <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 border border-primary/30 bg-primary/10 text-primary text-xs font-mono font-bold uppercase tracking-widest">
          <Zap className="h-3.5 w-3.5 animate-pulse text-primary" />
          <span>{t.landing.hero.badge}</span>
        </div>

        <h1 className="hero-title font-serif text-5xl sm:text-6xl md:text-8xl leading-[1.04] tracking-tight max-w-4xl mb-8 text-foreground font-medium">
          {t.landing.hero.title}
        </h1>

        <p className="hero-desc text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 font-normal leading-relaxed">
          {t.landing.hero.desc}
        </p>

        <div className="hero-cta flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
          <a
            href={checkoutUrl}
            onClick={onCheckout}
            className="lemonsqueezy-button inline-block"
          >
            <Button className="w-full sm:w-auto h-13 px-8 bg-primary text-primary-foreground hover:opacity-90 rounded-none text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-md">
              {t.landing.hero.getPro}
            </Button>
          </a>

          <a
            href={freeRepoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block"
          >
            <Button
              variant="outline"
              className="w-full sm:w-auto h-13 px-7 rounded-none border-border bg-card text-foreground hover:bg-muted font-mono text-xs uppercase transition-all"
            >
              <GitBranch className="h-4 w-4 mr-2" />
              {t.landing.hero.cloneFree}
            </Button>
          </a>
        </div>

        <div className="hero-stats pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
            <div>
              <p className="text-xs font-mono font-bold text-foreground">
                {t.landing.hero.statsTests}
              </p>
              <p className="text-[11px] text-muted-foreground">Pytest (100% Green)</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Cpu className="h-5 w-5 text-primary shrink-0" />
            <div>
              <p className="text-xs font-mono font-bold text-foreground">
                {t.landing.hero.statsPython}
              </p>
              <p className="text-[11px] text-muted-foreground">FastAPI 0.115+ & Tailwind v4</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-primary shrink-0" />
            <div>
              <p className="text-xs font-mono font-bold text-foreground">
                {t.landing.hero.statsLicense}
              </p>
              <p className="text-[11px] text-muted-foreground">Perpetual & Unlimited SaaS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
