import { Link } from "wouter";
import { Mail, MessageSquare, Linkedin, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-border mt-auto" data-testid="footer">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 group inline-block mb-6" data-testid="link-footer-logo">
              <span className="text-3xl font-bold font-display tracking-tight text-foreground">
                ZA<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
              Zeeshan Ahmad — Websites, Branding, AI Automation & Marketing Solutions for Small Businesses.
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:hello@digitalsolutions.com" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors" data-testid="link-footer-email">
                <Mail size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors" data-testid="link-footer-linkedin">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors" data-testid="link-footer-whatsapp">
                <MessageSquare size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/websites" className="text-muted-foreground hover:text-primary transition-colors flex items-center group" data-testid="link-footer-websites">Websites & Dev <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all"/></Link></li>
              <li><Link href="/branding" className="text-muted-foreground hover:text-primary transition-colors flex items-center group" data-testid="link-footer-branding">Branding & Design <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all"/></Link></li>
              <li><Link href="/ai-content" className="text-muted-foreground hover:text-primary transition-colors flex items-center group" data-testid="link-footer-aicontent">AI Content <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all"/></Link></li>
              <li><Link href="/chatbots" className="text-muted-foreground hover:text-primary transition-colors flex items-center group" data-testid="link-footer-chatbots">Chatbots & Auto <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all"/></Link></li>
              <li><Link href="/social-media" className="text-muted-foreground hover:text-primary transition-colors flex items-center group" data-testid="link-footer-social">Social Media <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all"/></Link></li>
              <li><Link href="/coding" className="text-muted-foreground hover:text-primary transition-colors flex items-center group" data-testid="link-footer-coding">Coding <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all"/></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-about">About</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Zeeshan Ahmad. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-foreground cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}