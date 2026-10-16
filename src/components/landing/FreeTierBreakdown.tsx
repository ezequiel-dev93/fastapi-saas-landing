"use client";

import React from "react";
import { Terminal, Code2, Layers, GitBranch, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/core/i18n/context";

interface FreeTierBreakdownProps {
  freeRepoUrl: string;
}

export function FreeTierBreakdown({ freeRepoUrl }: FreeTierBreakdownProps) {
  const { t } = useTranslation();

  return (
    <section id="free-tier" className="py-24 md:py-32 border-b border-border bg-background">
      <div className="w-[90%] max-w-7xl mx-auto text-left">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
            {t.landing.freeBreakdown.badge}
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mt-3 tracking-tight text-foreground font-medium">
            {t.landing.freeBreakdown.title}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mt-4 font-normal leading-relaxed">
            {t.landing.freeBreakdown.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-7 bg-card text-card-foreground border border-border space-y-4 hover:border-primary/50 transition-colors">
            <div className="h-10 w-10 bg-primary/10 text-primary border border-primary/20 flex items-center justify-center">
              <Terminal className="h-5 w-5" />
            </div>
            <h3 className="font-mono text-sm uppercase tracking-wider font-bold text-foreground">
              {t.landing.freeBreakdown.card1Title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t.landing.freeBreakdown.card1Desc}
            </p>
          </div>

          <div className="p-7 bg-card text-card-foreground border border-border space-y-4 hover:border-primary/50 transition-colors">
            <div className="h-10 w-10 bg-primary/10 text-primary border border-primary/20 flex items-center justify-center">
              <Layers className="h-5 w-5" />
            </div>
            <h3 className="font-mono text-sm uppercase tracking-wider font-bold text-foreground">
              {t.landing.freeBreakdown.card2Title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t.landing.freeBreakdown.card2Desc}
            </p>
          </div>

          <div className="p-7 bg-card text-card-foreground border border-border space-y-4 hover:border-primary/50 transition-colors">
            <div className="h-10 w-10 bg-primary/10 text-primary border border-primary/20 flex items-center justify-center">
              <Code2 className="h-5 w-5" />
            </div>
            <h3 className="font-mono text-sm uppercase tracking-wider font-bold text-foreground">
              {t.landing.freeBreakdown.card3Title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t.landing.freeBreakdown.card3Desc}
            </p>
          </div>

          <div className="p-7 bg-card text-card-foreground border border-border space-y-4 hover:border-primary/50 transition-colors">
            <div className="h-10 w-10 bg-primary/10 text-primary border border-primary/20 flex items-center justify-center">
              <GitBranch className="h-5 w-5" />
            </div>
            <h3 className="font-mono text-sm uppercase tracking-wider font-bold text-foreground">
              {t.landing.freeBreakdown.card4Title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t.landing.freeBreakdown.card4Desc}
            </p>
          </div>
        </div>

        <div className="mt-12 p-8 bg-card border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-mono text-sm uppercase font-bold text-foreground">
              {t.landing.freeBreakdown.readyToTest}
            </h4>
            <p className="text-xs text-muted-foreground">
              {t.landing.freeBreakdown.readyToTestDesc}
            </p>
          </div>
          <a
            href={freeRepoUrl}
            target="_blank"
            rel="noreferrer"
            className="shrink-0"
          >
            <Button
              variant="outline"
              className="h-11 px-6 border-primary/40 text-foreground hover:bg-primary hover:text-primary-foreground font-mono text-xs uppercase font-bold transition-all"
            >
              {t.landing.freeBreakdown.viewGithubFree}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
