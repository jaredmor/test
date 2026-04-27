export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full opacity-20 blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(59,130,246,0.3) 0%, rgba(139,92,246,0.15) 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="hero-animate hero-animate-1 mb-6 inline-flex items-center gap-2 rounded-full border border-[--color-border] bg-[--color-card] px-4 py-1.5 text-sm text-[--color-muted]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
          All systems operational
        </div>

        <h1 className="hero-animate hero-animate-2 mx-auto max-w-3xl text-4xl font-semibold leading-[1.15] tracking-tight text-[--color-foreground] sm:text-5xl md:text-6xl">
          This frontend is deployed on a blockchain network across 14
          independent nodes&thinsp;&mdash;&thinsp;and you couldn&apos;t even tell.
        </h1>

        <p className="hero-animate hero-animate-3 mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[--color-muted] sm:text-xl">
          Instant load times, zero cold starts, global availability by
          default. The infrastructure disappears so your product can stand
          out.
        </p>

        <div className="hero-animate hero-animate-4 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#features"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 text-sm font-medium text-black transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Get started
          </a>
          <a
            href="#preview"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-[--color-border] bg-transparent px-6 text-sm font-medium text-[--color-foreground] transition-colors hover:bg-[--color-card] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
