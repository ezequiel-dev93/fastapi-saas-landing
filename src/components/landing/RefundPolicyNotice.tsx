"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { useTranslation } from "@/core/i18n/context";

export function RefundPolicyNotice() {
  const { t } = useTranslation();

  return (
    <section className="mt-10 max-w-4xl mx-auto">
      <div className="p-6 sm:p-8 bg-card border border-border text-card-foreground shadow-sm flex flex-col sm:flex-row items-start gap-5">
        <div className="h-10 w-10 bg-primary/10 text-primary border border-primary/20 flex items-center justify-center shrink-0">
          <ShieldCheck className="h-5 w-5" />
        </div>

        <div className="space-y-3 text-left">
          <h4 className="font-mono text-sm uppercase tracking-wider font-bold text-foreground">
            {t.landing.refund.title}
          </h4>
          <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground font-normal">
            {t.landing.refund.desc}
          </p>
          <div>
            <Link
              href="/terms"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary hover:underline underline-offset-4"
            >
              <span>{t.landing.refund.termsLink}</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
