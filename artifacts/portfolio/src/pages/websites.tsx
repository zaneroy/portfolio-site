import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Globe, Smartphone, Database, FastForward, CheckCircle2, ShoppingCart, Users } from "lucide-react";

// Apex Roofing
import imgRoofingHero from "@assets/Screenshot_2026-06-11_at_12.16.05_PM_1781197593776.png";
import imgRoofingServices from "@assets/Screenshot_2026-06-11_at_12.17.41_PM_1781197600010.png";
import imgRoofingProjects from "@assets/Screenshot_2026-06-11_at_12.17.55_PM_1781197604212.png";
import imgRoofingReviews from "@assets/Screenshot_2026-06-11_at_12.18.05_PM_1781197608383.png";
import imgRoofingFaq from "@assets/Screenshot_2026-06-11_at_12.18.17_PM_1781197612695.png";
import imgRoofingContact from "@assets/Screenshot_2026-06-11_at_12.18.31_PM_1781197617607.png";

// Sterlink&Co — website screenshots (new)
import imgSterlinkHome from "@assets/Screenshot_2026-06-11_at_12.23.43_PM_1781222449526.png";
import imgSterlinkBestSellers from "@assets/Screenshot_2026-06-11_at_4.35.01_PM_1781222495952.png";
import imgSterlinkReviews from "@assets/Screenshot_2026-06-11_at_4.35.23_PM_1781222500769.png";
import imgSterlinkRingsGrid from "@assets/Screenshot_2026-06-11_at_4.35.52_PM_1781222505167.png";
import imgSterlinkAddresses from "@assets/Screenshot_2026-06-11_at_4.39.33_PM_1781222509749.png";
// Sterlink&Co — website screenshots (existing)
import imgJewelleryWishlist from "@assets/Screenshot_2026-06-11_at_12.26.56_PM_1781197648043.png";
import imgJewelleryAccount from "@assets/Screenshot_2026-06-11_at_12.28.37_PM_1781197641863.png";
import imgJewelleryCheckout from "@assets/Screenshot_2026-06-11_at_12.30.00_PM_1781197652837.png";

// King Road Paving (existing hero + new pages)
import imgPaving from "@assets/Screenshot_2026-06-11_at_12.18.52_PM_1781197621980.png";
import imgPavingForm from "@assets/Screenshot_2026-06-11_at_4.46.06_PM_1781222514012.png";
import imgPavingTestimonials from "@assets/Screenshot_2026-06-11_at_4.46.17_PM_1781222518961.png";
import imgPavingAbout from "@assets/Screenshot_2026-06-11_at_4.46.29_PM_1781222524757.png";
import imgPavingServices from "@assets/Screenshot_2026-06-11_at_4.46.37_PM_1781222531014.png";

// Spotless Home Cleaning (existing hero + new pages)
import imgCleaning from "@assets/Screenshot_2026-06-11_at_12.20.07_PM_1781197634153.png";
import imgCleaningWork from "@assets/Screenshot_2026-06-11_at_4.47.17_PM_1781222540572.png";
import imgCleaningReviews from "@assets/Screenshot_2026-06-11_at_4.47.30_PM_1781222545906.png";
import imgCleaningProcess from "@assets/Screenshot_2026-06-11_at_4.47.41_PM_1781222551091.png";
import imgCleaningWhy from "@assets/Screenshot_2026-06-11_at_4.47.51_PM_1781222560887.png";
import imgCleaningServices from "@assets/Screenshot_2026-06-11_at_4.48.00_PM_1781222566469.png";

const features = [
  { icon: <Globe className="text-primary w-6 h-6" />, title: "Custom Business Websites" },
  { icon: <FastForward className="text-primary w-6 h-6" />, title: "High-Converting Landing Pages" },
  { icon: <Smartphone className="text-primary w-6 h-6" />, title: "Fully Responsive Design" },
  { icon: <Database className="text-primary w-6 h-6" />, title: "Database Integration" },
  { icon: <CheckCircle2 className="text-primary w-6 h-6" />, title: "Secure Contact Forms" },
  { icon: <FastForward className="text-primary w-6 h-6" />, title: "Vercel Edge Hosting" },
];

function Thumb({ src, alt, tall }: { src: string; alt: string; tall?: boolean }) {
  return (
    <div className={`rounded-lg overflow-hidden border border-border ${tall ? "h-64" : "h-48"} w-full`}>
      <img src={src} alt={alt} className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
    </div>
  );
}

