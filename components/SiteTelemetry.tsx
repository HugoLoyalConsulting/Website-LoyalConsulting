"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type TelemetryPayload = {
  event: string;
  path: string;
  referrer?: string;
  viewport?: string;
  sessionId: string;
  scrollDepth?: number;
  readTimeSec?: number;
  ts: string;
};

const TELEMETRY_ENDPOINT =
  process.env.NEXT_PUBLIC_TELEMETRY_ENDPOINT?.trim() || "/api/telemetry";

function getSessionId() {
  const key = "lc_telemetry_session";
  const existing = window.sessionStorage.getItem(key);
  if (existing) return existing;
  const created = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  window.sessionStorage.setItem(key, created);
  return created;
}

function postTelemetry(payload: TelemetryPayload) {
  const body = JSON.stringify(payload);

  if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
    const blob = new Blob([body], { type: "application/json" });
    navigator.sendBeacon(TELEMETRY_ENDPOINT, blob);
    return;
  }

  fetch(TELEMETRY_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {
    // Telemetry cannot break UX.
  });
}

export function SiteTelemetry() {
  const pathname = usePathname();
  const maxScroll = useRef(0);
  const entryTs = useRef(0);

  useEffect(() => {
    if (!pathname) return;

    const sessionId = getSessionId();
    entryTs.current = Date.now();
    maxScroll.current = 0;

    const onScroll = () => {
      const scrollTop = window.scrollY || 0;
      const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      const viewport = window.innerHeight || 1;
      const maxScrollable = Math.max(docHeight - viewport, 1);
      const depth = Math.min(100, Math.round((scrollTop / maxScrollable) * 100));
      if (depth > maxScroll.current) {
        maxScroll.current = depth;
      }
    };

    const onUnloadLike = () => {
      const readTimeSec = Math.max(1, Math.round((Date.now() - entryTs.current) / 1000));
      postTelemetry({
        event: "page_exit",
        path: pathname,
        referrer: document.referrer || "",
        viewport: `${window.innerWidth}x${window.innerHeight}`,
        sessionId,
        scrollDepth: maxScroll.current,
        readTimeSec,
        ts: new Date().toISOString(),
      });
    };

    postTelemetry({
      event: "page_view",
      path: pathname,
      referrer: document.referrer || "",
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      sessionId,
      ts: new Date().toISOString(),
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("beforeunload", onUnloadLike);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        onUnloadLike();
      }
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("beforeunload", onUnloadLike);
    };
  }, [pathname]);

  return null;
}
