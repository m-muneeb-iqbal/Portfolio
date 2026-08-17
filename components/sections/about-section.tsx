import { Code2, Layers, Smartphone, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { profileData } from "@/lib/data";

const highlights = [
  {
    icon: Code2,
    title: "MERN Stack Development",
    description: "Building scalable web architectures with React, Node.js, Express, and MongoDB.",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Mobile (Flutter)",
    description: "Developing responsive, performant Android & iOS applications with Dart & Flutter.",
  },
  {
    icon: Layers,
    title: "Real-Time & Media Systems",
    description: "Integrating bidirectional WebSockets (Socket.io) and WebRTC for live chat & audio calling.",
  },
  {
    icon: TrendingUp,
    title: "Business Support & Analytics",
    description: "Financial audits, QuickBooks bookkeeping, and cost estimation for US-based enterprises.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-12 border-t border-border/40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            About Me
          </h2>
          <p className="text-sm text-muted-foreground">
            A blend of software engineering rigor and business operational precision.
          </p>
        </div>

        {/* About Paragraph Card */}
        <Card className="border-border/60 bg-card/60 backdrop-blur-xs">
          <CardContent className="p-6 sm:p-8">
            <p className="text-base text-foreground/90 leading-relaxed">
              {profileData.about}
            </p>
          </CardContent>
        </Card>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card
                key={idx}
                className="border-border/50 bg-background/50 hover:border-border transition-colors group"
              >
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="rounded-lg p-2.5 bg-primary/5 text-primary border border-primary/10 group-hover:scale-105 transition-transform shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
