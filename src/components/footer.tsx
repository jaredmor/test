const columns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Changelog", "Docs", "Status"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Press"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[--color-border] px-6 py-14">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-base font-semibold tracking-tight">yourapp</p>
            <p className="mt-3 text-sm leading-relaxed text-[--color-muted]">
              The modern platform for teams that move fast and ship with
              confidence.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-medium text-[--color-foreground]">
                {col.title}
              </p>
              <ul className="mt-3 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[--color-muted] transition-colors hover:text-[--color-foreground]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[--color-border] pt-8 text-xs text-zinc-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} yourapp, Inc. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-[--color-foreground]">
              Twitter
            </a>
            <a href="#" className="transition-colors hover:text-[--color-foreground]">
              GitHub
            </a>
            <a href="#" className="transition-colors hover:text-[--color-foreground]">
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
