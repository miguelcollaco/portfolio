import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import MissingPath from "./_components/MissingPath";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="section-label">404 // not found</span>
      <h1 className="section-title">Nothing lives here</h1>
      <MissingPath />
      <p className="text-muted-foreground max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Button asChild size="lg">
        <Link href="/">
          <ArrowLeft />
          cd ~
        </Link>
      </Button>
    </main>
  );
}
