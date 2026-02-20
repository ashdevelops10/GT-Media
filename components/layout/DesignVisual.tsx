"use client";

import { motion } from"framer-motion";
import { cn } from"@/lib/utils";

interface DesignVisualProps {
 type?:"mesh"|"blueprint"|"concept"|"texture";
 color?:"burgundy"|"dark"|"light";
 className?: string;
 animate?: boolean;
}

export function DesignVisual({
 type ="mesh",
 color ="dark",
 className,
 animate = true,
}: DesignVisualProps) {
 const colorSchemes = {
 burgundy:"from-burgundy/20 via-burgundy/10 to-transparent",
 dark:"from-black/40 via-black/20 to-transparent",
 light:"from-white/10 via-white/5 to-transparent",
 };

 return (
 <div className={cn("relative w-full h-full overflow-hidden bg-black", className)}>
 {/* Type: Mesh Gradient */}
 {type ==="mesh"&& (
 <div className="absolute inset-0">
 <motion.div
 animate={animate ? {
 scale: [1, 1.2, 1],
 rotate: [0, 90, 0],
 opacity: [0.3, 0.5, 0.3],
 } : {}}
 transition={{
 duration: 20,
 repeat: Infinity,
 ease:"linear",
 }}
 className={cn(
"absolute -inset-[50%] bg-gradient-to-br filter blur-[80px]",
 colorSchemes[color]
 )}
 />
 <motion.div
 animate={animate ? {
 scale: [1.2, 1, 1.2],
 rotate: [0, -90, 0],
 opacity: [0.2, 0.4, 0.2],
 } : {}}
 transition={{
 duration: 25,
 repeat: Infinity,
 ease:"linear",
 }}
 className={cn(
"absolute -inset-[50%] bg-gradient-to-tr filter blur-[100px]",
 color ==="burgundy"?"from-burgundy/20":"from-white/10" )}
 />
 </div>
 )}

 {/* Type: Texture (Non-Human Architectural) */}
 {type ==="texture"&& (
 <div className="absolute inset-0 opacity-10">
 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"/>
 <div className={cn(
"absolute inset-0 bg-gradient-to-br",
 colorSchemes[color]
 )} />
 {/* Faux Fiber Pattern */}
 <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:4px_4px]"/>
 </div>
 )}

 {/* Type: Blueprint Overlays */}
 {(type ==="blueprint"|| type ==="concept") && (
 <div className="absolute inset-0 opacity-20 pointer-events-none">
 <div className="absolute inset-0 border-[0.5px] border-white/10 grid grid-cols-6 grid-rows-6">
 {[...Array(36)].map((_, i) => (
 <div key={i} className="border-[0.5px] border-white/5"/>
 ))}
 </div>

 {/* Coordinates / Tech Details */}
 <div className="absolute top-4 left-4 font-mono text-[8px] tracking-tighter text-white/40 uppercase">
 GT-M // REF: {Math.random().toString(16).slice(2, 8).toUpperCase()}
 </div>
 <div className="absolute bottom-4 right-4 font-mono text-[8px] tracking-tighter text-white/40 uppercase">
 SCALE: AUTO // PERSPECTIVE: 45°
 </div>

 <svg className="absolute inset-0 w-full h-full text-white/10"viewBox="0 0 100 100"preserveAspectRatio="none">
 <line x1="0"y1="0"x2="100"y2="100"stroke="currentColor"strokeWidth="0.1"/>
 <line x1="100"y1="0"x2="0"y2="100"stroke="currentColor"strokeWidth="0.1"/>
 <circle cx="50"cy="50"r="30"fill="none"stroke="currentColor"strokeWidth="0.1"/>
 {/* Additional Tech Geometry */}
 <path d="M10,10 L20,10 L10,20 Z"fill="currentColor"opacity="0.5"/>
 <path d="M90,90 L80,90 L90,80 Z"fill="currentColor"opacity="0.5"/>
 </svg>
 </div>
 )}

 {/* Cinematic Grain/Noise Overlay */}
 <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"/>

 {/* Decorative Focal Point for 'Concept' */}
 {type ==="concept"&& (
 <motion.div
 initial={{ opacity: 0, scale: 0.8 }}
 animate={{ opacity: 1, scale: 1 }}
 className="absolute inset-0 flex items-center justify-center" >
 <div className="w-24 h-24 border border-burgundy/20 flex items-center justify-center p-4">
 <div className="w-full h-full border border-burgundy/40 animate-pulse-slow"/>
 </div>
 </motion.div>
 )}
 </div>
 );
}
