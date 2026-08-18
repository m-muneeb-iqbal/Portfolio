"use client";

import * as React from "react";
import Image from "next/image";
import {
  Code2,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Radio,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GithubIcon, LinkedinIcon, UpworkIcon, IndeedIcon } from "@/components/icons";
import { profileData } from "@/lib/data";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden py-12 md:py-20 scroll-mt-16">
      {/* Background subtle radial gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-30 dark:opacity-20"
      >
        <div className="h-[420px] w-[540px] rounded-full bg-gradient-to-tr from-primary/30 to-muted blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:items-start md:justify-between">
          
          {/* Main Bio Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-2xs backdrop-blur-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Available for Full-time & Remote Roles</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl text-foreground">
                Hi, I&apos;m{" "}
                <span className="text-primary underline decoration-muted-foreground/30 underline-offset-8">
                  {profileData.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-muted-foreground">
                Full-Stack & Mobile App Developer
              </p>

              {/* Specialties */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1 md:justify-start">
                <Badge variant="outline" className="gap-1.5 border-border/60 bg-muted/20 px-2.5 py-1 text-xs font-normal text-foreground/80">
                  <Code2 className="h-3 w-3 text-primary" />
                  MERN Full-Stack
                </Badge>
                <Badge variant="outline" className="gap-1.5 border-border/60 bg-muted/20 px-2.5 py-1 text-xs font-normal text-foreground/80">
                  <Smartphone className="h-3 w-3 text-primary" />
                  Flutter & Dart
                </Badge>
                <Badge variant="outline" className="gap-1.5 border-border/60 bg-muted/20 px-2.5 py-1 text-xs font-normal text-foreground/80">
                  <Radio className="h-3 w-3 text-primary" />
                  WebSockets & WebRTC
                </Badge>
              </div>
            </div>

            {/* Bio summary */}
            <p className="max-w-2xl text-base text-muted-foreground/90 leading-relaxed">
              {profileData.bio}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 md:justify-start">
              <Button asChild size="sm" className="rounded-full shadow-xs">
                <a href="#projects">
                  <Sparkles className="h-4 w-4" />
                  View Projects
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="sm"
                className="rounded-full border-border/80 hover:bg-muted"
              >
                <a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Resume
                </a>
              </Button>
            </div>

            {/* Location, Email & Phone */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-1 text-xs text-muted-foreground md:justify-start">
              <div className="flex w-full items-center justify-center gap-1.5 sm:w-auto md:justify-start">
                <MapPin className="h-3.5 w-3.5 text-foreground/70" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex w-full items-center justify-center gap-3 min-[420px]:w-auto md:justify-start">
                <div className="flex min-w-0 max-w-full items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 shrink-0 text-foreground/70" />
                  <span className="truncate sm:whitespace-normal">{profileData.email}</span>
                </div>
                <span className="text-border">•</span>
                <div className="flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-foreground/70" />
                  <span>{profileData.phone}</span>
                </div>
              </div>
            </div>

            {/* Connect */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1 md:justify-start">
              <span className="mr-0.5 text-xs text-muted-foreground/90">Connect:</span>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button asChild variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <a
                      href={profileData.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>GitHub</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button asChild variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <a
                      href={profileData.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                    >
                      <LinkedinIcon className="h-4 w-4" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>LinkedIn</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button asChild variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <a
                      href={profileData.socials.upwork}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Upwork Profile"
                    >
                      <UpworkIcon className="h-4 w-4" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Upwork</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button asChild variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <a
                      href={profileData.socials.indeed}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Indeed Profile"
                    >
                      <IndeedIcon className="h-4 w-4" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Indeed Profile</TooltipContent>
              </Tooltip>
            </div>

          </div>

          {/* Profile Picture Card */}
          <div className="relative shrink-0 group">
            <div className="relative h-44 w-44 sm:h-52 sm:w-52 rounded-2xl overflow-hidden border-2 border-border shadow-md bg-muted/30">
              <Image
                src={profileData.pfpUrl}
                alt={profileData.name}
                fill
                priority
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 176px, 208px"
              />
            </div>
            {/* Soft decorative ring */}
            <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r from-primary/10 to-muted/20 opacity-70 blur-xs transition group-hover:opacity-100" />
          </div>

        </div>
      </div>
    </section>
  );
}
