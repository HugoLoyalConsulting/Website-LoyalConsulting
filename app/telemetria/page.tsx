"use client";

import { useEffect, useMemo, useState } from "react";

type TelemetryResponse = {
  success: boolean;
  error?: string;
  summary?: {
    page_views: number;
    page_exits: number;
    unique_sessions: number;
    avg_scroll: string;
    avg_read_time: string;
  };
  events?: Array<{
    created_at: string;
    event: string;
    path: string;
    scroll_depth: string;
    read_time_sec: string;
    viewport: string;
  }>;
};

const TELEMETRY_ENDPOINT =
  process.env.NEXT_PUBLIC_TELEMETRY_ENDPOINT?.trim() || "/api/telemetry";

export default function TelemetriaPage() {
  const [data, setData] = useState<TelemetryResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = useMemo(() => {
    if (typeof window === "undefined") return "";
    const params = new URLSearchParams(window.location.search);
    return params.get("token") || "";
  }, []);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError("");
      try {
        const url = token ? `${TELEMETRY_ENDPOINT}?token=${encodeURIComponent(token)}` : TELEMETRY_ENDPOINT;
        const response = await fetch(url, { method: "GET" });
        const payload = (await response.json()) as TelemetryResponse;
        if (!response.ok || !payload.success) {
          throw new Error(payload.error || "Falha ao carregar telemetria");
        }
        setData(payload);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Falha ao carregar telemetria");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [token]);

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8" style={{ color: "#f0ede8" }}>
      <h1 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: "0.4rem" }}>
        Telemetria do site
      </h1>
      <p style={{ color: "rgba(240,237,232,0.7)", marginBottom: "1.5rem" }}>
        Painel simples de page views, permanencia e profundidade de scroll.
      </p>

      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: "#ff5a7a" }}>{error}</p>}

      {!loading && !error && data?.summary && (
        <>
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "0.8rem",
              marginBottom: "1.2rem",
            }}
          >
            <Card title="Page views" value={String(data.summary.page_views)} />
            <Card title="Saidas" value={String(data.summary.page_exits)} />
            <Card title="Sessoes" value={String(data.summary.unique_sessions)} />
            <Card title="Scroll medio" value={`${data.summary.avg_scroll}%`} />
            <Card title="Leitura media" value={`${data.summary.avg_read_time}s`} />
          </section>

          <section
            style={{
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.86rem" }}>
              <thead>
                <tr style={{ background: "rgba(255,255,255,0.03)", textAlign: "left" }}>
                  <th style={th}>Hora</th>
                  <th style={th}>Evento</th>
                  <th style={th}>Pagina</th>
                  <th style={th}>Scroll</th>
                  <th style={th}>Leitura</th>
                  <th style={th}>Viewport</th>
                </tr>
              </thead>
              <tbody>
                {(data.events || []).map((row, idx) => (
                  <tr key={`${row.created_at}-${idx}`} style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                    <td style={td}>{new Date(row.created_at).toLocaleString("pt-BR")}</td>
                    <td style={td}>{row.event}</td>
                    <td style={td}>{row.path}</td>
                    <td style={td}>{row.scroll_depth || "-"}</td>
                    <td style={td}>{row.read_time_sec || "-"}</td>
                    <td style={td}>{row.viewport || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </>
      )}
    </main>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.09)",
        borderRadius: "10px",
        padding: "0.85rem",
        background: "rgba(255,255,255,0.02)",
      }}
    >
      <p style={{ margin: 0, fontSize: "0.74rem", color: "rgba(240,237,232,0.55)", textTransform: "uppercase" }}>
        {title}
      </p>
      <p style={{ margin: "0.3rem 0 0", fontSize: "1.3rem", fontWeight: 600 }}>{value}</p>
    </div>
  );
}

const th = { padding: "0.58rem", fontSize: "0.74rem", color: "rgba(240,237,232,0.6)" } as const;
const td = { padding: "0.58rem", color: "rgba(240,237,232,0.86)" } as const;
