// Luxury cursor physics: dot + halo with magnetic behavior
"use client";

export type CursorConfig = {
  lerpDot?: number; // 0..1
  lerpHalo?: number; // 0..1
  haloBase?: number; // px
  haloHover?: number; // px
  magneticStrength?: number; // 0..1
};

export class CursorPhysics {
  cfg: CursorConfig;
  dot = { x: 0, y: 0 };
  halo = { x: 0, y: 0, r: 10 };
  target = { x: 0, y: 0 };

  constructor(cfg?: CursorConfig) {
    this.cfg = {
      lerpDot: 0.35,
      lerpHalo: 0.18,
      haloBase: 10,
      haloHover: 24,
      magneticStrength: 0.25,
      ...cfg,
    };
  }

  setTarget(x: number, y: number) {
    this.target.x = x; this.target.y = y;
  }

  step(magnetic?: { x: number; y: number } | null) {
    const { lerpDot, lerpHalo } = this.cfg;
    this.dot.x += (this.target.x - this.dot.x) * (lerpDot ?? 0.3);
    this.dot.y += (this.target.y - this.dot.y) * (lerpDot ?? 0.3);

    // Magnetic pull for halo (toward interactive element center)
    const mx = magnetic?.x ?? this.target.x;
    const my = magnetic?.y ?? this.target.y;
    this.halo.x += (mx - this.halo.x) * (lerpHalo ?? 0.18);
    this.halo.y += (my - this.halo.y) * (lerpHalo ?? 0.18);
  }
}
