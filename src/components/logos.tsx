"use client";

import { FadeIn } from "./fade-in";

const companies = [
  "Attio",
  "Raycast",
  "Resend",
  "Loops",
  "Dub",
  "Cal.com",
];

export function Logos() {
  return (
    <section className="border-y border-[--color-border] px-6 py-14">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <p className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-zinc-500">
            Trusted by teams who ship fast
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {companies.map((name) => (
              <span
                key={name}
                className="text-lg font-semibold tracking-tight text-zinc-600 select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
