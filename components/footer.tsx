import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profileData } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/20 py-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            </Button>

            <Button asChild variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </Button>

            <Button asChild variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <a href={profileData.socials.email} aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full border-border/80 ml-2"
            >
              <a href="#" aria-label="Back to Top">
                <ArrowUp className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>

        </div>

        <div className="border-t border-border/30 pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-muted-foreground gap-2">
          <p>© {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
          <p>Wah Cantonment, Pakistan • {profileData.email}</p>
        </div>

      </div>
    </footer>
  );
}
