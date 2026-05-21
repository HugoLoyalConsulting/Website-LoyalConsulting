export function sanitizeText(value: string | null | undefined): string {
  if (!value) {
    return "";
  }

  return value
    .trim()
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ");
}

export function sanitizePhone(value: string | null | undefined): string {
  if (!value) {
    return "";
  }

  return value.replace(/[^\d+]/g, "").trim();
}
