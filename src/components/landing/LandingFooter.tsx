"use client";

import React from "react";
import Link from "next/link";
import {
  Terminal,
  ExternalLink,
  Globe,
  GitBranch,
  Zap,
  Shield,
  FileCode,
  BookOpen,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/core/i18n/context";

interface LandingFooterProps {
  freeRepoUrl: string;
  checkoutUrl: string;
  founderEmail?: string;
  portfolioUrl?: string;
  onCheckout: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function LandingFooter({
  freeRepoUrl,
  checkoutUrl,
  portfolioUrl = "https://www.ezequielsuarez-dev.com/",
  onCheckout,
}: LandingFooterProps) {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border bg-card/60 pt-20 pb-12 text-left">
      <section className="w-[90%] max-w-7xl mx-auto space-y-20">
        {/* 1. Pre-Footer Conversion Callout (Moved from Comparison Matrix & Enhanced) */}
        <div className="p-8 sm:p-12 border border-border bg-card text-card-foreground shadow-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Fast-Track Your Launch
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-foreground font-medium tracking-tight">
              {t.landing.footer.preFooterTitle}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground font-normal leading-relaxed">
              {t.landing.footer.preFooterDesc}
            </p>
            <div className="pt-2 text-xs font-mono text-muted-foreground">
              <span>{t.landing.footer.customLicensing} </span>
              <a
                href={portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold underline hover:opacity-80 inline-flex items-center gap-1"
              >
                <span>Ezequiel Suarez</span>
                <ExternalLink className="h-3 w-3 inline" />
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto shrink-0">
            {/* PRO Checkout CTA */}
            <a
              href={checkoutUrl}
              onClick={onCheckout}
              className="lemonsqueezy-button inline-block"
            >
              <Button className="w-full sm:w-auto h-13 px-8 bg-primary text-primary-foreground hover:opacity-90 rounded-none text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md">
                <Zap className="h-4 w-4 mr-2" />
                <span>{t.landing.footer.buyProCta}</span>
              </Button>
            </a>

            {/* Free Edition CTA */}
            <a
              href={freeRepoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block"
            >
              <Button
                variant="outline"
                className="w-full sm:w-auto h-13 px-7 rounded-none border-border bg-card text-foreground hover:bg-muted font-mono text-xs uppercase font-bold transition-all"
              >
                <GitBranch className="h-4 w-4 mr-2 text-primary" />
                <span>{t.landing.footer.cloneFreeCta}</span>
              </Button>
            </a>
          </div>
        </div>

        {/* 2. Big Developer Showcase Heading */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-14 border-b border-border">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Founder & Creator
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight text-foreground font-medium">
              {t.landing.footer.heading}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground font-normal leading-relaxed">
              {t.landing.footer.subheading}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <a
              href={portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="h-12 px-6 rounded-none bg-primary text-primary-foreground hover:opacity-90 font-mono text-xs uppercase font-bold tracking-wider transition-all flex items-center gap-2 shadow-sm">
                <Globe className="h-4 w-4" />
                <span>{t.landing.footer.visitPortfolio}</span>
              </Button>
            </a>

            <a
              href="https://github.com/ezequiel-dev93"
              target="_blank"
              rel="noreferrer"
              className="inline-block"
            >
              <Button
                variant="outline"
                className="h-12 px-6 rounded-none border-border bg-card text-foreground hover:bg-muted font-mono text-xs uppercase font-bold transition-all flex items-center gap-2"
              >
                <GitBranch className="h-4 w-4" />
                <span>{t.landing.footer.github}</span>
              </Button>
            </a>
          </div>
        </div>

        {/* 3. Multi-Column Navigation (Contact, Resources, Docs) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 pb-14 border-b border-border text-sm">
          {/* Column 1: Contacto / Contact */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-primary font-bold">
              {t.landing.footer.colContact}
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a
                  href={portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-2 font-medium"
                >
                  <Globe className="h-4 w-4 text-primary" />
                  <span>Ezequiel Suarez ({t.landing.footer.portfolio})</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ezequiel-dev93"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-2"
                >
                  <GitBranch className="h-4 w-4 text-primary" />
                  <span>github.com/ezequiel-dev93</span>
                </a>
              </li>
              <li>
                <a
                  href={portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-2"
                >
                  <Globe className="h-4 w-4 text-primary" />
                  <span>ezequielsuarez-dev.com</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Recursos / Resources */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-primary font-bold">
              {t.landing.footer.colResources}
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link
                  href="/terms"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-2"
                >
                  <Shield className="h-4 w-4 text-primary" />
                  <span>{t.landing.footer.terms}</span>
                </Link>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-2"
                >
                  <HelpCircle className="h-4 w-4 text-primary" />
                  <span>{t.landing.footer.faq}</span>
                </a>
              </li>
              <li>
                <a
                  href={freeRepoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-2"
                >
                  <GitBranch className="h-4 w-4 text-primary" />
                  <span>{t.landing.footer.githubFree}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Docs / Documentación */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-primary font-bold">
              {t.landing.footer.colDocs}
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a
                  href={`${freeRepoUrl}#core-architecture`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-2"
                >
                  <FileCode className="h-4 w-4 text-primary" />
                  <span>{t.landing.footer.swagger}</span>
                </a>
              </li>
              <li>
                <a
                  href={`${freeRepoUrl}#deployment`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-2"
                >
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span>{t.landing.footer.deployment}</span>
                </a>
              </li>
              <li>
                <a
                  href={`${freeRepoUrl}#architecture`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-2"
                >
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span>{t.landing.footer.architecture}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 4. Bottom Legal Bar with Portfolio Link */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-2.5">
            <div className="h-6 w-6 bg-primary text-primary-foreground flex items-center justify-center font-bold">
              <Terminal className="h-3.5 w-3.5" />
            </div>
            <span>
              © 2026 FastAPI SaaS Boilerplate. Built for builders.{" "}
              {t.landing.footer.builtBy}{" "}
              <a
                href={portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold underline underline-offset-4 hover:opacity-80"
              >
                Ezequiel Suarez
              </a>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors inline-flex items-center gap-1 font-bold"
            >
              <span>ezequielsuarez-dev.com</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}
