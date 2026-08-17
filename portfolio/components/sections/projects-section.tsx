"use client";

import * as React from "react";
import { ExternalLink, Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GithubIcon } from "@/components/icons";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { projectsData } from "@/lib/data";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "MERN & Full-Stack" },
  { id: "mobile-ai", label: "Flutter & AI/ML" },
];

export function ProjectsSection() {
  const [activeTab, setActiveTab] = React.useState("all");

  const filteredProjects = projectsData.filter((project) => {
    if (activeTab === "all") return true;
    if (activeTab === "fullstack") {
      return (
        project.techStack.includes("React.js") ||
        project.techStack.includes("Node.js") ||
        project.techStack.includes("MongoDB")
      );
    }
    if (activeTab === "mobile-ai") {
      return (
        project.techStack.includes("Flutter") ||
        project.techStack.includes("Machine Learning") ||
        project.techStack.includes("Python")
      );
    }
    return true;
  });

  return (
    <section id="projects" className="py-12 border-t border-border/40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Portfolio Showcase</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Featured Projects
            </h2>
            <p className="text-sm text-muted-foreground">
              Production full-stack platforms and AI/machine-learning applications.
            </p>
          </div>

          {/* Mobile: native select */}
          <div className="sm:hidden">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="w-full rounded-lg border border-border/70 bg-muted/40 px-3 py-2 text-sm font-medium text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.label}</option>
              ))}
            </select>
          </div>

          {/* Desktop: pill tabs */}
          <div className="hidden sm:block">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="bg-muted/50 border border-border/60 p-1 rounded-lg">
                {categories.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="text-xs px-3 py-1 data-[state=active]:bg-background data-[state=active]:shadow-xs rounded-md font-medium"
                  >
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col justify-between border-border/60 bg-card/80 hover:border-primary/40 hover:shadow-md transition-all duration-200"
            >
              <CardHeader className="space-y-3 pb-4">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    {project.liveUrl && (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 shrink-0">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Live in Production
                      </span>
                    )}
                  </div>
                  <CardDescription className="text-xs font-medium text-muted-foreground mt-1">
                    {project.subtitle}
                  </CardDescription>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-[11px] px-2 py-0.5 bg-muted/30 border-border/60 text-foreground/80 font-normal hover:bg-muted/60 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="space-y-2.5 pb-6 text-sm text-muted-foreground">
                <ul className="space-y-2 list-disc list-outside pl-4 text-xs sm:text-[13px] leading-relaxed">
                  {project.description.map((point, idx) => (
                    <li key={idx} className="text-foreground/85">
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-3 border-t border-border/40 flex flex-wrap items-center gap-2">
                {project.liveUrl && (
                  <Button asChild size="sm" className="rounded-lg gap-1.5 text-xs shadow-2xs">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="rounded-lg gap-1.5 text-xs border-border/80 hover:bg-muted"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      Source Code
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Live Real-Time Architecture Visualizer */}
        <ArchitectureDiagram />

      </div>
    </section>
  );
}
