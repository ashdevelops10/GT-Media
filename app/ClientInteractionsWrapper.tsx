"use client";

import dynamic from "next/dynamic";

const LuxuryCursor = dynamic(() => import("@/src/components/LuxuryCursor"), {
  ssr: false
});

const InitInteractionsComponent = dynamic(
  () => import("@/src/animations/InitInteractionsClient"),
  { ssr: false }
);

export function ClientInteractionsWrapper() {
  return (
    <>
      <LuxuryCursor />
      <InitInteractionsComponent />
    </>
  );
}
