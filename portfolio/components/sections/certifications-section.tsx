import { Award, Calendar, ExternalLink, FileCheck } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { certificationsData } from "@/lib/data";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-12 border-t border-border/40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Certifications
          </h2>
          <p className="text-sm text-muted-foreground">
            Verified industry credentials and specialized full-stack courses.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 gap-6">
          {certificationsData.map((cert) => (
            <Card
              key={cert.id}
              className="border-border/60 bg-card/80 hover:border-border transition-colors"
            >
              <CardHeader className="p-5 pb-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-primary/10 p-2 text-primary border border-primary/20 shrink-0 mt-0.5">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-base sm:text-lg font-bold text-foreground">
                        {cert.title}
                      </CardTitle>
                      <p className="text-xs sm:text-sm font-semibold text-primary/90 mt-0.5">
                        Issued by {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <Badge variant="secondary" className="w-fit text-xs font-normal">
                    <Calendar className="mr-1 h-3 w-3" />
                    {cert.date}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-5 pt-0 space-y-3">
                <ul className="space-y-1.5 list-disc list-outside pl-4 text-xs sm:text-[13px] leading-relaxed text-foreground/85">
                  {cert.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </CardContent>

              {cert.certificateUrl && (
                <CardFooter className="p-5 pt-0">
                  <Button asChild size="sm" variant="outline" className="rounded-lg gap-2 text-xs border-border/80">
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileCheck className="h-4 w-4 text-primary" />
                      View Certificate (PDF)
                      <ExternalLink className="h-3 w-3 text-muted-foreground" />
                    </a>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
