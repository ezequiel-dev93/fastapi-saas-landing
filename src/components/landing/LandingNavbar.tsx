"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Terminal, Globe, Zap, Menu, X, GitBranch, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { useTranslation } from "@/core/i18n/context";

interface LandingNavbarProps {
  portfolioUrl?: string;
  freeRepoUrl: string;
  checkoutUrl: string;
  onCheckout: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function LandingNavbar({
  portfolioUrl = "https://www.ezequielsuarez-dev.com/",
  freeRepoUrl,
  checkoutUrl,
  onCheckout,
}: LandingNavbarProps) {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/90 border-b border-border pt-[max(env(safe-area-inset-top),0.5rem)] transition-colors duration-200">
      <div className="bg-muted/70 border-b border-border/60 py-1.5 px-4 text-center text-xs font-mono text-muted-foreground hidden md:block">
        <span>{t.landing.banner} </span>
        <a
          href={portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold hover:underline inline-flex items-center gap-1 ml-1"
        >
          <Globe className="h-3 w-3 inline" />
          Ezequiel Suarez
        </a>
      </div>

      <nav className="w-[90%] max-w-7xl mx-auto flex items-center justify-between py-3 sm:py-4">
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="h-7 w-7 sm:h-8 sm:w-8 bg-primary text-primary-foreground flex items-center justify-center font-bold transition-transform group-hover:scale-105">
            <Terminal className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <span className="font-serif text-lg sm:text-2xl tracking-tight font-bold text-foreground whitespace-nowrap">
            FastAPI SaaS
          </span>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-widest px-1.5 sm:px-2 py-0.5 bg-muted text-foreground border border-border ml-1 font-mono font-semibold hidden sm:inline-block">
            {t.landing.nav.versionBadge}
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          <a
            href={freeRepoUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.landing.nav.githubFree}
          </a>
          <a
            href="#free-tier"
            className="text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.landing.nav.whatsInFree}
          </a>
          <a
            href="#pricing"
            className="text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.landing.nav.pricing}
          </a>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <a
            href={checkoutUrl}
            onClick={onCheckout}
            className="lemonsqueezy-button inline-block"
          >
            <Button className="h-8 sm:h-9 px-2.5 sm:px-4 bg-primary text-primary-foreground hover:opacity-90 rounded-none font-mono text-[11px] sm:text-xs uppercase font-extrabold tracking-wider transition-all shadow-sm">
              <Zap className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1" />
              <span>Get PRO ($250)</span>
            </Button>
          </a>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="h-8 w-8 sm:hidden rounded-none border-border bg-card text-foreground"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-border bg-background/95 backdrop-blur-xl px-6 py-6 space-y-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between p-3 border border-border bg-card">
            <span className="text-xs font-mono uppercase text-muted-foreground font-bold">
              Settings / Ajustes
            </span>
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>

          <div className="flex flex-col space-y-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            <a
              href="#free-tier"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-foreground transition-colors border-b border-border/40"
            >
              {t.landing.nav.whatsInFree}
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-foreground transition-colors border-b border-border/40"
            >
              {t.landing.nav.pricing}
            </a>
            <a
              href={freeRepoUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-foreground transition-colors border-b border-border/40 flex items-center justify-between"
            >
              <span>{t.landing.nav.githubFree}</span>
              <GitBranch className="h-3.5 w-3.5 text-primary" />
            </a>
          </div>

          <a
            href={checkoutUrl}
            onClick={(e) => {
              setMobileMenuOpen(false);
              onCheckout(e);
            }}
            className="lemonsqueezy-button block w-full pt-1"
          >
            <Button className="w-full h-12 bg-primary text-primary-foreground hover:opacity-90 rounded-none font-mono text-xs uppercase font-extrabold tracking-wider flex items-center justify-center gap-2 shadow-sm">
              <Zap className="h-4 w-4 shrink-0" />
              <span>Get PRO ($250) →</span>
            </Button>
          </a>
        </div>
      )}
    </header>
  );
}
