import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { EducationSection } from "@/components/sections/education-section";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function EducationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-6">
          <Button asChild variant="ghost" size="sm" className="gap-1 text-xs">
            <Link href="/">
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Overview
            </Link>
          </Button>
        </div>
        <EducationSection />
      </main>
      <Footer />
    </div>
  );
}
