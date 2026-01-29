import { Link } from "wouter";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter your phone number"),
  service: z.enum(["Cabinets", "Countertops", "Basement finish out", "Not sure"]),
  message: z.string().min(10, "Please add a bit more detail"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "Not sure",
      message: "",
    },
    mode: "onTouched",
  });

  function onSubmit(values: FormValues) {
    toast({
      title: "Message ready to send",
      description:
        "This is a static site demo. Your message isn't being sent yet, but your details are captured in the browser.",
    });

    // Keep it frontend-only: no API calls.
    // eslint-disable-next-line no-console
    console.log("Contact form submission (static mock):", values);

    form.reset();
  }

  return (
    <div data-testid="page-contact" className="bg-aurora min-h-dvh">
      <header className="container-pad pt-6">
        <nav
          data-testid="nav-contact"
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

          <Button asChild variant="secondary" data-testid="button-nav-portfolio">
            <Link href="/portfolio">View work</Link>
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
            data-testid="text-contact-eyebrow"
            className="mx-auto inline-flex items-center gap-2 rounded-full border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--accent))]" />
            Get in touch
          </div>
          <h1
            data-testid="text-contact-title"
            className="mt-5 text-balance font-serif text-4xl tracking-tight sm:text-5xl"
          >
            Contact
          </h1>
          <p
            data-testid="text-contact-subtitle"
            className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            Tell us what you're planning. We'll reply with next steps and a clear quote.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 lg:grid-cols-12 lg:items-start">
          <Card
            data-testid="card-contact-form"
            className="card-surface rounded-3xl p-6 lg:col-span-7"
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    data-testid="label-name"
                    className="text-sm font-medium"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    data-testid="input-name"
                    placeholder="Your name"
                    className="mt-2"
                    {...form.register("name")}
                  />
                  {form.formState.errors.name?.message ? (
                    <div
                      data-testid="status-error-name"
                      className="mt-2 text-xs text-[hsl(var(--destructive))]"
                    >
                      {form.formState.errors.name.message}
                    </div>
                  ) : null}
                </div>

                <div>
                  <label
                    data-testid="label-email"
                    className="text-sm font-medium"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    data-testid="input-email"
                    placeholder="you@email.com"
                    className="mt-2"
                    {...form.register("email")}
                  />
                  {form.formState.errors.email?.message ? (
                    <div
                      data-testid="status-error-email"
                      className="mt-2 text-xs text-[hsl(var(--destructive))]"
                    >
                      {form.formState.errors.email.message}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    data-testid="label-phone"
                    className="text-sm font-medium"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <Input
                    id="phone"
                    data-testid="input-phone"
                    placeholder="Your phone number"
                    className="mt-2"
                    {...form.register("phone")}
                  />
                  {form.formState.errors.phone?.message ? (
                    <div
                      data-testid="status-error-phone"
                      className="mt-2 text-xs text-[hsl(var(--destructive))]"
                    >
                      {form.formState.errors.phone.message}
                    </div>
                  ) : null}
                </div>

                <div>
                  <label
                    data-testid="label-service"
                    className="text-sm font-medium"
                    htmlFor="service"
                  >
                    Service
                  </label>
                  <div className="mt-2">
                    <select
                      id="service"
                      data-testid="select-service"
                      className="h-10 w-full rounded-md border bg-background px-3 text-sm outline-none focus:ring-4 focus:ring-[hsl(var(--accent)_/_0.22)]"
                      {...form.register("service")}
                    >
                      <option value="Cabinets">Kitchen cabinet renovations</option>
                      <option value="Countertops">Countertops</option>
                      <option value="Basement finish out">Basement finish out</option>
                      <option value="Not sure">Not sure yet</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label
                  data-testid="label-message"
                  className="text-sm font-medium"
                  htmlFor="message"
                >
                  Project details
                </label>
                <Textarea
                  id="message"
                  data-testid="textarea-message"
                  placeholder="Tell us about your space, timing, materials, and any inspiration links."
                  className="mt-2 min-h-32"
                  {...form.register("message")}
                />
                {form.formState.errors.message?.message ? (
                  <div
                    data-testid="status-error-message"
                    className="mt-2 text-xs text-[hsl(var(--destructive))]"
                  >
                    {form.formState.errors.message.message}
                  </div>
                ) : null}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div
                  data-testid="text-form-note"
                  className="text-xs text-muted-foreground"
                >
                  We'll respond within 1–2 business days.
                </div>
                <Button
                  type="submit"
                  size="lg"
                  data-testid="button-submit-contact"
                  className="gap-2"
                >
                  Send message <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </Card>

          <div className="lg:col-span-5 grid gap-4">
            <Card
              data-testid="card-contact-details"
              className="card-surface rounded-3xl p-6"
            >
              <div data-testid="text-details-title" className="font-serif text-xl">
                Contact details
              </div>
              <div className="mt-4 space-y-3 text-sm">
                <a
                  data-testid="link-phone"
                  href="tel:+1-587-703-1010"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <Phone className="h-4 w-4" /> +1 (587) 703-1010
                </a>
                <a
                  data-testid="link-email"
                  href="mailto:info@galaxycabinetsltd.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <Mail className="h-4 w-4" /> info@galaxycabinetsltd.com
                </a>
                {/* <div
                  data-testid="text-location"
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <MapPin className="h-4 w-4" /> Serving local homeowners
                </div> */}
              </div>

              <div className="mt-6 rounded-2xl border bg-secondary p-4">
                <div
                  data-testid="text-hours-title"
                  className="text-xs font-medium text-muted-foreground"
                >
                  Hours
                </div>
                <div data-testid="text-hours" className="mt-1 text-sm font-semibold">
                  Monday - Saturday
                  <br />
                  8:00 AM - 5:00 PM
                </div>
              </div>
            </Card>

            <Card
              data-testid="card-contact-faq"
              className="card-surface rounded-3xl p-6"
            >
              <div data-testid="text-faq-title" className="font-serif text-xl">
                What to include
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li data-testid="row-faq-1">• Photos of the space (optional)</li>
                <li data-testid="row-faq-2">• Rough measurements (if you have them)</li>
                <li data-testid="row-faq-3">• Ideal timeline</li>
                <li data-testid="row-faq-4">• Material preferences</li>
              </ul>
            </Card>
          </div>
        </div>

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
                href="/portfolio"
                data-testid="link-footer-portfolio"
                className="text-muted-foreground hover:text-foreground"
              >
                Portfolio
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
