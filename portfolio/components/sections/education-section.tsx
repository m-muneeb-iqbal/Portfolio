import { Calendar, GraduationCap, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { educationData } from "@/lib/data";

export function EducationSection() {
  return (
    <section id="education" className="py-12 border-t border-border/40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Education
          </h2>
          <p className="text-sm text-muted-foreground">
            Academic qualifications in Computer Science and Pre-Engineering.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 gap-4">
          {educationData.map((edu) => (
            <Card
              key={edu.id}
              className="border-border/60 bg-card/70 hover:border-border transition-colors"
            >
              <CardHeader className="p-5 pb-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-primary/10 p-2 text-primary border border-primary/20 shrink-0 mt-0.5">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                    <div>
                      <CardTitle className="text-base sm:text-lg font-bold text-foreground">
                        {edu.degree}
                      </CardTitle>
                      <p className="text-xs sm:text-sm font-medium text-foreground/80 mt-0.5">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-center">
                    <Badge variant="secondary" className="text-xs font-normal">
                      <Calendar className="mr-1 h-3 w-3" />
                      {edu.duration}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-5 pt-0 space-y-2">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{edu.location}</span>
                  </div>
                  <span className="text-border">•</span>
                  <span className="text-xs font-medium text-foreground/80">
                    Grade: <span className="italic">{edu.grade}</span>
                  </span>
                </div>

                {edu.details && (
                  <p className="text-xs sm:text-sm text-muted-foreground/90 pt-1 leading-relaxed">
                    {edu.details}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
