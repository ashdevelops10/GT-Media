#!/usr/bin/env node

/**
 * Simple FPS measurement script for GT Media animations.
 *
 * Usage (in a browser DevTools console or via injection):
 *   Paste the contents into the console on a page with animations
 *   and call `window.__gtMeasureFPS(5000)` to measure for 5 seconds.
 *
 * This file exists primarily as documentation and a reference
 * implementation for manual performance testing; it does not run
 * as part of automated CI.
 */

// This script is intentionally written in a browser-friendly style.
// When bundled or pasted into DevTools, it exposes a single helper
// on window: `__gtMeasureFPS(durationMs?: number)`.

(function () {
  if (typeof window === 'undefined') {
    console.error('measure-fps.js is intended for browser usage only.');
    process.exit?.(1);
  }

  function measureFPS(durationMs = 5000) {
    return new Promise((resolve) => {
      const samples = [];
      let lastTime = performance.now();

      function frame(now) {
        const delta = now - lastTime;
        lastTime = now;
        if (delta > 0) {
          const fps = 1000 / delta;
          samples.push(fps);
        }
        if (now - startTime < durationMs) {
          requestAnimationFrame(frame);
        } else {
          const avg =
            samples.reduce((sum, value) => sum + value, 0) /
            (samples.length || 1);
          const min = Math.min(...samples);
          const p95Index = Math.floor(samples.length * 0.95) - 1;
          const sorted = [...samples].sort((a, b) => a - b);
          const p95 = sorted[Math.max(p95Index, 0)] || avg;

          resolve({
            durationMs,
            frames: samples.length,
            avgFPS: avg,
            minFPS: min,
            p95FPS: p95,
          });
        }
      }

      const startTime = performance.now();
      requestAnimationFrame(frame);
    });
  }

  window.__gtMeasureFPS = async function (durationMs) {
    console.log('[GT Media] Measuring FPS for', durationMs || 5000, 'ms...');
    const result = await measureFPS(durationMs);
    console.table(result);
    if (result.avgFPS < 50) {
      console.warn(
        '[GT Media] Warning: average FPS below 50; consider reducing animation complexity.'
      );
    } else {
      console.log('[GT Media] FPS looks healthy.');
    }
    return result;
  };

  console.log(
    '[GT Media] FPS helper attached as window.__gtMeasureFPS(durationMs?: number)'
  );
})();
