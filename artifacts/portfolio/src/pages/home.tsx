import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Code, Palette, Sparkles, MessageSquare, Share2, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import imgRoofing from "@assets/Screenshot_2026-06-11_at_12.16.05_PM_1781232006067.png";
import imgPaving from "@assets/Screenshot_2026-06-11_at_12.18.52_PM_1781231949445.png";
import imgCleaning from "@assets/Screenshot_2026-06-11_at_12.20.20_PM_1781231994864.png";
import imgJewellery from "@assets/Screenshot_2026-06-11_at_12.06.17_PM_1781232057234.png";
import imgSterlink from "@assets/Screenshot_2026-06-11_at_3.53.34_PM_1781231961722.png";
import imgAISEO from "@assets/PRESENTED_BY_INfinite_services_1781232128529.png";

const services = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Web Design & Dev",
    desc: "Custom high-performance websites built to convert visitors into clients.",
    link: "/websites",
  },
  {
    icon: <Palette className="w-8 h-8 text-primary" />,
    title: "Branding & Design",
    desc: "Distinctive brand identities, logos, and UI/UX design.",
    link: "/branding",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "AI Content Creation",
    desc: "AI-generated product models, videos, and marketing creatives.",
    link: "/ai-content",
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-primary" />,
    title: "Chatbots & Automation",
    desc: "Intelligent agents that qualify leads and support customers 24/7.",
    link: "/chatbots",
  },
  {
    icon: <Share2 className="w-8 h-8 text-primary" />,
    title: "Social Media",
    desc: "Engaging post designs, UGC videos, and management packages.",
    link: "/social-media",
  },
  {
    icon: <Server className="w-8 h-8 text-primary" />,
    title: "Hosting & Deployment",
    desc: "Secure, lightning-fast edge hosting with Vercel and continuous support.",
    link: "/websites",
  },
];

const portfolio = [
  { title: "Apex Roofing Solutions", image: imgRoofing, category: "Full Website", wide: true },
  { title: "Sterlink & Co.", image: imgSterlink, category: "E-commerce Platform", wide: true },
  { title: "King Road Paving Ltd.", image: imgPaving, category: "Contractor Website", wide: true },
  { title: "Marigold Home Cleaning", image: imgCleaning, category: "Service Website", wide: true },
  { title: "Luxe Jewellery Store", image: imgJewellery, category: "Product Photography", wide: false },
  { title: "AI SEO Blog Writing", image: imgAISEO, category: "AI Content Creation", wide: true },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[160px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-8 font-sans">Digital Solutions Specialist</p>
            <h1 className="text-6xl md:text-8xl font-display font-semibold tracking-tight mb-8 leading-[1.05]">
              Websites, Branding<br />&{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#E8D5B5] to-accent italic">
                AI Marketing
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Helping local companies grow through custom digital experiences, intelligent automation, and bold brand identities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" data-testid="hero-cta-primary">
                <Button size="lg" className="w-full sm:w-auto h-12 px-10 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(198,168,125,0.25)] tracking-widest text-xs uppercase font-sans">
                  Book a Consultation
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-10 border-border/50 bg-transparent hover:bg-secondary/50 transition-all tracking-widest text-xs uppercase font-sans" data-testid="hero-cta-secondary" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
                View My Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-secondary/30 border-y border-border" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">What I Offer</p>
            <h2 className="text-4xl md:text-6xl font-display font-semibold mb-4">Digital Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need to establish, automate, and grow your business online.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Link href={service.link}>
                  <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_-15px_rgba(198,168,125,0.15)] group cursor-pointer" data-testid={`service-card-${idx}`}>
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold font-display mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.desc}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24" id="work">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">Selected Work</p>
              <h2 className="text-4xl md:text-6xl font-display font-semibold mb-4">Featured Work</h2>
              <p className="text-muted-foreground max-w-xl">Premium digital experiences crafted for ambitious businesses.</p>
            </div>
            <Link href="/websites">
              <Button variant="link" className="text-primary gap-2 p-0 h-auto font-semibold group" data-testid="link-all-work">
                View All Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Landscape website screenshots — full width cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {portfolio.filter(p => p.wide).slice(0, 4).map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="relative group overflow-hidden rounded-2xl border border-border bg-secondary/50"
              >
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-primary font-medium text-sm mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.category}</span>
                  <h3 className="text-2xl font-bold font-display translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom row: wide banner + portrait product image */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* AI SEO wide banner — takes 2 cols */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="md:col-span-2 relative group overflow-hidden rounded-2xl border border-border bg-secondary/50"
            >
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={imgAISEO}
                  alt="AI SEO Blog Writing"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-primary font-medium text-sm mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">AI Content Creation</span>
                <h3 className="text-2xl font-bold font-display translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">AI SEO Blog Writing</h3>
              </div>
            </motion.div>

            {/* Jewellery — portrait card, 1 col */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative group overflow-hidden rounded-2xl border border-border bg-secondary/50"
            >
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src={imgJewellery}
                  alt="Luxe Jewellery Store"
                  className="w-full h-full object-contain object-center bg-white group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-primary font-medium text-sm mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Product Photography</span>
                <h3 className="text-2xl font-bold font-display translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Luxe Jewellery Store</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-border bg-secondary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "30+", label: "Businesses Helped" },
              { value: "24hr", label: "Average Response" },
              { value: "5-Star", label: "Client Reviews" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-6"
              >
                <div className="text-5xl md:text-6xl font-display font-semibold text-primary mb-3">{stat.value}</div>
                <div className="text-xs text-muted-foreground font-sans uppercase tracking-[0.3em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 bg-secondary/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/6 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="container relative z-10 mx-auto px-4 text-center max-w-3xl">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6 font-sans">Let's Work Together</p>
          <h2 className="text-4xl md:text-6xl font-display font-semibold mb-6 leading-tight">Ready to elevate<br />your business?</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Stop losing customers to outdated websites and inefficient processes. Let's build a digital presence that works as hard as you do.
          </p>
          <Link href="/contact" data-testid="bottom-cta">
            <Button size="lg" className="h-12 px-12 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_40px_rgba(198,168,125,0.2)] hover:scale-105 transition-all tracking-widest text-xs uppercase font-sans">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
