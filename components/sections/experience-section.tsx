"use client";

import * as React from "react";
import { Briefcase, Building, Calendar, MapPin, Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experienceData } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 border-t border-border/40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Career Progression</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Work Experience Journey
          </h2>
          <p className="text-sm text-muted-foreground">
            Professional software engineering internship and corporate business support roles.
          </p>
        </div>

        {/* Timeline Container with Glowing Rail */}
        <div className="relative pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-8">
          {/* Luminous Animated Timeline Beam */}
          <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-gradient-to-b from-primary via-primary/40 to-border/40 rounded-full" />

          {experienceData.map((exp, index) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Checkpoint Node with Radar Pulse */}
              <div className="absolute -left-[31px] sm:-left-[45px] top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary/50 bg-background shadow-xs transition-all duration-300 group-hover:border-primary group-hover:scale-110 group-hover:shadow-md">
                <span className="absolute -inset-1 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping duration-1000" />
                <Briefcase className="h-3.5 w-3.5 text-primary transition-transform group-hover:rotate-6" />
              </div>

              {/* Experience Card */}
              <Card className="border-border/60 bg-card/80 hover:border-primary/40 hover:shadow-md transition-all duration-200">
                <CardHeader className="p-5 pb-3 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </CardTitle>
                    </div>
                    <Badge variant="secondary" className="w-fit text-xs font-normal bg-muted/60">
                      <Calendar className="mr-1 h-3 w-3" />
                      {exp.duration}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1 font-medium text-foreground/90">
                      <Building className="h-3.5 w-3.5 text-primary" />
                      <span>{exp.company}</span>
                    </div>
                    <span className="text-border">•</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{exp.location}</span>
                    </div>
                    <span className="text-border">•</span>
                    <span className="font-mono text-[11px] text-muted-foreground/80">{exp.type}</span>
                  </div>
                </CardHeader>

                <CardContent className="p-5 pt-0 space-y-4">
                  <ul className="space-y-1.5 list-disc list-outside pl-4 text-xs sm:text-[13px] leading-relaxed text-foreground/85">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  {/* Skills/Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-[10px] sm:text-[11px] px-2 py-0.5 bg-muted/20 border-border/60 font-normal hover:bg-muted/50 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
