import { ReactNode } from"react";
import { cn } from"@/lib/utils";

interface Grid12Props {
 children: ReactNode;
 className?: string;
 gap?:"default"|"tight"|"loose";
}

export function Grid12({ children, className, gap ="default"}: Grid12Props) {
 const gapClasses = {
 default:"gap-6 md:gap-8",
 tight:"gap-4 md:gap-6",
 loose:"gap-8 md:gap-12 lg:gap-16",
 };

 return (
 <div className={cn("grid grid-cols-12", gapClasses[gap], className)}>
 {children}
 </div>
 );
}
