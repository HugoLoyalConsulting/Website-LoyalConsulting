export type OperatorReadAuthorization = { ok: true; status: 200 } | { ok: false; status: 401 | 503 };

export function authorizeOperatorRead(
  configuredToken: string | null | undefined,
  suppliedToken: string | null | undefined,
): OperatorReadAuthorization;

export function operatorTokenFromRequest(request: { headers: { get(name: string): string | null } }): string;
