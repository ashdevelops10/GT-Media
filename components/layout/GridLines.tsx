"use client";



export function GridLines() {
 return (
 <div className="absolute inset-x-0 inset-y-0 pointer-events-none z-0 overflow-hidden">
 {/* 12-Column Responsive Grid Lines */}
 <div className="mx-auto px-6 md:px-12 lg:px-16 xl:px-[72px] h-full max-w-[1680px]">
 <div className="h-full w-full grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6 md:gap-8 border-x border-white/[0.03]">
 {/* Vertical lines */}
 {[...Array(11)].map((_, i) => (
 <div
 key={i}
 className={`h-full border-r border-white/[0.03] ${
 // Show specific lines based on responsive grid to match common breakpoints
 i === 3 ?"block": // Line 4 (quarter)
 i === 5 ?"hidden md:block": // Line 6 (half)
 i === 7 ?"hidden lg:block": // Line 8 (two-thirds/three-quarters)
 i === 1 ?"hidden xl:block":
 i === 9 ?"hidden xl:block":
"hidden" }`}
 />
 ))}
 </div>
 </div>
 </div>
 );
}
