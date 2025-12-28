"use client";

export function StrategyIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
      <path d="M24 12v24M12 24h24" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="6" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="12" r="3" fill="currentColor" />
      <circle cx="36" cy="24" r="3" fill="currentColor" />
      <circle cx="24" cy="36" r="3" fill="currentColor" />
      <circle cx="12" cy="24" r="3" fill="currentColor" />
    </svg>
  );
}

export function BrandIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="32" height="32" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="14" width="20" height="20" fill="currentColor" fillOpacity="0.15" />
      <path d="M24 14v10l8.66 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 3" />
    </svg>
  );
}

export function WebIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="10" width="36" height="28" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 18h36" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="11" cy="14" r="1.5" fill="currentColor" />
      <circle cx="16" cy="14" r="1.5" fill="currentColor" />
      <circle cx="21" cy="14" r="1.5" fill="currentColor" />
      <rect x="10" y="22" width="12" height="8" rx="1" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
      <path d="M26 22h12M26 26h10M26 30h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ContentIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 12l16 12-16 12V12z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="28" y="16" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="34" cy="21" r="2" fill="currentColor" />
      <path d="M28 28l4-3 4 5h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MusicIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="34" r="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="34" cy="30" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 34V12l20-4v22" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 20l20-4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function CelebrityIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4l6 12 13 2-9.5 9 2 13L24 34l-11.5 6 2-13L5 18l13-2 6-12z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function PerformanceIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 38l8-12 8 6 8-14 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="40" cy="26" r="4" fill="currentColor" />
      <path d="M8 42h32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 10v28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function PoliticalIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 6v6M24 36v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 12c6.627 0 12 5.373 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="24" r="4" fill="currentColor" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export function CheckIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function QuoteIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" fillOpacity="0.3">
      <path d="M12 6H6a2 2 0 00-2 2v6a2 2 0 002 2h4v4a2 2 0 01-2 2H6v4h2a6 6 0 006-6V6zm16 0h-6a2 2 0 00-2 2v6a2 2 0 002 2h4v4a2 2 0 01-2 2h-2v4h2a6 6 0 006-6V6z" />
    </svg>
  );
}

export function GridPattern({ className = "" }: { className?: string }) {
  return (
    <svg className={`absolute inset-0 w-full h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

export function DiagonalLines({ className = "" }: { className?: string }) {
  return (
    <svg className={`absolute inset-0 w-full h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="diagonal" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="20" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.08" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#diagonal)" />
    </svg>
  );
}
