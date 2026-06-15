"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ZoomableImageProps {
  src: string;
  alt: string;
  caption?: string;
  wrapperStyle?: React.CSSProperties;
}

export function ZoomableImage({ src, alt, caption, wrapperStyle }: ZoomableImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <figure
        style={{ position: "relative", width: "100%", cursor: "zoom-in" }}
        onClick={() => setOpen(true)}
        title="Clique para ampliar"
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
            ...wrapperStyle,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        {caption && (
          <figcaption
            style={{
              marginTop: "0.75rem",
              textAlign: "center",
              fontSize: "0.8rem",
              color: "rgba(240,237,232,0.45)",
              letterSpacing: "0.03em",
            }}
          >
            {caption}
          </figcaption>
        )}
        <span
          style={{
            position: "absolute",
            top: "0.75rem",
            right: "0.75rem",
            background: "rgba(15,12,35,0.75)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "6px",
            padding: "4px 8px",
            fontSize: "0.7rem",
            color: "rgba(240,237,232,0.7)",
            pointerEvents: "none",
            backdropFilter: "blur(4px)",
          }}
        >
          ⤢ Ampliar
        </span>
      </figure>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(5,3,18,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
            cursor: "zoom-out",
            backdropFilter: "blur(6px)",
          }}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "min(1400px, 95vw)",
              maxHeight: "90vh",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 24px 80px rgba(0,0,0,0.7)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              style={{ width: "100%", height: "auto", display: "block", maxHeight: "90vh", objectFit: "contain" }}
            />
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Fechar"
            style={{
              position: "fixed",
              top: "1rem",
              right: "1rem",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "50%",
              width: "2.5rem",
              height: "2.5rem",
              color: "#fff",
              fontSize: "1.2rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
