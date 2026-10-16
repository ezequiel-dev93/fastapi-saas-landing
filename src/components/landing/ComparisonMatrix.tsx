"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/core/i18n/context";

interface ComparisonMatrixProps {
  founderEmail?: string;
  checkoutUrl: string;
  onCheckout: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function ComparisonMatrix({ founderEmail, checkoutUrl, onCheckout }: ComparisonMatrixProps) {
  const { t } = useTranslation();

  return (
    <div className="mt-24 border border-border bg-card text-card-foreground p-6 sm:p-10 shadow-lg text-left">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
          {t.landing.comparison.badge}
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl mt-2 tracking-tight text-foreground font-medium">
          {t.landing.comparison.title}
        </h3>
        <p className="text-muted-foreground text-sm sm:text-base mt-2 font-normal leading-relaxed">
          {t.landing.comparison.desc}
        </p>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto border border-border">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/60 text-foreground font-mono text-xs uppercase tracking-wider">
              <th className="py-4 px-4 font-bold">Module / Feature</th>
              <th className="py-4 px-4 font-bold text-center w-36 sm:w-44">
                Lite Edition ($0)
              </th>
              <th className="py-4 px-4 font-bold text-center w-36 sm:w-44 text-primary bg-primary/10">
                PRO Edition ($250)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-xs sm:text-sm">
            {/* 1. Core Framework */}
            <tr className="bg-muted/40 font-mono text-xs uppercase tracking-wider text-primary font-bold">
              <td colSpan={3} className="py-3 px-4">
                {t.landing.comparison.category1}
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="py-3 px-4 text-foreground font-medium">
                FastAPI 0.115+ Modular Architecture & Strict Settings
              </td>
              <td className="py-3 px-4 text-center">
                <CheckCircle2 className="h-4 w-4 mx-auto text-muted-foreground" />
              </td>
              <td className="py-3 px-4 text-center bg-primary/5">
                <CheckCircle2 className="h-4 w-4 mx-auto text-primary" />
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="py-3 px-4 text-foreground font-medium">
                Next.js 16 (App Router) + React 19 + Tailwind CSS v4
              </td>
              <td className="py-3 px-4 text-center">
                <CheckCircle2 className="h-4 w-4 mx-auto text-muted-foreground" />
              </td>
              <td className="py-3 px-4 text-center bg-primary/5">
                <CheckCircle2 className="h-4 w-4 mx-auto text-primary" />
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="py-3 px-4 text-foreground font-medium">
                SQLAlchemy 2.0 Modern DeclarativeBase & Alembic Migrations
              </td>
              <td className="py-3 px-4 text-center">
                <CheckCircle2 className="h-4 w-4 mx-auto text-muted-foreground" />
              </td>
              <td className="py-3 px-4 text-center bg-primary/5">
                <CheckCircle2 className="h-4 w-4 mx-auto text-primary" />
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="py-3 px-4 text-foreground font-medium">
                Bilingual Reactive i18n (EN/ES) & Dynamic Theme Toggle
              </td>
              <td className="py-3 px-4 text-center">
                <CheckCircle2 className="h-4 w-4 mx-auto text-muted-foreground" />
              </td>
              <td className="py-3 px-4 text-center bg-primary/5">
                <CheckCircle2 className="h-4 w-4 mx-auto text-primary" />
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="py-3 px-4 text-foreground font-medium">
                Multi-Stage Dockerfile, Docker Compose & GitHub Actions CI
              </td>
              <td className="py-3 px-4 text-center">
                <CheckCircle2 className="h-4 w-4 mx-auto text-muted-foreground" />
              </td>
              <td className="py-3 px-4 text-center bg-primary/5">
                <CheckCircle2 className="h-4 w-4 mx-auto text-primary" />
              </td>
            </tr>

            {/* 2. AI Engine */}
            <tr className="bg-muted/40 font-mono text-xs uppercase tracking-wider text-primary font-bold">
              <td colSpan={3} className="py-3 px-4">
                {t.landing.comparison.category2}
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="py-3 px-4 text-foreground font-medium">
                Abstract AiProviderProtocol Specification
              </td>
              <td className="py-3 px-4 text-center">
                <CheckCircle2 className="h-4 w-4 mx-auto text-muted-foreground" />
              </td>
              <td className="py-3 px-4 text-center bg-primary/5">
                <CheckCircle2 className="h-4 w-4 mx-auto text-primary" />
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="py-3 px-4 text-foreground font-medium">
                Anthropic Claude 3.5 (Sonnet, Haiku, Opus) Native Adapter
              </td>
              <td className="py-3 px-4 text-center text-muted-foreground/40 font-mono text-xs">✕</td>
              <td className="py-3 px-4 text-center bg-primary/5">
                <CheckCircle2 className="h-4 w-4 mx-auto text-primary" />
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="py-3 px-4 text-foreground font-medium">
                OpenAI (GPT-4o, GPT-4o-mini, o3-mini) Native Adapter
              </td>
              <td className="py-3 px-4 text-center text-muted-foreground/40 font-mono text-xs">✕</td>
              <td className="py-3 px-4 text-center bg-primary/5">
                <CheckCircle2 className="h-4 w-4 mx-auto text-primary" />
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="py-3 px-4 text-foreground font-medium">
                Google Gemini (2.0 Flash, 1.5 Pro) Native Adapter
              </td>
              <td className="py-3 px-4 text-center text-muted-foreground/40 font-mono text-xs">✕</td>
              <td className="py-3 px-4 text-center bg-primary/5">
                <CheckCircle2 className="h-4 w-4 mx-auto text-primary" />
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="py-3 px-4 text-foreground font-medium">
                Server-Sent Events (SSE) Streaming with 15s Keepalive Ping
              </td>
              <td className="py-3 px-4 text-center text-muted-foreground/40 font-mono text-xs">✕</td>
              <td className="py-3 px-4 text-center bg-primary/5">
                <CheckCircle2 className="h-4 w-4 mx-auto text-primary" />
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="py-3 px-4 text-foreground font-medium">
                Atomic Balance Reservation & Auto-Refund on Provider Failure
              </td>
              <td className="py-3 px-4 text-center text-muted-foreground/40 font-mono text-xs">✕</td>
              <td className="py-3 px-4 text-center bg-primary/5">
                <CheckCircle2 className="h-4 w-4 mx-auto text-primary" />
              </td>
            </tr>

            {/* 3. Billing & Payments */}
            <tr className="bg-muted/40 font-mono text-xs uppercase tracking-wider text-primary font-bold">
              <td colSpan={3} className="py-3 px-4">
                {t.landing.comparison.category3}
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="py-3 px-4 text-foreground font-medium">
                Abstract PaymentGatewayProtocol Interface
              </td>
              <td className="py-3 px-4 text-center">
                <CheckCircle2 className="h-4 w-4 mx-auto text-muted-foreground" />
              </td>
              <td className="py-3 px-4 text-center bg-primary/5">
                <CheckCircle2 className="h-4 w-4 mx-auto text-primary" />
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="py-3 px-4 text-foreground font-medium">
                Stripe Payment Methods API & Auto-Idempotent Subscriptions
              </td>
              <td className="py-3 px-4 text-center text-muted-foreground/40 font-mono text-xs">✕</td>
              <td className="py-3 px-4 text-center bg-primary/5">
                <CheckCircle2 className="h-4 w-4 mx-auto text-primary" />
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="py-3 px-4 text-foreground font-medium">
                Cryptographic Webhook Verification & Deduplication Ledger
              </td>
              <td className="py-3 px-4 text-center text-muted-foreground/40 font-mono text-xs">✕</td>
              <td className="py-3 px-4 text-center bg-primary/5">
                <CheckCircle2 className="h-4 w-4 mx-auto text-primary" />
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="py-3 px-4 text-foreground font-medium">
                Stripe Customer Portal (Self-Serve Cards & PDF Invoices)
              </td>
              <td className="py-3 px-4 text-center text-muted-foreground/40 font-mono text-xs">✕</td>
              <td className="py-3 px-4 text-center bg-primary/5">
                <CheckCircle2 className="h-4 w-4 mx-auto text-primary" />
              </td>
            </tr>

            {/* 4. Multi-Tenancy & Teams */}
            <tr className="bg-muted/40 font-mono text-xs uppercase tracking-wider text-primary font-bold">
              <td colSpan={3} className="py-3 px-4">
                {t.landing.comparison.category4}
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="py-3 px-4 text-foreground font-medium">
                Organization Workspaces with Unique Slugs & Owners
              </td>
              <td className="py-3 px-4 text-center text-muted-foreground text-xs font-mono">
                Single User
              </td>
              <td className="py-3 px-4 text-center bg-primary/5">
                <CheckCircle2 className="h-4 w-4 mx-auto text-primary" />
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="py-3 px-4 text-foreground font-medium">
                Role-Based Access Control (RBAC: owner, admin, member)
              </td>
              <td className="py-3 px-4 text-center text-muted-foreground/40 font-mono text-xs">✕</td>
              <td className="py-3 px-4 text-center bg-primary/5">
                <CheckCircle2 className="h-4 w-4 mx-auto text-primary" />
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="py-3 px-4 text-foreground font-medium">
                Cryptographic 7-Day Email Invitations with HTML Templates
              </td>
              <td className="py-3 px-4 text-center text-muted-foreground/40 font-mono text-xs">✕</td>
              <td className="py-3 px-4 text-center bg-primary/5">
                <CheckCircle2 className="h-4 w-4 mx-auto text-primary" />
              </td>
            </tr>

            {/* 5. Organization API Keys */}
            <tr className="bg-muted/40 font-mono text-xs uppercase tracking-wider text-primary font-bold">
              <td colSpan={3} className="py-3 px-4">
                {t.landing.comparison.category5}
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="py-3 px-4 text-foreground font-medium">
                Environment-Prefixed Format (sk_live_... / sk_test_...)
              </td>
              <td className="py-3 px-4 text-center text-muted-foreground/40 font-mono text-xs">✕</td>
              <td className="py-3 px-4 text-center bg-primary/5">
                <CheckCircle2 className="h-4 w-4 mx-auto text-primary" />
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="py-3 px-4 text-foreground font-medium">
                SHA-256 Hashing with Safe 16-Character Public Prefix
              </td>
              <td className="py-3 px-4 text-center text-muted-foreground/40 font-mono text-xs">✕</td>
              <td className="py-3 px-4 text-center bg-primary/5">
                <CheckCircle2 className="h-4 w-4 mx-auto text-primary" />
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="py-3 px-4 text-foreground font-medium">
                Granular Scopes with Anti-Escalation Checks
              </td>
              <td className="py-3 px-4 text-center text-muted-foreground/40 font-mono text-xs">✕</td>
              <td className="py-3 px-4 text-center bg-primary/5">
                <CheckCircle2 className="h-4 w-4 mx-auto text-primary" />
              </td>
            </tr>

            {/* 6. Metering & Quotas */}
            <tr className="bg-muted/40 font-mono text-xs uppercase tracking-wider text-primary font-bold">
              <td colSpan={3} className="py-3 px-4">
                {t.landing.comparison.category6}
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="py-3 px-4 text-foreground font-medium">
                Atomic SQL Updates (Zero Race Conditions, Zero Overages)
              </td>
              <td className="py-3 px-4 text-center text-muted-foreground/40 font-mono text-xs">✕</td>
              <td className="py-3 px-4 text-center bg-primary/5">
                <CheckCircle2 className="h-4 w-4 mx-auto text-primary" />
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="py-3 px-4 text-foreground font-medium">
                HTTP 402 Payment Required Structured Response
              </td>
              <td className="py-3 px-4 text-center text-muted-foreground/40 font-mono text-xs">✕</td>
              <td className="py-3 px-4 text-center bg-primary/5">
                <CheckCircle2 className="h-4 w-4 mx-auto text-primary" />
              </td>
            </tr>

            {/* 7. Testing & Commercial */}
            <tr className="bg-muted/40 font-mono text-xs uppercase tracking-wider text-primary font-bold">
              <td colSpan={3} className="py-3 px-4">
                {t.landing.comparison.category7}
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="py-3 px-4 text-foreground font-medium">
                Automated Pytest Test Suite
              </td>
              <td className="py-3 px-4 text-center text-muted-foreground font-mono text-xs">
                44 Unit Tests
              </td>
              <td className="py-3 px-4 text-center text-primary font-mono text-xs font-bold bg-primary/5">
                183 Tests (100% Green)
              </td>
            </tr>
            <tr className="hover:bg-muted/20 transition-colors">
              <td className="py-3 px-4 text-foreground font-medium">
                Commercial License
              </td>
              <td className="py-3 px-4 text-center text-muted-foreground text-xs">
                MIT (Hobby / Personal)
              </td>
              <td className="py-3 px-4 text-center text-primary font-semibold text-xs bg-primary/5">
                Commercial Perpetual (Unlimited SaaS)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

