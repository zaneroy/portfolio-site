import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Globe, Palette, Bot, Code2 } from "lucide-react";

import imgHeadshot from "@/assets/images/headshot.png";

const expertise = [
  {
    icon: <Globe className="w-5 h-5 text-primary" />,
    title: "Web Development",
    desc: "Custom websites, responsive design, hosting, deployment, and business solutions.",
  },
  {
    icon: <Palette className="w-5 h-5 text-primary" />,
    title: "Branding & Design",
    desc: "Logo design, banners, packaging concepts, Figma design, and visual identity.",
  },
  {
    icon: <Bot className="w-5 h-5 text-primary" />,
    title: "AI & Automation",
    desc: "AI chatbots, AI agents, content generation, business automation, and customer support solutions.",
  },
  {
    icon: <Code2 className="w-5 h-5 text-primary" />,
    title: "Programming",
    desc: "HTML, CSS, JavaScript, Java, PHP, SQL, and Python.",
  },
];

export default function About() {
  return (
    <div className="w-full">
      {/* Hero intro */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-border">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/6 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[120px] pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-center">

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full lg:w-5/12 shrink-0"
            >
              <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0">
                {/* Decorative border offset */}
                <div className="absolute inset-0 rounded-2xl border border-primary/20 translate-x-3 translate-y-3" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border shadow-2xl">
                  <img
                    src={imgHeadshot}
                    alt="Zeeshan Ahmad"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
                {/* Name badge */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:-right-6 bg-card border border-border rounded-xl px-5 py-3 shadow-xl whitespace-nowrap">
                  <p className="text-xs font-sans tracking-[0.2em] uppercase text-primary mb-0.5">Digital Creator</p>
                  <p className="font-display font-semibold text-base text-foreground">Zeeshan Ahmad</p>
                </div>
              </div>
            </motion.div>

            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="w-full lg:w-7/12 pt-8 lg:pt-0"
            >
              <p className="text-xs tracking-[0.4em] uppercase text-primary mb-5 font-sans">About</p>
              <h1 className="text-4xl md:text-5xl font-display font-semibold leading-tight mb-8">
                I'm Zeeshan Ahmad
              </h1>

              <div className="space-y-5 text-muted-foreground leading-relaxed text-[1.05rem]">
                <p>
                  A digital creator focused on helping businesses build a stronger online presence through websites, branding, AI-powered content, automation, and development.
                </p>
                <p>
                  Over the years, I've worked with businesses across multiple industries, creating custom websites, logos, marketing assets, AI content, chatbots, and digital experiences designed to help brands stand out and grow.
                </p>
                <p>
                  My approach combines creativity, technology, and problem-solving. Whether it's developing a custom website, designing a brand identity, building an AI solution, or creating content that captures attention, I focus on delivering work that looks professional, performs effectively, and provides real value to businesses.
                </p>
                <p>
                  I work across web development, design, AI, automation, and digital marketing, allowing me to provide complete solutions rather than individual services.
                </p>
              </div>

              <div className="mt-10">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="h-12 px-10 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(198,168,125,0.2)] hover:scale-105 transition-all tracking-widest text-xs uppercase font-sans"
                  >
                    Work With Me
                  </Button>
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">What I Do</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold">Areas of Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group flex gap-5 p-7 rounded-2xl border border-border/60 bg-secondary/20 hover:border-primary/30 hover:bg-secondary/40 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(198,168,125,0.12)] transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1.5">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Ready to start a project?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Get in touch and let's discuss how I can help your business grow.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="h-12 px-10 bg-primary text-primary-foreground hover:bg-primary/90 tracking-widest text-xs uppercase font-sans"
            >
              Start the Conversation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
