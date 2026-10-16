"use client";

import React from "react";
import { Cpu, Shield, Layers, Lock, Zap, ExternalLink } from "lucide-react";
import { useTranslation } from "@/core/i18n/context";

export function FeaturesGrid() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Cpu,
      title: t.landing.features.f1Title,
      desc: t.landing.features.f1Desc,
    },
    {
      icon: ExternalLink,
      title: t.landing.features.f2Title,
      desc: t.landing.features.f2Desc,
    },
    {
      icon: Layers,
      title: t.landing.features.f3Title,
      desc: t.landing.features.f3Desc,
    },
    {
      icon: Lock,
      title: t.landing.features.f4Title,
      desc: t.landing.features.f4Desc,
    },
    {
      icon: Zap,
      title: t.landing.features.f5Title,
      desc: t.landing.features.f5Desc,
    },
    {
      icon: Shield,
      title: t.landing.features.f6Title,
      desc: t.landing.features.f6Desc,
    },
  ];

  return (
    <section className="py-24 md:py-32 border-b border-border bg-background">
      <div className="w-[90%] max-w-7xl mx-auto text-left">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
            {t.landing.features.badge}
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mt-3 tracking-tight text-foreground font-medium">
            {t.landing.features.title}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mt-4 font-normal leading-relaxed">
            {t.landing.features.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-card text-card-foreground border border-border space-y-4 hover:border-primary/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="h-10 w-10 bg-primary/10 text-primary border border-primary/20 flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-mono text-sm uppercase tracking-wider font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
