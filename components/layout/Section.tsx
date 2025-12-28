import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  spacing?: "default" | "compact" | "spacious";
  background?: "default" | "dark" | "carbon" | "accent";
}

export function Section({
  children,
  className,
  spacing = "default",
  background = "default",
}: SectionProps) {
  const spacingClasses = {
    default: "py-24 md:py-32 lg:py-48",
    compact: "py-12 md:py-16 lg:py-24",
    spacious: "py-32 md:py-48 lg:py-64",
  };

  const backgroundClasses = {
    default: "bg-onyx text-white",
    dark: "bg-[#0b090a] text-white",
    carbon: "bg-carbon text-white",
    accent: "text-white bg-gradient-to-br from-garnet via-mahogany to-strawberry",
  };

  return (
    <section className={cn(spacingClasses[spacing], backgroundClasses[background], className)}>
      {children}
    </section>
  );
}
