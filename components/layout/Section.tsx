import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { GridLines } from "./GridLines";

interface SectionProps {
  children: ReactNode;
  className?: string;
  spacing?: "default" | "compact" | "spacious";
  background?: "default" | "dark" | "carbon" | "accent" | "parchment";
  showGridLines?: boolean;
  id?: string;
}

export function Section({
  children,
  className,
  spacing = "default",
  background = "default",
  showGridLines = false,
  id,
}: SectionProps) {
  const spacingClasses = {
    default: "py-24 md:py-32 lg:py-40",
    compact: "py-16 md:py-24 lg:py-32",
    spacious: "py-32 md:py-48 lg:py-64",
  };

  const backgroundClasses = {
    default: "bg-onyx text-white",
    dark: "bg-[#0b090a] text-white",
    carbon: "bg-carbon text-white",
    parchment: "bg-[#E2D9CB] text-onyx",
    accent: "text-white bg-gradient-to-br from-garnet via-mahogany to-strawberry",
  };

  return (
    <section id={id} className={cn("relative", spacingClasses[spacing], backgroundClasses[background], className)}>
      {showGridLines && <GridLines />}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
