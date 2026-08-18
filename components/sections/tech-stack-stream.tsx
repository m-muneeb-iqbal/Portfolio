"use client";

import * as React from "react";
import {
  Braces,
  Code2,
  Database,
  Globe,
  GitBranch,
  KeyRound,
  Layers,
  Radio,
  ShieldCheck,
  Server,
  Smartphone,
  Workflow,
  Zap,
} from "lucide-react";

const techItems = [
  { name: "Postman", category: "Deployment", icon: Braces },
  { name: "React.js", category: "Frontend", icon: Code2 },
  { name: "Node.js", category: "Backend", icon: Server },
  { name: "Express.js", category: "API Framework", icon: Braces },
  { name: "MongoDB", category: "Database", icon: Database },
  { name: "Flutter", category: "Mobile", icon: Smartphone },
  { name: "Render", category: "Deployment", icon: Server },
  { name: "Firebase Firestore", category: "Databases", icon: Database },
  { name: "Dart", category: "Language", icon: Code2 },
  { name: "Laravel", category: "Backend", icon: Layers },
  { name: "Vercel", category: "Deployment", icon: Globe },
  { name: "RESTful API Design", category: "Architecture", icon: Workflow },
  { name: "WebSockets", category: "Real-Time", icon: Radio },
  { name: "Git", category: "Deployment", icon: GitBranch },
  { name: "WebRTC", category: "Bi-Directional Communication", icon: Radio },
  { name: "Socket.io", category: "Backend & Architecture", icon: Zap },
  { name: "MVC Architecture", category: "Architecture", icon: Workflow },
  { name: "MySQL", category: "Databases", icon: Database },
  { name: "JWT", category: "Security", icon: ShieldCheck },
  { name: "OAuth", category: "Authentication", icon: KeyRound },
  { name: "GitHub", category: "Deployment", icon: GitBranch },
];

export function TechStackStream() {
  // Duplicate array for seamless infinite looping
  const streamItems = [...techItems, ...techItems];

  return (
    <section className="relative w-full py-8 border-y border-border/40 bg-muted/20 overflow-hidden select-none">
      {/* Left/Right Edge Fade Gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Marquee Track with CSS Animation */}
      <div className="flex w-max gap-4 animate-tech-marquee hover:[animation-play-state:paused]">
        {streamItems.map((tech, idx) => {
          const Icon = tech.icon;
          return (
            <div
              key={`${tech.name}-${idx}`}
              className="flex items-center gap-2 rounded-full border border-border/60 bg-card/80 px-4 py-1.5 shadow-2xs backdrop-blur-xs transition-all duration-200 hover:border-primary/50 hover:bg-card hover:scale-105 group"
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="h-3 w-3" />
              </div>
              <span className="text-xs font-semibold text-foreground/90 group-hover:text-foreground">
                {tech.name}
              </span>
              <span className="text-[10px] font-mono text-muted-foreground/80 pl-1 border-l border-border/60">
                {tech.category}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
