"use client";

import { useState, useEffect, useRef } from "react";
import { Calendar, Users, UserCheck, CalendarDays } from "lucide-react";
import statsData from "@/data/stats.json";
import type { Stat } from "@/lib/types";
import { COUNTER_DURATION_MS, COUNTER_STEPS } from "@/lib/constants";
import { loadJsonData } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calendar,
  Users,
  UserCheck,
  CalendarDays,
};

function AnimatedCounter({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const duration = COUNTER_DURATION_MS;
    const steps = COUNTER_STEPS;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), value);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <span ref={ref} className="text-3xl font-bold text-text md:text-4xl">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function StatsBar() {
  const stats = loadJsonData<Stat>(statsData);

  return (
    <section className="bg-background py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = iconMap[stat.icon] || Calendar;
            return (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <Icon className="mb-2 h-6 w-6 text-primary" />
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
                <span className="mt-1 text-sm text-text-secondary">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
