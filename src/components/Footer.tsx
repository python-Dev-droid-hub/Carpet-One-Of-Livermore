import { nav, site, footer } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/8 bg-sand/40 py-12 md:py-16">
      <div className="container-page grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <a href="#main" className="font-serif text-xl tracking-tight text-ink">
            {site.name}
          </a>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
            {footer.blurb}
          </p>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-sage">
            Quick links
          </h2>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-ink/80 transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-sage">
            Contact
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-ink/80">
            <li>
              <a href={site.phoneHref} className="hover:text-ink">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="hover:text-ink">
                {site.email}
              </a>
            </li>
            <li>{site.address}</li>
            <li>{site.location}</li>
          </ul>
        </div>
      </div>

      <div className="container-page mt-10 border-t border-ink/8 pt-6">
        <p className="text-center text-xs text-ink/55">
          © {year} {site.name}. All rights reserved. Developed and Designed by{" "}
          <a
            href="https://usbrandbooster.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition-colors hover:text-ink"
          >
            US Brand Booster LLC
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
