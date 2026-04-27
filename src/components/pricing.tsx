"use client";

import { FadeIn } from "./fade-in";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "For side projects and experiments.",
    features: [
      "Up to 10k requests / mo",
      "1 team member",
      "Community support",
      "Basic analytics",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "For growing teams that need more.",
    features: [
      "Unlimited requests",
      "Up to 20 team members",
      "Priority support",
      "Advanced analytics",
      "Custom domains",
      "SSO / SAML",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with specific needs.",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Dedicated support",
      "SLA guarantee",
      "SCIM provisioning",
      "On-prem option",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-[--color-muted]">
              Pricing
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[--color-muted]">
              Start for free, upgrade when you&apos;re ready. No hidden fees, no
              surprises.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 100}>
              <div
                className={`relative flex h-full flex-col rounded-xl border p-6 transition-colors duration-300 ${
                  plan.highlighted
                    ? "border-zinc-600 bg-[--color-card-hover]"
                    : "border-[--color-border] bg-[--color-card] hover:border-zinc-700 hover:bg-[--color-card-hover]"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-6 rounded-full bg-white px-3 py-0.5 text-xs font-medium text-black">
                    Popular
                  </span>
                )}

                <div>
                  <h3 className="text-base font-medium text-[--color-foreground]">
                    {plan.name}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-4xl font-semibold tracking-tight text-[--color-foreground]">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-sm text-[--color-muted]">
                        / {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-[--color-muted]">
                    {plan.description}
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-[--color-muted]"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`mt-8 inline-flex h-10 w-full items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                    plan.highlighted
                      ? "bg-white text-black hover:bg-white/90"
                      : "border border-[--color-border] text-[--color-foreground] hover:bg-[--color-background]"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
