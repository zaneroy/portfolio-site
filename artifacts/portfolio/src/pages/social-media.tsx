import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, TrendingUp, Users, Target, CheckCircle2, Play, Video } from "lucide-react";

// Social media posts — Sterlink&Co
import imgComingSoon from "@assets/Screenshot_2026-06-11_at_12.01.56_PM_1781226571954.png";
import imgNewArrival from "@assets/Screenshot_2026-06-11_at_12.02.09_PM_1781226587476.png";
import imgTiktokFeed from "@assets/Screenshot_2026-06-11_at_12.21.08_PM_1781226579542.png";

// Jewellery product images — replacements for non-working videos
import imgReel1 from "@assets/image_1781286516528.png";
import imgReel2 from "@assets/image_1781286540022.png";
import imgReel3 from "@assets/image_1781286563702.png";
import imgReel4 from "@assets/image_1781286589704.png";
import imgReel5 from "@assets/image_1781286636396.png";

const videos = [
  { src: imgReel1, label: "Marketing Reel — Video 1" },
  { src: imgReel2, label: "Marketing Reel — Video 2" },
  { src: imgReel3, label: "Marketing Reel — Video 3" },
  { src: imgReel4, label: "Marketing Reel — Video 4" },
  { src: imgReel5, label: "Marketing Reel — Video 5" },
];

