import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PenTool, Layers, Box, Image, CheckCircle2, Sparkles } from "lucide-react";

// Sterlink&Co Jewellery — full brand package
import imgSterlinkBanner from "@assets/Screenshot_2026-06-11_at_12.14.00_PM_1781198140155.png";
import imgSterlinkComingSoon from "@assets/Screenshot_2026-06-11_at_12.02.25_PM_1781198106093.png";
import imgSterlinkGoldBanner from "@assets/Screenshot_2026-06-11_at_12.13.05_PM_1781198111963.png";
import imgSterlinkCarousel from "@assets/Screenshot_2026-06-11_at_12.14.41_PM_1781198151013.png";
import imgSterlinkMailer from "@assets/Screenshot_2026-06-11_at_12.15.09_PM_1781198145237.png";
import imgSterlinkRing from "@assets/Screenshot_2026-06-11_at_12.14.52_PM_1781198125895.png";
import imgSterlinkEarrings from "@assets/Screenshot_2026-06-11_at_12.06.27_PM_1781198134414.png";
import imgSterlinkMonogram from "@assets/Screenshot_2026-06-11_at_12.15.43_PM_1781224590799.png";
import imgSterlinkThankyou from "@assets/Screenshot_2026-06-11_at_12.06.04_PM_1781224553300.png";
import imgSterlinkTiktok from "@assets/Screenshot_2026-06-11_at_12.21.08_PM_1781224610391.png";

// Artisan Pour — logo design (two variations)
import imgArtisanPour from "@assets/Screenshot_2026-06-11_at_12.02.56_PM_1781198102072.png";
import imgArtisanPour2 from "@assets/Screenshot_2026-06-11_at_12.02.47_PM_1781224564997.png";

// Indie-Cent Exposure — full gaming brand identity
import imgIndieBrand1 from "@assets/ChatGPT_Image_Jun_11,_2026,_01_19_49_PM_(1)_1781224635831.png";
import imgIndieBrand2 from "@assets/ChatGPT_Image_Jun_11,_2026,_01_19_49_PM_(2)_1781224640325.png";

// Gaming store — promo graphic
import imgGaming from "@assets/Screenshot_2026-06-11_at_12.03.25_PM_1781198177377.png";

function Thumb({ src, alt, className = "", contain = false }: { src: string; alt: string; className?: string; contain?: boolean }) {
  return (
    <div className={`rounded-lg overflow-hidden border border-border w-full ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full transition-transform duration-500 hover:scale-105 ${contain ? "object-contain p-3" : "object-cover object-top"}`}
      />
    </div>
  );
}

const capabilities = [
  { icon: <PenTool className="text-primary w-6 h-6" />, title: "Logo Design" },
  { icon: <Layers className="text-primary w-6 h-6" />, title: "Brand Identity" },
  { icon: <Box className="text-primary w-6 h-6" />, title: "Packaging & Print" },
  { icon: <Image className="text-primary w-6 h-6" />, title: "Marketing Creatives" },
  { icon: <Sparkles className="text-primary w-6 h-6" />, title: "AI Product Photography" },
  { icon: <Layers className="text-primary w-6 h-6" />, title: "Social Media Graphics" },
];

