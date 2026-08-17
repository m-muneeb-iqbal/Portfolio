"use client";

import * as React from "react";
import {
  Code,
  Database,
  Layers,
  Lock,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skillsData } from "@/lib/data";

const categoryIcons: Record<string, React.ElementType> = {
  "Core Stack": Code,
  "Backend & Architecture": Server,
  Databases: Database,
  "Tools & Deployment": Wrench,
  "Authentication & Security": Lock,
};

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  const totalSkillsCount = skillsData.reduce(
    (acc, curr) => acc + curr.skills.length,
    0
  );

  const displayedCategories =
    selectedCategory === "all"
      ? skillsData
      : skillsData.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-12 border-t border-border/40 scroll-mt-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Technical Arsenal</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Technical Skills & Tools
            </h2>
            <p className="text-sm text-muted-foreground">
              Technologies, frameworks, databases, and architectural tools I leverage daily.
            </p>
          </div>

          {/* Mobile: Native select dropdown */}
          <div className="sm:hidden">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full rounded-lg border border-border/70 bg-muted/40 px-3 py-2 text-sm font-medium text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="all">All ({totalSkillsCount})</option>
              {skillsData.map((cat) => (
                <option key={cat.title} value={cat.title}>{cat.title}</option>
              ))}
            </select>
          </div>

          {/* Desktop: Horizontal pill tabs */}
          <div className="hidden sm:block">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList className="bg-muted/50 border border-border/60 p-1 rounded-lg h-auto flex flex-row flex-wrap gap-1">
                <TabsTrigger value="all" className="text-xs px-2.5 py-1 rounded-md font-medium">
                  All ({totalSkillsCount})
                </TabsTrigger>
                {skillsData.map((cat) => (
                  <TabsTrigger
                    key={cat.title}
                    value={cat.title}
                    className="text-xs px-2.5 py-1 rounded-md font-medium"
                  >
                    {cat.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {displayedCategories.map((category) => {
            const Icon = categoryIcons[category.title] || Layers;
            return (
              <Card
                key={category.title}
                className="border-border/60 bg-card/70 hover:border-primary/30 transition-all duration-200"
              >
                <CardHeader className="p-5 pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="rounded-lg bg-primary/10 p-2 text-primary border border-primary/20">
                        <Icon className="h-4 w-4" />
                      </div>
                      <CardTitle className="text-base font-semibold text-foreground">
                        {category.title}
                      </CardTitle>
                    </div>
                    <Badge variant="outline" className="text-[11px] font-mono text-muted-foreground border-border/60">
                      {category.skills.length} skills
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-5 pt-1">
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-2.5 py-1 text-xs font-medium bg-muted/60 hover:bg-primary/10 hover:text-primary hover:border-primary/30 border border-transparent text-foreground/90 transition-all cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
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
