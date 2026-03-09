import { Link } from "wouter";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const LAST_UPDATED = "March 8, 2025";

const sections = [
    {
        title: "1. Information We Collect",
        content: `We collect information you voluntarily provide when you use our contact form, including your name, email address, phone number, and any project details you choose to share. We also automatically collect certain technical information when you visit our Site, such as your IP address, browser type, pages visited, and time spent on pages, through cookies and similar technologies.`,
    },
    {
        title: "2. How We Use Your Information",
        content: `We use the information we collect to:\n• Respond to your inquiries and provide quotes for our services\n• Improve and optimize our Site's content and user experience\n• Send follow-up communications related to your project inquiry\n• Comply with legal obligations\n• Display relevant advertisements through third-party advertising networks`,
    },
    {
        title: "3. Cookies and Tracking Technologies",
        content: `Our Site uses cookies and similar tracking technologies to enhance your browsing experience. Cookies are small text files stored on your device. We use:\n\n• Essential Cookies: Required for the Site to function properly.\n• Analytics Cookies: Help us understand how visitors interact with our Site (e.g., Google Analytics).\n• Advertising Cookies: Used by Google AdSense and other advertising partners to serve relevant ads based on your interests and browsing history.\n\nYou can control cookies through your browser settings. Disabling cookies may affect certain features of our Site.`,
    },
    {
        title: "4. Google AdSense and Advertising",
        content: `We use Google AdSense to display advertisements on our Site. Google AdSense uses cookies and web beacons to serve ads based on a user's prior visits to our website and other websites on the Internet. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our Site and/or other sites on the Internet.\n\nYou may opt out of personalized advertising by visiting:\n• Google Ad Settings: https://www.google.com/settings/ads\n• Network Advertising Initiative opt-out page: http://www.networkadvertising.org/choices/\n\nFor more information on how Google uses data when you use our Site, please visit: https://policies.google.com/technologies/partner-sites`,
    },
    {
        title: "5. Sharing of Information",
        content: `We do not sell, trade, or rent your personal information to third parties. We may share your information with:\n\n• Service providers who assist us in operating our business (e.g., email platforms, analytics providers), subject to confidentiality agreements.\n• Google and other advertising partners for ad serving and personalization purposes, as described in Section 4.\n• Law enforcement or government authorities when required by law or to protect our rights.\n\nAll third parties are required to maintain the confidentiality and security of your information.`,
    },
    {
        title: "6. Data Retention",
        content: `We retain contact form submissions and related personal information only as long as necessary to respond to your inquiry and for any reasonable follow-up period. We do not maintain long-term databases of personal user data beyond what is needed for our legitimate business purposes.`,
    },
    {
        title: "7. Data Security",
        content: `We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security and encourage you to use caution when submitting personal information online.`,
    },
    {
        title: "8. Children's Privacy",
        content: `Our Site is not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected information from a child under 13, please contact us immediately and we will take steps to delete such information.`,
    },
    {
        title: "9. Your Rights",
        content: `Depending on your location, you may have the right to:\n• Access the personal information we hold about you\n• Request correction of inaccurate information\n• Request deletion of your personal information\n• Withdraw consent to marketing communications\n• Lodge a complaint with a data protection authority\n\nTo exercise any of these rights, please contact us using the information provided below.`,
    },
    {
        title: "10. Third-Party Links",
        content: `Our Site may contain links to third-party websites. This Privacy Policy does not apply to those external sites, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party sites you visit.`,
    },
    {
        title: "11. Changes to This Policy",
        content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will indicate the date of the most recent revision at the top of this page. Your continued use of the Site after any changes constitutes your acceptance of the updated Privacy Policy.`,
    },
    {
        title: "12. Contact Us",
        content: `If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:\n\nGalaxy Kitchen Cabinets Ltd.\nPhone: +1 (587) 703-1010\nEmail: info@galaxycabinetsltd.com`,
    },
];

export default function PrivacyPolicyPage() {
    return (
        <div data-testid="page-privacy" className="bg-aurora min-h-dvh">
            <header className="container-pad pt-6">
                <nav
                    data-testid="nav-privacy"
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

                    <Link
                        href="/contact"
                        data-testid="button-nav-contact"
                        className="inline-flex h-9 items-center justify-center rounded-full border bg-card/60 px-4 text-sm font-medium shadow-sm backdrop-blur hover:bg-secondary/60"
                    >
                        Get a quote
                    </Link>
                </nav>
            </header>

            <main className="container-pad pb-20 pt-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    className="mx-auto max-w-3xl"
                >
                    <div className="mx-auto inline-flex items-center gap-2 rounded-full border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
                        <Shield className="h-3.5 w-3.5 text-[hsl(var(--accent))]" />
                        Legal
                    </div>

                    <h1
                        data-testid="text-privacy-title"
                        className="mt-5 font-serif text-4xl tracking-tight sm:text-5xl"
                    >
                        Privacy Policy
                    </h1>
                    <p className="mt-3 text-sm text-muted-foreground">
                        Last updated: {LAST_UPDATED}
                    </p>

                    <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                        Galaxy Kitchen Cabinets Ltd. ("we," "us," or "our") is committed to
                        protecting your privacy. This Privacy Policy explains how we
                        collect, use, disclose, and safeguard your information when you
                        visit our website. Please read this policy carefully.
                    </p>

                    <div className="mt-10 space-y-8">
                        {sections.map((section, i) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.05 * i }}
                                className="rounded-2xl border bg-card/60 p-6 shadow-sm backdrop-blur"
                            >
                                <h2 className="font-serif text-lg tracking-tight">
                                    {section.title}
                                </h2>
                                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                                    {section.content}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <footer data-testid="footer" className="mt-16 pb-8">
                    <div className="flex flex-col items-start justify-between gap-4 border-t pt-6 sm:flex-row sm:items-center">
                        <div>
                            <div className="text-sm font-semibold">
                                Galaxy Kitchen Cabinets Ltd.
                            </div>
                            <div className="mt-1 text-xs text-muted-foreground">
                                Cabinets • Countertops • Custom Closets • TV Consoles
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                            <Link
                                href="/"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Home
                            </Link>
                            <Link
                                href="/portfolio"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Portfolio
                            </Link>
                            <Link
                                href="/contact"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Contact
                            </Link>
                            <Link
                                href="/privacy-policy"
                                className="text-foreground font-medium"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms-of-service"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
