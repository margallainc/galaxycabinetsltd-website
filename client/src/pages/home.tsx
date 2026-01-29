import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Phone, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/images/galaxy-hero-kitchen.png";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const SERVICES = [
  {
    title: "Kitchen Cabinet Renovations",
    description:
      "Refresh, reface, or rebuild—tailored layouts, durable finishes, and clean installs.",
    bullets: [
      "Design guidance",
      "Soft-close hardware",
      "Clean, protected jobsite",
    ],
  },
  {
    title: "Countertops",
    description:
      "Quartz, granite, and laminate options with precise templating and seamless fit.",
    bullets: ["Template & install", "Backsplash-ready edges", "Care guidance"],
  },
  {
    title: "Basement Finish Outs",
    description:
      "From framing to final trim—comfortable spaces that feel like the rest of your home.",
    bullets: ["Drywall & paint", "Built-ins & storage", "Detail finishing"],
  },
] as const;

const STATS = [
  { label: "Project types", value: "Kitchens • Basements • Tops" },
  { label: "Focus", value: "Craftsmanship & clean lines" },
  { label: "Service", value: "Clear quotes, tight timelines" },
] as const;

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      data-testid="badge-eyebrow"
      className="inline-flex items-center gap-2 rounded-full border bg-card/70 px-3 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur"
    >
      <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--accent))]" />
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="flex justify-center">
        <span
          data-testid="text-section-eyebrow"
          className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
        >
          {eyebrow}
        </span>
      </div>
      <h2
        data-testid="text-section-title"
        className="mt-4 font-serif text-3xl leading-tight tracking-tight sm:text-4xl"
      >
        {title}
      </h2>
      <p
        data-testid="text-section-subtitle"
        className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
      >
        {subtitle}
      </p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div data-testid="page-home" className="bg-aurora">
      <header className="container-pad pt-6">
        <nav
          data-testid="nav-main"
          className="flex items-center justify-between gap-4"
        >
          <Link
            href="/"
            data-testid="link-home"
            className="group inline-flex items-center gap-2"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl border bg-card/70 shadow-sm backdrop-blur">
              <span className="font-serif text-lg tracking-tight">G</span>
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold">Galaxy Kitchen Cabinets</div>
              <div className="text-xs text-muted-foreground">Ltd.</div>
            </div>
          </Link>

          <div className="hidden items-center gap-1 rounded-full border bg-card/60 p-1 shadow-sm backdrop-blur md:flex">
            <Link
              href="/"
              data-testid="link-nav-home"
              className="rounded-full px-3 py-2 text-sm font-medium hover:bg-secondary/60"
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              data-testid="link-nav-portfolio"
              className="rounded-full px-3 py-2 text-sm font-medium hover:bg-secondary/60"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              data-testid="link-nav-contact"
              className="rounded-full px-3 py-2 text-sm font-medium hover:bg-secondary/60"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              data-testid="link-cta-header"
              className="hidden text-sm font-medium text-muted-foreground hover:text-foreground sm:inline"
            >
              Get a quote
            </a>
            <Button asChild data-testid="button-header-portfolio">
              <Link href="/portfolio">View work</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="container-pad pb-20 pt-10 sm:pt-14">
        <section
          data-testid="section-hero"
          className="grid items-center gap-10 lg:grid-cols-12"
        >
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge>Cabinets • Countertops • Basement finish outs</Badge>

              <h1
                data-testid="text-hero-title"
                className="mt-5 text-balance font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl"
              >
                Renovations that feel custom—because they are.
              </h1>

              <p
                data-testid="text-hero-subtitle"
                className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
              >
                Galaxy Kitchen Cabinets Ltd. delivers clean installs, thoughtful details,
                and finishes that hold up. We specialize in kitchen cabinet renovations,
                countertops, and basement finish outs.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" data-testid="button-hero-quote">
                  <Link href="/contact">Request a quote</Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  data-testid="button-hero-portfolio"
                >
                  <Link href="/portfolio">
                    Explore portfolio <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <a
                  data-testid="link-hero-phone"
                  href="tel:+1-587-703-1010"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  <Phone className="h-4 w-4" />
                  +1 (587) 703-1010
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    data-testid={`card-stat-${s.label}`}
                    className="rounded-2xl border bg-card/60 p-4 shadow-sm backdrop-blur"
                  >
                    <div className="text-xs font-medium text-muted-foreground">
                      {s.label}
                    </div>
                    <div className="mt-1 text-sm font-semibold">{s.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[hsl(42_96%_54%)] text-[hsl(42_96%_54%)]"
                    />
                  ))}
                </div>
                <span data-testid="text-rating">Trusted by homeowners for tidy, on-time work</span>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="grain relative overflow-hidden rounded-3xl border bg-card shadow-[var(--shadow-xl)]"
            >
              <img
                data-testid="img-hero"
                src={heroImage}
                alt="Modern kitchen renovation"
                className="h-[340px] w-full object-cover sm:h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <div className="glass rounded-2xl p-4 shadow-sm">
                  <div className="text-xs font-medium text-muted-foreground">
                    Typical scope
                  </div>
                  <div
                    data-testid="text-hero-scope"
                    className="mt-1 text-sm font-semibold"
                  >
                    Cabinet updates, counters, trim details, clean finish work
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section data-testid="section-services" className="mt-18 sm:mt-22">
          <SectionTitle
            eyebrow="Services"
            title="Built around your space"
            subtitle="Three core offerings, one standard: clean work, durable materials, and a result that feels intentional."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {SERVICES.map((s) => (
              <Card
                key={s.title}
                data-testid={`card-service-${s.title}`}
                className="card-surface rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <h3
                  data-testid={`text-service-title-${s.title}`}
                  className="font-serif text-xl tracking-tight"
                >
                  {s.title}
                </h3>
                <p
                  data-testid={`text-service-desc-${s.title}`}
                  className="mt-2 text-sm leading-relaxed text-muted-foreground"
                >
                  {s.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      data-testid={`row-service-bullet-${s.title}-${b}`}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--accent))]" />
                      <span className="text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        <section data-testid="section-cta" className="mt-18 sm:mt-22">
          <div className="grain overflow-hidden rounded-3xl border bg-[linear-gradient(135deg,hsl(var(--primary))_0%,hsl(224_58%_20%)_45%,hsl(204_92%_50%)_120%)] p-1 shadow-[var(--shadow-xl)]">
            <div className="rounded-[calc(var(--radius-xl)_-_2px)] bg-background/10 p-8 text-white backdrop-blur sm:p-10">
              <div className="grid gap-6 md:grid-cols-12 md:items-center">
                <div className="md:col-span-8">
                  <h3
                    data-testid="text-cta-title"
                    className="text-balance font-serif text-2xl tracking-tight sm:text-3xl"
                  >
                    Ready to upgrade your kitchen or basement?
                  </h3>
                  <p
                    data-testid="text-cta-subtitle"
                    className="mt-2 max-w-2xl text-sm text-white/80"
                  >
                    Tell us what you're building. We'll respond with next steps and a clear path
                    from idea to finish.
                  </p>
                </div>
                <div className="md:col-span-4 md:flex md:justify-end">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-[hsl(var(--primary))] hover:bg-white/90"
                    data-testid="button-cta-contact"
                  >
                    <Link href="/contact">Contact us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          data-testid="section-mini-contact"
          className="mt-14 rounded-3xl border bg-card/60 p-7 shadow-sm backdrop-blur"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div
                data-testid="text-mini-contact-title"
                className="font-serif text-xl"
              >
                Quick contact
              </div>
              <div
                data-testid="text-mini-contact-subtitle"
                className="mt-1 text-sm text-muted-foreground"
              >
                Prefer a quick call? We're happy to talk through your project.
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:items-end">
              <a
                data-testid="link-mini-phone"
                href="tel:+1-587-703-1010"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
              >
                <Phone className="h-4 w-4" />
                +1 (587) 703-1010
              </a>
              <Link
                href="/contact"
                data-testid="link-mini-contact"
                className="text-sm text-white/90 underline-offset-4 hover:underline"
              >
                Or send a message →
              </Link>
            </div>
          </div>
        </section>

        <footer data-testid="footer" className="mt-12 pb-8">
          <div className="flex flex-col items-start justify-between gap-4 border-t pt-6 sm:flex-row sm:items-center">
            <div>
              <div data-testid="text-footer-brand" className="text-sm font-semibold">
                Galaxy Kitchen Cabinets Ltd.
              </div>
              <div
                data-testid="text-footer-tagline"
                className="mt-1 text-xs text-muted-foreground"
              >
                Cabinets • Countertops • Basement finish outs
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <Link
                href="/portfolio"
                data-testid="link-footer-portfolio"
                className="text-muted-foreground hover:text-foreground"
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                data-testid="link-footer-contact"
                className="text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
