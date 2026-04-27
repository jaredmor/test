"use client";

import { FadeIn } from "./fade-in";

export function CTA() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[--color-muted]">
            Create your free account in 30 seconds. No credit card required.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 text-sm font-medium text-black transition-colors hover:bg-white/90"
            >
              Start building for free
            </a>
            <a
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-[--color-border] px-6 text-sm font-medium text-[--color-foreground] transition-colors hover:bg-[--color-card]"
            >
              Talk to sales
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
