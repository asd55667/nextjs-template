import { Button } from "./ui/button";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <AlertTriangle className="h-12 w-12 text-destructive" />
        <h2 className="text-2xl font-bold">Something went wrong</h2>
        <p className="text-muted-foreground">{error.message}</p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" onClick={resetErrorBoundary}>
          Try again
        </Button>
        <Button asChild variant="ghost">
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </div>
  );
}
