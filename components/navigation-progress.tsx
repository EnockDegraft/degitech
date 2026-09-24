"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

/**
 * Thin progress bar at the top of the viewport during client-side navigation.
 * Starts when an internal link to another page is clicked and completes once
 * the new pathname renders.
 */
export function NavigationProgress() {
  const pathname = usePathname()
  const [state, setState] = useState<"idle" | "loading" | "done">("idle")
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = (e.target as Element | null)?.closest?.("a")
      if (!a || !a.href || a.target === "_blank" || a.hasAttribute("download")) return
      const url = new URL(a.href, location.href)
      if (url.origin !== location.origin) return
      if (url.pathname === location.pathname && url.search === location.search) return // same page / hash link
      clearTimeout(timer.current)
      setState("loading")
      timer.current = setTimeout(() => setState("idle"), 10_000) // never leave the bar stuck
    }
    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
  }, [])

  useEffect(() => {
    setState((s) => (s === "loading" ? "done" : s))
    timer.current = setTimeout(() => setState("idle"), 500)
    return () => clearTimeout(timer.current)
  }, [pathname])

  return <div className="nav-progress" data-state={state} aria-hidden />
}
