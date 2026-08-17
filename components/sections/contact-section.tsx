"use client";

import * as React from "react";
import { Check, Copy, Mail, MessageSquare, Send } from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { profileData } from "@/lib/data";

export function ContactSection() {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    toast.success("Email copied to clipboard!", {
      description: profileData.email,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-12 border-t border-border/40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        <Card className="border-border/80 bg-gradient-to-br from-card via-card/90 to-muted/30 shadow-sm overflow-hidden">
          <CardContent className="p-6 sm:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              
              <div className="space-y-3 max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>Let&apos;s Work Together</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  Have a project or opportunity in mind?
                </h2>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  I am currently open to full-time developer positions, remote opportunities, and freelance projects. Let&apos;s discuss how I can contribute to your team.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
                <Button asChild size="default" className="rounded-xl shadow-xs gap-2">
                  <a href={profileData.socials.email}>
                    <Send className="h-4 w-4" />
                    Send an Email
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="default"
                  className="rounded-xl border-border/80 gap-2 hover:bg-muted"
                  onClick={handleCopyEmail}
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-500" />
                      <span>Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </Button>
              </div>

            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  );
}
