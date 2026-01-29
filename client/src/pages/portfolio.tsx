import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import imgBar from "@/assets/images/bar.png";
import imgClosets from "@/assets/images/closets.png";
import imgConsole from "@/assets/images/console.png";
import imgCountertops from "@/assets/images/countertops.png";
import imgFamilyRoom from "@/assets/images/family_roon.png";
import imgKitchenCabinets from "@/assets/images/kitchen_cabinets.png";

type PortfolioItem = {
  id: string;
  title: string;
  category: "Cabinets" | "Countertops" | "Basements";
  location: string;
  details: string[];
  image: string;
};

const ITEMS: PortfolioItem[] = [
  {
    id: "kitchen-01",
    title: "Warm oak kitchen refresh",
    category: "Cabinets",
    location: "Residential",
    details: [
      "Shaker doors + soft-close",
      "Trim alignment + clean reveals",
      "Hardware upgrade",
    ],
    image: imgKitchenCabinets,
  },
  {
    id: "tops-01",
    title: "Quartz counters with waterfall edge",
    category: "Countertops",
    location: "Residential",
    details: ["Template + install", "Sink cutout", "Edge polish"],
    image: imgCountertops,
  },
  {
    id: "base-01",
    title: "Cozy basement family room",
    category: "Basements",
    location: "Residential",
    details: ["Built-in storage", "Drywall + paint", "Trim finish"],
    image: imgFamilyRoom,
  },
  {
    id: "kitchen-02",
    title: "Modern two-tone cabinetry",
    category: "Cabinets",
    location: "Residential",
    details: ["Upper/lower contrast", "Integrated pulls", "Floating shelves"],
    image: imgClosets,
  },
  {
    id: "tops-02",
    title: "Durable laminate upgrade",
    category: "Countertops",
    location: "Residential",
    details: ["Budget-friendly", "Clean seams", "Backsplash-ready"],
    image: imgConsole,
  },
  {
    id: "base-02",
    title: "Basement bar + kitchenette",
    category: "Basements",
    location: "Residential",
    details: ["Cabinet run", "Counter install", "Feature lighting"],
    image: imgBar,
  },
];

const FILTERS = ["All", "Cabinets", "Countertops", "Basements"] as const;

function Pill({
  active,
  children,
  onClick,
  testId,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
  testId: string;
}) {
  return (
    <button
      data-testid={testId}
      onClick={onClick}
      className={
        "rounded-full border px-4 py-2 text-sm font-medium transition-colors " +
        (active
          ? "bg-primary text-primary-foreground"
          : "bg-card/60 text-foreground hover:bg-secondary/70")
      }
    >
      {children}
    </button>
  );
}

export default function PortfolioPage() {
  const [filter, setFilter] = React.useState<(typeof FILTERS)[number]>("All");

  const visible = React.useMemo(() => {
    if (filter === "All") return ITEMS;
    return ITEMS.filter((i) => i.category === filter);
  }, [filter]);

  return (
    <div data-testid="page-portfolio" className="bg-aurora min-h-dvh">
      <header className="container-pad pt-6">
        <nav
          data-testid="nav-portfolio"
          className="flex items-center justify-between gap-4"
        >
          <Link
            href="/"
            data-testid="link-brand"
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

          <Button asChild data-testid="button-nav-contact">
            <Link href="/contact">Request a quote</Link>
          </Button>
        </nav>
      </header>

      <main className="container-pad pb-16 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div
            data-testid="text-portfolio-eyebrow"
            className="mx-auto inline-flex items-center gap-2 rounded-full border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--accent))]" />
            Recent work
          </div>
          <h1
            data-testid="text-portfolio-title"
            className="mt-5 text-balance font-serif text-4xl tracking-tight sm:text-5xl"
          >
            Portfolio
          </h1>
          <p
            data-testid="text-portfolio-subtitle"
            className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            A few representative projects across cabinets, countertops, and basement finish outs.
            (Photos can be added anytime.)
          </p>
        </motion.div>

        <section data-testid="section-filters" className="mt-8">
          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-2">
            {FILTERS.map((f) => (
              <Pill
                key={f}
                active={filter === f}
                onClick={() => setFilter(f)}
                testId={`button-filter-${f}`}
              >
                {f}
              </Pill>
            ))}
          </div>
        </section>

        <section data-testid="section-grid" className="mt-10">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 * idx }}
              >
                <Card
                  data-testid={`card-portfolio-${item.id}`}
                  className="card-surface group rounded-3xl overflow-hidden"
                >
                  <div className="relative">
                    <img
                      data-testid={`img-portfolio-${item.id}`}
                      src={item.image}
                      alt={item.title}
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-background/70 backdrop-blur transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="p-5">


                    <div className="mt-2 flex items-start justify-between gap-3">
                      <h3
                        data-testid={`text-portfolio-item-title-${item.id}`}
                        className="font-serif text-lg tracking-tight"
                      >
                        {item.title}
                      </h3>
                    </div>

                    <ul className="mt-4 space-y-2 text-sm">
                      {item.details.map((d) => (
                        <li
                          key={d}
                          data-testid={`row-portfolio-detail-${item.id}-${d}`}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))]" />
                          {d}
                        </li>
                      ))}
                    </ul>


                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section data-testid="section-portfolio-cta" className="mt-14">
          <div className="mx-auto max-w-3xl rounded-3xl border bg-card/60 p-7 text-center shadow-sm backdrop-blur">
            <div data-testid="text-portfolio-cta-title" className="font-serif text-2xl">
              Want something like this in your home?
            </div>
            <p
              data-testid="text-portfolio-cta-subtitle"
              className="mt-2 text-sm text-muted-foreground"
            >
              Share a few details and we'll follow up with next steps.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" data-testid="button-portfolio-contact">
                <Link href="/contact">Request a quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                data-testid="button-portfolio-home"
              >
                <Link href="/">Back to home</Link>
              </Button>
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
                href="/"
                data-testid="link-footer-home"
                className="text-muted-foreground hover:text-foreground"
              >
                Home
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