export default function Websites() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-primary/3 pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6 font-sans">Web Development</p>
            <h1 className="text-5xl md:text-6xl font-display font-semibold mb-6">Websites & Development</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Beautiful, lightning-fast websites engineered to convert visitors into paying clients. Built with modern tech, designed for the real world.
            </p>
            <Link href="/contact" data-testid="websites-hero-cta">
              <Button size="lg" className="h-12 px-10 bg-primary text-primary-foreground shadow-[0_0_20px_rgba(198,168,125,0.2)] hover:shadow-[0_0_30px_rgba(198,168,125,0.3)] transition-shadow tracking-widest text-xs uppercase font-sans">
                Request a Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((feat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-3 p-4">
                <div className="p-3 bg-secondary rounded-lg">{feat.icon}</div>
                <p className="text-xs font-sans text-muted-foreground">{feat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">Real Client Work</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold">Selected Projects</h2>
          </div>

          <div className="flex flex-col gap-32">

            {/* ---- APEX ROOFING SOLUTIONS ---- */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex flex-col lg:flex-row items-start gap-12">
                <div className="w-full lg:w-3/5 space-y-3">
                  <div className="rounded-xl overflow-hidden border border-border shadow-2xl group h-72">
                    <img src={imgRoofingHero} alt="Apex Roofing Solutions hero" className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <Thumb src={imgRoofingServices} alt="Roofing services section" />
                    <Thumb src={imgRoofingReviews} alt="Roofing customer reviews" />
                    <Thumb src={imgRoofingContact} alt="Roofing contact form" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Thumb src={imgRoofingProjects} alt="Roofing projects gallery" />
                    <Thumb src={imgRoofingFaq} alt="Roofing FAQ" />
                  </div>
                </div>
                <div className="w-full lg:w-2/5 space-y-6 lg:pt-4">
                  <div className="inline-flex px-3 py-1 rounded-full border border-border text-primary text-xs font-sans tracking-widest uppercase">
                    Contractor — Full Website
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-semibold">Apex Roofing Solutions</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Complete multi-section marketing website for a Toronto roofing contractor. Designed to rank locally and convert visitors on first contact.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground font-sans">
                    {[
                      "Hero with trust badges (Fully Insured, WSIB Certified)",
                      "Comprehensive services section with 6 service cards",
                      "Projects gallery with real photography",
                      "6 verified customer reviews section",
                      "FAQ accordion for common homeowner questions",
                      "Lead capture contact form with service selection",
                    ].map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground font-sans uppercase tracking-widest mb-2">Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {["Next.js", "Tailwind CSS", "Vercel", "Formspree"].map(t => (
                        <span key={t} className="px-3 py-1 text-xs border border-border rounded-full text-muted-foreground font-sans">{t}</span>
                      ))}
                    </div>
                  </div>
                  <Link href="/contact" data-testid="project-cta-roofing">
                    <Button variant="outline" className="gap-2 font-sans text-xs tracking-widest uppercase">
                      Discuss a similar project <Globe className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* ---- STERLINK&CO — E-COMMERCE ---- */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex flex-col lg:flex-row-reverse items-start gap-12">
                <div className="w-full lg:w-3/5 space-y-3">
                  {/* Full-width hero */}
                  <div className="rounded-xl overflow-hidden border border-border shadow-2xl group h-72">
                    <img src={imgSterlinkHome} alt="Sterlink&Co homepage — Grace In Every Curve" className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700" />
                  </div>
                  {/* Row 2: shop pages */}
                  <div className="grid grid-cols-2 gap-3">
                    <Thumb src={imgSterlinkBestSellers} alt="Best Sellers carousel" tall />
                    <Thumb src={imgSterlinkRingsGrid} alt="Rings product grid" tall />
                  </div>
                  {/* Row 3: customer experience */}
                  <div className="grid grid-cols-3 gap-3">
                    <Thumb src={imgSterlinkReviews} alt="What Customer Say — testimonials" />
                    <Thumb src={imgJewelleryWishlist} alt="Customer wishlist page" />
                    <Thumb src={imgJewelleryAccount} alt="Customer account login" />
                  </div>
                  {/* Row 4: checkout + account management */}
                  <div className="grid grid-cols-2 gap-3">
                    <Thumb src={imgJewelleryCheckout} alt="Checkout with live Canada Post shipping rates" />
                    <Thumb src={imgSterlinkAddresses} alt="My Account — billing & shipping addresses" />
                  </div>
                </div>
                <div className="w-full lg:w-2/5 space-y-6 lg:pt-4">
                  <div className="inline-flex px-3 py-1 rounded-full border border-border text-primary text-xs font-sans tracking-widest uppercase">
                    E-commerce — Full Platform
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-semibold">Sterlink&Co Jewellery</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Full-featured e-commerce platform for a premium sterling silver jewellery brand. Built with customer portals, wishlist functionality, and live Canada Post shipping rates at checkout.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground font-sans">
                    {[
                      "Editorial homepage — \"Grace In Every Curve\" hero with model photography",
                      "Best Sellers carousel with pricing and wishlist toggle",
                      "Full rings catalogue with filterable grid (Materials, Gemstone, Price)",
                      "Customer review section with verified buyer testimonials",
                      "Customer account system (Login / Register / My Account)",
                      "Wishlist functionality with product management",
                      "Live Canada Post shipping rate calculator at checkout",
                      "Secure payment with Stripe (Visa, Mastercard, Amex)",
                    ].map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground font-sans uppercase tracking-widest mb-2">Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {["WordPress", "WooCommerce", "Canada Post API", "Stripe", "WishlistPlus"].map(t => (
                        <span key={t} className="px-3 py-1 text-xs border border-border rounded-full text-muted-foreground font-sans">{t}</span>
                      ))}
                    </div>
                  </div>
                  <Link href="/contact" data-testid="project-cta-jewellery">
                    <Button variant="outline" className="gap-2 font-sans text-xs tracking-widest uppercase">
                      Discuss a similar project <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* ---- KING ROAD PAVING ---- */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex flex-col lg:flex-row items-start gap-12">
                <div className="w-full lg:w-3/5 space-y-3">
                  <div className="rounded-xl overflow-hidden border border-border shadow-2xl group h-72">
                    <img src={imgPaving} alt="King Road Paving — homepage hero" className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Thumb src={imgPavingAbout} alt="About us — No Nonsense. Just Solid Work." tall />
                    <Thumb src={imgPavingServices} alt="Services — What We Do Best" tall />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Thumb src={imgPavingTestimonials} alt="Trusted By Locals — customer testimonials" />
                    <Thumb src={imgPavingForm} alt="Service area map and free quote form" />
                  </div>
                </div>
                <div className="w-full lg:w-2/5 space-y-6 lg:pt-4">
                  <div className="inline-flex px-3 py-1 rounded-full border border-border text-primary text-xs font-sans tracking-widest uppercase">
                    Contractor — Marketing Website
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-semibold">King Road Paving Ltd.</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    High-impact contractor website for a Central Ontario paving company with 50+ years of experience. Bold design built to generate calls and quote requests.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground font-sans">
                    {[
                      "Prominent phone number and CTA above the fold",
                      "Trust badges: 50+ Years, Fully Insured, WSIB Certified, On Time",
                      "7 services showcased (Asphalt Paving, Interlock, Drainage & more)",
                      "About section with real job-site photography",
                      "8-review grid from verified local clients across Central Ontario",
                      "Service area map covering Toronto to Collingwood",
                      "Free estimate form with service selection and project details field",
                    ].map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground font-sans uppercase tracking-widest mb-2">Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {["Next.js", "Tailwind CSS", "Vercel"].map(t => (
                        <span key={t} className="px-3 py-1 text-xs border border-border rounded-full text-muted-foreground font-sans">{t}</span>
                      ))}
                    </div>
                  </div>
                  <Link href="/contact" data-testid="project-cta-paving">
                    <Button variant="outline" className="gap-2 font-sans text-xs tracking-widest uppercase">
                      Discuss a similar project <Globe className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* ---- SPOTLESS HOME CLEANING ---- */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex flex-col lg:flex-row-reverse items-start gap-12">
                <div className="w-full lg:w-3/5 space-y-3">
                  <div className="rounded-xl overflow-hidden border border-border shadow-2xl group h-72">
                    <img src={imgCleaning} alt="Spotless Home Cleaning — homepage" className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700" />
                  </div>
                  {/* Our Work gallery — deserves a tall slot */}
                  <div className="rounded-lg overflow-hidden border border-border h-64">
                    <img src={imgCleaningWork} alt="Our Work — before/after photo gallery" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Thumb src={imgCleaningServices} alt="Cleaning services — House, Deep, Move-In/Out, Office" />
                    <Thumb src={imgCleaningWhy} alt="Why Barrie Homeowners Choose Marigold" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Thumb src={imgCleaningReviews} alt="Customer reviews from Google" />
                    <Thumb src={imgCleaningProcess} alt="Getting Started Is Simple — 3-step process" />
                  </div>
                </div>
                <div className="w-full lg:w-2/5 space-y-6 lg:pt-4">
                  <div className="inline-flex px-3 py-1 rounded-full border border-border text-primary text-xs font-sans tracking-widest uppercase">
                    Service Business — Website
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-semibold">Spotless Home Cleaning</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Clean, minimal service website for a woman-owned eco-friendly cleaning company serving Barrie, Angus and Innisfil. Focused on trust-building and booking conversion.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground font-sans">
                    {[
                      "4 service cards — House, Deep, Move-In/Out, Office Cleaning",
                      "Real before/after photo gallery (10 job photos with labels)",
                      "6 verified Google review testimonials",
                      "3-step booking process section (Request → We Come → Enjoy)",
                      "Why Choose Us: Eco-Friendly, Woman-Owned, Flat Rate, 5-Star",
                      "Prominent free quote and call CTAs throughout",
                      "Mobile responsive, fast-loading, light-green brand palette",
                    ].map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground font-sans uppercase tracking-widest mb-2">Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {["Next.js", "Tailwind CSS", "Vercel"].map(t => (
                        <span key={t} className="px-3 py-1 text-xs border border-border rounded-full text-muted-foreground font-sans">{t}</span>
                      ))}
                    </div>
                  </div>
                  <Link href="/contact" data-testid="project-cta-cleaning">
                    <Button variant="outline" className="gap-2 font-sans text-xs tracking-widest uppercase">
                      Discuss a similar project <Users className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border bg-secondary/20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">Let's Build Yours</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">Ready to launch your website?</h2>
          <p className="text-muted-foreground mb-8">Every business deserves a site that works as hard as it does.</p>
          <Link href="/contact">
            <Button size="lg" className="h-12 px-10 bg-primary text-primary-foreground tracking-widest text-xs uppercase font-sans">
              Start the Conversation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
