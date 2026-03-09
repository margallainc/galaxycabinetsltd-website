import { Link } from "wouter";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const LAST_UPDATED = "March 8, 2025";

const sections = [
    {
        title: "1. Acceptance of Terms",
        content: `By accessing and using the Galaxy Kitchen Cabinets Ltd. website (the "Site"), you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our Site.`,
    },
    {
        title: "2. Use of the Site",
        content: `The Site is provided for general informational and business inquiry purposes. You agree to use this Site only for lawful purposes and in a manner that does not infringe the rights of others. You may not use the Site to transmit any unsolicited or unauthorized advertising, spam, or any content that is harmful, offensive, or otherwise objectionable.`,
    },
    {
        title: "3. Intellectual Property",
        content: `All content on this Site, including but not limited to text, photographs, graphics, logos, and images, is the property of Galaxy Kitchen Cabinets Ltd. or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content on this Site without our express written permission.`,
    },
    {
        title: "4. Disclaimer of Warranties",
        content: `This Site and its content are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. Galaxy Kitchen Cabinets Ltd. does not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.`,
    },
    {
        title: "5. Limitation of Liability",
        content: `To the fullest extent permitted by law, Galaxy Kitchen Cabinets Ltd. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of, or inability to use, the Site or its content. Our total liability for any claim related to the Site shall not exceed the amount you paid, if any, to access the Site.`,
    },
    {
        title: "6. Third-Party Links and Advertising",
        content: `Our Site may contain links to third-party websites or display advertisements provided by third-party advertising networks, including Google AdSense. We do not control and are not responsible for the content, privacy practices, or accuracy of any third-party websites or advertisements. Clicking on third-party links or ads is at your own risk. We encourage you to review the privacy policies and terms of any third-party sites you visit.`,
    },
    {
        title: "7. Cookies and Tracking Technologies",
        content: `We and our advertising partners (including Google) may use cookies, web beacons, and similar tracking technologies to enhance your experience on our Site and to display relevant advertisements. Third-party advertising vendors, including Google, use cookies to serve ads based on your prior visits to our Site and other websites. You may opt out of personalized advertising by visiting Google's Ad Settings or the Network Advertising Initiative opt-out page.`,
    },
    {
        title: "8. Privacy",
        content: `Your use of the Site is also governed by our Privacy Policy, which is incorporated by reference into these Terms. Please review our Privacy Policy to understand our practices regarding the collection, use, and disclosure of your personal information.`,
    },
    {
        title: "9. Modifications to Terms",
        content: `We reserve the right to modify these Terms at any time. We will indicate the date of the most recent revision at the top of this page. Your continued use of the Site after any changes constitutes your acceptance of the revised Terms.`,
    },
    {
        title: "10. Governing Law",
        content: `These Terms shall be governed by and construed in accordance with the laws of the Province of Alberta, Canada, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Alberta, Canada.`,
    },
    {
        title: "11. Contact Us",
        content: `If you have any questions about these Terms of Service, please contact us at:\n\nGalaxy Kitchen Cabinets Ltd.\nPhone: +1 (587) 703-1010\nEmail: info@galaxycabinetsltd.com`,
    },
];

export default function TermsOfServicePage() {
    return (
        <div data-testid="page-tos" className="bg-aurora min-h-dvh">
            <header className="container-pad pt-6">
                <nav
                    data-testid="nav-tos"
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
                        <FileText className="h-3.5 w-3.5 text-[hsl(var(--accent))]" />
                        Legal
                    </div>

                    <h1
                        data-testid="text-tos-title"
                        className="mt-5 font-serif text-4xl tracking-tight sm:text-5xl"
                    >
                        Terms of Service
                    </h1>
                    <p className="mt-3 text-sm text-muted-foreground">
                        Last updated: {LAST_UPDATED}
                    </p>

                    <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                        Please read these Terms of Service carefully before using the Galaxy
                        Kitchen Cabinets Ltd. website. These terms govern your access to and
                        use of our Site.
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
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms-of-service"
                                className="text-foreground font-medium"
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
