import React from "react";
import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

export const metadata = {
  title: "Terms of Service & License — FastAPI SaaS Boilerplate",
  description: "Commercial Software License Agreement and terms of purchase.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-poster)] text-[var(--color-glow)] font-sans px-6 py-16 selection:bg-[var(--color-acid)] selection:text-[var(--color-poster)]">
      <div className="max-w-3xl mx-auto space-y-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-[var(--color-acid)] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-4 border-b border-[var(--color-smoke)] pb-8">
          <div className="flex items-center gap-2 text-[var(--color-acid)]">
            <Terminal className="h-6 w-6" />
            <span className="font-serif text-2xl font-bold">FastAPI SaaS Boilerplate</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            Terms of Service & Commercial License
          </h1>
          <p className="text-xs font-mono text-neutral-400">
            Last updated: October 2026 • Effective upon purchase
          </p>
        </div>

        <div className="space-y-8 text-neutral-300 text-sm leading-relaxed font-light">
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--color-glow)] font-semibold">
              1. Commercial License Grant
            </h2>
            <p>
              By purchasing the <strong>FastAPI SaaS PRO Edition</strong>, you are granted a non-exclusive, perpetual, worldwide license to use, modify, and build unlimited commercial applications, SaaS products, client websites, or internal tools using the source code.
            </p>
            <p>
              You own 100% of the products and intellectual property you build on top of this boilerplate. You are never required to pay recurring royalties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--color-glow)] font-semibold">
              2. Restrictions
            </h2>
            <p>
              You may not redistribute, resell, sublicense, lease, or publish the source code of this boilerplate as a competing boilerplate, starter kit, template, or open-source repository.
            </p>
            <p>
              Your customers may interact with your deployed SaaS applications, but they may not be granted direct access to the boilerplate's underlying source code repository.
            </p>
          </section>

          <section className="space-y-3 p-6 border-2 border-[var(--color-acid)] bg-[var(--color-poster)] rounded-none">
            <h2 className="font-serif text-2xl text-[var(--color-acid)] font-semibold">
              3. Refund Policy (All Sales Final)
            </h2>
            <p className="font-medium text-[var(--color-glow)]">
              No refunds, and you know why.
            </p>
            <p>
              The moment you pay, the entire repository is yours: source code, automated test suite, commit history, and architecture. There are no physical goods or revocable license keys to return, so a refund button would be pure theatre.
            </p>
            <p>
              That is precisely why a fully functional free edition (Lite) is publicly accessible on GitHub—so you can inspect the code quality, clean architecture, and patterns before spending a single dollar. Read the code first, test it, ask anything, and purchase the PRO edition only when the value equation is obvious to you.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[var(--color-glow)] font-semibold">
              4. Support & Warranty
            </h2>
            <p>
              The boilerplate is provided "as is", with complete automated test coverage (183/183 passing tests) and documentation. While bug fixes and compatibility updates are published regularly, direct custom software consulting or feature implementation is not included.
            </p>
          </section>

          <section className="space-y-3 border-t border-[var(--color-smoke)] pt-6 text-xs text-neutral-400 font-mono">
            <p>Questions? Reach out directly via email or open an issue on the repository.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
