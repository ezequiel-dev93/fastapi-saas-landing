"use client";

import React, { useEffect } from "react";
import Script from "next/script";
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { MarqueeTicker } from "@/components/landing/MarqueeTicker";
import { FreeTierBreakdown } from "@/components/landing/FreeTierBreakdown";
import { FeaturesGrid } from "@/components/landing/FeaturesGrid";
import { RoiCalculatorSection } from "@/components/landing/RoiCalculatorSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { LandingFooter } from "@/components/landing/LandingFooter";

const FREE_REPO_URL = "https://github.com/ezequiel-dev93/fastapi-saas-boilerplate-free";
const LEMONSQUEEZY_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_LEMON_SQUEEZY_CHECKOUT_URL ||
  "https://ezequiel-suarez-dev.lemonsqueezy.com/checkout/buy/6cd1f8d9-743f-4929-b4f2-bd304450ccfa";
const PORTFOLIO_URL = "https://www.ezequielsuarez-dev.com/";

export default function HomePage() {
  // Initialize Lemon.js overlay if available
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).createLemonSqueezy) {
      (window as any).createLemonSqueezy();
    }
  }, []);

  const handleProCheckout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If LemonSqueezy JS is available, let it open the overlay modal
    if (typeof window !== "undefined" && (window as any).LemonSqueezy) {
      e.preventDefault();
      (window as any).LemonSqueezy.Url.Open(LEMONSQUEEZY_CHECKOUT_URL);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground overflow-x-hidden transition-colors duration-200">
      {/* Lemon Squeezy Official Overlay Script */}
      <Script
        src="https://assets.lemonsqueezy.com/lemon.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined" && (window as any).createLemonSqueezy) {
            (window as any).createLemonSqueezy();
          }
        }}
      />

      <LandingNavbar
        portfolioUrl={PORTFOLIO_URL}
        freeRepoUrl={FREE_REPO_URL}
        checkoutUrl={LEMONSQUEEZY_CHECKOUT_URL}
        onCheckout={handleProCheckout}
      />

      <HeroSection
        freeRepoUrl={FREE_REPO_URL}
        checkoutUrl={LEMONSQUEEZY_CHECKOUT_URL}
        onCheckout={handleProCheckout}
      />

      <MarqueeTicker />

      <FreeTierBreakdown freeRepoUrl={FREE_REPO_URL} />

      <FeaturesGrid />

      <RoiCalculatorSection />

      <PricingSection
        freeRepoUrl={FREE_REPO_URL}
        checkoutUrl={LEMONSQUEEZY_CHECKOUT_URL}
        onCheckout={handleProCheckout}
      />

      <LandingFooter
        freeRepoUrl={FREE_REPO_URL}
        checkoutUrl={LEMONSQUEEZY_CHECKOUT_URL}
        portfolioUrl={PORTFOLIO_URL}
        onCheckout={handleProCheckout}
      />
    </div>
  );
}
