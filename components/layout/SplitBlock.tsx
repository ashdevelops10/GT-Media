import { ReactNode } from"react";
import { cn } from"@/lib/utils";

interface SplitBlockProps {
 left: ReactNode;
 right: ReactNode;
 className?: string;
 ratio?:"50-50"|"60-40"|"40-60";
 reverse?: boolean;
}

export function SplitBlock({
 left,
 right,
 className,
 ratio ="50-50",
 reverse = false,
}: SplitBlockProps) {
 const ratioClasses = {
"50-50":"lg:grid-cols-2",
"60-40":"lg:grid-cols-[3fr_2fr]",
"40-60":"lg:grid-cols-[2fr_3fr]",
 };

 return (
 <div className={cn("grid grid-cols-1 gap-12 lg:gap-16", ratioClasses[ratio], className)}>
 {reverse ? (
 <>
 <div className="order-2 lg:order-1">{right}</div>
 <div className="order-1 lg:order-2">{left}</div>
 </>
 ) : (
 <>
 <div>{left}</div>
 <div>{right}</div>
 </>
 )}
 </div>
 );
}
