import { timingSafeEqual } from "node:crypto";

/** Returns only authorization state; never logs or returns token material. */
export function authorizeOperatorRead(configuredToken, suppliedToken) {
  if (!configuredToken) return { ok: false, status: 503 };
  const expected = Buffer.from(configuredToken);
  const supplied = Buffer.from(suppliedToken || "");
  if (expected.length !== supplied.length) return { ok: false, status: 401 };
  return timingSafeEqual(expected, supplied) ? { ok: true, status: 200 } : { ok: false, status: 401 };
}

export function operatorTokenFromRequest(request) {
  return request.headers.get("x-operator-token") || "";
}
