import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, MessageSquareText, Zap, BarChart, CheckCircle2, Users, LayoutDashboard } from "lucide-react";

// Real client screenshots — Sterlink&Co live chatbot (tawk.to)
import imgChatWidget from "@assets/Screenshot_2026-06-11_at_12.24.18_PM_1781225695165.png";
import imgDashboard from "@assets/Screenshot_2026-06-11_at_8.56.18_PM_1781226162234.png";
import imgInbox from "@assets/Screenshot_2026-06-11_at_8.56.57_PM_1781226169006.png";
import imgConvAgent from "@assets/Screenshot_2026-06-11_at_9.03.38_PM_1781226251842.png";
import imgConvAI from "@assets/Screenshot_2026-06-11_at_9.03.59_PM_1781226259394.png";

export default function Chatbots() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-primary/3 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6 font-sans">AI Agents & Live Support</p>
            <h1 className="text-5xl md:text-6xl font-display font-semibold mb-6">Chatbots & Customer Support</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              AI agents that greet, qualify, and assist your customers 24/7 — with seamless human handoff when it matters most.
            </p>
            <Link href="/contact" data-testid="chatbot-hero-cta">
              <Button size="lg" className="h-12 px-10 bg-primary text-primary-foreground shadow-[0_0_20px_rgba(198,168,125,0.2)] hover:shadow-[0_0_30px_rgba(198,168,125,0.3)] transition-shadow tracking-widest text-xs uppercase font-sans">
                Automate Your Business
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features strip */}
      <section className="py-16 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <MessageSquareText className="text-primary w-6 h-6" />, title: "24/7 AI Responses" },
              { icon: <Users className="text-primary w-6 h-6" />, title: "Human Agent Handoff" },
              { icon: <LayoutDashboard className="text-primary w-6 h-6" />, title: "Live Dashboard" },
              { icon: <Zap className="text-primary w-6 h-6" />, title: "Multi-Platform Deploy" },
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
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4">Live Chatbot in Action</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A fully configured tawk.to customer support system — AI-powered responses with a live human support team ready to step in.
            </p>
          </div>

          <div className="flex flex-col gap-20">

            {/* ── ADMIN DASHBOARD — full width ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-5">
                <span className="inline-flex px-3 py-1 rounded-full border border-border text-primary text-xs font-sans tracking-widest uppercase">
                  Admin Dashboard — Live Analytics
                </span>
              </div>
              <div className="rounded-xl overflow-hidden border border-border shadow-2xl h-[420px]">
                <img
                  src={imgDashboard}
                  alt="tawk.to admin dashboard showing live visitors, chat history and reporting metrics"
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "Live Visitor Tracking", body: "See exactly who is on the site in real time — country, page, and session history." },
                  { title: "Full Conversation History", body: "Every chat logged with visitor identity, agent name, and timestamp." },
                  { title: "Performance Reporting", body: "Answered vs missed chats, engagement rate, and agent availability at a glance." },
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

            {/* ── CHAT WIDGET + INBOX ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex flex-col lg:flex-row items-start gap-6">

                {/* Chat Widget — narrow portrait */}
                <div className="w-full lg:w-2/5 flex flex-col gap-4">
                  <span className="inline-flex px-3 py-1 rounded-full border border-border text-primary text-xs font-sans tracking-widest uppercase self-start">
                    Customer-Facing Widget
                  </span>
                  <div className="rounded-xl overflow-hidden border border-border shadow-2xl h-[560px] bg-[#f2f2f2] flex items-center justify-center">
                    <img
                      src={imgChatWidget}
                      alt="tawk.to customer support chat widget — AI greeting with quick-reply buttons"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground font-sans">
                    The chat widget installed directly on the Sterlink&Co website — greeting visitors instantly with quick-reply options and a friendly AI persona.
                  </p>
                </div>

                {/* Inbox */}
                <div className="w-full lg:w-3/5 flex flex-col gap-4">
                  <span className="inline-flex px-3 py-1 rounded-full border border-border text-primary text-xs font-sans tracking-widest uppercase self-start">
                    Agent Inbox — All Conversations
                  </span>
                  <div className="rounded-xl overflow-hidden border border-border shadow-2xl h-[560px]">
                    <img
                      src={imgInbox}
                      alt="tawk.to inbox showing multiple live visitor conversations from different countries"
                      className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground font-sans">
                    The support team's inbox — all conversations in one place, organized by status. Visitors from Canada, India, Philippines, Pakistan and more tracked live.
                  </p>
                </div>

              </div>
            </motion.div>

            {/* ── CONVERSATION SCREENSHOTS — AI + Human handoff ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 text-center">
                <span className="inline-flex px-3 py-1 rounded-full border border-border text-primary text-xs font-sans tracking-widest uppercase">
                  AI Agent + Human Support Handoff
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Human agent joining */}
                <div className="flex flex-col gap-3">
                  <div className="rounded-xl overflow-hidden border border-border shadow-xl h-[520px]">
                    <img
                      src={imgConvAgent}
                      alt="Live chat conversation — human agent Adrian joins and answers shipping question for Brampton customer"
                      className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                  <div className="p-4 rounded-lg border border-border bg-secondary/20 space-y-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <p className="font-sans text-sm font-medium">Human Agent Steps In</p>
                    </div>
                    <p className="text-sm text-muted-foreground font-sans pl-6">
                      A visitor asks about delivery times for Brampton. Agent Adrian joins the live conversation and answers in under a minute — full context from the AI already captured.
                    </p>
                  </div>
                </div>

                {/* AI fallback message */}
                <div className="flex flex-col gap-3">
                  <div className="rounded-xl overflow-hidden border border-border shadow-xl h-[520px]">
                    <img
                      src={imgConvAI}
                      alt="AI system message — automated response when all agents are busy, asking for customer email"
                      className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                  <div className="p-4 rounded-lg border border-border bg-secondary/20 space-y-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <p className="font-sans text-sm font-medium">AI Handles Overflow</p>
                    </div>
                    <p className="text-sm text-muted-foreground font-sans pl-6">
                      When all agents are busy, the AI sends a branded fallback message — collecting the customer's email so no lead is lost, even outside business hours.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-secondary/30 border-b border-border overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">The Process</p>
            <h2 className="text-3xl md:text-5xl font-display font-semibold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">From first touch to closed conversation — fully automated.</p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-primary/10 via-primary/60 to-primary/10 -translate-y-1/2 z-0" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Visitor Lands", desc: "Customer arrives on site — chat widget greets them instantly." },
                { step: "02", title: "AI Engages", desc: "Bot offers quick replies, answers FAQs, and qualifies the need." },
                { step: "03", title: "Human Joins", desc: "Agent steps in for complex questions with full context already captured." },
                { step: "04", title: "No Lead Lost", desc: "If offline, AI collects email and notifies the team automatically." },
              ].map((step, idx) => (
                <div key={idx} className="bg-card border border-border p-6 rounded-2xl shadow-xl relative text-center">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs shadow-[0_0_15px_rgba(198,168,125,0.3)]">
                    {step.step}
                  </div>
                  <h3 className="font-display font-semibold text-lg mt-4 mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">What's Included</p>
            <h2 className="text-3xl md:text-5xl font-display font-semibold">What We Set Up For You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { icon: <MessageSquareText className="w-8 h-8 text-primary" />, title: "24/7 AI Customer Support", desc: "Instantly answer FAQs, handle common queries, and qualify visitors any time of day — no staff required." },
              { icon: <Users className="w-8 h-8 text-primary" />, title: "Live Human Agent Handoff", desc: "Your team can join any conversation in real time, with full chat history and visitor navigation trail already captured." },
              { icon: <BarChart className="w-8 h-8 text-primary" />, title: "Analytics & Visitor Tracking", desc: "See who's on your site, where they came from, and every page they visited — all inside a real-time dashboard." },
              { icon: <Bot className="w-8 h-8 text-primary" />, title: "Multi-Platform Deployment", desc: "Install on your website, WhatsApp, Facebook Messenger, or Instagram — one inbox for all channels." },
            ].map((feat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.5 }}>
                <Card className="bg-secondary/20 border-border hover:border-primary/40 transition-colors h-full">
                  <CardHeader>
                    <div className="mb-3 p-3 bg-secondary rounded-lg w-fit">{feat.icon}</div>
                    <CardTitle className="text-xl font-display font-semibold">{feat.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-sm">{feat.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">Ready to Automate?</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">Never miss a customer again</h2>
          <p className="text-muted-foreground mb-8">
            Get a fully configured AI + human support system installed on your website — set up, tested, and live within days.
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
