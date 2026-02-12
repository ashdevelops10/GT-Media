import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export function Container({ children, className, size = "default" }: ContainerProps) {
  const sizeClasses = {
    default: "max-w-full md:max-w-[1680px]",
    narrow: "max-w-full md:max-w-[1280px]",
    wide: "max-w-full md:max-w-[1920px]",
  };

  return (
    <div className={cn("mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-[72px]", sizeClasses[size], className)}>
      {children}
    </div>
  );
}