export default function Branding() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-primary/3 pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6 font-sans">Brand & Visual Identity</p>
            <h1 className="text-5xl md:text-6xl font-display font-semibold mb-6">Branding & Design</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Distinctive visual identities — from logos and packaging to social creatives and AI product photography — that make brands unforgettable.
            </p>
            <Link href="/contact" data-testid="branding-hero-cta">
              <Button size="lg" className="h-12 px-10 bg-primary text-primary-foreground shadow-[0_0_20px_rgba(198,168,125,0.2)] hover:shadow-[0_0_30px_rgba(198,168,125,0.3)] transition-shadow tracking-widest text-xs uppercase font-sans">
                Start Your Brand Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-3 p-4">
                <div className="p-3 bg-secondary rounded-lg">{cap.icon}</div>
                <p className="text-xs font-sans text-muted-foreground">{cap.title}</p>
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

            {/* ---- STERLINK&CO JEWELLERY — FULL BRAND PACKAGE ---- */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex flex-col lg:flex-row items-start gap-12">
                {/* Image gallery */}
                <div className="w-full lg:w-3/5 space-y-3">

                  {/* Row 1 — hero banner full width */}
                  <Thumb src={imgSterlinkBanner} alt="Sterlink&Co — Where Elegance Meets You hero banner" className="h-[320px] rounded-xl shadow-2xl" />

                  {/* Row 2 — gold banner (wide) gets 2 cols, coming soon post gets 1 col */}
                  <div className="grid grid-cols-3 gap-3 h-[240px]">
                    <Thumb src={imgSterlinkComingSoon} alt="Coming Soon social post" className="h-[240px]" />
                    <div className="col-span-2 rounded-lg overflow-hidden border border-border h-[240px]">
                      <img src={imgSterlinkGoldBanner} alt="Elegant Jewellery gold banner" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
                    </div>
                  </div>

                  {/* Row 3 — carousel + mailer + ring product */}
                  <div className="grid grid-cols-3 gap-3 h-[240px]">
                    <Thumb src={imgSterlinkCarousel} alt="New Collection carousel social post" className="h-[240px]" />
                    <Thumb src={imgSterlinkMailer} alt="Custom mailer box — Hello Gorgeous unboxing" className="h-[240px]" />
                    <Thumb src={imgSterlinkRing} alt="AI product photography — sterling silver ring" className="h-[240px]" />
                  </div>

                  {/* Row 4 — earrings + SC monogram + thank-you sticker */}
                  <div className="grid grid-cols-3 gap-3 h-[260px]">
                    <Thumb src={imgSterlinkEarrings} alt="AI product photography — sterling silver earrings" className="h-[260px]" />
                    <Thumb src={imgSterlinkMonogram} alt="Sterlink&Co SC monogram logomark on deep teal" className="h-[260px]" />
                    <div className="rounded-lg overflow-hidden border border-border h-[260px] bg-white flex items-center justify-center">
                      <img src={imgSterlinkThankyou} alt="Thank you for your order circular sticker" className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-500" />
                    </div>
                  </div>

                  {/* Row 5 — TikTok feed screenshot full width */}
                  <Thumb src={imgSterlinkTiktok} alt="Sterlink&Co TikTok video feed — curated jewellery content" className="h-[300px] rounded-xl" />

                </div>

                {/* Description */}
                <div className="w-full lg:w-2/5 space-y-6 lg:pt-4">
                  <div className="inline-flex px-3 py-1 rounded-full border border-border text-primary text-xs font-sans tracking-widest uppercase">
                    Jewellery Brand — Full Package
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-semibold">Sterlink&Co Jewellery</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    End-to-end brand identity for a premium sterling silver jewellery label. From the SC monogram logomark to custom mailer packaging and TikTok content, every touchpoint speaks the same elegant language.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground font-sans">
                    {[
                      'Website hero banner — \u201cWhere Elegance Meets You\u201d',
                      "New Collection launch social post (split-screen model)",
                      "Luxury gold-silk editorial banner",
                      "New Collection @Sterlink&Co carousel graphic",
                      'Custom mailer box — \u201cHello Gorgeous\u201d unboxing experience',
                      "SC monogram logomark on deep teal",
                      "Thank-you sticker for packaging inserts",
                      "AI-generated product photography (ring & earrings)",
                      "TikTok video feed content strategy",
                    ].map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground font-sans uppercase tracking-widest mb-2">Deliverables</p>
                    <div className="flex flex-wrap gap-2">
                      {["Visual Identity", "Logo & Monogram", "Social Creatives", "Packaging", "AI Product Photography", "TikTok Content"].map(t => (
                        <span key={t} className="px-3 py-1 text-xs border border-border rounded-full text-muted-foreground font-sans">{t}</span>
                      ))}
                    </div>
                  </div>
                  <Link href="/contact" data-testid="project-cta-sterlink">
                    <Button variant="outline" className="gap-2 font-sans text-xs tracking-widest uppercase">
                      Discuss a brand project <PenTool className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* ---- ARTISAN POUR — LOGO DESIGN ---- */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex flex-col lg:flex-row-reverse items-start gap-12">
                <div className="w-full lg:w-3/5 space-y-3">
                  <div className="grid grid-cols-2 gap-3 h-[380px]">
                    <div className="rounded-xl overflow-hidden border border-border shadow-2xl h-[380px] bg-[#f4ede6]">
                      <img src={imgArtisanPour} alt="Artisan Pour logo — pastel tri-colour variant" className="w-full h-full object-contain p-6 hover:scale-[1.03] transition-transform duration-700" />
                    </div>
                    <div className="rounded-xl overflow-hidden border border-border shadow-2xl h-[380px] bg-[#f0ede6]">
                      <img src={imgArtisanPour2} alt="Artisan Pour logo — olive and gold variant" className="w-full h-full object-contain p-6 hover:scale-[1.03] transition-transform duration-700" />
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-2/5 space-y-6 lg:pt-4">
                  <div className="inline-flex px-3 py-1 rounded-full border border-border text-primary text-xs font-sans tracking-widest uppercase">
                    Artisan Brand — Logo Design
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-semibold">Artisan Pour</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Logo design for an artisan candle and resin pour studio — delivered in two distinct variations. The circular badge marks communicate craft and handmade quality across different palette directions.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground font-sans">
                    {[
                      "Two custom circular badge logo mark variants",
                      "Handcrafted pour-drip icon element",
                      "Pastel palette (blush, sage, cream) — variant A",
                      "Olive & gold artisan palette — variant B",
                      "Star & serif typographic lockup",
                      "Versatile for print, packaging & social media",
                    ].map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground font-sans uppercase tracking-widest mb-2">Deliverables</p>
                    <div className="flex flex-wrap gap-2">
                      {["Logo Design", "Brand Palette", "Typography", "Multiple Variants", "Vector Files"].map(t => (
                        <span key={t} className="px-3 py-1 text-xs border border-border rounded-full text-muted-foreground font-sans">{t}</span>
                      ))}
                    </div>
                  </div>
                  <Link href="/contact" data-testid="project-cta-artisan">
                    <Button variant="outline" className="gap-2 font-sans text-xs tracking-widest uppercase">
                      Discuss a logo project <PenTool className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* ---- INDIE-CENT EXPOSURE — GAMING BRAND IDENTITY ---- */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex flex-col lg:flex-row items-start gap-12">
                <div className="w-full lg:w-3/5 space-y-3">
                  <Thumb src={imgIndieBrand1} alt="Indie-Cent Exposure — mascot, logo, favicon and brand usage sheet" className="h-[300px] rounded-xl shadow-2xl" />
                  <Thumb src={imgIndieBrand2} alt="Indie-Cent Exposure — hero banner, logo variations and social template examples" className="h-[300px] rounded-xl shadow-xl" />
                </div>
                <div className="w-full lg:w-2/5 space-y-6 lg:pt-4">
                  <div className="inline-flex px-3 py-1 rounded-full border border-border text-primary text-xs font-sans tracking-widest uppercase">
                    Gaming Platform — Full Brand Identity
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-semibold">Indie-Cent Exposure</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Bold, street-art-meets-gaming brand identity for an indie game promotion platform. Graffiti typography, a custom controller mascot, and electric green-on-black colour palette built to dominate social feeds and streaming thumbnails.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground font-sans">
                    {[
                      "Custom animated mascot — hooded controller character",
                      "Graffiti-style wordmark with drip effect",
                      "Favicon & app icon in multiple sizes",
                      "Logo variations (primary, alternate, horizontal)",
                      "Hero banner for website & Twitch channel",
                      "Social & thumbnail template examples",
                      "Electric neon green + black brand palette",
                      "Brand usage mockups (laptop, mug, social)",
                    ].map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground font-sans uppercase tracking-widest mb-2">Deliverables</p>
                    <div className="flex flex-wrap gap-2">
                      {["Brand Identity", "Custom Mascot", "Logo Suite", "Favicon & Icons", "Banner Design", "Social Templates"].map(t => (
                        <span key={t} className="px-3 py-1 text-xs border border-border rounded-full text-muted-foreground font-sans">{t}</span>
                      ))}
                    </div>
                  </div>
                  <Link href="/contact" data-testid="project-cta-indie">
                    <Button variant="outline" className="gap-2 font-sans text-xs tracking-widest uppercase">
                      Discuss a brand project <PenTool className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* ---- GAMING STORE — PROMO GRAPHIC ---- */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex flex-col lg:flex-row-reverse items-start gap-12">
                <div className="w-full lg:w-2/5 flex justify-center">
                  <div className="rounded-xl overflow-hidden border border-border shadow-2xl w-full max-w-[300px] h-[480px]">
                    <img src={imgGaming} alt="Gaming store 50% off sale promotional story graphic" className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700" />
                  </div>
                </div>
                <div className="w-full lg:w-3/5 space-y-6 lg:pt-4">
                  <div className="inline-flex px-3 py-1 rounded-full border border-border text-primary text-xs font-sans tracking-widest uppercase">
                    Retail — Promotional Graphic
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-semibold">Gaming Store Sale Ad</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Bold promotional sale graphic for a gaming accessories retailer. Dark, high-contrast tech aesthetic with glitch texture overlays, clean geometric accents, and urgent deal copy — built for social media conversion.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground font-sans">
                    {[
                      "Dark glitch-effect background texture",
                      "Product hero — PS4 controller at center",
                      "Geometric triangle/mountain graphic elements",
                      "High-contrast bold sale copy (50% OFF)",
                      "Date-limited urgency callout (Dec.\u201311\u201315 Only)",
                      "Story format — optimized for Instagram & TikTok",
                    ].map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground font-sans uppercase tracking-widest mb-2">Deliverables</p>
                    <div className="flex flex-wrap gap-2">
                      {["Social Ad Creative", "Story Format", "Print-Ready", "Canva / Photoshop"].map(t => (
                        <span key={t} className="px-3 py-1 text-xs border border-border rounded-full text-muted-foreground font-sans">{t}</span>
                      ))}
                    </div>
                  </div>
                  <Link href="/contact" data-testid="project-cta-gaming">
                    <Button variant="outline" className="gap-2 font-sans text-xs tracking-widest uppercase">
                      Discuss a graphic project <Image className="w-4 h-4" />
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
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">Ready to define your brand?</h2>
          <p className="text-muted-foreground mb-8">A strong brand isn't just a logo — it's every touchpoint your customer remembers.</p>
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
