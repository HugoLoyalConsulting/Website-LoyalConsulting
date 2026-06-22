import type { Metadata } from "next";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Diagnóstico Aprofundado | Loyal Consulting",
  robots: "noindex, nofollow",
};

export default function AprofundamentoDiscovery() {
  return (
    <main className="min-h-screen" style={{ paddingTop: "120px", paddingBottom: "80px" }}>
      <LeadCaptureForm locale="pt" />
    </main>
  );
}
