import React from "react";

export function OwlLogo({ className = "w-8 h-8", color = "currentColor" }: { className?: string; color?: string }) {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="GT Media Owl Logo"
        >
            {/* Geometric Owl Head Shape */}
            <path
                d="M20 30 L50 60 L80 30 V20 L50 10 L20 20 Z"
                fill={color}
                stroke={color}
                strokeWidth="2"
                strokeLinejoin="round"
            />

            {/* Eyes */}
            <circle cx="35" cy="35" r="5" fill="#000" />
            <circle cx="65" cy="35" r="5" fill="#000" />

            {/* Body Wings Abstract */}
            <path
                d="M20 40 V80 L50 90 L80 80 V40 L50 70 Z"
                stroke={color}
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* GT Monogram Integrated (Optional/Abstract) */}
        </svg>
    );
}

export function OwlLogoSimple({ className = "w-8 h-8", color = "currentColor" }: { className?: string; color?: string }) {
    return (
        <svg
            viewBox="0 0 64 64"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Minimalist Geometric Owl */}
            <path
                d="M12 20 L32 44 L52 20 M12 20 V44 L32 56 L52 44 V20"
                stroke={color}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M22 20 L32 32 L42 20"
                stroke={color}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="32" cy="12" r="4" fill={color} />
        </svg>
    )
}
