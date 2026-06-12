import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sparkles, Video, CheckCircle2, Play } from "lucide-react";

// AI Model Photography — Sterlink&Co
import imgModel1 from "@assets/Image-Aug-31-2025-11_04_03-PM_1781225202752.png";
import imgModel2 from "@assets/Image-Sep-1-2025-07_53_22-PM_1781225207729.png";
import imgModel3 from "@assets/Image-Aug-28-2025-03_40_52-PM-Photoroom_1781225214373.png";
import imgModel4 from "@assets/Image-Aug-31-2025-07_15_02-PM_1781225219144.png";
import imgModel5 from "@assets/MPS-1820_1781225292020.webp";

// AI Marketing Videos — served from public/videos/
const videoSrc1 = "/videos/marketing-video-1.mp4";
const videoSrc2 = "/videos/marketing-video-2.mp4";
const videoSrc3 = "/videos/marketing-video-3.mp4";

// Screen recording — TikTok feed
import screenRecording from "@assets/Screen_Recording_2026-06-11_at_12.25.08_PM_1781225159750.mov";

export default function AIContent() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-primary/3 pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6 font-sans">AI-Powered Creation</p>
            <h1 className="text-5xl md:text-6xl font-display font-semibold mb-6">AI Content & Models</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Photorealistic AI model photography and cinematic marketing videos — studio-quality results without the studio cost.
            </p>
            <Link href="/contact" data-testid="ai-hero-cta">
              <Button size="lg" className="h-12 px-10 bg-primary text-primary-foreground shadow-[0_0_20px_rgba(198,168,125,0.2)] hover:shadow-[0_0_30px_rgba(198,168,125,0.3)] transition-shadow tracking-widest text-xs uppercase font-sans">
                Explore AI Solutions
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ---- AI MODEL PHOTOGRAPHY ---- */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">Real Client Work — Sterlink&Co Jewellery</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4">AI Model Photography</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Photorealistic AI-generated models wearing real jewellery products — indistinguishable from professional studio shoots, delivered in hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Top row — 3 portrait models */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="rounded-xl overflow-hidden border border-border shadow-xl h-[480px]">
                <img src={imgModel1} alt="AI model — woman wearing Sterlink&Co pearl necklace" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="rounded-xl overflow-hidden border border-border shadow-xl h-[480px]">
                <img src={imgModel2} alt="AI model — woman wearing Sterlink&Co black pendant necklace" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="rounded-xl overflow-hidden border border-border shadow-xl h-[480px]">
                <img src={imgModel3} alt="AI model — woman wearing Sterlink&Co ruby heart pendant and earrings" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
              </div>
            </div>

            {/* Bottom row — 2 models wider */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-border shadow-xl h-[440px]">
                <img src={imgModel4} alt="AI model — woman wearing Sterlink&Co silver bracelet" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="rounded-xl overflow-hidden border border-border shadow-xl h-[440px]">
                <img src={imgModel5} alt="AI model — woman wearing Sterlink&Co ornate black earrings and pendant set" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </motion.div>

          {/* Deliverables callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { title: "No Photoshoot Needed", body: "Upload your product and receive studio-quality model shots within 24 hours." },
              { title: "Infinite Variations", body: "Different models, outfits, backgrounds, and lighting — all generated to your brief." },
              { title: "E-commerce Ready", body: "Delivered in full resolution, white-background or lifestyle format, ready to publish." },
            ].map((card) => (
              <div key={card.title} className="p-6 rounded-xl border border-border bg-secondary/20 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <p className="font-sans text-sm font-medium tracking-wide">{card.title}</p>
                </div>
                <p className="text-sm text-muted-foreground font-sans">{card.body}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---- AI MARKETING VIDEOS ---- */}
      <section className="py-24 border-b border-border bg-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">Real Client Work — Sterlink&Co Jewellery</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4">AI Marketing Videos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cinematic product marketing videos generated with AI — ready for Instagram Reels, TikTok, and paid ad campaigns.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { src: videoSrc1, label: "Marketing Ad — Video 1" },
              { src: videoSrc2, label: "Marketing Ad — Video 2" },
              { src: videoSrc3, label: "Marketing Ad — Video 3" },
            ].map((vid, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-border shadow-xl group bg-black">
                <div className="relative">
                  <video
                    src={vid.src}
                    controls
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-[480px] object-contain bg-black"
                  />
                </div>
                <div className="px-4 py-3 bg-secondary/20 border-t border-border flex items-center gap-2">
                  <Play className="w-3 h-3 text-primary shrink-0" />
                  <p className="text-xs font-sans text-muted-foreground tracking-wide">{vid.label}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { title: "Social-First Format", body: "Optimized for vertical and square formats — Instagram Reels, TikTok, and Facebook Ads." },
              { title: "Fast Turnaround", body: "Multiple video variants delivered quickly, ready to A/B test across your ad campaigns." },
              { title: "Branded & Consistent", body: "Music, transitions, and typography matched to your brand identity and tone." },
            ].map((card) => (
              <div key={card.title} className="p-6 rounded-xl border border-border bg-secondary/20 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <p className="font-sans text-sm font-medium tracking-wide">{card.title}</p>
                </div>
                <p className="text-sm text-muted-foreground font-sans">{card.body}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---- TIKTOK CONTENT STRATEGY ---- */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-3/5"
            >
              <div className="rounded-xl overflow-hidden border border-border shadow-2xl bg-black">
                <video
                  src={screenRecording}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-[520px] object-contain bg-black"
                />
                <div className="px-4 py-3 bg-secondary/20 border-t border-border flex items-center gap-2">
                  <Video className="w-3 h-3 text-primary shrink-0" />
                  <p className="text-xs font-sans text-muted-foreground tracking-wide">TikTok — Sterlink&Co content feed walkthrough</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-2/5 space-y-6 lg:pt-4"
            >
              <div className="inline-flex px-3 py-1 rounded-full border border-border text-primary text-xs font-sans tracking-widest uppercase">
                Social Content — TikTok Strategy
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-semibold">TikTok Content for Sterlink&Co</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A consistent, high-quality TikTok feed powered by AI-generated product videos and model content — building brand presence and driving discovery for Sterlink&Co jewellery.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground font-sans">
                {[
                  "AI-generated product showcase videos",
                  "Curated jewellery lifestyle content",
                  "Consistent aesthetic across all posts",
                  "Engagement-optimized captions and hooks",
                  "Regular posting cadence for algorithm growth",
                  "TikTok Shop-ready product tagging",
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
                  {["AI Videos", "TikTok Strategy", "Content Calendar", "Social Copy", "Product Tagging"].map(t => (
                    <span key={t} className="px-3 py-1 text-xs border border-border rounded-full text-muted-foreground font-sans">{t}</span>
                  ))}
                </div>
              </div>
              <Link href="/contact" data-testid="project-cta-tiktok">
                <Button variant="outline" className="gap-2 font-sans text-xs tracking-widest uppercase">
                  Discuss AI content <Sparkles className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border bg-secondary/20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">Ready to Scale Your Content?</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">Studio-quality content, AI speed</h2>
          <p className="text-muted-foreground mb-8">
            Replace expensive photoshoots and video productions with AI-powered content that converts — at a fraction of the cost and time.
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
