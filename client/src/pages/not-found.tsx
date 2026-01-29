import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div data-testid="page-not-found" className="bg-aurora min-h-dvh">
      <div className="container-pad py-16">
        <div className="mx-auto max-w-xl rounded-3xl border bg-card/60 p-8 shadow-[var(--shadow-lg)] backdrop-blur">
          <div
            data-testid="text-notfound-title"
            className="font-serif text-3xl tracking-tight"
          >
            Page not found
          </div>
          <p
            data-testid="text-notfound-subtitle"
            className="mt-2 text-sm text-muted-foreground"
          >
            The page you're looking for doesn't exist.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" data-testid="button-notfound-home">
              <Link href="/">Back home</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              data-testid="button-notfound-contact"
            >
              <Link href="/contact">
                Request a quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
