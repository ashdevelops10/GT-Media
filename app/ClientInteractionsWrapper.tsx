"use client";

import dynamic from "next/dynamic";

const LuxuryCursor = dynamic(() => import("@/src/components/LuxuryCursor"), {
  ssr: false
});

const InitInteractions = dynamic(() => import("@/src/animations/InitInteractionsClient").then(mod => mod.InitInteractions ? { default: mod.InitInteractions } : mod), {
  ssr: false
});

export function ClientInteractionsWrapper() {
  return (
    <>
      <LuxuryCursor />
      <InitInteractions />
    </>
  );
}
