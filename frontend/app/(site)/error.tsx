"use client";

import { useEffect } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Caught by app/error.tsx:", error);
  }, [error]);

  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center bg-black p-4 text-white">
      <h2 className="text-xl font-bold text-red-500 mb-4">Something went wrong!</h2>
      <div className="p-4 bg-red-500/10 border border-red-500 rounded-md max-w-2xl overflow-auto text-left mb-6">
        <p className="font-mono text-sm text-red-400">{error.message || "Unknown error"}</p>
        {error.stack && (
          <pre className="mt-2 text-xs text-gray-400 whitespace-pre-wrap">{error.stack}</pre>
        )}
      </div>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-white text-black font-semibold rounded-md"
      >
        Try again
      </button>
    </div>
  );
}

