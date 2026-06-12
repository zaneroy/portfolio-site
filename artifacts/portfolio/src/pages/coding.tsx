import { motion } from "framer-motion";
import { Link } from "wouter";
import { Globe, Server, Terminal, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import imgHTML from "@assets/image_1781232162462.png";
import imgPython from "@assets/image_1781232214706.png";
import imgJS from "@assets/image_1781232243181.png";
import imgColorCode from "@assets/image_1781232307848.png";
import imgSQL from "@assets/image_1781232324441.png";
import imgPythonCode from "@assets/image_1781232349329.png";

const skillGroups = [
  {
    category: "Frontend Development",
    icon: <Globe className="w-6 h-6 text-primary" />,
    color: "from-blue-500/20 to-cyan-500/20",
    items: [
      { name: "HTML5", level: 95, desc: "Semantic markup, accessibility, SEO-optimized structure." },
      { name: "CSS3", level: 90, desc: "Responsive layouts, animations, Tailwind, and custom design systems." },
      { name: "JavaScript", level: 88, desc: "ES6+, DOM manipulation, async/await, and modern frameworks." },
    ],
  },
  {
    category: "Backend Development",
    icon: <Server className="w-6 h-6 text-primary" />,
    color: "from-purple-500/20 to-pink-500/20",
    items: [
      { name: "PHP", level: 80, desc: "Server-side scripting, REST APIs, and CMS integrations." },
      { name: "SQL", level: 85, desc: "Relational databases, complex queries, optimization, and schema design." },
      { name: "Python", level: 82, desc: "Scripting, automation, data processing, and backend APIs." },
    ],
  },
  {
    category: "Programming & Software",
    icon: <Terminal className="w-6 h-6 text-primary" />,
    color: "from-amber-500/20 to-orange-500/20",
    items: [
      { name: "Java", level: 75, desc: "Object-oriented programming, data structures, and algorithms." },
      { name: "Python", level: 82, desc: "Machine learning integrations, automation bots, and data analysis." },
    ],
  },
];

const techBadges = [
  { name: "HTML5", color: "text-orange-400" },
  { name: "CSS3", color: "text-blue-400" },
  { name: "JavaScript", color: "text-yellow-400" },
  { name: "Python", color: "text-green-400" },
  { name: "Java", color: "text-red-400" },
  { name: "PHP", color: "text-purple-400" },
  { name: "SQL", color: "text-cyan-400" },
  { name: "React", color: "text-sky-400" },
  { name: "Node.js", color: "text-emerald-400" },
  { name: "MySQL", color: "text-orange-300" },
  { name: "PostgreSQL", color: "text-blue-300" },
  { name: "Git", color: "text-rose-400" },
];

export default function Coding() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-24 border-b border-border">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[160px]" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-accent/8 rounded-full blur-[100px]" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6 font-sans">Software Development</p>
            <h1 className="text-5xl md:text-7xl font-display font-semibold tracking-tight mb-6 leading-[1.05]">
              Programming &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#E8D5B5] to-accent italic">
                Code
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              Full-stack development expertise spanning frontend interfaces, backend systems, databases, and AI-powered automation — turning ideas into clean, functional software.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">Technical Expertise</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">A versatile programming foundation covering the full development stack.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, gIdx) => (
              <motion.div
                key={gIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gIdx * 0.15, duration: 0.5 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-primary/30 transition-all overflow-hidden">
                  <div className={`h-1 w-full bg-gradient-to-r ${group.color}`} />
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                        {group.icon}
                      </div>
                      <h3 className="text-lg font-bold font-display">{group.category}</h3>
                    </div>
                    <div className="flex flex-col gap-7">
                      {group.items.map((skill, sIdx) => (
                        <div key={sIdx}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-foreground">{skill.name}</span>
                            <span className="text-primary text-sm font-mono tabular-nums">{skill.level}%</span>
                          </div>
                          <div className="h-1.5 bg-secondary rounded-full overflow-hidden mb-2.5">
                            <motion.div
                              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ delay: gIdx * 0.15 + sIdx * 0.1 + 0.3, duration: 0.9, ease: "easeOut" }}
                            />
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">{skill.desc}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Badges */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3 font-sans">Languages & Tools</p>
            <h2 className="text-3xl font-display font-semibold">Tech Stack</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04, duration: 0.3 }}
                className="px-5 py-2.5 rounded-full border border-border/60 bg-secondary/40 hover:border-primary/40 hover:bg-secondary/70 transition-all cursor-default"
              >
                <span className={`text-sm font-mono font-medium ${tech.color}`}>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Gallery */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">In Action</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4">Code Gallery</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">A look at the work behind the scenes — real code, real projects.</p>
          </div>

          {/* Row 1: two side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {[
              { image: imgHTML, title: "HTML & Browser DevTools", tag: "Frontend" },
              { image: imgPython, title: "Python Machine Learning", tag: "AI / Backend" },
            ].map((item, idx) => (
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
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-primary font-medium text-sm mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.tag}</span>
                  <h3 className="text-xl font-bold font-display translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2: full-width wide code screenshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative group overflow-hidden rounded-2xl border border-border bg-secondary/50 mb-6"
          >
            <div className="aspect-[21/9] w-full overflow-hidden">
              <img
                src={imgColorCode}
                alt="JavaScript & Algorithms — colorful code"
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-primary font-medium text-sm mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Frontend</span>
              <h3 className="text-2xl font-bold font-display translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">JavaScript & Algorithms</h3>
            </div>
          </motion.div>

          {/* Row 3: two side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {[
              { image: imgSQL, title: "SQL Database Design", tag: "Backend" },
              { image: imgJS, title: "Backend Logic & Queries", tag: "Backend" },
            ].map((item, idx) => (
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
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-primary font-medium text-sm mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.tag}</span>
                  <h3 className="text-xl font-bold font-display translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 4: full-width Python */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative group overflow-hidden rounded-2xl border border-border bg-secondary/50"
          >
            <div className="aspect-[21/9] w-full overflow-hidden">
              <img
                src={imgPythonCode}
                alt="Python Scripting & OOP"
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-primary font-medium text-sm mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Backend / AI</span>
              <h3 className="text-2xl font-bold font-display translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Python Scripting & OOP</h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What I Build */}
      <section className="py-24 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-sans">Deliverables</p>
            <h2 className="text-4xl font-display font-semibold mb-4">What I Build</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">From simple scripts to full-stack applications — here's what you can commission.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Custom Web Apps", desc: "Full-stack React + Node.js applications with database integration and user authentication.", icon: <Globe className="w-5 h-5 text-primary" /> },
              { title: "Backend APIs", desc: "RESTful APIs in Python or Node.js with SQL database design, authentication, and documentation.", icon: <Server className="w-5 h-5 text-primary" /> },
              { title: "Automation Scripts", desc: "Python scripts that automate repetitive tasks, process data, and integrate third-party services.", icon: <Terminal className="w-5 h-5 text-primary" /> },
              { title: "Database Design", desc: "Optimized relational database schemas in MySQL or PostgreSQL with proper indexing and normalization.", icon: <CheckCircle2 className="w-5 h-5 text-primary" /> },
              { title: "PHP & WordPress", desc: "Custom WordPress themes, plugins, and PHP backends for CMS-driven websites.", icon: <CheckCircle2 className="w-5 h-5 text-primary" /> },
              { title: "Java Applications", desc: "Object-oriented Java applications, data structure implementations, and algorithm design.", icon: <CheckCircle2 className="w-5 h-5 text-primary" /> },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
              >
                <Card className="h-full bg-card/50 border-border/50 hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(198,168,125,0.15)]">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-bold font-display text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[140px] pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 text-center max-w-2xl">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6 font-sans">Need a Developer?</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">Let's build something great</h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Whether you need a custom web app, automation script, or database-driven platform — I have the skills to bring it to life.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-12 px-12 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_40px_rgba(198,168,125,0.2)] hover:scale-105 transition-all tracking-widest text-xs uppercase font-sans">
              Start a Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
