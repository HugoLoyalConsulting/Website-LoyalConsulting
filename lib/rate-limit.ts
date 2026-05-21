type Bucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, Bucket>();

function now() {
  return Date.now();
}

export function applyRateLimit(key: string, max: number, windowMs: number) {
  const currentTime = now();
  const bucket = buckets.get(key);

  if (!bucket || currentTime > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: currentTime + windowMs });
    return { allowed: true, remaining: max - 1 };
  }

  if (bucket.count >= max) {
    return { allowed: false, remaining: 0 };
  }

  bucket.count += 1;
  return { allowed: true, remaining: max - bucket.count };
}
