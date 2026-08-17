"use client";

import * as React from "react";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Database,
  Globe,
  Radio,
  Server,
  Sparkles,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface NodeItem {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  status: string;
  icon: React.ElementType;
  details: string;
}

const nodes: NodeItem[] = [
  {
    id: "client",
    title: "Client Frontend",
    subtitle: "React.js SPA",
    role: "UI & WebRTC Client",
    status: "Active",
    icon: Globe,
    details: "Handles real-time UI state, Socket.io event listeners, and WebRTC media stream acquisition.",
  },
  {
    id: "gateway",
    title: "Real-Time Gateway",
    subtitle: "Node.js & Socket.io",
    role: "Signaling & Event Hub",
    status: "Connected",
    icon: Radio,
    details: "Dispatches instant chat messages, room broadcasts, and exchanges WebRTC SDP offer/answer candidates.",
  },
  {
    id: "webrtc",
    title: "Audio Calling Mesh",
    subtitle: "WebRTC Peer-to-Peer",
    role: "Direct Media Channel",
    status: "Low Latency",
    icon: Zap,
    details: "Direct browser-to-browser encrypted audio streaming with zero server-side audio relay bottlenecks.",
  },
  {
    id: "database",
    title: "Data & Auth Layer",
    subtitle: "Express & MongoDB",
    role: "Persistence & RBAC",
    status: "Synced",
    icon: Database,
    details: "Persists chat logs, authenticates JWT sessions, and provides high-throughput MongoDB Atlas indexing.",
  },
];

export function ArchitectureDiagram() {
  const [selectedNode, setSelectedNode] = React.useState<string>("client");

  const activeNode = nodes.find((n) => n.id === selectedNode) || nodes[1];

  return (
    <div className="rounded-2xl border border-border/70 bg-gradient-to-b from-card/90 to-background p-5 sm:p-6 shadow-sm space-y-6">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <h4 className="text-sm font-semibold text-foreground tracking-tight">
              AroundYou • Live Real-Time Architecture Flow
            </h4>
          </div>
          <p className="text-xs text-muted-foreground">
            Interactive system topology: WebSockets event signaling & WebRTC peer mesh.
          </p>
        </div>
        <Badge variant="outline" className="w-fit text-[11px] font-mono bg-muted/30 border-border/70 gap-1.5 py-0.5">
          <Activity className="h-3 w-3 text-emerald-500 animate-pulse" />
          Real-Time Stream Active
        </Badge>
      </div>

      {/* Nodes visual map */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative">
        {nodes.map((node, index) => {
          const Icon = node.icon;
          const isSelected = selectedNode === node.id;

          return (
            <button
              key={node.id}
              onClick={() => setSelectedNode(node.id)}
              className={`relative text-left p-4 rounded-xl border transition-all duration-200 group cursor-pointer ${
                isSelected
                  ? "border-primary/80 bg-primary/5 shadow-xs ring-1 ring-primary/20"
                  : "border-border/60 bg-muted/20 hover:border-border hover:bg-muted/40"
              }`}
            >
              {/* Header inside node */}
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-colors ${
                    isSelected
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground/80 border-border/80 group-hover:text-primary"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-background/80 border border-border/60 text-muted-foreground">
                  Step 0{index + 1}
                </span>
              </div>

              <div className="space-y-0.5">
                <p className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                  {node.title}
                </p>
                <p className="text-[11px] font-medium text-muted-foreground font-mono">
                  {node.subtitle}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-border/40 flex items-center justify-between text-[10px] text-muted-foreground">
                <span>{node.role}</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  {node.status}
                </span>
              </div>

              {/* Animated connector arrows: Horizontal on desktop, Vertical on mobile */}
              {index < nodes.length - 1 && (
                <>
                  {/* Desktop / 4-Col: Horizontal Arrow */}
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 h-6 w-6 rounded-full bg-background border border-border items-center justify-center text-muted-foreground shadow-2xs">
                    <ArrowRight className="h-3 w-3 animate-pulse text-primary" />
                  </div>
                  {/* Mobile (Stacked single column): Downward Arrow */}
                  <div className="flex sm:hidden absolute -bottom-3 left-1/2 -translate-x-1/2 z-10 h-6 w-6 rounded-full bg-background border border-border items-center justify-center text-muted-foreground shadow-2xs">
                    <ArrowDown className="h-3 w-3 animate-pulse text-primary" />
                  </div>
                </>
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Node Deep-Dive Card */}
      <div className="rounded-xl border border-border/60 bg-muted/30 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <h5 className="text-xs sm:text-sm font-semibold text-foreground">
              {activeNode.title} Implementation Details
            </h5>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">
            {activeNode.details}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-3 py-1 rounded-lg bg-background border border-border text-foreground/80">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Zero-drop packet stream
          </span>
        </div>
      </div>
    </div>
  );
}
