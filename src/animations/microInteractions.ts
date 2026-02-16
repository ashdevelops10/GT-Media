"use client";

import { gsap } from "@/src/gsap/registerScrollTrigger";

export function attachMicroInteractions(scope: HTMLElement) {
  // Buttons: hover tint + slight magnetic pull (translate)
  scope.querySelectorAll<HTMLElement>("button, .btn").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, { y: -2, duration: 0.18, ease: "power2.out" });
    });
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { y: 0, duration: 0.24, ease: "power2.out" });
    });
  });

  // Nav items: underline grow from center
  scope.querySelectorAll<HTMLElement>("nav a").forEach((a) => {
    const underline = document.createElement("span");
    underline.style.position = "absolute";
    underline.style.left = "50%";
    underline.style.bottom = "-8px";
    underline.style.width = "0px";
    underline.style.height = "1px";
    underline.style.background = "#6D001A"; // burgundy
    underline.style.transform = "translateX(-50%)";
    a.style.position = "relative";
    a.appendChild(underline);
    a.addEventListener("mouseenter", () => gsap.to(underline, { width:  "100%", duration: 0.24, ease: "power2.out" }));
    a.addEventListener("mouseleave", () => gsap.to(underline, { width:  "0%", duration: 0.24, ease: "power2.out" }));
  });

  // Images: subtle parallax + perspective tilt
  scope.querySelectorAll<HTMLElement>("img[data-tilt]").forEach((img) => {
    img.style.willChange = "transform";
    img.addEventListener("mousemove", (e) => {
      const rect = img.getBoundingClientRect();
      const dx = (e.clientX - rect.left) / rect.width - 0.5;
      const dy = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(img, { rotateY: dx * 4, rotateX: -dy * 4, duration: 0.24, ease: "power2.out" });
    });
    img.addEventListener("mouseleave", () => gsap.to(img, { rotateX: 0, rotateY: 0, duration: 0.3, ease: "power2.out" }));
  });

  // Inputs: glow-fade focus ring
  scope.querySelectorAll<HTMLElement>("input, textarea, select").forEach((el) => {
    el.addEventListener("focus", () => el.setAttribute("data-hover", ""));
    el.addEventListener("blur", () => el.removeAttribute("data-hover"));
  });
}
