import "server-only"

/**
 * Small fixed-window rate limiter kept in memory.
 *
 * On Vercel each serverless instance has its own memory, so this is a
 * best-effort guard against bursts from a single client rather than a global
 * limit. Swap for Upstash/Vercel KV if you need a hard global cap.
 */
const buckets = new Map<string, { count: number; resetAt: number }>()

export function rateLimit(key: string, limit: number, windowMs: number) {
  const now = Date.now()

  if (buckets.size > 5000) {
    for (const [k, v] of buckets) if (v.resetAt <= now) buckets.delete(k)
  }

  const bucket = buckets.get(key)
  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return { ok: true, retryAfter: 0 }
  }
  if (bucket.count >= limit) {
    return { ok: false, retryAfter: Math.ceil((bucket.resetAt - now) / 1000) }
  }
  bucket.count++
  return { ok: true, retryAfter: 0 }
}

export function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for")
  return (fwd?.split(",")[0] || req.headers.get("x-real-ip") || "unknown").trim()
}

/** Rejects cross-site form posts: the Origin must match the request host. */
export function sameOrigin(req: Request): boolean {
  const origin = req.headers.get("origin")
  if (!origin) return true // non-browser clients; still validated and rate limited
  try {
    return new URL(origin).host === req.headers.get("host")
  } catch {
    return false
  }
}
