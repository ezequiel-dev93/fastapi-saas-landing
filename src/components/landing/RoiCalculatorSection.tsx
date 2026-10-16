"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/core/i18n/context";

export function RoiCalculatorSection() {
  const { t } = useTranslation();
  const [hourlyRate, setHourlyRate] = useState<number>(50);

  const tasks = t.landing.roi.tasks || [];
  const totalHours = tasks.reduce((acc, task) => acc + task.hours, 0) || 120;
  const totalDevCost = totalHours * hourlyRate;
  const proPrice = 250;
  const netSavings = Math.max(0, totalDevCost - proPrice);

  return (
    <section className="py-24 md:py-32 border-b border-border bg-background">
      <div className="w-[90%] max-w-7xl mx-auto text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
                {t.landing.roi.badge}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mt-3 tracking-tight text-foreground font-medium">
                {t.landing.roi.title}
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mt-4 leading-relaxed font-normal">
                {t.landing.roi.desc}
              </p>
            </div>

            <div className="p-6 bg-card border border-border space-y-4">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-muted-foreground font-medium">
                  {t.landing.roi.sliderLabel}
                </span>
                <span className="text-lg font-bold font-mono text-primary">
                  ${hourlyRate}/hr
                </span>
              </div>
              <input
                type="range"
                min="30"
                max="200"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-2 bg-muted rounded-none appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[11px] font-mono text-muted-foreground">
                <span>$30/hr</span>
                <span>$100/hr</span>
                <span>$200/hr</span>
              </div>
            </div>

            <div className="p-6 bg-card border border-border space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-border text-sm">
                <span className="text-muted-foreground">{t.landing.roi.totalPlumbing}</span>
                <span className="font-mono font-bold text-foreground">{totalHours} hrs</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border text-sm">
                <span className="text-muted-foreground">{t.landing.roi.estimatedDevCost}</span>
                <span className="font-mono font-bold text-foreground" suppressHydrationWarning>
                  ${new Intl.NumberFormat("en-US").format(totalDevCost)} USD
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border text-sm">
                <span className="text-muted-foreground">{t.landing.roi.boilerplateCost}</span>
                <span className="font-mono font-bold text-foreground">${proPrice} USD</span>
              </div>
              <div className="flex justify-between items-center pt-2 text-base font-bold">
                <span className="text-primary">{t.landing.roi.netSavings}</span>
                <span className="font-mono text-xl text-primary font-extrabold" suppressHydrationWarning>
                  +${new Intl.NumberFormat("en-US").format(netSavings)} USD
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-card border border-border p-6 sm:p-8">
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-6 font-bold">
              Engineering Time Breakdown (Typical SaaS Infrastructure)
            </h3>
            <div className="divide-y divide-border">
              {tasks.map((task, idx) => (
                <div
                  key={idx}
                  className="py-3.5 flex items-center justify-between gap-4 text-xs sm:text-sm hover:bg-muted/40 px-2 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{task.name}</span>
                  </div>
                  <div className="font-mono text-right shrink-0 text-muted-foreground text-xs">
                    <span className="font-bold text-foreground">{task.hours}h</span>
                    <span className="opacity-70 ml-1.5">({task.days}d)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
