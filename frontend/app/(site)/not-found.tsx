import Link from "next/link";
import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center bg-background px-5 text-center">
      <SearchX className="h-10 w-10 text-disabled" strokeWidth={1.5} />
      <h1 className="mt-5 font-display text-2xl font-medium text-ink">
        We couldn&apos;t find that page
      </h1>
      <p className="mt-2 max-w-sm text-[14px] text-tertiary">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <div className="mt-7 flex gap-3">
        <Button href="/">Back to Home</Button>
        <Link
          href="/support"
          className="flex min-h-[44px] items-center px-5 text-sm text-secondary hover:text-blue"
        >
          Contact Support
        </Link>
      </div>
    </section>
  );
}

