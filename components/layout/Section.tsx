import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { GridLines } from "./GridLines";

interface SectionProps {
  children: ReactNode;
  className?: string;
  spacing?: "default" | "compact" | "spacious";
  background?: "default" | "dark" | "light" | "accent" | "parchment";
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
    default: "py-16 md:py-20 lg:py-24",
    compact: "py-10 md:py-14 lg:py-16",
    spacious: "py-20 md:py-28 lg:py-32",
  };

  const backgroundClasses = {
    default: "bg-black text-white",
    dark: "bg-black text-white",
    light: "bg-white text-black",
    parchment: "bg-white text-black",
    accent: "text-white bg-burgundy",
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