export default function SocialMedia() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-primary/3 pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6 font-sans">Content & Social Strategy</p>
            <h1 className="text-5xl md:text-6xl font-display font-semibold mb-6">Social Media Marketing</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Scroll-stopping posts, AI-powered marketing videos, and a curated TikTok presence — all built to turn followers into loyal customers.
            </p>
            <Link href="/contact" data-testid="social-hero-cta">
              <Button size="lg" className="h-12 px-10 bg-primary text-primary-foreground shadow-[0_0_20px_rgba(198,168,125,0.2)] hover:shadow-[0_0_30px_rgba(198,168,125,0.3)] transition-shadow tracking-widest text-xs uppercase font-sans">
                Grow Your Audience
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Capabilities strip */}
      <section className="py-16 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Instagram className="text-primary w-6 h-6" />, title: "Instagram & TikTok" },
              { icon: <Video className="text-primary w-6 h-6" />, title: "AI Marketing Videos" },
              { icon: <TrendingUp className="text-primary w-6 h-6" />, title: "Growth Strategy" },
              { icon: <Target className="text-primary w-6 h-6" />, title: "Paid Social Ads" },
            ].map((cap, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-3 p-4">
                <div className="p-3 bg-secondary rounded-lg">{cap.icon}</div>
                <p className="text-xs font-sans text-muted-foreground">{cap.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REAL CLIENT WORK ── */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">Real Client Work — Sterlink&Co Jewellery</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4">Social Content in Action</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A full content strategy: hand-designed posts, AI-generated marketing reels, and a curated TikTok feed — all live for Sterlink&Co.
            </p>
          </div>

          <div className="flex flex-col gap-24">

            {/* ── SOCIAL POSTS — two square posts side by side ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6">
                <span className="inline-flex px-3 py-1 rounded-full border border-border text-primary text-xs font-sans tracking-widest uppercase">
                  Social Media Posts — Instagram & TikTok
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Coming Soon post */}
                <div className="flex flex-col gap-3">
                  <div className="rounded-xl overflow-hidden border border-border shadow-2xl aspect-square">
                    <img
                      src={imgComingSoon}
                      alt="Sterlink&Co Coming Soon launch social post — AI model with jewellery and loading bar"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-4 rounded-lg border border-border bg-secondary/20 space-y-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <p className="font-sans text-sm font-medium">Launch Announcement Post</p>
                    </div>
                    <p className="text-sm text-muted-foreground font-sans pl-6">
                      Brand launch hype post — AI model wearing the jewellery, bold "Coming Soon" overlay with branded loading bar. Built to build anticipation before the store opened.
                    </p>
                  </div>
                </div>

                {/* New Arrival post */}
                <div className="flex flex-col gap-3">
                  <div className="rounded-xl overflow-hidden border border-border shadow-2xl aspect-square">
                    <img
                      src={imgNewArrival}
                      alt="Sterlink&Co New Arrival social post — teal marcasite necklace and earring set on dark green"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-4 rounded-lg border border-border bg-secondary/20 space-y-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <p className="font-sans text-sm font-medium">New Arrival Product Post</p>
                    </div>
                    <p className="text-sm text-muted-foreground font-sans pl-6">
                      Elegant product reveal for the teal marcasite jewellery set — dark tropical background, framed layout, and script typography for a premium editorial feel.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── TIKTOK FEED — full width ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6">
                <span className="inline-flex px-3 py-1 rounded-full border border-border text-primary text-xs font-sans tracking-widest uppercase">
                  TikTok Feed — @sterlinkandco
                </span>
              </div>
              <div className="rounded-xl overflow-hidden border border-border shadow-2xl h-[460px]">
                <img
                  src={imgTiktokFeed}
                  alt="Sterlink&Co TikTok video feed showing 18 product videos with thousands of views"
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "18+ Videos Published", body: "Consistent content cadence across product showcases, launches, and editorial pieces." },
                  { title: "Up to 1,821 Views Per Video", body: "Organic reach achieved through strategic hashtags, trending audio, and posting schedule." },
                  { title: "Curated Aesthetic Feed", body: "Every video matches the Sterlink&Co brand — dark luxury tones, close-up product shots, and dramatic lighting." },
                ].map((card) => (
                  <div key={card.title} className="p-5 rounded-lg border border-border bg-secondary/20 space-y-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <p className="font-sans text-sm font-medium">{card.title}</p>
                    </div>
                    <p className="text-sm text-muted-foreground font-sans pl-6">{card.body}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── AI MARKETING VIDEOS ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6">
                <span className="inline-flex px-3 py-1 rounded-full border border-border text-primary text-xs font-sans tracking-widest uppercase">
                  AI Marketing Reels — Pippit Generated
                </span>
              </div>

              {/* First row — 3 images */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                {videos.slice(0, 3).map((vid, i) => (
                  <div key={i} className="rounded-xl overflow-hidden border border-border shadow-xl flex flex-col bg-black">
                    <img
                      src={vid.src}
                      alt={vid.label}
                      className="w-full aspect-[9/16] object-cover"
                    />
                    <div className="px-4 py-3 border-t border-border bg-secondary/20 flex items-center gap-2">
                      <Play className="w-3 h-3 text-primary shrink-0" />
                      <p className="text-xs font-sans text-muted-foreground tracking-wide">{vid.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Second row — 2 images centred */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto">
                {videos.slice(3).map((vid, i) => (
                  <div key={i} className="rounded-xl overflow-hidden border border-border shadow-xl flex flex-col bg-black">
                    <img
                      src={vid.src}
                      alt={vid.label}
                      className="w-full aspect-[9/16] object-cover"
                    />
                    <div className="px-4 py-3 border-t border-border bg-secondary/20 flex items-center gap-2">
                      <Play className="w-3 h-3 text-primary shrink-0" />
                      <p className="text-xs font-sans text-muted-foreground tracking-wide">{vid.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "Social-First Formats", body: "All videos produced in 9:16 vertical format for TikTok, Instagram Reels, and Facebook Ads." },
                  { title: "Fast Delivery", body: "Multiple video variants produced and ready for A/B testing within 24–48 hours." },
                  { title: "Branded Throughout", body: "Music, transitions, text overlays, and colour palette matched to the client's brand identity." },
                ].map((card) => (
                  <div key={card.title} className="p-5 rounded-lg border border-border bg-secondary/20 space-y-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <p className="font-sans text-sm font-medium">{card.title}</p>
                    </div>
                    <p className="text-sm text-muted-foreground font-sans pl-6">{card.body}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Management Packages */}
      <section className="py-24 bg-secondary/10 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">Choose Your Plan</p>
            <h2 className="text-3xl md:text-5xl font-display font-semibold">Management Packages</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Starter", price: "Essential Growth", features: ["12 Posts / Month", "Platform: IG or TikTok", "Basic Reporting", "Content Calendar", "Hashtag Strategy"] },
              { name: "Growth", price: "Omni-Channel", highlighted: true, features: ["20 Posts / Month", "5 AI Marketing Videos", "IG + TikTok + FB", "Community Management", "Advanced Analytics", "Ad Management ($500 limit)"] },
              { name: "Premium", price: "Market Leader", features: ["Daily Posting", "10 AI Marketing Videos", "Full Platform Coverage", "Proactive Engagement", "AI Model Photography", "Unlimited Ad Management"] },
            ].map((pkg, idx) => (
              <Card key={idx} className={`relative bg-card ${pkg.highlighted ? "border-primary shadow-[0_0_30px_rgba(198,168,125,0.12)] scale-105 z-10" : "border-border mt-4 mb-4"}`}>
                {pkg.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full">
                    Recommended
                  </div>
                )}
                <CardHeader className="text-center pb-8 border-b border-border/50">
                  <CardTitle className="text-2xl font-display font-semibold mb-2">{pkg.name}</CardTitle>
                  <div className="text-primary font-sans text-sm tracking-wide">{pkg.price}</div>
                </CardHeader>
                <CardContent className="pt-8">
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className={`w-full font-sans text-xs tracking-widest uppercase ${pkg.highlighted ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "bg-secondary hover:bg-secondary/80 text-foreground"}`}>
                      Select {pkg.name}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">Let's Grow Together</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">Ready to dominate your feed?</h2>
          <p className="text-muted-foreground mb-8">
            From day-one strategy to daily posting — we handle the content so you can focus on running your business.
          </p>
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
