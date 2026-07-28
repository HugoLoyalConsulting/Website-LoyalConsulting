export type ObservabilitySnapshot = {
  generatedAt: string;
  leadsByStage: Array<{ stage: string; total: number }>;
  attribution: Array<{ source: string; medium: string; campaign: string; total: number }>;
  events: Array<{ type: string; total: number }>;
  recent: Array<{ hour: string; total: number }>;
  piiPolicy: string;
};

export function buildObservabilitySnapshot(input: {
  leads?: Array<{ bucket?: unknown; total?: unknown }>;
  attribution?: Array<{ source?: unknown; medium?: unknown; campaign?: unknown; total?: unknown }>;
  events?: Array<{ type?: unknown; total?: unknown }>;
  recent?: Array<{ hour?: unknown; total?: unknown }>;
}): ObservabilitySnapshot;
