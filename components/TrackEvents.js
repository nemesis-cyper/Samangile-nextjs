"use client";

import { useEffect } from "react";

// Lightweight conversion-event tracking hook.
// Wire this into GA4 / Meta Pixel / server logging later — kept
// provider-agnostic per the technical build brief.
export default function TrackEvents() {
  useEffect(() => {
    function handleClick(e) {
      const el = e.target.closest("[data-track]");
      if (!el) return;
      const eventName = el.getAttribute("data-track");
      console.log("[track]", eventName);
      if (window.dataLayer) window.dataLayer.push({ event: eventName });
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
