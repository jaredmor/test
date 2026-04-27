"use client";

import { FadeIn } from "./fade-in";

const rows = [
  { endpoint: "/api/users", method: "GET", status: 200, latency: "12ms", time: "2 min ago" },
  { endpoint: "/api/billing/invoice", method: "POST", status: 201, latency: "38ms", time: "4 min ago" },
  { endpoint: "/api/teams/sync", method: "PUT", status: 200, latency: "21ms", time: "5 min ago" },
  { endpoint: "/api/webhooks/emit", method: "POST", status: 200, latency: "9ms", time: "6 min ago" },
  { endpoint: "/api/auth/refresh", method: "POST", status: 200, latency: "15ms", time: "8 min ago" },
  { endpoint: "/api/files/upload", method: "POST", status: 413, latency: "102ms", time: "12 min ago" },
];

export function Preview() {
  return (
    <section id="preview" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-[--color-muted]">
              Dashboard
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Visibility into every request
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[--color-muted]">
              A live feed of API traffic, latency percentiles, and error rates
              — no third-party observability tool required.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="relative mt-14 overflow-hidden rounded-xl border border-[--color-border] bg-[--color-card]">
            {/* Window chrome */}
            <div className="flex items-center justify-between border-b border-[--color-border] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-zinc-700" />
                <span className="h-3 w-3 rounded-full bg-zinc-700" />
                <span className="h-3 w-3 rounded-full bg-zinc-700" />
              </div>
              <span className="text-xs text-zinc-500 font-mono">
                app.yourapp.com/dashboard
              </span>
              <div className="w-[52px]" />
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-3 gap-px border-b border-[--color-border] bg-[--color-border]">
              {[
                { label: "Requests (24h)", value: "1.24M" },
                { label: "P95 latency", value: "48ms" },
                { label: "Error rate", value: "0.03%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[--color-card] px-5 py-4"
                >
                  <p className="text-xs text-zinc-500">{stat.label}</p>
                  <p className="mt-1 text-xl font-semibold tracking-tight text-[--color-foreground]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[--color-border] text-xs text-zinc-500">
                    <th className="px-5 py-3 font-medium">Endpoint</th>
                    <th className="px-5 py-3 font-medium">Method</th>
                    <th className="px-5 py-3 font-medium">Status</th>
                    <th className="px-5 py-3 font-medium">Latency</th>
                    <th className="px-5 py-3 font-medium text-right">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-[--color-border] last:border-0 text-[--color-muted] transition-colors hover:bg-[--color-card-hover]"
                    >
                      <td className="px-5 py-3 font-mono text-[--color-foreground]">
                        {row.endpoint}
                      </td>
                      <td className="px-5 py-3">
                        <span className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs font-medium text-zinc-300">
                          {row.method}
                        </span>
                      </td>
                      <td className="px-5 py-3">
                        <span
                          className={`font-mono text-xs ${
                            row.status >= 400
                              ? "text-red-400"
                              : "text-emerald-400"
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="px-5 py-3 font-mono">{row.latency}</td>
                      <td className="px-5 py-3 text-right text-zinc-500">
                        {row.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
