import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  spacing?: "default" | "compact" | "spacious";
  background?: "default" | "dark" | "accent";
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
    default: "bg-onyx text-paper",
    dark: "bg-black text-paper",
    accent: "text-onyx bg-[linear-gradient(145deg,var(--accent-red-deep)_0%,var(--accent-red-dark)_35%,var(--accent-red)_70%,var(--accent-red-highlight)_100%)]",
  };

  return (
    <section className={cn(spacingClasses[spacing], backgroundClasses[background], className)}>
      {children}
    </section>
  );
}
